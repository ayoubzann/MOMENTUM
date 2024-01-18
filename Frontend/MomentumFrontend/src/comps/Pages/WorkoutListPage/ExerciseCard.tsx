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
          {item.exerciseName}
          {icon}
        </div>
        {isExpanded && (
          <div className="border-b p-5 ">
            <p>Intensity: {item.exerciseIntensity}</p>
            <p>Sets: {item.exerciseSets}</p>
            <p>Reps: {item.exerciseReps}</p>
            <br />
          </div>
        )}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default ExerciseCard;