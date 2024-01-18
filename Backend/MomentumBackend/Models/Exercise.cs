using System.ComponentModel.DataAnnotations;

namespace MomentumBackend.Models;

public class Exercise
{
    [Key]
public int Id {get; set;}
public string Name {get; set;}
public int Intensity { get; set; }
public int Sets { get; set; }
public int Reps { get; set; }
public Workout? Workout {get; set;}
}