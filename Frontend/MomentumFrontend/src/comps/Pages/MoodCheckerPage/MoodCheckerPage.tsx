import React, { useContext } from "react";
import { MoodContext } from "../../MoodContext";
import { Link } from "react-router-dom";

const MoodCheckerPage = () => {
  const { mood, workout, updateWorkout } = useContext(MoodContext);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newNumber = parseInt(event.target.value, 10);
    updateWorkout(newNumber, workout);
  };

  return (
    <div className="w-96 mx-auto p-8 bg-orange-200 rounded-2xl">
      <h1 className="font-bold mb-4">Hello!</h1>
      <h2 className="text-3xl mb-4">Let's get ready for a workout.</h2>
      <form className="flex flex-col mb-4">
        <h2 className="mb-2 text-2xl p-3">How are you feeling today?</h2>
        <div className="flex flex-col mb-4">
          <label className="flex flex-col items-center m-3">
            <h2 className="text-xl">Great!🤩</h2>
            <input
              name="feeling"
              type="radio"
              className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col items-center m-3">
            <h2 className="text-xl">Good 😃</h2>
            <input
              name="feeling"
              type="radio"
              className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col items-center m-3">
            <h2 className="text-xl">I'm ok👍</h2>
            <input
              name="feeling"
              type="radio"
              className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col items-center m-3">
            <h2 className="text-xl">I've been better...😩</h2>
            <input
              name="feeling"
              type="radio"
              className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col items-center m-3">
            <h2 className="text-xl">Not too good😓</h2>
            <input
              name="feeling"
              type="radio"
              className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
          </label>
          <label className="flex flex-col items-center m-3">
            <h2 className="text-xl">Today is not my day🙅</h2>
            <input
              name="feeling"
              type="radio"
              className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
          </label>
        </div>

        <label className="mb-2">
          <p className="text-2xl m-3">On a scale from 1-10, how energized are you?</p>
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={mood}
          onChange={handleSliderChange}
          className="w-full mb-2"
        />
        <h2 className="text-2xl pb-8"> I feel like a  {mood}  today.</h2>

        <p className="text-xl font-bold mb-2">
          <h2>Remember:</h2> You're more powerful than you think.
        </p>
        <p className="mb-4 text-2xl">
          On that note, let's get a workout that fits with your energy levels for
          the day 🚀
        </p>
          <Link to="/workouts"><p className="text-3xl bg-emerald-200 rounded-full p-4 text-black">Let's go!</p></Link>
      </form>
    </div>
  );
};

export default MoodCheckerPage;
