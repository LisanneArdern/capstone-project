import CropItem from '../components/CropItem'
import PropTypes from 'prop-types'

CropListPage.propTypes = {
  crops: PropTypes.array.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default function CropListPage({ crops, onNavigate }) {
  return (
    <div>
      {crops.map(({ id, attributes }) => (
        <CropItem
          key={id}
          name={attributes.name}
          image={attributes.main_image_path}
          onClick={() => onNavigate(id)}
        />
      ))}
    </div>
  )
}
