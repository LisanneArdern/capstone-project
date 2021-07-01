import { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import CropDetailsPage from './pages/CropDetailsPage'
import MyGardenPage from './pages/MyGardenPage'
import ResultsPage from './pages/ResultsPage'
import SearchPage from './pages/SearchPage'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

export default function App() {
  const history = useHistory()

  const [favoriteCrops, setFavoriteCrops] = useState(
    loadFromLocal('favoriteCrops') ?? []
  )

  useEffect(() => {
    saveToLocal('favoriteCrops', favoriteCrops)
  }, [favoriteCrops])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <SearchPage onFavorites={navigateFavorites} />
        </Route>
        <Route path="/search/:searchTerm">
          <ResultsPage onBack={navigateHome} onDetails={navigateDetails} />
        </Route>
        <Route path="/details/:id">
          <CropDetailsPage
            onBack={navigateBack}
            onToggleFavorite={toggleFavorite}
            favoriteCrops={favoriteCrops}
          />
        </Route>
        <Route path="/mygarden">
          <MyGardenPage
            favoriteCrops={favoriteCrops}
            onDetails={navigateDetails}
            onBack={navigateHome}
          />
        </Route>
      </Switch>
    </>
  )

  function navigateDetails(id) {
    history.push('/details/' + id)
  }

  function navigateFavorites() {
    history.push('/mygarden')
  }

  function navigateBack() {
    history.goBack()
  }

  function navigateHome() {
    history.push('/')
  }

  function toggleFavorite(crop) {
    const isInFavorites = favoriteCrops.some(favCrop => favCrop.id === crop.id)
    if (isInFavorites) {
      removeFromFavorites(crop.id)
    } else {
      addToFavorites(crop)
    }
  }

  function addToFavorites(crop) {
    setFavoriteCrops([...favoriteCrops, crop])
  }

  function removeFromFavorites(id) {
    setFavoriteCrops(favoriteCrops.filter(favCrop => favCrop.id !== id))
  }
}
