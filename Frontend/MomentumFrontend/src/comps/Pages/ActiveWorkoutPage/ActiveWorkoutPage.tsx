// ActiveWorkoutPage.tsx
import React, { useContext, useEffect, useState } from "react";
import { MoodContext } from "../../MoodContext";
import ActiveWorkoutCard from "./ActiveWorkoutCard";
import { useNavigate } from "react-router-dom";

const ActiveWorkoutPage: React.FC = () => {
  const { workout } = useContext(MoodContext);
  const [timer, setTimer] = useState<number>(5);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [focusedExerciseIndex, setFocusedExerciseIndex] = useState<number>(0);
  const [currentSet, setCurrentSet] = useState<number>(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isStarted && currentSet <= workout.exercises[0].exerciseSets) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            return currentSet % 2 === 1 ? 3 : 5;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isStarted, currentSet, workout.exercises]);

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const handleFinishClick = () => {
    setIsStarted(false);
  };

  const navigate = useNavigate();

  const handleFinishWorkout = () => {
    navigate("/FinishedWorkout");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-neutral-300 drop-shadow-lg h-fit p-8 rounded-xl floatInPages">
        <h1 className="momentum pb-8">{workout.workoutName}</h1>
      <button className="bg-green-400" onClick={handleStartClick} disabled={isStarted}>
        <h2>START</h2>
      </button>
      <h2 className="text-xl p-10 rounded-fullm-5">Time remaining: <h1 className="text-orange-500">{timer}</h1></h2>
      <h2 className="text-xl">Exercises:</h2>
      {workout.exercises.map((exercise, index) => (
        <div key={index}>
          <ActiveWorkoutCard
            items={[exercise]}
            isFocused={focusedExerciseIndex === index}
            isRunning={isStarted}
            isBreak={timer === 0}
          />
        </div>
      ))}
      <button className="m-4 bg-red-300" onClick={handleFinishClick} disabled={!isStarted}>
        <h2 className="text-xl">{timer === 0 ? "Next set/break" : "Stop"}</h2>
      </button>
      <button className="m-4 bg-green-400" onClick={handleFinishWorkout} disabled={isStarted}>
        <h2 className="text-xl ">Finish Workout</h2>
      </button>
    </div>
  );
};

export default ActiveWorkoutPage;
