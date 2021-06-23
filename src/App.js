import { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import crops from './data.json'
import CropDetailsPage from './pages/CropDetailsPage'
import MyGardenPage from './pages/MyGardenPage'
import SearchPage from './pages/SearchPage'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

export default function App() {
  const history = useHistory()
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
          <SearchPage
            crops={crops}
            onClickFavorites={handleClickFavorites}
            onClickDetails={handleClickDetails}
          />
        </Route>
        <Route path="/details">
          <CropDetailsPage
            onClickBack={handleClickBack}
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
    history.push('/details')
  }

  function handleClickFavorites() {
    history.push('/mygarden')
  }

  function handleClickBack() {
    history.goBack()
  }

  function handleClickList() {
    history.push('/')
  }

  function handleToggleFavorite(id) {
    if (favoriteIds.some(favId => favId === id)) {
      setFavoriteIds(favoriteIds.filter(favId => favId !== id))
    } else {
      setFavoriteIds([...favoriteIds, id])
    }
  }
}
