export const workoutPlans = [
  // BEGINNER (1–10)

  {
    name: "3-Day Full Body Beginner",
    level: "beginner",
    goal: "general_fitness",
    daysPerWeek: 3,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description:
                "A compound lower body exercise targeting quads, hamstrings and glutes.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            details: {
              description:
                "A compound upper body push exercise targeting the chest.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull exercise targeting the upper back.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description:
                "A compound shoulder press targeting deltoids and triceps.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
        ],
      },
      {
        day: "Day 2",
        focus: "Full Body",
        exercises: [
          {
            name: "Deadlift",
            details: {
              description:
                "A compound hip hinge targeting the posterior chain.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Pull Up",
            details: {
              description:
                "A bodyweight pull exercise targeting lats and biceps.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Curl",
            details: {
              description: "An isolation exercise for the biceps.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            details: {
              description: "A cable isolation exercise for the triceps.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Day 3",
        focus: "Full Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description:
                "A compound lower body exercise targeting quads, hamstrings and glutes.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            details: {
              description:
                "A compound upper body push exercise targeting the chest.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull exercise targeting the upper back.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Plank",
            details: {
              description: "A core stability exercise.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "2-Day Full Body Minimal",
    level: "beginner",
    goal: "fat_loss",
    daysPerWeek: 2,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description:
                "A compound lower body exercise targeting quads, hamstrings and glutes.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            details: {
              description:
                "A compound upper body push exercise targeting the chest.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull exercise targeting the upper back.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
        ],
      },
      {
        day: "Day 2",
        focus: "Full Body",
        exercises: [
          {
            name: "Deadlift",
            details: {
              description:
                "A compound hip hinge targeting the posterior chain.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Pull Up",
            details: {
              description:
                "A bodyweight pull exercise targeting lats and biceps.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description:
                "A compound shoulder press targeting deltoids and triceps.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Bodyweight Home Plan",
    level: "beginner",
    goal: "fat_loss",
    daysPerWeek: 3,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Bodyweight",
        exercises: [
          {
            name: "Push Up",
            details: {
              description: "A bodyweight chest and tricep exercise.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Bodyweight Squat",
            details: {
              description: "A bodyweight lower body movement.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Plank",
            details: {
              description: "A core stability exercise.",
              muscles: ["Core", "Abs"],
            },
          },
          {
            name: "Lunges",
            details: {
              description: "A unilateral lower body exercise.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Dumbbell Beginner",
    level: "beginner",
    goal: "muscle_gain",
    daysPerWeek: 3,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body",
        exercises: [
          {
            name: "Dumbbell Bench Press",
            details: {
              description: "A dumbbell pressing movement for the chest.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Dumbbell Row",
            details: {
              description: "A unilateral back exercise with dumbbells.",
              muscles: ["Lats", "Biceps", "Rhomboids"],
            },
          },
          {
            name: "Goblet Squat",
            details: {
              description:
                "A squat variation holding a dumbbell at chest height.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Dumbbell Shoulder Press",
            details: {
              description: "A dumbbell pressing movement for the shoulders.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Machine Beginner",
    level: "beginner",
    goal: "general_fitness",
    daysPerWeek: 3,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Machines",
        exercises: [
          {
            name: "Leg Press",
            details: {
              description:
                "A machine lower body press targeting quads and glutes.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Chest Press Machine",
            details: {
              description: "A machine chest press for beginners.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            details: {
              description: "A cable machine pull targeting the lats.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Leg Curl",
            details: {
              description: "A machine isolation exercise for the hamstrings.",
              muscles: ["Hamstrings"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Upper Lower Beginner",
    level: "beginner",
    goal: "muscle_gain",
    daysPerWeek: 3,
    split: "upper_lower",
    schedule: [
      {
        day: "Upper",
        focus: "Upper Body",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description:
                "A compound upper body push exercise targeting the chest.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull exercise targeting the upper back.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description:
                "A compound shoulder press targeting deltoids and triceps.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
        ],
      },
      {
        day: "Lower",
        focus: "Lower Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description:
                "A compound lower body exercise targeting quads, hamstrings and glutes.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Deadlift",
            details: {
              description:
                "A compound hip hinge targeting the posterior chain.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Lunges",
            details: {
              description: "A unilateral lower body exercise.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Beginner Strength",
    level: "beginner",
    goal: "strength",
    daysPerWeek: 3,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Strength",
        exercises: [
          {
            name: "Squat",
            details: {
              description:
                "A compound lower body exercise targeting quads, hamstrings and glutes.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            details: {
              description:
                "A compound upper body push exercise targeting the chest.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Deadlift",
            details: {
              description:
                "A compound hip hinge targeting the posterior chain.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Fat Loss Circuit",
    level: "beginner",
    goal: "fat_loss",
    daysPerWeek: 4,
    split: "hybrid",
    schedule: [
      {
        day: "Circuit",
        focus: "Full Body",
        exercises: [
          {
            name: "Push Up",
            details: {
              description: "A bodyweight chest and tricep exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Bodyweight Squat",
            details: {
              description: "A bodyweight lower body movement.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Cycling",
            details: {
              description: "Cardio on a stationary or outdoor bike.",
              muscles: ["Quadriceps", "Hamstrings", "Calves"],
            },
          },
          {
            name: "Plank",
            details: {
              description: "A core stability exercise.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Cardio + Strength",
    level: "beginner",
    goal: "fat_loss",
    daysPerWeek: 3,
    split: "hybrid",
    schedule: [
      {
        day: "Day 1",
        focus: "Mixed",
        exercises: [
          {
            name: "Cycling",
            details: {
              description: "Cardio on a stationary or outdoor bike.",
              muscles: ["Quadriceps", "Hamstrings", "Calves"],
            },
          },
          {
            name: "Push Up",
            details: {
              description: "A bodyweight chest and tricep exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Bodyweight Squat",
            details: {
              description: "A bodyweight lower body movement.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Full Body Progression",
    level: "beginner",
    goal: "muscle_gain",
    daysPerWeek: 3,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description:
                "A compound lower body exercise targeting quads, hamstrings and glutes.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            details: {
              description:
                "A compound upper body push exercise targeting the chest.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull exercise targeting the upper back.",
              muscles: ["Lats", "Biceps"],
            },
          },
        ],
      },
    ],
  },

  // INTERMEDIATE (11–20)

  {
    name: "Push Pull Legs",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 3,
    split: "ppl",
    schedule: [
      {
        day: "Push",
        focus: "Chest/Shoulders/Triceps",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description:
                "A compound upper body push exercise targeting the chest.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description:
                "A compound shoulder press targeting deltoids and triceps.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            details: {
              description: "A cable isolation exercise for the triceps.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Pull",
        focus: "Back/Biceps",
        exercises: [
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull exercise targeting the upper back.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Pull Up",
            details: {
              description:
                "A bodyweight pull exercise targeting lats and biceps.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Curl",
            details: {
              description: "An isolation exercise for the biceps.",
              muscles: ["Biceps"],
            },
          },
        ],
      },
      {
        day: "Legs",
        focus: "Lower Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description:
                "A compound lower body exercise targeting quads, hamstrings and glutes.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Deadlift",
            details: {
              description:
                "A compound hip hinge targeting the posterior chain.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Upper Lower Split",
    level: "intermediate",
    goal: "strength",
    daysPerWeek: 4,
    split: "upper_lower",
    schedule: [
      {
        day: "Upper A",
        focus: "Upper Body",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description:
                "A compound upper body push exercise targeting the chest.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull exercise targeting the upper back.",
              muscles: ["Lats", "Biceps"],
            },
          },
        ],
      },
      {
        day: "Lower A",
        focus: "Lower Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description: "A compound lower body exercise.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            details: {
              description: "A machine lower body press.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "PPL Hybrid",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      {
        day: "Push",
        focus: "Push",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound upper body push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            details: {
              description: "An incline press for upper chest emphasis.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Full Body 4 Day",
    level: "intermediate",
    goal: "strength",
    daysPerWeek: 4,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description: "A compound lower body exercise.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "4 Day Strength",
    level: "intermediate",
    goal: "strength",
    daysPerWeek: 4,
    split: "upper_lower",
    schedule: [
      {
        day: "Upper",
        focus: "Upper Body",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description: "A shoulder press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Hypertrophy Split",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 4,
    split: "bro_split",
    schedule: [
      {
        day: "Chest",
        focus: "Chest",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound chest press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            details: {
              description: "Upper chest emphasis.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Athletic Training",
    level: "intermediate",
    goal: "general_fitness",
    daysPerWeek: 4,
    split: "hybrid",
    schedule: [
      {
        day: "Day 1",
        focus: "Athletic",
        exercises: [
          {
            name: "Sprint",
            details: {
              description: "High intensity running for speed and conditioning.",
              muscles: ["Quadriceps", "Hamstrings", "Calves"],
            },
          },
          {
            name: "Box Jump",
            details: {
              description: "An explosive plyometric exercise.",
              muscles: ["Quadriceps", "Glutes", "Calves"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Rotational PPL",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 4,
    split: "ppl",
    schedule: [
      {
        day: "Push",
        focus: "Push",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Lateral Raise",
            details: {
              description: "An isolation exercise for the side deltoids.",
              muscles: ["Side Deltoid"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Upper Lower Volume",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 5,
    split: "upper_lower",
    schedule: [
      {
        day: "Upper",
        focus: "Upper Body",
        exercises: [
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull exercise.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Pull Up",
            details: {
              description: "A bodyweight pull.",
              muscles: ["Lats", "Biceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "PPL + UL Hybrid",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      {
        day: "Push",
        focus: "Push",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description: "A shoulder press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
        ],
      },
    ],
  },

  // ADVANCED (21–30)

  {
    name: "PPL Advanced",
    level: "advanced",
    goal: "muscle_gain",
    daysPerWeek: 6,
    split: "ppl",
    schedule: [
      {
        day: "Push",
        focus: "Chest/Shoulders/Triceps",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description: "A shoulder press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            details: { description: "Tricep isolation.", muscles: ["Triceps"] },
          },
        ],
      },
    ],
  },

  {
    name: "Bro Split",
    level: "advanced",
    goal: "hypertrophy",
    daysPerWeek: 5,
    split: "bro_split",
    schedule: [
      {
        day: "Chest",
        focus: "Chest",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound chest press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            details: {
              description: "Upper chest emphasis.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Fly",
            details: {
              description: "A cable isolation exercise for the chest.",
              muscles: ["Chest"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Bro Split 6 Day",
    level: "advanced",
    goal: "hypertrophy",
    daysPerWeek: 6,
    split: "bro_split",
    schedule: [
      {
        day: "Back",
        focus: "Back",
        exercises: [
          {
            name: "Deadlift",
            details: {
              description: "A compound hip hinge.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Barbell Row",
            details: {
              description: "A compound pull.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Pull Up",
            details: {
              description: "A bodyweight pull.",
              muscles: ["Lats", "Biceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Powerbuilding",
    level: "advanced",
    goal: "strength",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      {
        day: "Day 1",
        focus: "Power",
        exercises: [
          {
            name: "Deadlift",
            details: {
              description: "A compound hip hinge.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Squat",
            details: {
              description: "A compound lower body exercise.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Full Body Advanced",
    level: "advanced",
    goal: "strength",
    daysPerWeek: 5,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body",
        exercises: [
          {
            name: "Squat",
            details: {
              description: "A compound lower body exercise.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Deadlift",
            details: {
              description: "A compound hip hinge.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Upper Lower Advanced",
    level: "advanced",
    goal: "strength",
    daysPerWeek: 6,
    split: "upper_lower",
    schedule: [
      {
        day: "Upper",
        focus: "Upper Body",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            details: {
              description: "A weighted bodyweight pull.",
              muscles: ["Lats", "Biceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Push Pull Split",
    level: "advanced",
    goal: "strength",
    daysPerWeek: 4,
    split: "ppl",
    schedule: [
      {
        day: "Push",
        focus: "Push",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description: "A shoulder press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Athlete Split",
    level: "advanced",
    goal: "general_fitness",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      {
        day: "Day 1",
        focus: "Performance",
        exercises: [
          {
            name: "Sprint",
            details: {
              description: "High intensity running for conditioning.",
              muscles: ["Quadriceps", "Hamstrings", "Calves"],
            },
          },
          {
            name: "Box Jump",
            details: {
              description: "An explosive plyometric.",
              muscles: ["Quadriceps", "Glutes", "Calves"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "High Volume Bodybuilding",
    level: "advanced",
    goal: "hypertrophy",
    daysPerWeek: 6,
    split: "bro_split",
    schedule: [
      {
        day: "Chest",
        focus: "Chest",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound chest press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            details: {
              description: "Upper chest emphasis.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Pec Deck",
            details: {
              description: "A machine chest fly.",
              muscles: ["Chest"],
            },
          },
        ],
      },
    ],
  },

  {
    name: "Advanced Hybrid",
    level: "advanced",
    goal: "muscle_gain",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      {
        day: "Push",
        focus: "Push",
        exercises: [
          {
            name: "Bench Press",
            details: {
              description: "A compound push exercise.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            details: {
              description: "A shoulder press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
        ],
      },
    ],
  },
];
