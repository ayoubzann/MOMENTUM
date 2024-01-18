using Microsoft.AspNetCore.Mvc;
using MomentumBackend.Data;
using MomentumBackend.Models;

namespace MomentumBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class MomentumController : ControllerBase
{

    private readonly IDbRepository _repo;
    public MomentumController(IDbRepository repo)
    {
        _repo = repo;
    }

    [HttpPost]
    public IActionResult CreateWorkout([FromBody] WorkoutDto workoutDto)
    {
        if (workoutDto == null)
        {
            return BadRequest("Invalid request. Please add a workout");
        }

        var workoutAdded = _repo.AddWorkout(workoutDto);
        return Ok("Successfully added workout!");
    }

    [HttpGet("{workoutId}")]
    public IActionResult GetWorkout(int workoutId)
    {
        Workout workout = _repo.GetWorkoutById(workoutId);

        if (workout == null)
        {
            return NotFound("Workout not found");
        }

        var workoutDto = new WorkoutDto
        {
            WorkoutName = workout.Name,
            WorkoutIntensity = workout.Intensity,
            WorkoutLevel = workout.Level,
            Exercises = workout.Exercises.Select(exercise =>
                new ExerciseDto
                {
                    ExerciseName = exercise.Name,
                    ExerciseIntensity = exercise.Intensity,
                    ExerciseSets = exercise.Sets,
                    ExerciseReps = exercise.Reps
                }
                  ).ToList()
        };

        return Ok(workoutDto);
    }

    [HttpPut("{exerciseId}")]
    public IActionResult UpdateExercise(int exerciseId, [FromBody] ExerciseDto exerciseUpdateDto)
    {
        if(exerciseUpdateDto == null)
        {
            return BadRequest("Data is incorrectly formatted in the request. Please try again.");
        }
            _repo.UpdateExercise(exerciseId, exerciseUpdateDto);
            return Ok("Exercise updated successfully");
    }
}

