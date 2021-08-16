import { Route, Switch, useHistory } from 'react-router-dom'
import useFavorites from './hooks/useFavorites'
import useTasks from './hooks/useTask'
import CropDetailsPage from './pages/CropDetailsPage'
import FormPage from './pages/FormPage'
import MyGardenPage from './pages/MyGardenPage'
import ResultsPage from './pages/ResultsPage'
import SearchPage from './pages/SearchPage'
import TasksPage from './pages/TasksPage'

export default function App() {
  const history = useHistory()

  const { addTask, deleteTask, taskList } = useTasks()
  const { toggleFavorite, favoriteCrops } = useFavorites()

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
            onFavorites={navigateFavorites}
          />
        </Route>
        <Route path="/mygarden">
          <MyGardenPage
            favoriteCrops={favoriteCrops}
            onDetails={navigateDetails}
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
}
