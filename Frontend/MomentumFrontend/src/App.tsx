import { Route, Routes } from 'react-router-dom'
import './App.css'
import WorkoutListPage from './comps/Pages/WorkoutListPage/WorkoutListPage'
import WorkoutCrudPage from './comps/Pages/WorkoutCrudPage/WorkoutCrudPage'
import MoodCheckerPage from './comps/Pages/MoodCheckerPage/MoodCheckerPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Workouts" element={<WorkoutListPage/>}/>
      <Route path="AddWorkouts" element={<WorkoutCrudPage/>}/>
      <Route path="" element={<MoodCheckerPage/>}/>
    </Routes>
    </>
  )
}

export default App
