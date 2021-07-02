import { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import CropDetailsPage from './pages/CropDetailsPage'
import MyGardenPage from './pages/MyGardenPage'
import ResultsPage from './pages/ResultsPage'
import TasksPage from './pages/TasksPage'
import SearchPage from './pages/SearchPage'
import FormPage from './pages/FormPage'
import { loadFromLocal, saveToLocal } from './utils/localStorage'

export default function App() {
  const history = useHistory()
  const [taskList, setTaskList] = useState(loadFromLocal('taskList') ?? [])

  const [favoriteCrops, setFavoriteCrops] = useState(
    loadFromLocal('favoriteCrops') ?? []
  )

  useEffect(() => {
    saveToLocal('taskList', taskList)
  }, [taskList])

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
        <Route path="/tasks">
          <TasksPage
            onClick={navigateForm}
            toDos={taskList}
            onDeleteTask={deleteTask}
          />
        </Route>
        <Route path="/form">
          <FormPage onSubmit={addTask} favoriteCrops={favoriteCrops} />
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
  function navigateForm() {
    history.push('/form')
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

  function addTask({ date, tasks, nameOfCrop, id }) {
    setTaskList([{ date, tasks, nameOfCrop, id }, ...taskList])
  }

  function deleteTask(id) {
    const isInTaskList = taskList.some(task => task.id === id)
    if (isInTaskList) {
      setTaskList(taskList.filter(task => task.id !== id))
    }
  }
}
