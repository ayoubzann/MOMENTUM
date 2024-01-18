using Microsoft.EntityFrameworkCore;
using MomentumBackend.Models;

namespace MomentumBackend.Data;

public class DbRepository : IDbRepository
{
    private MomentumDbContext _context;

    public DbRepository(MomentumDbContext context)
    {
        _context = context;
    }

    public Workout AddWorkout(CreateWorkoutDto workoutToAdd)
    {
        
        Workout newWorkout = new Workout{
            Name = workoutToAdd.WorkoutName,
            Intensity = workoutToAdd.WorkoutIntensity,
            Level = workoutToAdd.WorkoutLevel,
        };

        if(workoutToAdd.Exercises != null && workoutToAdd.Exercises.Any())
        {
            foreach(var exerciseDto in workoutToAdd.Exercises)
            {
                Exercise exerciseToAdd = new Exercise{
                    Name = exerciseDto.ExerciseName,
                    Intensity = exerciseDto.ExerciseIntensity,
                    Sets = exerciseDto.ExerciseSets,
                    Reps = exerciseDto.ExerciseReps,
                };

                newWorkout.Exercises.Add(exerciseToAdd);
            }
        }
        _context.Workouts.Add(newWorkout);
        _context.SaveChanges();

        return newWorkout;
    }

    public Workout GetWorkoutById(int workoutId)
    {
        return _context.Workouts
            .Include(w => w.Exercises)
            .FirstOrDefault(w => w.Id == workoutId);
    }
}