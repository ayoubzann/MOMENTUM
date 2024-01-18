import React from "react";
import ExerciseCard from "./ExerciseCard";
import { ExerciseListProps } from "../../../utils";


const ExerciseList: React.FC<ExerciseListProps> = ({ data }) => {
  return (
    <div className="m-4">
      <ExerciseCard items={data} />
    </div>
  );
};

export default ExerciseList;
