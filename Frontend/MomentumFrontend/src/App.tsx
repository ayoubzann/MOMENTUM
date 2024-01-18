import { Route, Routes } from 'react-router-dom'
import './App.css'
import WorkoutListPage from './comps/Pages/WorkoutListPage/WorkoutListPage'
import WorkoutCrudPage from './comps/Pages/WorkoutCrudPage/WorkoutCrudPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Workouts" element={<WorkoutListPage/>}/>
      <Route path="AddWorkouts" element={<WorkoutCrudPage/>}/>
    </Routes>
    </>
  )
}

export default App
