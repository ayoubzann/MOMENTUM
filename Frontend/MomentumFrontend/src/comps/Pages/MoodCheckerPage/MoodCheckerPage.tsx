import React, { useContext } from "react";
import MoodContext from "../../NumberContext";
import { Link } from "react-router-dom";

const MoodCheckerPage = () => {
  const { number, updateNumber } = useContext(MoodContext);

  const handleSliderChange = (event) => {
    const newNumber = parseInt(event.target.value, 10);
    updateNumber(newNumber);
  };

  return (
    <div>
      <h1> Hello! </h1>
      <h2> Lets get ready for a workout.</h2>
      <form className="flex flex-col">
        <p>How are you feeling today?</p>
        <label className="p-2">
          Great!🤩
          <input
            name="feeling"
            type="radio"
            className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
        </label>
        <label className="p-2">
          Good 😃
          <input
            name="feeling"
            type="radio"
            className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
        </label>
        <label className="p-2">
          I'm ok👍
          <input
            name="feeling"
            type="radio"
            className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
        </label>
        <label className="p-2">
          I've been better...😩
          <input
            name="feeling"
            type="radio"
            className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
        </label>
        <label className="p-2">
          Not too good😓
          <input
            name="feeling"
            type="radio"
            className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
        </label>
        <label className="p-2">
          Today is not my day🙅
          <input
            name="feeling"
            type="radio"
            className="h-6 w-6 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
        </label>

        <label>
          How much energy do you feel you have on a scale from 1-10, where 10 is
          fully energized?
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={number}
          onChange={handleSliderChange}
          className="w-full"
        />
        <p>{`Selected Number: ${number}`}</p>

        <h2> Remember: our bodies are more able than our minds tell us! </h2>
        <p>
          On that note, lets get a workout that fits with your energy levels for
          the day 🚀
        </p>
        <button>
          <Link to="/workouts"> Lets go!</Link>
        </button>
      </form>
    </div>
  );
};

export default MoodCheckerPage;
