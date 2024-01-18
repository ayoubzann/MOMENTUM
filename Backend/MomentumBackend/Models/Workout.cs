using System.ComponentModel.DataAnnotations;

namespace MomentumBackend.Models;

public class Workout
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public int Intensity { get; set; }
    public string Level { get; set; }
    public List<Exercise>? Exercises {get; set;}
}