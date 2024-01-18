namespace MomentumBackend.Models;

public class CreateWorkoutDto
{
    public string WorkoutName { get; set; }
    public int WorkoutIntensity { get; set; }
    public string WorkoutLevel { get; set; }

    public List<CreateExerciseDto> Exercises { get; set; }
}