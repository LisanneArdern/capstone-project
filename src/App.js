import { useState, useEffect } from 'react'
import { loadFromLocal, saveToLocal } from './utils/localStorage'
import { Switch, Route, useHistory } from 'react-router-dom'
import crops from './data.json'
import CropDetailsPage from './pages/CropDetailsPage'
import CropListPage from './pages/CropListPage'
import MyGardenPage from './pages/MyGardenPage'

export default function App() {
  const { push } = useHistory()
  const [detailedCrop, setDetailedCrop] = useState({})
  const [favoriteIds, setFavoriteIds] = useState(
    loadFromLocal('favoriteIds') ?? []
  )

  useEffect(() => {
    saveToLocal('favoriteIds', favoriteIds)
  }, [favoriteIds])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <CropListPage
            onClickDetails={handleClickDetails}
            crops={crops}
            onClickFavorites={handleClickFavorites}
          />
        </Route>
        <Route path="/details">
          <CropDetailsPage
            onClickList={handleClickList}
            crop={detailedCrop}
            onToggleFavorite={handleToggleFavorite}
            favoriteIds={favoriteIds}
          />
        </Route>
        <Route path="/mygarden">
          <MyGardenPage
            crops={crops}
            favoriteIds={favoriteIds}
            onClickDetails={handleClickDetails}
            onClickList={handleClickList}
          />
        </Route>
      </Switch>
    </>
  )

  function handleClickDetails(id) {
    setDetailedCrop(crops.find(crop => crop.id === id))
    push('/details')
  }

  function handleClickFavorites() {
    push('/mygarden')
  }

  function handleClickList() {
    push('/')
  }

  function handleToggleFavorite(id) {
    if (favoriteIds.some(favId => favId === id)) {
      setFavoriteIds(favoriteIds.filter(favId => favId !== id))
    } else {
      setFavoriteIds([...favoriteIds, id])
    }
  }
}
