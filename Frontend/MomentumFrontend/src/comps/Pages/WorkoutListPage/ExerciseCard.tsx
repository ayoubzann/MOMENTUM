import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { ExerciseCardProps } from "../../../utils";

const ExerciseCard: React.FC<ExerciseCardProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const handleClick = (nextIndex: number) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {" "}
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}{" "}
      </span>
    );

    return (
      <div className="m-2" key={index}>
        <div
          className="flex rounded-3xl justify-between p-3 bg-gray-50  items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <h2 className="text-xl">{item.exerciseName}</h2>
          {icon}
        </div>
        {isExpanded && (
          <div className=" p-5 text-lg">
            <h2 className="">Intensity: {item.exerciseIntensity}</h2>
            <h2>Sets: {item.exerciseSets}</h2>
            <h2>Reps: {item.exerciseReps}</h2>
          </div>
        )}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default ExerciseCard;
