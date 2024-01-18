namespace MomentumBackend.Models;

public class CreateExerciseDto
{
    public string ExerciseName { get; set; }
    public int ExerciseIntensity { get; set; }
    public int ExerciseSets { get; set; }
    public int ExerciseReps { get; set; }
}