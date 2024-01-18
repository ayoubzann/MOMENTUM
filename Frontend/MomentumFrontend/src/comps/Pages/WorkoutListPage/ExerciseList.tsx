import ExerciseCard from "./ExerciseCard";

const ExerciseList = ({ data }) => {
  return (
    <div className="m-4">
      <ExerciseCard items={data} />
    </div>
  );
};

export default ExerciseList;
