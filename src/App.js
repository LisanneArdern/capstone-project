import crops from './data.json'
import { useState } from 'react'
import CropListPage from './pages/CropListPage'
import CropDetailsPage from './pages/CropDetailsPage'
import MyGardenPage from './pages/MyGardenPage'

export default function App() {
  const [activePage, setActivePage] = useState('croplist')
  const [detailedCrop, setDetailedCrop] = useState({})
  const [favoriteId, setFavoriteId] = useState([])

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
          favoriteId={favoriteId}
        />
      )}

      {activePage === 'favorite' && (
        <MyGardenPage
          crops={crops}
          favoriteId={favoriteId}
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
    let newFavoriteId

    if (favoriteId.some(crop => crop.id === id)) {
      newFavoriteId = favoriteId.filter(crop => crop.id !== id)
    } else {
      newFavoriteId = [crops.find(crop => crop.id === id), ...favoriteId]
    }
    console.log(crops)
    console.log(newFavoriteId.map(({ id }) => id))
    setFavoriteId(newFavoriteId.map(({ id }) => id))
  }
}
