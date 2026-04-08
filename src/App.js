import { Route, Routes, useNavigate } from 'react-router-dom'
import useFavorites from './hooks/useFavorites'
import useTasks from './hooks/useTask'
import CropDetailsPage from './pages/CropDetailsPage'
import FormPage from './pages/FormPage'
import MyGardenPage from './pages/MyGardenPage'
import ResultsPage from './pages/ResultsPage'
import SearchPage from './pages/SearchPage'
import TasksPage from './pages/TasksPage'

export default function App() {
  const navigate = useNavigate()

  const { addTask, deleteTask, taskList } = useTasks()
  const { toggleFavorite, favoriteCrops } = useFavorites()

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SearchPage onFavorites={navigateFavorites} />}
        />
        <Route
          path="/search/:searchTerm"
          element={
            <ResultsPage onBack={navigateHome} onDetails={navigateDetails} />
          }
        />
        <Route
          path="/details/:id"
          element={
            <CropDetailsPage
              onBack={navigateBack}
              onToggleFavorite={toggleFavorite}
              favoriteCrops={favoriteCrops}
              onFavorites={navigateFavorites}
            />
          }
        />
        <Route
          path="/mygarden"
          element={
            <MyGardenPage
              favoriteCrops={favoriteCrops}
              onDetails={navigateDetails}
            />
          }
        />
        <Route
          path="/tasks"
          element={
            <TasksPage
              onClick={navigateForm}
              toDos={taskList}
              onDeleteTask={deleteTask}
            />
          }
        />
        <Route
          path="/form"
          element={
            <FormPage onSubmit={addTask} favoriteCrops={favoriteCrops} />
          }
        />
      </Routes>
    </>
  )

  function navigateDetails(id) {
    navigate('/details/' + id)
  }

  function navigateFavorites() {
    navigate('/mygarden')
  }

  function navigateBack() {
    navigate(-1)
  }

  function navigateHome() {
    navigate('/')
  }
  function navigateForm() {
    navigate('/form')
  }
}
