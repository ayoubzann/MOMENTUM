using Microsoft.EntityFrameworkCore.Migrations.Operations;
using MomentumBackend.Models;

namespace MomentumBackend.Data;

public interface IDbRepository
{
    Workout AddWorkout(WorkoutDto workoutToAdd);
    Workout GetWorkoutById(int workoutId);

    void UpdateExercise(int exerciseId, ExerciseDto exerciseUpdateDto);
    void DeleteWorkout(string workoutName);
    void DeleteExercise(string exerciseName);
    List<WorkoutDto> GetAllWorkouts();
    List<ExerciseDto> GetAllExercises();
    ExerciseDto AddExercise(ExerciseDto exerciseCreateDto);
    
    void SeedData();
}