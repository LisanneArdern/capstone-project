import crops from './data.json'
import { useState } from 'react'
import CropListPage from './pages/CropListPage'
import CropDetailsPage from './pages/CropDetailsPage'
import MyGardenPage from './pages/MyGardenPage'

export default function App() {
  const [activePage, setActivePage] = useState('croplist')
  const [detailedCrop, setDetailedCrop] = useState({})
  return (
    <>
      {activePage === 'croplist' && (
        <CropListPage onNavigate={handleClickDetails} crops={crops} />
      )}

      {activePage === 'cropdetails' && (
        <CropDetailsPage
          onNavigate={handleClickList}
          crop={detailedCrop}
          onSaveCrop={handleClickMyGarden}
        />
      )}

      {activePage === 'garden' && <MyGardenPage onNavigate={handleClickList} />}
    </>
  )

  function handleClickDetails(id) {
    setDetailedCrop(crops.find(crop => crop.id === id))
    setActivePage('cropdetails')
  }

  function handleClickList() {
    setActivePage('croplist')
  }

  function handleClickMyGarden() {
    setActivePage('garden')
  }
}
