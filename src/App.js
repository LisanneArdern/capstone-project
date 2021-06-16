import crops from './data.json'
import { useState } from 'react'
import CropListPage from './pages/CropListPage'
import CropDetailsPage from './pages/CropDetailsPage'
import MyGardenPage from './pages/MyGardenPage'

export default function App() {
  const [activePage, setActivePage] = useState('croplist')
  const [detailedCrop, setDetailedCrop] = useState({})
  const [favoriteCrops, setFavoriteCrops] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)
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
          isFavorite={isFavorite}
        />
      )}

      {activePage === 'favorite' && (
        <MyGardenPage
          favoriteCrops={favoriteCrops}
          onClickDetails={handleClickDetails}
          onClickList={handleClickList}
        />
      )}
    </>
  )

  function handleClickDetails(id) {
    setDetailedCrop(crops.find(crop => crop.id === id))
    setIsFavorite(favoriteCrops.some(crop => crop.id === id))
    setActivePage('cropdetails')
  }

  function handleClickList() {
    setActivePage('croplist')
  }

  function handleClickFavorites() {
    setActivePage('favorite')
  }

  function handleToggleFavorite(id) {
    if (favoriteCrops.some(crop => crop.id === id)) {
      handleRemoveFavorite(id)
    } else {
      handleAddFavorite(id)
    }
    setIsFavorite(!isFavorite)
  }

  function handleAddFavorite(id) {
    console.log(id)
    console.log({ ...crops.find(crop => crop.id === id), isFavorite: true })
    setFavoriteCrops([crops.find(crop => crop.id === id), ...favoriteCrops])
  }

  function handleRemoveFavorite(id) {
    setFavoriteCrops(favoriteCrops.filter(crop => crop.id !== id))
  }
}
