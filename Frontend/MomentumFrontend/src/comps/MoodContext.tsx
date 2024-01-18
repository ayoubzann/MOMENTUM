import React, { createContext, ReactNode, useState } from "react";
import { Workout } from "../utils";

type MoodContextProps = {
  mood: number;
  workout: Workout;
  updateWorkout: (newMood: number, newWorkout: Workout) => void;
}

const MoodContext = createContext<MoodContextProps>({
  mood: 0,
  workout: {
    workoutName: "",
    workoutIntensity: 0,
    workoutLevel: "",
    exercises: [],
  },
  updateWorkout: (newMood: number, newWorkout: Workout) => {},
});

type MoodProviderProps = {
  children: ReactNode;
};

const MoodProvider = ({ children }: MoodProviderProps) => {
  const [mood, setMood] = useState(0);
  const [workout, setWorkout] = useState<Workout>({
    workoutName: "",
    workoutIntensity: 0,
    workoutLevel: "",
    exercises: [],
  });

  const updateWorkout = (newMood: number, newWorkout: Workout) => {
    setMood(newMood);
    setWorkout(newWorkout);
  };

  return (
    <MoodContext.Provider value={{ mood, workout, updateWorkout }}>
      {children}
    </MoodContext.Provider>
  );
};

export { MoodProvider, MoodContext };
