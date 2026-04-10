import fallbackCrops from '../data.json'

const PERENUAL_API_BASE = 'https://perenual.com/api/v2'
const PERENUAL_API_KEY = import.meta.env.VITE_PERENUAL_API_KEY
const CACHE_TTL_MS = 1000 * 60 * 60 * 12
const DETAIL_CACHE_KEY = 'perenual-details-cache-v1'

const inMemoryDetailsCache = new Map()
const inFlightDetailsRequests = new Map()

function createFallbackDetails(id) {
  return {
    type: 'crops',
    id: String(id),
    attributes: {
      name: 'Unknown crop',
      binomial_name: null,
      sun_requirements: null,
      spread: null,
      row_spacing: null,
      description:
        'Details are temporarily unavailable. Please try again later.',
      main_image_path: null,
    },
  }
}

function loadPersistedDetailsCache() {
  try {
    const raw = localStorage.getItem(DETAIL_CACHE_KEY)
    if (!raw) return
    const parsed = JSON.parse(raw)
    const now = Date.now()
    parsed.forEach(([id, entry]) => {
      if (entry?.cachedAt && now - entry.cachedAt < CACHE_TTL_MS) {
        inMemoryDetailsCache.set(id, entry.data)
      }
    })
  } catch (error) {
    console.error(error)
  }
}

function persistDetailsCache() {
  try {
    const serializable = Array.from(inMemoryDetailsCache.entries()).map(
      ([id, data]) => [id, { data, cachedAt: Date.now() }]
    )
    localStorage.setItem(DETAIL_CACHE_KEY, JSON.stringify(serializable))
  } catch (error) {
    console.error(error)
  }
}

loadPersistedDetailsCache()

function withResult(data, error = null) {
  return { data, error }
}

function mapPerenualSummaryToCrop(crop) {
  return {
    type: 'crops',
    id: String(crop.id),
    attributes: {
      name: crop.common_name ?? crop.scientific_name?.[0] ?? 'Unknown crop',
      binomial_name: crop.scientific_name?.[0] ?? null,
      sun_requirements: Array.isArray(crop.sunlight)
        ? crop.sunlight.join(', ')
        : null,
      spread: null,
      row_spacing: null,
      description: null,
      main_image_path:
        crop.default_image?.original_url ??
        crop.default_image?.regular_url ??
        crop.default_image?.small_url ??
        crop.default_image?.thumbnail ??
        null,
    },
  }
}

function mapPerenualDetailsToCrop(crop) {
  return {
    type: 'crops',
    id: String(crop.id),
    attributes: {
      name: crop.common_name ?? crop.scientific_name?.[0] ?? 'Unknown crop',
      binomial_name: crop.scientific_name?.[0] ?? null,
      sun_requirements: Array.isArray(crop.sunlight)
        ? crop.sunlight.join(', ')
        : null,
      spread: null,
      row_spacing: null,
      description: crop.description ?? null,
      main_image_path:
        crop.default_image?.original_url ??
        crop.default_image?.regular_url ??
        crop.default_image?.small_url ??
        crop.default_image?.thumbnail ??
        null,
    },
  }
}

function filterFallbackCrops(searchTerm) {
  const normalized = searchTerm.trim().toLowerCase()
  if (!normalized) return []

  return fallbackCrops.filter(crop => {
    const name = crop.attributes?.name?.toLowerCase() ?? ''
    const binomial = crop.attributes?.binomial_name?.toLowerCase() ?? ''
    return name.includes(normalized) || binomial.includes(normalized)
  })
}

export async function searchCrops(searchTerm) {
  const normalized = searchTerm.trim()
  if (!normalized) return []

  if (!PERENUAL_API_KEY) {
    return withResult(
      filterFallbackCrops(normalized),
      'API key missing. Showing local fallback results.'
    )
  }

  try {
    const response = await fetch(
      `${PERENUAL_API_BASE}/species-list?key=${PERENUAL_API_KEY}&q=${encodeURIComponent(
        normalized
      )}`
    )
    if (!response.ok) throw new Error('Perenual search request failed')
    const payload = await response.json()
    const mappedCrops = (payload.data ?? [])
      .map(mapPerenualSummaryToCrop)
      .filter(crop => crop.attributes.main_image_path)

    // Seed details cache with summary data to reduce follow-up API pressure.
    mappedCrops.forEach(crop => {
      inMemoryDetailsCache.set(String(crop.id), crop)
    })
    persistDetailsCache()

    return withResult(mappedCrops)
  } catch (error) {
    console.error(error)
    return withResult(
      filterFallbackCrops(normalized),
      'Search API unavailable. Showing local fallback results.'
    )
  }
}

export async function getCropDetails(id) {
  const normalizedId = String(id)
  const fallbackCrop = fallbackCrops.find(
    crop => String(crop.id) === normalizedId
  )
  const cachedCrop = inMemoryDetailsCache.get(normalizedId)

  if (!PERENUAL_API_KEY) {
    return withResult(
      cachedCrop ?? fallbackCrop ?? createFallbackDetails(normalizedId),
      'API key missing. Showing local fallback details.'
    )
  }

  if (cachedCrop) {
    return withResult(cachedCrop)
  }

  if (inFlightDetailsRequests.has(normalizedId)) {
    return inFlightDetailsRequests.get(normalizedId)
  }

  const request = (async () => {
    try {
      const response = await fetch(
        `${PERENUAL_API_BASE}/species/details/${normalizedId}?key=${PERENUAL_API_KEY}`
      )
      if (!response.ok) {
        if (response.status === 429) {
          console.warn(
            'Perenual rate limit reached (429). Using cached/fallback data.'
          )
          return withResult(
            inMemoryDetailsCache.get(normalizedId) ??
              fallbackCrop ??
              createFallbackDetails(normalizedId),
            'Rate limit reached. Showing cached/fallback details.'
          )
        }
        throw new Error('Perenual details request failed')
      }
      const payload = await response.json()
      const mappedCrop = mapPerenualDetailsToCrop(payload)
      inMemoryDetailsCache.set(normalizedId, mappedCrop)
      persistDetailsCache()
      return withResult(mappedCrop)
    } catch (error) {
      console.error(error)
      return withResult(
        inMemoryDetailsCache.get(normalizedId) ??
          fallbackCrop ??
          createFallbackDetails(normalizedId),
        'Details API unavailable. Showing cached/fallback details.'
      )
    } finally {
      inFlightDetailsRequests.delete(normalizedId)
    }
  })()

  inFlightDetailsRequests.set(normalizedId, request)
  return request
}
