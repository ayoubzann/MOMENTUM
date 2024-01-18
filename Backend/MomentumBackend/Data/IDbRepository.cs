using Microsoft.EntityFrameworkCore.Migrations.Operations;
using MomentumBackend.Models;

namespace MomentumBackend.Data;

public interface IDbRepository
{
    Workout AddWorkout(WorkoutDto workoutToAdd);
    Workout GetWorkoutById(int workoutId);

    void UpdateExercise(int exerciseId, ExerciseDto exerciseUpdateDto);

}