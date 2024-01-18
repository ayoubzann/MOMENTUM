namespace MomentumBackend.Models;
public class WorkoutDto
{
    public string WorkoutName { get; set; }
    public int WorkoutIntensity { get; set; }
    public string WorkoutLevel { get; set; }
    
    public List<ExerciseDto> Exercises { get; set; }
}


