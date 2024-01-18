using Microsoft.EntityFrameworkCore;
using MomentumBackend.Models;

namespace MomentumBackend.Data;
public class MomentumDbContext : DbContext
{
    public MomentumDbContext(DbContextOptions<MomentumDbContext> options) : base(options)
    {
    }

    public virtual DbSet<Exercise> Exercises { get; set; } = default!;
    public virtual DbSet<Workout> Workouts { get; set; } = default!;


}
