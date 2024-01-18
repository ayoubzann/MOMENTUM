using Microsoft.EntityFrameworkCore;
using MomentumBackend.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IDbRepository, DbRepository>();  
// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MomentumDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MomentumDbConnstring") ??
     throw new InvalidOperationException("Connection string 'MomentumDbConnstring' not found.")));

var app = builder.Build();

app.UseCors(policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        var dbContext = services.GetRequiredService<MomentumDbContext>();
        
        dbContext.Database.Migrate();

        var dbSeeder = services.GetRequiredService<IDbRepository>();

        dbSeeder.SeedData();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error occurred during database seeding: {ex.Message}");
    }
}
app.Run();
