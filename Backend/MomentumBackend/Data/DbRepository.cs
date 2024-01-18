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

    public Workout AddWorkout(WorkoutDto workoutToAdd)
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

   public void UpdateExercise(int exerciseId, ExerciseDto exerciseUpdateDto)
    {
        Exercise existingExercise = _context.Exercises.FirstOrDefault(e => e.Id == exerciseId);

        existingExercise.Name = exerciseUpdateDto.ExerciseName;
        existingExercise.Intensity = exerciseUpdateDto.ExerciseIntensity;
        existingExercise.Sets = exerciseUpdateDto.ExerciseSets;
        existingExercise.Reps = exerciseUpdateDto.ExerciseReps;

        _context.SaveChanges();
    }
}