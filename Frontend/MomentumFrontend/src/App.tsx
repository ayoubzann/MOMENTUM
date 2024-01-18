import { Route, Routes } from 'react-router-dom'
import './App.css'
import WorkoutListPage from './comps/Pages/WorkoutListPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/workoutList" element={<WorkoutListPage/>}/>
    </Routes>
    </>
  )
}

export default App
