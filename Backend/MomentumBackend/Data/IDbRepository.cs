using Microsoft.EntityFrameworkCore.Migrations.Operations;
using MomentumBackend.Models;

namespace MomentumBackend.Data;

public interface IDbRepository
{
    Workout AddWorkout();
    Exercise AddExercise();
}