using Microsoft.EntityFrameworkCore.Migrations.Operations;

namespace MomentumBackend.Data;

public interface IDbRepository
{
    GetExerciseById
    GetAllExercises
    GetWorkoutById
    GetAllWorkouts
    AddWorkout
    AddExercise
    DeleteExercise
    DeleteWorkout
}