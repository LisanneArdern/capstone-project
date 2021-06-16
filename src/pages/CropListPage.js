import CropItem from '../components/CropItem'
import PropTypes from 'prop-types'
import Button from '../components/Button'

CropListPage.propTypes = {
  crops: PropTypes.array.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default function CropListPage({
  crops,
  onClickDetails,
  onClickFavorites,
}) {
  return (
    <div>
      {crops.map(({ id, attributes }) => (
        <CropItem
          key={id}
          name={attributes.name}
          image={attributes.main_image_path}
          onClick={() => onClickDetails(id)}
        />
      ))}

      <Button onClick={onClickFavorites}>Favorites</Button>
    </div>
  )
}
