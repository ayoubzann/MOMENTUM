import { Route, Routes } from 'react-router-dom'
import './App.css'
import WorkoutListPage from './comps/Pages/WorkoutListPage/WorkoutListPage'
import WorkoutCrudPage from './comps/Pages/WorkoutCrudPage/WorkoutCrudPage'
import MoodCheckerPage from './comps/Pages/MoodCheckerPage/MoodCheckerPage'
import ActiveWorkoutPage from './comps/Pages/ActiveWorkoutPage/ActiveWorkoutPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Workouts" element={<WorkoutListPage/>}/>
      <Route path="AddWorkouts" element={<WorkoutCrudPage/>}/>
      <Route path="" element={<MoodCheckerPage/>}/>
      <Route path="/ActiveWorkout" element={<ActiveWorkoutPage/>}/>
    </Routes>
    </>
  )
}

export default App
