import CropItem from './components/CropItem'
import crops from './data.json'

export default function App() {
  return (
    <div>
      {crops.map(crop => {
        const { id, attributes } = crop
        return (
          <CropItem
            key={id}
            name={attributes.name}
            image={attributes.main_image_path}
          />
        )
      })}
    </div>
  )
}
