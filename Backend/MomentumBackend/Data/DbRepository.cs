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

    public void DeleteWorkout(int workoutId)
    {
        Workout existingWorkout = _context.Workouts.FirstOrDefault(w => w.Id == workoutId);

        _context.Workouts.Remove(existingWorkout);
        _context.SaveChanges();
    }

        public void DeleteExercise(int exerciseId)
    {
        Exercise existingExercise = _context.Exercises.FirstOrDefault(e => e.Id == exerciseId);

        _context.Exercises.Remove(existingExercise);
        _context.SaveChanges();
    }

   public List<WorkoutDto> GetAllWorkouts()
    {
        List<Workout> workouts = _context.Workouts.Include(w => w.Exercises).ToList();

        var workoutDtos = workouts.Select(workout => new WorkoutDto
        {
            WorkoutName = workout.Name,
            WorkoutIntensity = workout.Intensity,
            WorkoutLevel = workout.Level,
            Exercises = workout.Exercises.Select(exercise => new ExerciseDto
            {
                ExerciseName = exercise.Name,
                ExerciseIntensity = exercise.Intensity,
                ExerciseSets = exercise.Sets,
                ExerciseReps = exercise.Reps
            }).ToList()
        }).ToList();

        return workoutDtos;
    }

    public List<ExerciseDto> GetAllExercises()
    {
        // Retrieve all exercises from the database
        List<Exercise> exercises = _context.Exercises.ToList();

        // Map exercises to ExerciseDto using your mapping logic
        var exerciseDtos = exercises.Select(exercise => new ExerciseDto
        {
            ExerciseName = exercise.Name,
            ExerciseIntensity = exercise.Intensity,
            ExerciseSets = exercise.Sets,
            ExerciseReps = exercise.Reps
        }).ToList();

        return exerciseDtos;
    }

    public ExerciseDto AddExercise(ExerciseDto exerciseCreateDto)
    {
        var exerciseEntity = new Exercise
        {
            Name = exerciseCreateDto.ExerciseName,
            Intensity = exerciseCreateDto.ExerciseIntensity,
            Sets = exerciseCreateDto.ExerciseSets,
            Reps = exerciseCreateDto.ExerciseReps
        };

        _context.Exercises.Add(exerciseEntity);
        _context.SaveChanges();
        return exerciseCreateDto;
    }



}