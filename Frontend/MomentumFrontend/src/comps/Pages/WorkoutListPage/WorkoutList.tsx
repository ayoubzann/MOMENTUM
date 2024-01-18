import React from 'react'
import WorkoutCard from './WorkoutCard'

const WorkoutList = ({data, onDelete}) => {
  return (
    <div>
        {data.map((w, index) => {
            return (
                <div key={index}>
                    <WorkoutCard onDelete={onDelete} data={w}/>
                </div>
            )
        })}
    </div>
  )
}

export default WorkoutList