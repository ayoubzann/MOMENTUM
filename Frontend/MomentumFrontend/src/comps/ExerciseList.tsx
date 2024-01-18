import React from "react";
import ExerciseCard from "./ExerciseCard";

const ExerciseList = ({data}) => {
  return (
    <div>
     {data.map((e, index) => {
        return (
            <div key={index}> <ExerciseCard data={e}/></div>
        )
     })}
    </div>
  );
};

export default ExerciseList;
