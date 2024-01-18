import React from 'react';
import WorkoutCard from './WorkoutCard';
import { WorkoutListProps } from '../../../utils';

const WorkoutList: React.FC<WorkoutListProps> = ({ data, editor, onDelete }) => {
  return (
    <div >
      {data.map((w, index) => (
        <div key={index}>
          <WorkoutCard editor={editor} onDelete={onDelete} data={w} />
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
