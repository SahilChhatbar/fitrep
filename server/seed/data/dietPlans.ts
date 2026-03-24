export const dietPlans = [
  // FAT LOSS (1–7)

  {
    id: "fat_loss_1800",
    name: "Fat Loss 1800 kcal",
    goal: "fat_loss",
    calories: 1800,
    macros: { protein: 140, carbs: 180, fat: 50 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          { fdcId: 1102649, name: "Oats" },
          { fdcId: 173944, name: "Milk" }
        ]
      },
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken Breast" },
          { fdcId: 169910, name: "Brown Rice" }
        ]
      },
      {
        name: "Dinner",
        foods: [
          { fdcId: 170379, name: "Egg" },
          { fdcId: 11090, name: "Broccoli" }
        ]
      }
    ]
  },

  {
    id: "fat_loss_high_protein",
    name: "High Protein Fat Loss",
    goal: "fat_loss",
    calories: 2000,
    macros: { protein: 180, carbs: 150, fat: 60 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          { fdcId: 170379, name: "Egg" },
          { fdcId: 173944, name: "Milk" }
        ]
      },
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken Breast" },
          { fdcId: 11090, name: "Broccoli" }
        ]
      },
      {
        name: "Dinner",
        foods: [
          { fdcId: 173410, name: "Salmon" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  {
    id: "fat_loss_low_carb",
    name: "Low Carb Fat Loss",
    goal: "fat_loss",
    calories: 1800,
    macros: { protein: 150, carbs: 80, fat: 90 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          { fdcId: 170379, name: "Egg" },
          { fdcId: 173410, name: "Salmon" }
        ]
      },
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken" },
          { fdcId: 11090, name: "Broccoli" }
        ]
      }
    ]
  },

  {
    id: "fat_loss_vegetarian",
    name: "Vegetarian Fat Loss",
    goal: "fat_loss",
    calories: 1900,
    macros: { protein: 110, carbs: 220, fat: 50 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          { fdcId: 1102649, name: "Oats" },
          { fdcId: 173944, name: "Milk" }
        ]
      },
      {
        name: "Lunch",
        foods: [
          { fdcId: 173410, name: "Tofu" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  {
    id: "fat_loss_intermittent",
    name: "Intermittent Fasting Plan",
    goal: "fat_loss",
    calories: 1800,
    macros: { protein: 150, carbs: 170, fat: 60 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken" },
          { fdcId: 169910, name: "Rice" }
        ]
      },
      {
        name: "Dinner",
        foods: [
          { fdcId: 173410, name: "Fish" },
          { fdcId: 11090, name: "Vegetables" }
        ]
      }
    ]
  },

  {
    id: "fat_loss_keto",
    name: "Keto Fat Loss",
    goal: "fat_loss",
    calories: 2000,
    macros: { protein: 140, carbs: 30, fat: 140 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          { fdcId: 170379, name: "Egg" },
          { fdcId: 171688, name: "Butter" }
        ]
      }
    ]
  },

  {
    id: "fat_loss_balanced",
    name: "Balanced Fat Loss",
    goal: "fat_loss",
    calories: 2000,
    macros: { protein: 140, carbs: 200, fat: 60 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  // MUSCLE GAIN (8–14)

  {
    id: "muscle_gain_2500",
    name: "Muscle Gain 2500 kcal",
    goal: "muscle_gain",
    calories: 2500,
    macros: { protein: 160, carbs: 300, fat: 70 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          { fdcId: 1102649, name: "Oats" },
          { fdcId: 173944, name: "Milk" }
        ]
      },
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  {
    id: "muscle_gain_high_carb",
    name: "High Carb Muscle Gain",
    goal: "muscle_gain",
    calories: 2800,
    macros: { protein: 150, carbs: 350, fat: 70 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          { fdcId: 1102649, name: "Oats" },
          { fdcId: 173944, name: "Milk" }
        ]
      }
    ]
  },

  {
    id: "muscle_gain_high_protein",
    name: "High Protein Muscle Gain",
    goal: "muscle_gain",
    calories: 2600,
    macros: { protein: 200, carbs: 250, fat: 70 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken" },
          { fdcId: 170379, name: "Egg" }
        ]
      }
    ]
  },

  {
    id: "bulking_clean",
    name: "Clean Bulking",
    goal: "muscle_gain",
    calories: 3000,
    macros: { protein: 180, carbs: 350, fat: 80 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  {
    id: "bulking_dirty",
    name: "Dirty Bulking",
    goal: "muscle_gain",
    calories: 3500,
    macros: { protein: 160, carbs: 400, fat: 120 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 172482, name: "Cheese" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  {
    id: "muscle_gain_vegetarian",
    name: "Vegetarian Muscle Gain",
    goal: "muscle_gain",
    calories: 2600,
    macros: { protein: 130, carbs: 300, fat: 70 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 173410, name: "Tofu" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  {
    id: "lean_bulk",
    name: "Lean Bulk",
    goal: "muscle_gain",
    calories: 2700,
    macros: { protein: 170, carbs: 280, fat: 70 },
    meals: [
      {
        name: "Dinner",
        foods: [
          { fdcId: 173410, name: "Salmon" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  // MAINTENANCE (15–20)

  {
    id: "maintenance_2200",
    name: "Maintenance 2200 kcal",
    goal: "maintenance",
    calories: 2200,
    macros: { protein: 130, carbs: 250, fat: 60 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken" },
          { fdcId: 169910, name: "Rice" }
        ]
      }
    ]
  },

  {
    id: "maintenance_balanced",
    name: "Balanced Maintenance",
    goal: "maintenance",
    calories: 2300,
    macros: { protein: 140, carbs: 260, fat: 70 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          { fdcId: 1102649, name: "Oats" }
        ]
      }
    ]
  },

  {
    id: "maintenance_high_protein",
    name: "High Protein Maintenance",
    goal: "maintenance",
    calories: 2300,
    macros: { protein: 180, carbs: 200, fat: 70 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 171077, name: "Chicken" }
        ]
      }
    ]
  },

  {
    id: "maintenance_low_carb",
    name: "Low Carb Maintenance",
    goal: "maintenance",
    calories: 2200,
    macros: { protein: 150, carbs: 100, fat: 110 },
    meals: [
      {
        name: "Dinner",
        foods: [
          { fdcId: 173410, name: "Salmon" }
        ]
      }
    ]
  },

  {
    id: "maintenance_vegetarian",
    name: "Vegetarian Maintenance",
    goal: "maintenance",
    calories: 2200,
    macros: { protein: 120, carbs: 280, fat: 60 },
    meals: [
      {
        name: "Lunch",
        foods: [
          { fdcId: 173410, name: "Tofu" }
        ]
      }
    ]
  },

  {
    id: "maintenance_simple",
    name: "Simple Maintenance",
    goal: "maintenance",
    calories: 2100,
    macros: { protein: 120, carbs: 240, fat: 60 },
    meals: [
      {
        name: "Dinner",
        foods: [
          { fdcId: 170379, name: "Egg" }
        ]
      }
    ]
  }
];
