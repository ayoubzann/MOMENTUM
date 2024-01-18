import React from 'react'
import WorkoutCard from './WorkoutCard'

const WorkoutList = ({data, editor, onDelete}) => {
  return (
    <div>
        {data.map((w, index) => {
            return (
                <div key={index}>
                    <WorkoutCard editor={editor} onDelete={onDelete} data={w}/>
                </div>
            )
        })}
    </div>
  )
}

export default WorkoutList