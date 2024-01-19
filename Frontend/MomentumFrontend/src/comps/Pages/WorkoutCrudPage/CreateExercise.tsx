import React, { ChangeEvent, useState } from "react";
import { CreateExerciseProps } from "../../../utils";


const CreateExercise: React.FC<CreateExerciseProps> = ({
  eName,
  setEName,
  eIntensity,
  setEIntensity,
  sets,
  setSets,
  reps,
  setReps,
  handleESubmit,
  existingExercises,
}) => {
  const [useExistingExercise, setUseExistingExercise] = useState(false);

  const handleUseExistingExerciseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUseExistingExercise(event.target.checked);
  };

  const handleExistingExerciseChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedExercise = existingExercises.find(exercise => exercise.exerciseName === event.target.value);
    setEName(selectedExercise?.exerciseName || "");
    setEIntensity(selectedExercise?.exerciseIntensity || 0);
    setSets(selectedExercise?.exerciseSets || 0);
    setReps(selectedExercise?.exerciseReps || 0);
  };

  return (
    <div className=" p-5 w-96 rounded-lg drop-shadow-xl bg-primary">
      <h2 className="text-4xl p-4">Create or Select an exercise</h2>
      <form className="flex flex-col" onSubmit={handleESubmit}>
        <label className="flex justify-center">
          <input
          className="m-2 "
            type="checkbox"
            checked={useExistingExercise}
            onChange={handleUseExistingExerciseChange}
          />
          <h2 className="text-xl">Use existing exercise</h2>
        </label>
        {useExistingExercise ? (
          <label className="flex flex-col">
            <br/>
            <h2 className="text-xl p-2">Select existing exercise:</h2>
            <select
              value={eName}
              onChange={handleExistingExerciseChange}
              className="rounded-lg p-2 bg-slate-200"
            >
              <option value="" >Select an existing exercise</option>
              {existingExercises.map((exercise, index) => (
                <option key={index} value={exercise.exerciseName}>
                  {exercise.exerciseName}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <>
          <br/>
            <label className="p-2 flex flex-col justify-center drop-shadow-lg">
              <h3 className="text-xl font-bold">Exercise name:</h3>
              <input
                onChange={(e) => setEName(e.target.value)}
                value={eName}
                className="rounded-lg p-2 bg-slate-200"
                type="text"
              />
            </label>
            <label className="p-2 flex flex-col justify-center drop-shadow-lg">
             <h3 className="text-xl font-bold"> Intensity (1-10):</h3>
              <input
                onChange={(e) => setEIntensity(e.target.value)}
                value={eIntensity}
                className="rounded-lg p-2 bg-slate-200"
                type="number"
              />
            </label>
            <label className="p-2 flex flex-col justify-center drop-shadow-lg">
             <h3 className="text-xl font-bold"> Sets:</h3>
              <input
                onChange={(e) => setSets(e.target.value)}
                value={sets}
                className="rounded-lg p-2 bg-slate-200"
                type="number"
              />
            </label>
            <label className="p-2 flex flex-col justify-center drop-shadow-lg">
              <h3 className="text-xl font-bold">Reps:</h3>
              <input
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className="rounded-lg p-2 bg-slate-200"
                type="number"
              />
            </label>
          </>
        )}
        <button type="submit">
          <h2 className="text-lg p-2 rounded-lg bg-secondary">
          {useExistingExercise ? "Add existing exercise" : "Add new exercise"}
          </h2>
        </button>
      </form>
    </div>
  );
};

export default CreateExercise;
