export type Exercise = {
    exerciseName: string;
    exerciseIntensity: number;
    exerciseSets: number;
    exerciseReps: number;
  }
  
  export type Workout = {
    workoutName: string;
    workoutIntensity: number;
    workoutLevel: string;
    exercises: Exercise[];
  }

  export type WorkoutCardProps = {
    data: Workout;
    editor: boolean;
    onDelete: (workoutName: string) => void;
  }
  export type WorkoutListProps = {
    data: Workout[];
    editor: boolean;
    onDelete: (workoutName: string) => void;
  }
  
  export type ExerciseListProps = {
    data: Exercise[];
  }

  export type ExerciseCardProps = {
    items: Exercise[];
  }

  export type CreateExerciseProps = {
    eName: string;
    setEName: React.Dispatch<React.SetStateAction<string>>;
    eIntensity: number;
    setEIntensity: React.Dispatch<React.SetStateAction<number>>;
    sets: number;
    setSets: React.Dispatch<React.SetStateAction<number>>;
    reps: number;
    setReps: React.Dispatch<React.SetStateAction<number>>;
    handleESubmit: (event: React.FormEvent) => void;
    existingExercises: Exercise[];
  }
  

  export type CreateWorkoutProps = {
    wName: string;
    setWName: React.Dispatch<React.SetStateAction<string>>;
    wIntensity: string;
    setWIntensity: React.Dispatch<React.SetStateAction<string>>;
    wLevel: string;
    setWLevel: React.Dispatch<React.SetStateAction<string>>;
    handleWSubmit: (event: React.FormEvent) => void;
  }
  
  


const baseUrl = "http://localhost:5086/Momentum/api/";

export const getAllWorkouts = async () => {
  const res = await fetch(baseUrl + "getAllWorkouts");
  const data = await res.json();
  return await data;
};
export const getAllExercises = async () => {
  const res = await fetch(baseUrl + "getAllExercises");
  const data = await res.json();
  return await data;
};

export const postWorkout = async (workoutToAdd) => {
  const res = await fetch(baseUrl + "workouts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workoutToAdd),
  });

  return res;
};

export const deleteWorkout = async (workoutName) => {
  await fetch(baseUrl + `workouts/delete/${workoutName}`, { method: "DELETE" });
};
