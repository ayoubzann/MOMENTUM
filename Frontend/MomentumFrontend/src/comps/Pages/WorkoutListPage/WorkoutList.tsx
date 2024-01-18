import React from 'react'
import WorkoutCard from './WorkoutCard'

const WorkoutList = ({data}) => {
  return (
    <div>
        {data.map((w, index) => {
            return (
                <div key={index}>
                    <WorkoutCard data={w}/>
                </div>
            )
        })}
    </div>
  )
}

export default WorkoutList