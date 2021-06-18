import { useState } from 'react'
import crops from './data.json'
import CropDetailsPage from './pages/CropDetailsPage'
import CropListPage from './pages/CropListPage'
import MyGardenPage from './pages/MyGardenPage'

export default function App() {
  const [activePage, setActivePage] = useState('croplist')
  const [detailedCrop, setDetailedCrop] = useState({})
  const [favoriteIds, setFavoriteIds] = useState([])

  return (
    <>
      {activePage === 'croplist' && (
        <CropListPage
          onClickDetails={handleClickDetails}
          crops={crops}
          onClickFavorites={() => handleClickPage('favorite')}
        />
      )}

      {activePage === 'cropdetails' && (
        <CropDetailsPage
          onClickList={() => handleClickPage('croplist')}
          crop={detailedCrop}
          onToggleFavorite={handleToggleFavorite}
          favoriteIds={favoriteIds}
        />
      )}

      {activePage === 'favorite' && (
        <MyGardenPage
          crops={crops}
          favoriteIds={favoriteIds}
          onClickDetails={handleClickDetails}
          onClickList={() => handleClickPage('croplist')}
        />
      )}
    </>
  )

  function handleClickDetails(id) {
    setDetailedCrop(crops.find(crop => crop.id === id))
    setActivePage('cropdetails')
  }

  function handleClickPage(page) {
    setActivePage(page)
  }

  function handleToggleFavorite(id) {
    if (favoriteIds.some(favId => favId === id)) {
      setFavoriteIds(favoriteIds.filter(favId => favId !== id))
    } else {
      setFavoriteIds([...favoriteIds, id])
    }
  }
}
