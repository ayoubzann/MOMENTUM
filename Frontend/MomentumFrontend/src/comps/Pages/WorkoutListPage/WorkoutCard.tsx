import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoodContext } from '../../MoodContext';
import { WorkoutCardProps } from '../../../utils';
import ExerciseList from './ExerciseList';

const WorkoutCard: React.FC<WorkoutCardProps> = ({ data, editor, onDelete }) => {
  const navigate = useNavigate();
  const { updateWorkout, mood } = useContext(MoodContext);

  const handleStartWorkout = async () => {
    updateWorkout(mood, data);

    navigate(`/ActiveWorkout`);
  };

  return (
    <div className="border p-2 m-4">
      <h2 className="text-2xl">{data.workoutName}</h2>
      <h3 className="text-xl">Intensity: {data.workoutIntensity}</h3>
      <h3 className="text-xl">Workout level: {data.workoutLevel}</h3>
      {editor && <button onClick={() => onDelete(data.workoutName)}>Delete</button>}
      <ExerciseList data={data.exercises} />
      <button onClick={handleStartWorkout}>START</button>
    </div>
  );
};

export default WorkoutCard;
