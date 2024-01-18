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

    public void DeleteWorkout(string workoutName)
    {
        Workout existingWorkout = _context.Workouts.FirstOrDefault(w => w.Name == workoutName);

        _context.Workouts.Remove(existingWorkout);
        _context.SaveChanges();
    }

        public void DeleteExercise(string exerciseName)
    {
        Exercise existingExercise = _context.Exercises.FirstOrDefault(e => e.Name == exerciseName);

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
        List<Exercise> exercises = _context.Exercises.ToList();

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

public void SeedData()
    {
        string[] workoutNames = { "Strength Builder", "Cardio Blast", "Flexibility Focus", "Endurance Enhancer", "Core Crusher", "HIIT Havoc", "Power Play", "Balance Booster", "Speed Sprint" };

        string[] exerciseNames = { "Push-up", "Pull-up", "Squat", "Lunges", "Plank", "Burpee", "Mountain Climber", "Deadlift", "Bicep Curl", "Tricep Dip", "Jumping Jacks", "Russian Twist" };

        for (int i = 1; i <= 3; i++)
        {
            var workout = new Workout
            {
                Name = workoutNames[i - 1],
                Intensity = new Random().Next(1, 5),
                Level = "Beginner" 
            };

            for (int j = 0; j < new Random().Next(4, 7); j++)
            {
                var exercise = new Exercise
                {
                    Name = exerciseNames[j % exerciseNames.Length],
                    Intensity = new Random().Next(1, 5),
                    Sets = 3,
                    Reps = 10
                };

                workout.Exercises.Add(exercise);
            }

            _context.Workouts.Add(workout);
        }

        for (int i = 4; i <= 6; i++)
        {
            var workout = new Workout
            {
                Name = workoutNames[i - 1],
                Intensity = new Random().Next(5, 8),
                Level = "Intermediate"
            };

            for (int j = 0; j < new Random().Next(4, 7); j++)
            {
                var exercise = new Exercise
                {
                    Name = exerciseNames[(j + 3) % exerciseNames.Length],
                    Intensity = new Random().Next(5, 8),
                    Sets = 3,
                    Reps = 10
                };

                workout.Exercises.Add(exercise);
            }

            _context.Workouts.Add(workout);
        }

        for (int i = 7; i <= 9; i++)
        {
            var workout = new Workout
            {
                Name = workoutNames[i - 1],
                Intensity = new Random().Next(8, 11),
                Level = "Advanced" 
            };

            for (int j = 0; j < new Random().Next(4, 7); j++)
            {
                var exercise = new Exercise
                {
                    Name = exerciseNames[(j + 6) % exerciseNames.Length],
                    Intensity = new Random().Next(8, 11),
                    Sets = 3,
                    Reps = 10
                };

                workout.Exercises.Add(exercise);
            }

            _context.Workouts.Add(workout);
        }

        _context.SaveChanges();
    }

}