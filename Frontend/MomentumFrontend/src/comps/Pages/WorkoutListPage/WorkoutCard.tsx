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
    <div className=" flex flex-col items-center drop-shadow-2xl rounded-lg p-4 w-96 bg-primary m-4 mb-8">
      <h2 className="text-4xl text-text p-2 mb-2">{data.workoutName}</h2>
      <div className='p-5 bg-background w-2/3 rounded-xl'>
      <h2 className="text-xl text-slate-500">Intensity scale: <h1 className='text-3xl text-text'>{data.workoutIntensity}</h1></h2>
      <h2 className="text-xl text-slate-500">Workout level: <br/><h1 className='text-3xl text-text'>{data.workoutLevel}</h1></h2>
      </div>
      <div className='w-72'>
      {editor && <button className='mt-4 bg-red-500 font-extrabold text-text' onClick={() => onDelete(data.workoutName)}>Delete Workout</button>}
      <ExerciseList data={data.exercises} />
      </div>
      <button className='bg-secondary' onClick={handleStartWorkout}><h2 className='animate-pulse'>START</h2></button>
    </div>
  );
};

export default WorkoutCard;
