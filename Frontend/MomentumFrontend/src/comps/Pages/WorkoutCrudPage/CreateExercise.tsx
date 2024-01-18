import React from 'react'

const CreateExercise = () => {


    
  return (
    <div>
    <h2 className="text-2xl">Create an exercise</h2>
    <form className="flex flex-col">
      <label>
        {" "}
        Exercise name:
        <input
          className="rounded-lg p-2 bg-slate-200"
          type="text"
        />
      </label>
      <label>
        {" "}
        Intensity (1-10):
        <input
          className="rounded-lg p-2 bg-slate-200"
          type="number"
        />
      </label>
      <label>
        {" "}
       Sets:
        <input
          className="rounded-lg p-2 bg-slate-200"
          type="number"
        />
      </label>
      <label>
        {" "}
        Reps:
        <input
          className="rounded-lg p-2 bg-slate-200"
          type="number"
        />
      </label>
      
      
    </form>
  </div>
  )
}

export default CreateExercise