const CROPS_API_URL =
  import.meta.env.VITE_CROPS_API_URL || 'http://localhost:4000'

async function getErrorMessage(response, fallbackMessage) {
  try {
    const error = await response.json()
    return error.message || fallbackMessage
  } catch {
    return fallbackMessage
  }
}

export async function fetchCrops(searchTerm) {
  const url = new URL('/api/crops', CROPS_API_URL)
  url.searchParams.set('search', searchTerm)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, 'Could not fetch crops'))
  }

  return response.json()
}

export async function fetchCrop(id) {
  const response = await fetch(`${CROPS_API_URL}/api/crops/${id}`)

  if (!response.ok) {
    throw new Error(
      await getErrorMessage(response, 'Could not fetch crop details')
    )
  }

  return response.json()
}
