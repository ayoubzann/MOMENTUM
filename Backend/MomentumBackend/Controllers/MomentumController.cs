using Microsoft.AspNetCore.Mvc;
using MomentumBackend.Data;
using MomentumBackend.Models;

namespace MomentumBackend.Controllers;

[ApiController]
[Route("[controller]/api")]
public class MomentumController : ControllerBase
{

    private readonly IDbRepository _repo;
    public MomentumController(IDbRepository repo)
    {
        _repo = repo;
    }

    [HttpGet("getAllExercises")]
    public IActionResult GetAllExercises()
    {
        List<ExerciseDto> exerciseDtos = _repo.GetAllExercises();
        return Ok(exerciseDtos);
    }

    [HttpPost("exercises/create")]
    public IActionResult CreateExercise([FromBody] ExerciseDto exerciseDto)
    {
        if (exerciseDto == null)
        {
            return BadRequest("Invalid request. Please add exercise data.");
        }

        _repo.AddExercise(exerciseDto);
        return Ok("Successfully added exercise!");
    }

    [HttpPut("exercises/Update/{exerciseId}")]
    public IActionResult UpdateExercise(int exerciseId, [FromBody] ExerciseDto exerciseUpdateDto)
    {
        if (exerciseUpdateDto == null)
        {
            return BadRequest("Data is incorrectly formatted in the request. Please try again.");
        }
        _repo.UpdateExercise(exerciseId, exerciseUpdateDto);
        return Ok("Exercise updated successfully");
    }

    [HttpDelete("exercises/delete/{exerciseName}")]
    public IActionResult DeleteExercise(string exerciseName)
    {
        if (exerciseName == null)
        {
            return BadRequest("Please add an ID to delete.");
        }
        _repo.DeleteExercise(exerciseName);
        return Ok("Exercise deleted successfully");
    }

    [HttpGet("getAllWorkouts")]
    public IActionResult GetAllWorkouts()
    {
        List<WorkoutDto> workoutDtos = _repo.GetAllWorkouts();
        return Ok(workoutDtos);
    }

    [HttpGet("workouts/{workoutId}")]
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

    [HttpPost("workouts/create")]
    public IActionResult CreateWorkout([FromBody] WorkoutDto workoutDto)
    {
        if (workoutDto == null)
        {
            return BadRequest("Invalid request. Please add a workout");
        }

        _repo.AddWorkout(workoutDto);
        return Ok("Successfully added workout!");
    }

    [HttpDelete("workouts/delete/{workoutName}")]
    public IActionResult DeleteWorkout(string workoutName)
    {
        if (workoutName == null)
        {
            return BadRequest("Please add an ID to delete.");
        }
        _repo.DeleteWorkout(workoutName);
        return Ok("Workout deleted successfully");
    }
}



