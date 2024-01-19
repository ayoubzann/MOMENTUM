// ActiveWorkoutCard.tsx
import React from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { Exercise } from "../../../utils";

type ActiveWorkoutCardProps = {
  items: Exercise[];
  isFocused: boolean;
  isRunning: boolean;
  isBreak: boolean;
};

const ActiveWorkoutCard: React.FC<ActiveWorkoutCardProps> = ({
  items,
  isFocused,
  isRunning,
  isBreak,
}) => {
  return (
    <div className="w-96">
      <div className={`m-2 ${isFocused ? "focused-exercise" : ""}`}>
        {items.map((item, index) => {
          const icon = (
            <span className="text-2xl">
              {isFocused ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
          );

          return (
            <div
              className={`flex  rounded-3xl justify-between p-3 ${
                isRunning
                  ? isBreak
                    ? "bg-yellow-300"
                    : "bg-green-400"
                  : "bg-gray-50"
              } items-center cursor-pointer`}
              key={index}
            >
              <div></div>
              <p className="text-xl">{item.exerciseName}</p>
              {icon}
              {isFocused && isRunning && (
                <div className="border-b p-5text-xl">
                  <h2>Intensity: {item.exerciseIntensity}</h2>
                  <p>Sets: {item.exerciseSets}</p>
                  <p>Reps: {item.exerciseReps}</p>
                  <br />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveWorkoutCard;
