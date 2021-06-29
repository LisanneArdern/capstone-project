import { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import useFetch from './hooks/useFetch.js'
import CropDetailsPage from './pages/CropDetailsPage'
import MyGardenPage from './pages/MyGardenPage'
import ResultsPage from './pages/ResultsPage'
import SearchPage from './pages/SearchPage'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const { data, isQuerying } = useFetch(searchTerm)

  const history = useHistory()
  // const location = useLocation()
  // const detailedCrop = data?.find(
  //   crop => crop.id === location.pathname.replace('/details/', '')
  // )
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
          <SearchPage
            onSubmit={handleSubmit}
            crops={data}
            setSearchTerm={setSearchTerm}
            onFavorites={navigateFavorites}
          />
        </Route>
        <Route path="/results">
          <ResultsPage
            crops={data ? data : []}
            onBack={navigateHome}
            onDetails={navigateDetails}
            isQuerying={isQuerying}
          />
        </Route>
        <Route path="/details">
          <CropDetailsPage
            onBack={navigateBack}
            // crop={detailedCrop}
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
  function handleSubmit() {
    history.push('/results')
  }

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
