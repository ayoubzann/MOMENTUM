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
