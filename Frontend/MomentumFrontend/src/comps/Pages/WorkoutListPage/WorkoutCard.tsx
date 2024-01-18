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
    <div className=" rounded-lg p-5 bg-orange-300 m-4 w-72">
      <h2 className="text-2xl p-2 mb-2">{data.workoutName}</h2>
      <div className='p-5 bg-white rounded-full'>
      <h2 className="text-xl">Intensity scale: <p>{data.workoutIntensity}</p></h2>
      <h2 className="text-xl">Workout level: <br/><p>{data.workoutLevel}</p></h2>
      </div>
      {editor && <button className='mt-4 bg-red-500 font-extrabold text-white' onClick={() => onDelete(data.workoutName)}>Delete</button>}
      <ExerciseList data={data.exercises} />
      <button className='bg-emerald-300' onClick={handleStartWorkout}><h2>START</h2></button>
    </div>
  );
};

export default WorkoutCard;
