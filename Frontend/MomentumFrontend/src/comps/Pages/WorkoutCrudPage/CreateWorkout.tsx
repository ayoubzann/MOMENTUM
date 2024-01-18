import React, { ChangeEvent, useState } from "react";

const CreateWorkout = ({wName, setWName, wIntensity, setWIntensity, wLevel, setWLevel}) => {

  const handleIntensityChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    setWIntensity(event.target.value);
    console.log(wIntensity)
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setWName(event.target.value);
  };

  const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault();
    setWLevel(event.target.value);
};

  return (
    <div>
      <h2 className="text-2xl">Create your own workout!</h2>
      <form className="flex flex-col">
        <label>
          {" "}
          Workout name:
          <input
            value={wName}
            onChange={handleNameChange}
            className="rounded-lg p-2 bg-slate-200"
            type="text"
          />
        </label>
        <label>
          {" "}
          Intensity (1-10):
          <input
            value={wIntensity}
            onChange={handleIntensityChange}
            className="rounded-lg p-2 bg-slate-200"
            type="number"
          />
        </label>
        <label>
          Workout level:
          <select className="bg-slate-200 p-2 w-48 rounded-lg" value={wLevel} onChange={handleLevelChange}>
            <option value="Beginner"> Beginner </option>
            <option value="Intermediate"> Intermediate </option>
            <option value="Advanced"> Advanced </option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default CreateWorkout;
