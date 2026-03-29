export const dietPlans = [
  // FAT LOSS (1–7)

  {
    id: "fat_loss_1800",
    name: "Fat Loss 1800 kcal",
    goal: "fat_loss",
    type: "Non-Vegetarian",
    calories: 1800,
    macros: { protein: 140, carbs: 180, fat: 50 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Oats",
            nutrition: { calories: 389, protein: 17, carbs: 66, fat: 7 },
          },
          {
            name: "Milk",
            nutrition: { calories: 61, protein: 3, carbs: 5, fat: 3 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Egg",
            nutrition: { calories: 155, protein: 13, carbs: 1, fat: 11 },
          },
          {
            name: "Broccoli",
            nutrition: { calories: 34, protein: 3, carbs: 7, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "fat_loss_high_protein",
    name: "High Protein Fat Loss",
    goal: "fat_loss",
    type: "Non-Vegetarian",
    calories: 2000,
    macros: { protein: 180, carbs: 150, fat: 60 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Egg",
            nutrition: { calories: 155, protein: 13, carbs: 1, fat: 11 },
          },
          {
            name: "Milk",
            nutrition: { calories: 61, protein: 3, carbs: 5, fat: 3 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "Broccoli",
            nutrition: { calories: 34, protein: 3, carbs: 7, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon",
            nutrition: { calories: 208, protein: 20, carbs: 0, fat: 13 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "fat_loss_low_carb",
    name: "Low Carb Fat Loss",
    goal: "fat_loss",
    type: "Non-Vegetarian",
    calories: 1800,
    macros: { protein: 150, carbs: 80, fat: 90 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Egg",
            nutrition: { calories: 155, protein: 13, carbs: 1, fat: 11 },
          },
          {
            name: "Salmon",
            nutrition: { calories: 208, protein: 20, carbs: 0, fat: 13 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "Broccoli",
            nutrition: { calories: 34, protein: 3, carbs: 7, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "fat_loss_vegetarian",
    name: "Vegetarian Fat Loss",
    goal: "fat_loss",
    type: "Vegetarian",
    calories: 1900,
    macros: { protein: 110, carbs: 220, fat: 50 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Oats",
            nutrition: { calories: 389, protein: 17, carbs: 66, fat: 7 },
          },
          {
            name: "Milk",
            nutrition: { calories: 61, protein: 3, carbs: 5, fat: 3 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Tofu",
            nutrition: { calories: 76, protein: 8, carbs: 2, fat: 4 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "fat_loss_intermittent",
    name: "Intermittent Fasting Plan",
    goal: "fat_loss",
    type: "Non-Vegetarian",
    calories: 1800,
    macros: { protein: 150, carbs: 170, fat: 60 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon",
            nutrition: { calories: 208, protein: 20, carbs: 0, fat: 13 },
          },
          {
            name: "Broccoli",
            nutrition: { calories: 34, protein: 3, carbs: 7, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "fat_loss_keto",
    name: "Keto Fat Loss",
    goal: "fat_loss",
    type: "Non-Vegetarian",
    calories: 2000,
    macros: { protein: 140, carbs: 30, fat: 140 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Egg",
            nutrition: { calories: 155, protein: 13, carbs: 1, fat: 11 },
          },
          {
            name: "Butter",
            nutrition: { calories: 717, protein: 1, carbs: 0, fat: 81 },
          },
        ],
      },
    ],
  },

  {
    id: "fat_loss_balanced",
    name: "Balanced Fat Loss",
    goal: "fat_loss",
    type: "Non-Vegetarian",
    calories: 2000,
    macros: { protein: 140, carbs: 200, fat: 60 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  // MUSCLE GAIN (8–14)

  {
    id: "muscle_gain_2500",
    name: "Muscle Gain 2500 kcal",
    goal: "muscle_gain",
    type: "Non-Vegetarian",
    calories: 2500,
    macros: { protein: 160, carbs: 300, fat: 70 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Oats",
            nutrition: { calories: 389, protein: 17, carbs: 66, fat: 7 },
          },
          {
            name: "Milk",
            nutrition: { calories: 61, protein: 3, carbs: 5, fat: 3 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "muscle_gain_high_carb",
    name: "High Carb Muscle Gain",
    goal: "muscle_gain",
    type: "Non-Vegetarian",
    calories: 2800,
    macros: { protein: 150, carbs: 350, fat: 70 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Oats",
            nutrition: { calories: 389, protein: 17, carbs: 66, fat: 7 },
          },
          {
            name: "Milk",
            nutrition: { calories: 61, protein: 3, carbs: 5, fat: 3 },
          },
        ],
      },
    ],
  },

  {
    id: "muscle_gain_high_protein",
    name: "High Protein Muscle Gain",
    goal: "muscle_gain",
    type: "Non-Vegetarian",
    calories: 2600,
    macros: { protein: 200, carbs: 250, fat: 70 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "Egg",
            nutrition: { calories: 155, protein: 13, carbs: 1, fat: 11 },
          },
        ],
      },
    ],
  },

  {
    id: "bulking_clean",
    name: "Clean Bulking",
    goal: "muscle_gain",
    type: "Non-Vegetarian",
    calories: 3000,
    macros: { protein: 180, carbs: 350, fat: 80 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "bulking_dirty",
    name: "Dirty Bulking",
    goal: "muscle_gain",
    type: "Vegetarian",
    calories: 3500,
    macros: { protein: 160, carbs: 400, fat: 120 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Cheese",
            nutrition: { calories: 402, protein: 25, carbs: 1, fat: 33 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "muscle_gain_vegetarian",
    name: "Vegetarian Muscle Gain",
    goal: "muscle_gain",
    type: "Vegan",
    calories: 2600,
    macros: { protein: 130, carbs: 300, fat: 70 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Tofu",
            nutrition: { calories: 76, protein: 8, carbs: 2, fat: 4 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "lean_bulk",
    name: "Lean Bulk",
    goal: "muscle_gain",
    type: "Non-Vegetarian",
    calories: 2700,
    macros: { protein: 170, carbs: 280, fat: 70 },
    meals: [
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon",
            nutrition: { calories: 208, protein: 20, carbs: 0, fat: 13 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  // MAINTENANCE (15–20)

  {
    id: "maintenance_2200",
    name: "Maintenance 2200 kcal",
    goal: "maintenance",
    type: "Non-Vegetarian",
    calories: 2200,
    macros: { protein: 130, carbs: 250, fat: 60 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "White Rice",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
    ],
  },

  {
    id: "maintenance_balanced",
    name: "Balanced Maintenance",
    goal: "maintenance",
    type: "Vegan",
    calories: 2300,
    macros: { protein: 140, carbs: 260, fat: 70 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Oats",
            nutrition: { calories: 389, protein: 17, carbs: 66, fat: 7 },
          },
        ],
      },
    ],
  },

  {
    id: "maintenance_high_protein",
    name: "High Protein Maintenance",
    goal: "maintenance",
    type: "Non-Vegetarian",
    calories: 2300,
    macros: { protein: 180, carbs: 200, fat: 70 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
        ],
      },
    ],
  },

  {
    id: "maintenance_low_carb",
    name: "Low Carb Maintenance",
    goal: "maintenance",
    type: "Non-Vegetarian",
    calories: 2200,
    macros: { protein: 150, carbs: 100, fat: 110 },
    meals: [
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon",
            nutrition: { calories: 208, protein: 20, carbs: 0, fat: 13 },
          },
        ],
      },
    ],
  },

  {
    id: "maintenance_vegetarian",
    name: "Vegetarian Maintenance",
    goal: "maintenance",
    type: "Vegan",
    calories: 2200,
    macros: { protein: 120, carbs: 280, fat: 60 },
    meals: [
      {
        name: "Lunch",
        foods: [
          {
            name: "Tofu",
            nutrition: { calories: 76, protein: 8, carbs: 2, fat: 4 },
          },
        ],
      },
    ],
  },

  {
    id: "maintenance_simple",
    name: "Simple Maintenance",
    goal: "maintenance",
    type: "Non-Vegetarian",
    calories: 2100,
    macros: { protein: 120, carbs: 240, fat: 60 },
    meals: [
      {
        name: "Dinner",
        foods: [
          {
            name: "Egg",
            nutrition: { calories: 155, protein: 13, carbs: 1, fat: 11 },
          },
        ],
      },
    ],
  },
];
