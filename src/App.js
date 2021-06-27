import { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
//import mostCommonCrops from './data.json'
import CropDetailsPage from './pages/CropDetailsPage'
import ResultsPage from './pages/ResultsPage'
import MyGardenPage from './pages/MyGardenPage'
import SearchPage from './pages/SearchPage'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

export default function App() {
  const [crops, setCrops] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm.length > 2) {
      fetch(`https://openfarm.cc/api/v1/crops/?filter=${searchTerm}`)
        .then(res => res.json())
        .then(data => setCrops(data.data))
        .catch(error => console.error(error))
    }
  }, [searchTerm])

  const history = useHistory()
  const location = useLocation()
  const detailedCrop = crops?.find(
    crop => crop.id === location.pathname.replace('/details/', '')
  )
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
            onSubmit={handleSubmit}
            crops={crops}
            setSearchTerm={setSearchTerm}
            onFavorites={navigateFavorites}
          />
        </Route>
        <Route path="/results">
          <ResultsPage
            crops={crops}
            onBack={navigateHome}
            onDetails={navigateDetails}
          />
        </Route>
        <Route path="/details">
          <CropDetailsPage
            onBack={navigateBack}
            crop={detailedCrop}
            onToggleFavorite={toggleFavorite}
            favoriteIds={favoriteIds}
          />
        </Route>
        <Route path="/mygarden">
          <MyGardenPage
            crops={crops}
            favoriteIds={favoriteIds}
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

  function toggleFavorite(id) {
    const isInFavorites = favoriteIds.some(favId => favId === id)
    if (isInFavorites) {
      removeFromFavorites(id)
    } else {
      addToFavorites(id)
    }
  }

  function addToFavorites(id) {
    setFavoriteIds([...favoriteIds, id])
  }

  function removeFromFavorites(id) {
    setFavoriteIds(favoriteIds.filter(favId => favId !== id))
  }
}
