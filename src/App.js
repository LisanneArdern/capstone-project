import crops from './data.json'
import { useState } from 'react'
import CropListPage from './pages/CropListPage'
import CropDetailsPage from './pages/CropDetailsPage'

export default function App() {
  const [activePage, setActivePage] = useState('croplist')
  const [detailedCrop, setDetailedCrop] = useState()
  return (
    <>
      {activePage === 'croplist' && (
        <CropListPage onNavigate={handleClickDetails} crops={crops} />
      )}

      {activePage === 'cropdetails' && (
        <CropDetailsPage crop={detailedCrop} onNavigate={handleClickBack} />
      )}
    </>
  )

  function handleClickDetails(id) {
    setDetailedCrop(crops.find(crop => crop.id === id))
    setActivePage('cropdetails')
  }

  function handleClickBack() {
    setActivePage('croplist')
  }
}
