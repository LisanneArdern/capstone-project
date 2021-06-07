import CropItem from './components/CropItem'
import crops from './crops1.json'

export default function App() {
  return (
    <div>
      {crops.map(crop => {
        const { id, type } = crop
        return <CropItem key={id} name={type} image="test" />
      })}
    </div>
  )
}
