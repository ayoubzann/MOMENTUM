import React, { useEffect, useState } from 'react'
import { getAllWorkouts } from '../../utils';
import WorkoutList from '../WorkoutList';

const WorkoutListPage = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllWorkouts();
       setWorkouts(data);
     };
    
     fetchData();
    
    }, [])
    
    console.log(workouts);

  return (
    <>
    <WorkoutList data={workouts}/>
  </>
  )
}

export default WorkoutListPage