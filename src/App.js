import crops from './data.json'
import { useState } from 'react'
import CropListPage from './pages/CropListPage'
import CropDetailsPage from './pages/CropDetailsPage'
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
          onClickFavorites={handleClickFavorites}
        />
      )}

      {activePage === 'cropdetails' && (
        <CropDetailsPage
          onClickList={handleClickList}
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
          onClickList={handleClickList}
        />
      )}
    </>
  )

  function handleClickDetails(id) {
    setDetailedCrop(crops.find(crop => crop.id === id))
    setActivePage('cropdetails')
  }

  function handleClickList() {
    setActivePage('croplist')
  }

  function handleClickFavorites() {
    setActivePage('favorite')
  }

  function handleToggleFavorite(id) {
    if (favoriteIds.some(favId => favId === id)) {
      setFavoriteIds(favoriteIds.filter(favId => favId !== id))
    } else {
      setFavoriteIds([...favoriteIds, id])
    }
  }
}
