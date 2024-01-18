import React from "react";
import ExerciseCard from "./ExerciseCard";
import Accordion from "./Accordion";

const ExerciseList = ({data}) => {
  return (
    <div className="border border-red-500 m-4">


    <Accordion items={data} />

     
    </div>
  );
};

export default ExerciseList;
