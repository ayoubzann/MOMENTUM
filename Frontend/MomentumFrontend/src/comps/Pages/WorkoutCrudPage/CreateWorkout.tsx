import React, { ChangeEvent } from "react";
import { CreateWorkoutProps } from "../../../utils";


const CreateWorkout: React.FC<CreateWorkoutProps> = ({
  wName,
  setWName,
  wIntensity,
  setWIntensity,
  wLevel,
  setWLevel,
  handleWSubmit,
}) => {
  const handleIntensityChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    setWIntensity(event.target.value);
    console.log(wIntensity);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setWName(event.target.value);
  };

  const handleLevelChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    event.preventDefault();
    setWLevel(event.target.value);
  };

  return (
    <div className="w-96 bg-accent p-5 rounded-lg drop-shadow-xl flex flex-col justify-center">
      <h2 className="text-2xl">Finishing touches...</h2>
      <form onSubmit={handleWSubmit} className="flex flex-col">
        <label className="p-2 flex flex-col justify-center text-xl">
          <h2>Workout name:</h2>
          <input
            value={wName}
            onChange={handleNameChange}
            className="rounded-lg p-2 bg-slate-200 "
            type="text"
          />
        </label>
        <label className="p-2 flex flex-col justify-center text-xl">
         <h2> Intensity (1-10):</h2>
          <input
            value={wIntensity}
            onChange={handleIntensityChange}
            className="rounded-lg p-2 bg-slate-200"
            type="number"
          />
        </label>
        <label className="p-2 flex flex-col  justify-center text-xl">
          <h2>Workout level:</h2>
          <select
            className="bg-slate-200 p-2 rounded-lg"
            value={wLevel}
            onChange={handleLevelChange}
          >
            <option value="Beginner"> Beginner </option>
            <option value="Intermediate"> Intermediate </option>
            <option value="Advanced"> Advanced </option>
          </select>
        </label>
        <br/>
        <button className="bg-secondary" type="submit"> <h2 className="text-lg">Add workout</h2> </button>
      </form>
    </div>
  );
};

export default CreateWorkout;
