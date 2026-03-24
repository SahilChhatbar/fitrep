export const workoutPlans = [
  // BEGINNER (1–10)

  {
    id: "full_body_3_day_basic",
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
          { wgerId: 345, name: "Squat" },
          { wgerId: 285, name: "Bench Press" },
          { wgerId: 84, name: "Row" },
          { wgerId: 109, name: "Overhead Press" }
        ]
      },
      {
        day: "Day 2",
        focus: "Full Body",
        exercises: [
          { wgerId: 183, name: "Deadlift" },
          { wgerId: 132, name: "Pull Up" },
          { wgerId: 301, name: "Dumbbell Curl" },
          { wgerId: 302, name: "Tricep Pushdown" }
        ]
      },
      {
        day: "Day 3",
        focus: "Full Body",
        exercises: [
          { wgerId: 345, name: "Squat" },
          { wgerId: 285, name: "Bench Press" },
          { wgerId: 84, name: "Row" },
          { wgerId: 201, name: "Plank" }
        ]
      }
    ]
  },

  {
    id: "full_body_2_day_minimal",
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
          { wgerId: 345, name: "Squat" },
          { wgerId: 285, name: "Bench Press" },
          { wgerId: 84, name: "Row" }
        ]
      },
      {
        day: "Day 2",
        focus: "Full Body",
        exercises: [
          { wgerId: 183, name: "Deadlift" },
          { wgerId: 132, name: "Pull Up" },
          { wgerId: 109, name: "Overhead Press" }
        ]
      }
    ]
  },

  {
    id: "bodyweight_home",
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
          { wgerId: 201, name: "Push Up" },
          { wgerId: 202, name: "Bodyweight Squat" },
          { wgerId: 203, name: "Plank" },
          { wgerId: 204, name: "Lunges" }
        ]
      }
    ]
  },

  {
    id: "dumbbell_beginner",
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
          { wgerId: 310, name: "Dumbbell Bench" },
          { wgerId: 311, name: "Dumbbell Row" },
          { wgerId: 312, name: "Goblet Squat" },
          { wgerId: 313, name: "Shoulder Press" }
        ]
      }
    ]
  },

  {
    id: "machine_beginner",
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
          { wgerId: 401, name: "Leg Press" },
          { wgerId: 402, name: "Chest Press" },
          { wgerId: 403, name: "Lat Pulldown" },
          { wgerId: 404, name: "Leg Curl" }
        ]
      }
    ]
  },

  {
    id: "upper_lower_3_day",
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
          { wgerId: 285, name: "Bench" },
          { wgerId: 84, name: "Row" },
          { wgerId: 109, name: "Press" }
        ]
      },
      {
        day: "Lower",
        focus: "Lower Body",
        exercises: [
          { wgerId: 345, name: "Squat" },
          { wgerId: 183, name: "Deadlift" },
          { wgerId: 204, name: "Lunges" }
        ]
      }
    ]
  },

  {
    id: "beginner_strength",
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
          { wgerId: 345, name: "Squat" },
          { wgerId: 285, name: "Bench" },
          { wgerId: 183, name: "Deadlift" }
        ]
      }
    ]
  },

  {
    id: "fat_loss_circuit",
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
          { wgerId: 201, name: "Push Up" },
          { wgerId: 202, name: "Squat" },
          { wgerId: 500, name: "Cycling" },
          { wgerId: 203, name: "Plank" }
        ]
      }
    ]
  },

  {
    id: "beginner_cardio_strength",
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
          { wgerId: 500, name: "Cycling" },
          { wgerId: 201, name: "Push Up" },
          { wgerId: 202, name: "Squat" }
        ]
      }
    ]
  },

  {
    id: "full_body_progression",
    name: "Full Body Progression",
    level: "beginner",
    goal: "muscle_gain",
    daysPerWeek: 3,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Full",
        exercises: [
          { wgerId: 345, name: "Squat" },
          { wgerId: 285, name: "Bench" },
          { wgerId: 84, name: "Row" }
        ]
      }
    ]
  },

  // INTERMEDIATE (11–20)

  {
    id: "ppl_3_day",
    name: "Push Pull Legs",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 3,
    split: "ppl",
    schedule: [
      {
        day: "Push",
        focus: "Chest/Shoulders",
        exercises: [
          { wgerId: 285, name: "Bench" },
          { wgerId: 109, name: "Press" },
          { wgerId: 302, name: "Triceps" }
        ]
      },
      {
        day: "Pull",
        focus: "Back",
        exercises: [
          { wgerId: 84, name: "Row" },
          { wgerId: 132, name: "Pull Up" },
          { wgerId: 301, name: "Curl" }
        ]
      },
      {
        day: "Legs",
        focus: "Lower",
        exercises: [
          { wgerId: 345, name: "Squat" },
          { wgerId: 183, name: "Deadlift" }
        ]
      }
    ]
  },

  {
    id: "upper_lower_4_day",
    name: "Upper Lower Split",
    level: "intermediate",
    goal: "strength",
    daysPerWeek: 4,
    split: "upper_lower",
    schedule: [
      { day: "Upper", focus: "Upper", exercises: [{ wgerId: 285, name: "Bench" }] },
      { day: "Lower", focus: "Lower", exercises: [{ wgerId: 345, name: "Squat" }] }
    ]
  },

  {
    id: "ppl_5_day",
    name: "PPL Hybrid",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      { day: "Push", focus: "Push", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "full_body_4_day",
    name: "Full Body 4 Day",
    level: "intermediate",
    goal: "strength",
    daysPerWeek: 4,
    split: "full_body",
    schedule: [
      { day: "Day 1", focus: "Full", exercises: [{ wgerId: 345, name: "Squat" }] }
    ]
  },

  {
    id: "strength_4_day",
    name: "4 Day Strength",
    level: "intermediate",
    goal: "strength",
    daysPerWeek: 4,
    split: "upper_lower",
    schedule: [
      { day: "Upper", focus: "Upper", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "hypertrophy_4_day",
    name: "Hypertrophy Split",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 4,
    split: "bro_split",
    schedule: [
      { day: "Chest", focus: "Chest", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "athletic_training",
    name: "Athletic Training",
    level: "intermediate",
    goal: "general_fitness",
    daysPerWeek: 4,
    split: "hybrid",
    schedule: [
      { day: "Day 1", focus: "Athletic", exercises: [{ wgerId: 600, name: "Sprint" }] }
    ]
  },

  {
    id: "ppl_rotational",
    name: "Rotational PPL",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 4,
    split: "ppl",
    schedule: [
      { day: "Push", focus: "Push", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "upper_lower_volume",
    name: "Upper Lower Volume",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 5,
    split: "upper_lower",
    schedule: [
      { day: "Upper", focus: "Upper", exercises: [{ wgerId: 84, name: "Row" }] }
    ]
  },

  {
    id: "ppl_ul_hybrid",
    name: "PPL + UL Hybrid",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      { day: "Push", focus: "Push", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  // ADVANCED (21–30)

  {
    id: "ppl_6_day",
    name: "PPL Advanced",
    level: "advanced",
    goal: "muscle_gain",
    daysPerWeek: 6,
    split: "ppl",
    schedule: [
      { day: "Push", focus: "Push", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "bro_split_5_day",
    name: "Bro Split",
    level: "advanced",
    goal: "hypertrophy",
    daysPerWeek: 5,
    split: "bro_split",
    schedule: [
      { day: "Chest", focus: "Chest", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "bro_split_6_day",
    name: "Bro Split 6 Day",
    level: "advanced",
    goal: "hypertrophy",
    daysPerWeek: 6,
    split: "bro_split",
    schedule: [
      { day: "Back", focus: "Back", exercises: [{ wgerId: 84, name: "Row" }] }
    ]
  },

  {
    id: "powerbuilding",
    name: "Powerbuilding",
    level: "advanced",
    goal: "strength",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      { day: "Day 1", focus: "Power", exercises: [{ wgerId: 183, name: "Deadlift" }] }
    ]
  },

  {
    id: "full_body_5_day",
    name: "Full Body Advanced",
    level: "advanced",
    goal: "strength",
    daysPerWeek: 5,
    split: "full_body",
    schedule: [
      { day: "Day 1", focus: "Full", exercises: [{ wgerId: 345, name: "Squat" }] }
    ]
  },

  {
    id: "upper_lower_6_day",
    name: "Upper Lower Advanced",
    level: "advanced",
    goal: "strength",
    daysPerWeek: 6,
    split: "upper_lower",
    schedule: [
      { day: "Upper", focus: "Upper", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "push_pull_only",
    name: "Push Pull Split",
    level: "advanced",
    goal: "strength",
    daysPerWeek: 4,
    split: "ppl",
    schedule: [
      { day: "Push", focus: "Push", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "athlete_split",
    name: "Athlete Split",
    level: "advanced",
    goal: "general_fitness",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      { day: "Day 1", focus: "Performance", exercises: [{ wgerId: 700, name: "Sprint" }] }
    ]
  },

  {
    id: "bodybuilding_volume",
    name: "High Volume Bodybuilding",
    level: "advanced",
    goal: "hypertrophy",
    daysPerWeek: 6,
    split: "bro_split",
    schedule: [
      { day: "Chest", focus: "Chest", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  },

  {
    id: "advanced_hybrid",
    name: "Advanced Hybrid",
    level: "advanced",
    goal: "muscle_gain",
    daysPerWeek: 5,
    split: "hybrid",
    schedule: [
      { day: "Push", focus: "Push", exercises: [{ wgerId: 285, name: "Bench" }] }
    ]
  }
];
