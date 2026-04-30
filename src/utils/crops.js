export function getCropName(crop) {
  return crop.name ?? crop.attributes?.name ?? ''
}

export function getCropPhoto(crop) {
  return crop.photo ?? crop.attributes?.main_image_path ?? ''
}

export function getCropBotanicalName(crop) {
  return crop.botanical_name ?? crop.attributes?.binomial_name ?? ''
}

export function getCropSun(crop) {
  return crop.sun ?? crop.attributes?.sun_requirements ?? null
}

export function getCropSpread(crop) {
  return crop.spread_cm ?? crop.attributes?.spread ?? null
}

export function getCropRowSpacing(crop) {
  return crop.row_spacing_cm ?? crop.attributes?.row_spacing ?? null
}

export function getCropDescription(crop) {
  return crop.description ?? crop.attributes?.description ?? null
}
