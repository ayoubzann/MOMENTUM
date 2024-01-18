// ActiveWorkoutCard.tsx
import React from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { Exercise } from "../../../utils";

type ActiveWorkoutCardProps = {
  items: Exercise[];
  isFocused: boolean;
  isRunning: boolean;
  isBreak: boolean;
}

const ActiveWorkoutCard: React.FC<ActiveWorkoutCardProps> = ({
  items,
  isFocused,
  isRunning,
  isBreak,
}) => {
  return (
    <div className={`m-2 ${isFocused ? "focused-exercise" : ""}`}>
      {items.map((item, index) => {
        const icon = (
          <span className="text-2xl">
            {isFocused ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        );

        return (
          <div
            className={`flex rounded-3xl justify-between p-3 ${
              isRunning ? (isBreak ? "bg-yellow-200" : "bg-green-200") : "bg-gray-50"
            } items-center cursor-pointer`}
            key={index}
          >
            {item.exerciseName}
            {icon}
            {isFocused && isRunning && (
              <div className="border-b p-5">
                <p>Intensity: {item.exerciseIntensity}</p>
                <p>Sets: {item.exerciseSets}</p>
                <p>Reps: {item.exerciseReps}</p>
                <br />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ActiveWorkoutCard;
