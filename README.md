# MOMENTUM

A full-stack workout tracking application that lets you browse pre-seeded workouts, create custom workouts with exercises, track an active workout session, and review your finished workout.

## Tech Stack

| Layer    | Technology                                   |
|----------|----------------------------------------------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS     |
| Backend  | ASP.NET Core 8 Web API, Entity Framework Core |
| Database | SQL Server (Azure SQL Edge via Docker)        |

---

## Prerequisites

Make sure the following are installed before getting started:

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/) (includes npm)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for the SQL Server container)

---

## Configuration & Secrets

### Backend connection string

The backend reads its SQL Server connection string from:

```
ConnectionStrings:MomentumDbConnstring
```

**Never commit a real connection string to `appsettings.json`.**  
Use the [.NET User Secrets](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets) store for local development instead:

```bash
cd Backend/MomentumBackend

# Initialise user secrets (already set up — UserSecretsId is in the .csproj)
dotnet user-secrets set "ConnectionStrings:MomentumDbConnstring" \
  "Server=localhost,1433;Database=MomentumDb;User Id=sa;Password=Password_2_Change_4_Real_Cases_&;TrustServerCertificate=True;"
```

> The password above matches the default value in `docker-compose.yml`.  
> **Change it** for any environment other than local development.

### Docker SQL Server password

The `Backend/docker-compose.yml` file sets the SQL Server SA password via the `SA_PASSWORD` environment variable.  
Update it before use and keep it in sync with your connection string.

---

## Running the Application

### 1 — Start the database

```bash
cd Backend
docker compose up -d
```

This pulls the `mcr.microsoft.com/azure-sql-edge` image and starts SQL Server on port **1433**.  
Wait a few seconds for the server to become ready before starting the backend.

### 2 — Start the backend

```bash
cd Backend/MomentumBackend
dotnet run
```

On first start the backend will:
1. Apply all Entity Framework migrations automatically.
2. Seed the database with 9 sample workouts (Beginner / Intermediate / Advanced) and their exercises.

The API will be available at **`http://localhost:5086`**.  
Interactive Swagger UI: **`http://localhost:5086/swagger`**

### 3 — Start the frontend

```bash
cd Frontend/MomentumFrontend
npm install
npm run dev
```

The Vite dev server starts at **`http://localhost:5173`** (or the next available port) and proxies API calls to `http://localhost:5086`.

---

## Application Pages

| Route              | Page                  | Description                                  |
|--------------------|-----------------------|----------------------------------------------|
| `/`                | Mood Checker          | Entry point — pick your mood to choose a workout |
| `/Workouts`        | Workout List          | Browse all available workouts                |
| `/AddWorkouts`     | Workout CRUD          | Create a new workout with custom exercises   |
| `/ActiveWorkout`   | Active Workout        | Step through exercises in the current workout |
| `/FinishedWorkout` | Finished              | Summary screen shown after completing a workout |

---

## API Endpoints

Base URL: `http://localhost:5086/Momentum/api`

| Method   | Path                                  | Description                   |
|----------|---------------------------------------|-------------------------------|
| `GET`    | `/getAllWorkouts`                      | List all workouts             |
| `GET`    | `/workouts/{workoutId}`               | Get a single workout by ID    |
| `POST`   | `/workouts/create`                    | Create a new workout          |
| `DELETE` | `/workouts/delete/{workoutName}`      | Delete a workout by name      |
| `GET`    | `/getAllExercises`                     | List all exercises            |
| `POST`   | `/exercises/create`                   | Create a new exercise         |
| `PUT`    | `/exercises/Update/{exerciseId}`      | Update an exercise by ID      |
| `DELETE` | `/exercises/delete/{exerciseName}`    | Delete an exercise by name    |

---

## Other Useful Commands

| Command                        | Directory                        | Purpose                                      |
|--------------------------------|----------------------------------|----------------------------------------------|
| `dotnet ef migrations add <Name>` | `Backend/MomentumBackend`    | Create a new EF Core migration               |
| `dotnet ef database update`    | `Backend/MomentumBackend`        | Apply pending migrations manually            |
| `npm run build`                | `Frontend/MomentumFrontend`      | Production build                             |
| `npm run lint`                 | `Frontend/MomentumFrontend`      | Run ESLint                                   |
| `docker compose down`          | `Backend`                        | Stop and remove the database container       |
| `docker compose down -v`       | `Backend`                        | Stop container **and delete all data**       |
