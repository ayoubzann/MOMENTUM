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
    <div className="w-96 mx-auto p-8 rounded-2xl">
      <h1 className="text-5xl text-slate-700 mb-2">Let's build</h1>
      <h2 className="text-6xl mb-4 momentum animate-bounce ">momentum</h2>
      <form className="flex flex-col floatIn mb-4 ">
        <div className="bg-primary drop-shadow-2xl mb-5 text-text rounded-2xl">
          <h2 className="mb-2 text-4xl p-3 ">How are you feeling today?</h2>
          <div className="flex flex-col p-4 rounded-2xl mb-4">
            <label className="flex flex-col items-center hover:drop-shadow-2xl hover:bg-orange-600 p-2 rounded-2xl m-3 p-2 rounded-2xl">
              <h2 className="text-3xl mb-2">Great!<br/>🤩</h2>
              <input
                name="feeling"
                type="radio"
                className="h-6 w-6 border-gray-300 "
              />
            </label>
            <label className="flex flex-col items-center hover:drop-shadow-2xl hover:bg-orange-600 p-2 rounded-2xl m-3">
              <h2 className="text-3xl mb-2 ">Good <br/> 😃</h2>
              <input
                name="feeling"
                type="radio"
                className="h-6 w-6  border-gray-300"
              />
            </label>
            <label className="flex flex-col items-center hover:drop-shadow-2xl hover:bg-orange-600 p-2 rounded-2xl m-3">
              <h2 className="text-3xl mb-2 ">I'm ok <br/>👍</h2>
              <input
                name="feeling"
                type="radio"
                className="h-6 w-6  border-gray-300"
              />
            </label>
            <label className="flex flex-col items-center hover:drop-shadow-2xl hover:bg-orange-600 p-2 rounded-2xl m-3">
              <h2 className="text-3xl mb-2 ">I've been better...<br/>😩</h2>
              <input
                name="feeling"
                type="radio"
                className="h-6 w-6  border-gray-300"
              />
            </label>
            <label className="flex flex-col items-center hover:drop-shadow-2xl hover:bg-orange-600 p-2 rounded-2xl m-3">
              <h2 className="text-3xl mb-2 ">Not too good<br/>😓</h2>
              <input
                name="feeling"
                type="radio"
                className="h-6 w-6  border-gray-300"
              />
            </label>
            <label className="flex flex-col items-center hover:drop-shadow-2xl hover:bg-orange-600 p-2 rounded-2xl m-3">
              <h2 className="text-3xl mb-2 ">Today is not my day<br/>🙅</h2>
              <input
                name="feeling"
                type="radio"
                className="h-6 w-6  border-gray-300"
              />
            </label>
          </div>
        </div>
        <section className="bg-accent mb-10 drop-shadow-2xl rounded-2xl my-4 p-8">
          <label className="mb-2">
            <h2 className="text-2xl m-3">
              On a scale from 1-10, how energized are you?
            </h2>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={mood}
            onChange={handleSliderChange}
            className="w-full mb-2"
          />
          <h2 className="text-2xl pb-8"> I feel like a {mood} today.</h2>
        </section>

        <section className="bg-secondary drop-shadow-2xl p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-2">
            You can do it!<p className="text-8xl">🤸🏼</p>
          </h2>
          <h2 className=" text-2xl">On that note,</h2>
          <h2 className="text-2xl">let's build</h2>
          <h1 className="text-4xl momentum animate-bounce m-2">momentum</h1>
          <Link to="/workouts">
            <h2 className="text-3xl bg-primary drop-shadow-lg rounded-full p-4 text-black">
              Let's go! 🚀
            </h2>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default MoodCheckerPage;
