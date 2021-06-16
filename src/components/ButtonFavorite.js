import Button from './Button'

export default function ButtonFavorite({ isFavorite, onToggleFavorite, id }) {
  return (
    <Button onClick={() => onToggleFavorite(id)}>
      {isFavorite ? 'Remove from My Garden' : 'Add to My Garden'}
    </Button>
  )
}
