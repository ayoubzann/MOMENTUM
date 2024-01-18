using Microsoft.EntityFrameworkCore.Migrations.Operations;
using MomentumBackend.Models;

namespace MomentumBackend.Data;

public interface IDbRepository
{
    Workout AddWorkout(CreateWorkoutDto workoutToAdd);
    Workout GetWorkoutById(int workoutId);

}