export const dietPlans = [
  // ─── FAT LOSS (1–7) ───────────────────────────────────────────────────────

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
            name: "Oats (80g)",
            nutrition: { calories: 303, protein: 10, carbs: 54, fat: 6 },
          },
          {
            name: "Whole Milk (200ml)",
            nutrition: { calories: 122, protein: 6, carbs: 10, fat: 7 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Boiled Eggs (2)",
            nutrition: { calories: 156, protein: 12, carbs: 1, fat: 10 },
          },
          {
            name: "Apple (1 medium)",
            nutrition: { calories: 72, protein: 0, carbs: 19, fat: 0 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (150g)",
            nutrition: { calories: 248, protein: 46, carbs: 0, fat: 5 },
          },
          {
            name: "White Rice (100g cooked)",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
          {
            name: "Broccoli (100g)",
            nutrition: { calories: 34, protein: 3, carbs: 7, fat: 0 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Greek Yogurt (150g)",
            nutrition: { calories: 88, protein: 15, carbs: 4, fat: 1 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon (120g)",
            nutrition: { calories: 250, protein: 24, carbs: 0, fat: 16 },
          },
          {
            name: "Sweet Potato (150g)",
            nutrition: { calories: 129, protein: 2, carbs: 30, fat: 0 },
          },
          {
            name: "Spinach (100g)",
            nutrition: { calories: 23, protein: 3, carbs: 4, fat: 0 },
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
            name: "Egg Whites (5)",
            nutrition: { calories: 85, protein: 18, carbs: 1, fat: 0 },
          },
          {
            name: "Whole Eggs (2)",
            nutrition: { calories: 156, protein: 12, carbs: 1, fat: 10 },
          },
          {
            name: "Oats (60g)",
            nutrition: { calories: 227, protein: 8, carbs: 39, fat: 4 },
          },
          {
            name: "Blueberries (80g)",
            nutrition: { calories: 46, protein: 1, carbs: 11, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Cottage Cheese (200g)",
            nutrition: { calories: 180, protein: 24, carbs: 6, fat: 5 },
          },
          {
            name: "Almonds (20g)",
            nutrition: { calories: 116, protein: 4, carbs: 2, fat: 10 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (200g)",
            nutrition: { calories: 330, protein: 62, carbs: 0, fat: 7 },
          },
          {
            name: "Brown Rice (100g cooked)",
            nutrition: { calories: 112, protein: 2, carbs: 24, fat: 1 },
          },
          {
            name: "Mixed Vegetables (150g)",
            nutrition: { calories: 65, protein: 3, carbs: 13, fat: 0 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Whey Protein Shake (1 scoop)",
            nutrition: { calories: 120, protein: 24, carbs: 3, fat: 2 },
          },
          {
            name: "Rice Cakes (2)",
            nutrition: { calories: 70, protein: 1, carbs: 15, fat: 1 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon (150g)",
            nutrition: { calories: 312, protein: 30, carbs: 0, fat: 20 },
          },
          {
            name: "Quinoa (80g cooked)",
            nutrition: { calories: 111, protein: 4, carbs: 20, fat: 2 },
          },
          {
            name: "Asparagus (100g)",
            nutrition: { calories: 20, protein: 2, carbs: 4, fat: 0 },
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
            name: "Whole Eggs (3)",
            nutrition: { calories: 234, protein: 18, carbs: 2, fat: 16 },
          },
          {
            name: "Bacon (3 strips)",
            nutrition: { calories: 135, protein: 9, carbs: 0, fat: 11 },
          },
          {
            name: "Avocado (half)",
            nutrition: { calories: 120, protein: 1, carbs: 6, fat: 11 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Almonds (30g)",
            nutrition: { calories: 174, protein: 6, carbs: 3, fat: 15 },
          },
          {
            name: "String Cheese (1 piece)",
            nutrition: { calories: 80, protein: 7, carbs: 1, fat: 5 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (180g)",
            nutrition: { calories: 297, protein: 56, carbs: 0, fat: 6 },
          },
          {
            name: "Broccoli (150g)",
            nutrition: { calories: 51, protein: 4, carbs: 10, fat: 0 },
          },
          {
            name: "Olive Oil (1 tbsp)",
            nutrition: { calories: 119, protein: 0, carbs: 0, fat: 14 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Greek Yogurt Full Fat (150g)",
            nutrition: { calories: 150, protein: 9, carbs: 5, fat: 11 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon (150g)",
            nutrition: { calories: 312, protein: 30, carbs: 0, fat: 20 },
          },
          {
            name: "Zucchini (150g)",
            nutrition: { calories: 26, protein: 2, carbs: 5, fat: 0 },
          },
          {
            name: "Butter (1 tsp)",
            nutrition: { calories: 34, protein: 0, carbs: 0, fat: 4 },
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
            name: "Oats (80g)",
            nutrition: { calories: 303, protein: 10, carbs: 54, fat: 6 },
          },
          {
            name: "Skimmed Milk (200ml)",
            nutrition: { calories: 70, protein: 7, carbs: 10, fat: 1 },
          },
          {
            name: "Strawberries (100g)",
            nutrition: { calories: 32, protein: 1, carbs: 8, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Greek Yogurt (150g)",
            nutrition: { calories: 88, protein: 15, carbs: 4, fat: 1 },
          },
          {
            name: "Walnuts (15g)",
            nutrition: { calories: 98, protein: 2, carbs: 2, fat: 10 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Paneer (100g)",
            nutrition: { calories: 265, protein: 18, carbs: 3, fat: 20 },
          },
          {
            name: "Brown Rice (100g cooked)",
            nutrition: { calories: 112, protein: 2, carbs: 24, fat: 1 },
          },
          {
            name: "Spinach (100g)",
            nutrition: { calories: 23, protein: 3, carbs: 4, fat: 0 },
          },
          {
            name: "Tomato (1 medium)",
            nutrition: { calories: 18, protein: 1, carbs: 4, fat: 0 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Apple (1 medium)",
            nutrition: { calories: 72, protein: 0, carbs: 19, fat: 0 },
          },
          {
            name: "Peanut Butter (1 tbsp)",
            nutrition: { calories: 94, protein: 4, carbs: 3, fat: 8 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Tofu (150g)",
            nutrition: { calories: 114, protein: 12, carbs: 3, fat: 6 },
          },
          {
            name: "Lentils (100g cooked)",
            nutrition: { calories: 116, protein: 9, carbs: 20, fat: 0 },
          },
          {
            name: "Mixed Vegetables (150g)",
            nutrition: { calories: 65, protein: 3, carbs: 13, fat: 0 },
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
        name: "First Meal (12pm)",
        foods: [
          {
            name: "Chicken Breast (200g)",
            nutrition: { calories: 330, protein: 62, carbs: 0, fat: 7 },
          },
          {
            name: "White Rice (120g cooked)",
            nutrition: { calories: 156, protein: 3, carbs: 34, fat: 0 },
          },
          {
            name: "Broccoli (150g)",
            nutrition: { calories: 51, protein: 4, carbs: 10, fat: 0 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
          },
        ],
      },
      {
        name: "Afternoon Snack (3pm)",
        foods: [
          {
            name: "Greek Yogurt (200g)",
            nutrition: { calories: 117, protein: 20, carbs: 5, fat: 1 },
          },
          {
            name: "Mixed Berries (100g)",
            nutrition: { calories: 57, protein: 1, carbs: 14, fat: 0 },
          },
          {
            name: "Almonds (20g)",
            nutrition: { calories: 116, protein: 4, carbs: 2, fat: 10 },
          },
        ],
      },
      {
        name: "Dinner (7pm)",
        foods: [
          {
            name: "Salmon (150g)",
            nutrition: { calories: 312, protein: 30, carbs: 0, fat: 20 },
          },
          {
            name: "Sweet Potato (150g)",
            nutrition: { calories: 129, protein: 2, carbs: 30, fat: 0 },
          },
          {
            name: "Asparagus (100g)",
            nutrition: { calories: 20, protein: 2, carbs: 4, fat: 0 },
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
            name: "Whole Eggs (3)",
            nutrition: { calories: 234, protein: 18, carbs: 2, fat: 16 },
          },
          {
            name: "Bacon (3 strips)",
            nutrition: { calories: 135, protein: 9, carbs: 0, fat: 11 },
          },
          {
            name: "Avocado (half)",
            nutrition: { calories: 120, protein: 1, carbs: 6, fat: 11 },
          },
          {
            name: "Butter (1 tsp)",
            nutrition: { calories: 34, protein: 0, carbs: 0, fat: 4 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Almonds (30g)",
            nutrition: { calories: 174, protein: 6, carbs: 3, fat: 15 },
          },
          {
            name: "Cheddar Cheese (30g)",
            nutrition: { calories: 121, protein: 7, carbs: 0, fat: 10 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Ground Beef 80/20 (150g)",
            nutrition: { calories: 340, protein: 26, carbs: 0, fat: 26 },
          },
          {
            name: "Cauliflower Rice (150g)",
            nutrition: { calories: 38, protein: 3, carbs: 7, fat: 0 },
          },
          {
            name: "Olive Oil (1 tbsp)",
            nutrition: { calories: 119, protein: 0, carbs: 0, fat: 14 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Macadamia Nuts (30g)",
            nutrition: { calories: 204, protein: 2, carbs: 4, fat: 21 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon (150g)",
            nutrition: { calories: 312, protein: 30, carbs: 0, fat: 20 },
          },
          {
            name: "Sauteed Spinach (100g)",
            nutrition: { calories: 23, protein: 3, carbs: 4, fat: 0 },
          },
          {
            name: "Butter (1 tbsp)",
            nutrition: { calories: 102, protein: 0, carbs: 0, fat: 12 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Oats (80g)",
            nutrition: { calories: 303, protein: 10, carbs: 54, fat: 6 },
          },
          {
            name: "Whole Eggs (2)",
            nutrition: { calories: 156, protein: 12, carbs: 1, fat: 10 },
          },
          {
            name: "Orange (1 medium)",
            nutrition: { calories: 62, protein: 1, carbs: 15, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Greek Yogurt (150g)",
            nutrition: { calories: 88, protein: 15, carbs: 4, fat: 1 },
          },
          {
            name: "Banana (1 small)",
            nutrition: { calories: 72, protein: 1, carbs: 19, fat: 0 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (180g)",
            nutrition: { calories: 297, protein: 56, carbs: 0, fat: 6 },
          },
          {
            name: "White Rice (100g cooked)",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
          {
            name: "Mixed Salad (100g)",
            nutrition: { calories: 20, protein: 1, carbs: 4, fat: 0 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Almonds (25g)",
            nutrition: { calories: 145, protein: 5, carbs: 3, fat: 13 },
          },
          {
            name: "Apple (1 medium)",
            nutrition: { calories: 72, protein: 0, carbs: 19, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Tuna (150g)",
            nutrition: { calories: 180, protein: 40, carbs: 0, fat: 2 },
          },
          {
            name: "Sweet Potato (130g)",
            nutrition: { calories: 112, protein: 2, carbs: 26, fat: 0 },
          },
          {
            name: "Green Beans (100g)",
            nutrition: { calories: 31, protein: 2, carbs: 7, fat: 0 },
          },
        ],
      },
    ],
  },

  // ─── MUSCLE GAIN (8–14) ───────────────────────────────────────────────────

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
            name: "Oats (100g)",
            nutrition: { calories: 379, protein: 13, carbs: 68, fat: 7 },
          },
          {
            name: "Whole Milk (300ml)",
            nutrition: { calories: 183, protein: 9, carbs: 14, fat: 10 },
          },
          {
            name: "Banana (1 large)",
            nutrition: { calories: 105, protein: 1, carbs: 27, fat: 0 },
          },
          {
            name: "Whole Eggs (2)",
            nutrition: { calories: 156, protein: 12, carbs: 1, fat: 10 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Whey Protein Shake (1 scoop)",
            nutrition: { calories: 120, protein: 24, carbs: 3, fat: 2 },
          },
          {
            name: "Rice Cakes (3)",
            nutrition: { calories: 105, protein: 2, carbs: 23, fat: 1 },
          },
          {
            name: "Peanut Butter (1 tbsp)",
            nutrition: { calories: 94, protein: 4, carbs: 3, fat: 8 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (200g)",
            nutrition: { calories: 330, protein: 62, carbs: 0, fat: 7 },
          },
          {
            name: "White Rice (150g cooked)",
            nutrition: { calories: 195, protein: 4, carbs: 43, fat: 0 },
          },
          {
            name: "Broccoli (150g)",
            nutrition: { calories: 51, protein: 4, carbs: 10, fat: 0 },
          },
          {
            name: "Olive Oil (1 tbsp)",
            nutrition: { calories: 119, protein: 0, carbs: 0, fat: 14 },
          },
        ],
      },
      {
        name: "Pre-Workout Snack",
        foods: [
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
          {
            name: "Greek Yogurt (100g)",
            nutrition: { calories: 59, protein: 10, carbs: 3, fat: 1 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon (150g)",
            nutrition: { calories: 312, protein: 30, carbs: 0, fat: 20 },
          },
          {
            name: "Sweet Potato (200g)",
            nutrition: { calories: 172, protein: 3, carbs: 40, fat: 0 },
          },
          {
            name: "Spinach (100g)",
            nutrition: { calories: 23, protein: 3, carbs: 4, fat: 0 },
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
            name: "Oats (120g)",
            nutrition: { calories: 454, protein: 15, carbs: 81, fat: 8 },
          },
          {
            name: "Whole Milk (300ml)",
            nutrition: { calories: 183, protein: 9, carbs: 14, fat: 10 },
          },
          {
            name: "Banana (1 large)",
            nutrition: { calories: 105, protein: 1, carbs: 27, fat: 0 },
          },
          {
            name: "Honey (1 tbsp)",
            nutrition: { calories: 64, protein: 0, carbs: 17, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Whole Wheat Bread (2 slices)",
            nutrition: { calories: 160, protein: 6, carbs: 30, fat: 2 },
          },
          {
            name: "Peanut Butter (2 tbsp)",
            nutrition: { calories: 188, protein: 8, carbs: 6, fat: 16 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (180g)",
            nutrition: { calories: 297, protein: 56, carbs: 0, fat: 6 },
          },
          {
            name: "White Rice (200g cooked)",
            nutrition: { calories: 260, protein: 5, carbs: 57, fat: 0 },
          },
          {
            name: "Corn (100g)",
            nutrition: { calories: 86, protein: 3, carbs: 19, fat: 1 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
          },
        ],
      },
      {
        name: "Post-Workout",
        foods: [
          {
            name: "Whey Protein Shake (1 scoop)",
            nutrition: { calories: 120, protein: 24, carbs: 3, fat: 2 },
          },
          {
            name: "White Rice (100g cooked)",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Ground Beef 90/10 (150g)",
            nutrition: { calories: 218, protein: 30, carbs: 0, fat: 11 },
          },
          {
            name: "Pasta (100g cooked)",
            nutrition: { calories: 131, protein: 5, carbs: 25, fat: 1 },
          },
          {
            name: "Tomato Sauce (100g)",
            nutrition: { calories: 29, protein: 1, carbs: 7, fat: 0 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Whole Eggs (3)",
            nutrition: { calories: 234, protein: 18, carbs: 2, fat: 16 },
          },
          {
            name: "Egg Whites (4)",
            nutrition: { calories: 68, protein: 14, carbs: 1, fat: 0 },
          },
          {
            name: "Oats (80g)",
            nutrition: { calories: 303, protein: 10, carbs: 54, fat: 6 },
          },
          {
            name: "Whole Milk (200ml)",
            nutrition: { calories: 122, protein: 6, carbs: 10, fat: 7 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Cottage Cheese (250g)",
            nutrition: { calories: 225, protein: 30, carbs: 7, fat: 6 },
          },
          {
            name: "Rice Cakes (2)",
            nutrition: { calories: 70, protein: 1, carbs: 15, fat: 1 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (250g)",
            nutrition: { calories: 413, protein: 77, carbs: 0, fat: 9 },
          },
          {
            name: "Brown Rice (150g cooked)",
            nutrition: { calories: 168, protein: 4, carbs: 35, fat: 1 },
          },
          {
            name: "Mixed Vegetables (150g)",
            nutrition: { calories: 65, protein: 3, carbs: 13, fat: 0 },
          },
        ],
      },
      {
        name: "Post-Workout",
        foods: [
          {
            name: "Whey Protein Shake (2 scoops)",
            nutrition: { calories: 240, protein: 48, carbs: 6, fat: 4 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Tuna (200g)",
            nutrition: { calories: 240, protein: 53, carbs: 0, fat: 2 },
          },
          {
            name: "Sweet Potato (150g)",
            nutrition: { calories: 129, protein: 2, carbs: 30, fat: 0 },
          },
          {
            name: "Broccoli (150g)",
            nutrition: { calories: 51, protein: 4, carbs: 10, fat: 0 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Oats (120g)",
            nutrition: { calories: 454, protein: 15, carbs: 81, fat: 8 },
          },
          {
            name: "Whole Milk (300ml)",
            nutrition: { calories: 183, protein: 9, carbs: 14, fat: 10 },
          },
          {
            name: "Whole Eggs (3)",
            nutrition: { calories: 234, protein: 18, carbs: 2, fat: 16 },
          },
          {
            name: "Banana (1 large)",
            nutrition: { calories: 105, protein: 1, carbs: 27, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Whole Wheat Bread (2 slices)",
            nutrition: { calories: 160, protein: 6, carbs: 30, fat: 2 },
          },
          {
            name: "Chicken Breast (100g)",
            nutrition: { calories: 165, protein: 31, carbs: 0, fat: 4 },
          },
          {
            name: "Avocado (half)",
            nutrition: { calories: 120, protein: 1, carbs: 6, fat: 11 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (200g)",
            nutrition: { calories: 330, protein: 62, carbs: 0, fat: 7 },
          },
          {
            name: "White Rice (200g cooked)",
            nutrition: { calories: 260, protein: 5, carbs: 57, fat: 0 },
          },
          {
            name: "Broccoli (150g)",
            nutrition: { calories: 51, protein: 4, carbs: 10, fat: 0 },
          },
          {
            name: "Olive Oil (1 tbsp)",
            nutrition: { calories: 119, protein: 0, carbs: 0, fat: 14 },
          },
        ],
      },
      {
        name: "Post-Workout",
        foods: [
          {
            name: "Whey Protein Shake (1 scoop)",
            nutrition: { calories: 120, protein: 24, carbs: 3, fat: 2 },
          },
          {
            name: "White Rice (100g cooked)",
            nutrition: { calories: 130, protein: 3, carbs: 28, fat: 0 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon (180g)",
            nutrition: { calories: 374, protein: 36, carbs: 0, fat: 24 },
          },
          {
            name: "Sweet Potato (200g)",
            nutrition: { calories: 172, protein: 3, carbs: 40, fat: 0 },
          },
          {
            name: "Spinach (100g)",
            nutrition: { calories: 23, protein: 3, carbs: 4, fat: 0 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Oats (150g)",
            nutrition: { calories: 568, protein: 19, carbs: 101, fat: 11 },
          },
          {
            name: "Whole Milk (400ml)",
            nutrition: { calories: 244, protein: 12, carbs: 19, fat: 14 },
          },
          {
            name: "Peanut Butter (2 tbsp)",
            nutrition: { calories: 188, protein: 8, carbs: 6, fat: 16 },
          },
          {
            name: "Banana (1 large)",
            nutrition: { calories: 105, protein: 1, carbs: 27, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Whole Wheat Bread (3 slices)",
            nutrition: { calories: 240, protein: 9, carbs: 45, fat: 3 },
          },
          {
            name: "Cheese (60g)",
            nutrition: { calories: 242, protein: 14, carbs: 2, fat: 20 },
          },
          {
            name: "Peanut Butter (2 tbsp)",
            nutrition: { calories: 188, protein: 8, carbs: 6, fat: 16 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Paneer (150g)",
            nutrition: { calories: 398, protein: 27, carbs: 5, fat: 30 },
          },
          {
            name: "White Rice (200g cooked)",
            nutrition: { calories: 260, protein: 5, carbs: 57, fat: 0 },
          },
          {
            name: "Butter (1 tbsp)",
            nutrition: { calories: 102, protein: 0, carbs: 0, fat: 12 },
          },
        ],
      },
      {
        name: "Post-Workout",
        foods: [
          {
            name: "Whole Milk (500ml)",
            nutrition: { calories: 305, protein: 16, carbs: 24, fat: 18 },
          },
          {
            name: "Banana (2 medium)",
            nutrition: { calories: 178, protein: 2, carbs: 46, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Pasta (150g cooked)",
            nutrition: { calories: 197, protein: 7, carbs: 38, fat: 1 },
          },
          {
            name: "Cheese Sauce (100g)",
            nutrition: { calories: 180, protein: 8, carbs: 10, fat: 13 },
          },
          {
            name: "Mixed Vegetables (100g)",
            nutrition: { calories: 43, protein: 2, carbs: 9, fat: 0 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Oats (100g)",
            nutrition: { calories: 379, protein: 13, carbs: 68, fat: 7 },
          },
          {
            name: "Soy Milk (300ml)",
            nutrition: { calories: 120, protein: 10, carbs: 12, fat: 4 },
          },
          {
            name: "Banana (1 large)",
            nutrition: { calories: 105, protein: 1, carbs: 27, fat: 0 },
          },
          {
            name: "Chia Seeds (15g)",
            nutrition: { calories: 73, protein: 2, carbs: 6, fat: 5 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Pea Protein Shake (1 scoop)",
            nutrition: { calories: 120, protein: 24, carbs: 3, fat: 2 },
          },
          {
            name: "Almonds (30g)",
            nutrition: { calories: 174, protein: 6, carbs: 3, fat: 15 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Tofu (200g)",
            nutrition: { calories: 152, protein: 16, carbs: 4, fat: 8 },
          },
          {
            name: "Brown Rice (150g cooked)",
            nutrition: { calories: 168, protein: 4, carbs: 35, fat: 1 },
          },
          {
            name: "Edamame (100g)",
            nutrition: { calories: 121, protein: 11, carbs: 10, fat: 5 },
          },
          {
            name: "Sesame Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
          },
        ],
      },
      {
        name: "Post-Workout",
        foods: [
          {
            name: "Pea Protein Shake (1 scoop)",
            nutrition: { calories: 120, protein: 24, carbs: 3, fat: 2 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
          {
            name: "Dates (3)",
            nutrition: { calories: 60, protein: 0, carbs: 16, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Chickpeas (150g cooked)",
            nutrition: { calories: 246, protein: 13, carbs: 41, fat: 4 },
          },
          {
            name: "Quinoa (100g cooked)",
            nutrition: { calories: 120, protein: 4, carbs: 21, fat: 2 },
          },
          {
            name: "Roasted Vegetables (150g)",
            nutrition: { calories: 75, protein: 2, carbs: 15, fat: 1 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Oats (100g)",
            nutrition: { calories: 379, protein: 13, carbs: 68, fat: 7 },
          },
          {
            name: "Whole Eggs (3)",
            nutrition: { calories: 234, protein: 18, carbs: 2, fat: 16 },
          },
          {
            name: "Whole Milk (200ml)",
            nutrition: { calories: 122, protein: 6, carbs: 10, fat: 7 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Greek Yogurt (200g)",
            nutrition: { calories: 117, protein: 20, carbs: 5, fat: 1 },
          },
          {
            name: "Walnuts (20g)",
            nutrition: { calories: 131, protein: 3, carbs: 3, fat: 13 },
          },
          {
            name: "Apple (1 medium)",
            nutrition: { calories: 72, protein: 0, carbs: 19, fat: 0 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (200g)",
            nutrition: { calories: 330, protein: 62, carbs: 0, fat: 7 },
          },
          {
            name: "White Rice (150g cooked)",
            nutrition: { calories: 195, protein: 4, carbs: 43, fat: 0 },
          },
          {
            name: "Avocado (half)",
            nutrition: { calories: 120, protein: 1, carbs: 6, fat: 11 },
          },
          {
            name: "Mixed Salad (100g)",
            nutrition: { calories: 20, protein: 1, carbs: 4, fat: 0 },
          },
        ],
      },
      {
        name: "Post-Workout",
        foods: [
          {
            name: "Whey Protein Shake (1 scoop)",
            nutrition: { calories: 120, protein: 24, carbs: 3, fat: 2 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon (180g)",
            nutrition: { calories: 374, protein: 36, carbs: 0, fat: 24 },
          },
          {
            name: "Sweet Potato (150g)",
            nutrition: { calories: 129, protein: 2, carbs: 30, fat: 0 },
          },
          {
            name: "Green Beans (100g)",
            nutrition: { calories: 31, protein: 2, carbs: 7, fat: 0 },
          },
        ],
      },
    ],
  },

  // ─── MAINTENANCE (15–20) ─────────────────────────────────────────────────

  {
    id: "maintenance_2200",
    name: "Maintenance 2200 kcal",
    goal: "maintenance",
    type: "Non-Vegetarian",
    calories: 2200,
    macros: { protein: 130, carbs: 250, fat: 60 },
    meals: [
      {
        name: "Breakfast",
        foods: [
          {
            name: "Oats (80g)",
            nutrition: { calories: 303, protein: 10, carbs: 54, fat: 6 },
          },
          {
            name: "Whole Milk (200ml)",
            nutrition: { calories: 122, protein: 6, carbs: 10, fat: 7 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Greek Yogurt (150g)",
            nutrition: { calories: 88, protein: 15, carbs: 4, fat: 1 },
          },
          {
            name: "Almonds (20g)",
            nutrition: { calories: 116, protein: 4, carbs: 2, fat: 10 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (180g)",
            nutrition: { calories: 297, protein: 56, carbs: 0, fat: 6 },
          },
          {
            name: "White Rice (120g cooked)",
            nutrition: { calories: 156, protein: 3, carbs: 34, fat: 0 },
          },
          {
            name: "Mixed Vegetables (150g)",
            nutrition: { calories: 65, protein: 3, carbs: 13, fat: 0 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Apple (1 medium)",
            nutrition: { calories: 72, protein: 0, carbs: 19, fat: 0 },
          },
          {
            name: "Peanut Butter (1 tbsp)",
            nutrition: { calories: 94, protein: 4, carbs: 3, fat: 8 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Tuna (150g)",
            nutrition: { calories: 180, protein: 40, carbs: 0, fat: 2 },
          },
          {
            name: "Pasta (100g cooked)",
            nutrition: { calories: 131, protein: 5, carbs: 25, fat: 1 },
          },
          {
            name: "Tomato Sauce (100g)",
            nutrition: { calories: 29, protein: 1, carbs: 7, fat: 0 },
          },
          {
            name: "Parmesan (15g)",
            nutrition: { calories: 57, protein: 5, carbs: 0, fat: 4 },
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
            name: "Oats (100g)",
            nutrition: { calories: 379, protein: 13, carbs: 68, fat: 7 },
          },
          {
            name: "Soy Milk (250ml)",
            nutrition: { calories: 100, protein: 8, carbs: 10, fat: 4 },
          },
          {
            name: "Mixed Berries (100g)",
            nutrition: { calories: 57, protein: 1, carbs: 14, fat: 0 },
          },
          {
            name: "Flaxseeds (15g)",
            nutrition: { calories: 81, protein: 3, carbs: 4, fat: 6 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Pea Protein Shake (1 scoop)",
            nutrition: { calories: 120, protein: 24, carbs: 3, fat: 2 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Tempeh (150g)",
            nutrition: { calories: 297, protein: 30, carbs: 16, fat: 16 },
          },
          {
            name: "Brown Rice (150g cooked)",
            nutrition: { calories: 168, protein: 4, carbs: 35, fat: 1 },
          },
          {
            name: "Kale (100g)",
            nutrition: { calories: 49, protein: 4, carbs: 9, fat: 1 },
          },
          {
            name: "Tahini (1 tbsp)",
            nutrition: { calories: 89, protein: 3, carbs: 3, fat: 8 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Almonds (30g)",
            nutrition: { calories: 174, protein: 6, carbs: 3, fat: 15 },
          },
          {
            name: "Orange (1 medium)",
            nutrition: { calories: 62, protein: 1, carbs: 15, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Lentils (150g cooked)",
            nutrition: { calories: 174, protein: 14, carbs: 30, fat: 1 },
          },
          {
            name: "Quinoa (100g cooked)",
            nutrition: { calories: 120, protein: 4, carbs: 21, fat: 2 },
          },
          {
            name: "Roasted Vegetables (150g)",
            nutrition: { calories: 75, protein: 2, carbs: 15, fat: 1 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Whole Eggs (3)",
            nutrition: { calories: 234, protein: 18, carbs: 2, fat: 16 },
          },
          {
            name: "Egg Whites (3)",
            nutrition: { calories: 51, protein: 11, carbs: 1, fat: 0 },
          },
          {
            name: "Oats (60g)",
            nutrition: { calories: 227, protein: 8, carbs: 39, fat: 4 },
          },
          {
            name: "Orange (1 medium)",
            nutrition: { calories: 62, protein: 1, carbs: 15, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Cottage Cheese (200g)",
            nutrition: { calories: 180, protein: 24, carbs: 6, fat: 5 },
          },
          {
            name: "Rice Cakes (2)",
            nutrition: { calories: 70, protein: 1, carbs: 15, fat: 1 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Chicken Breast (200g)",
            nutrition: { calories: 330, protein: 62, carbs: 0, fat: 7 },
          },
          {
            name: "Sweet Potato (150g)",
            nutrition: { calories: 129, protein: 2, carbs: 30, fat: 0 },
          },
          {
            name: "Broccoli (150g)",
            nutrition: { calories: 51, protein: 4, carbs: 10, fat: 0 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Greek Yogurt (200g)",
            nutrition: { calories: 117, protein: 20, carbs: 5, fat: 1 },
          },
          {
            name: "Almonds (20g)",
            nutrition: { calories: 116, protein: 4, carbs: 2, fat: 10 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Salmon (150g)",
            nutrition: { calories: 312, protein: 30, carbs: 0, fat: 20 },
          },
          {
            name: "Brown Rice (100g cooked)",
            nutrition: { calories: 112, protein: 2, carbs: 24, fat: 1 },
          },
          {
            name: "Spinach (100g)",
            nutrition: { calories: 23, protein: 3, carbs: 4, fat: 0 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Whole Eggs (3)",
            nutrition: { calories: 234, protein: 18, carbs: 2, fat: 16 },
          },
          {
            name: "Avocado (1 whole)",
            nutrition: { calories: 240, protein: 3, carbs: 13, fat: 22 },
          },
          {
            name: "Turkey Bacon (3 strips)",
            nutrition: { calories: 105, protein: 12, carbs: 0, fat: 6 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Almonds (30g)",
            nutrition: { calories: 174, protein: 6, carbs: 3, fat: 15 },
          },
          {
            name: "Cheddar Cheese (30g)",
            nutrition: { calories: 121, protein: 7, carbs: 0, fat: 10 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Salmon (150g)",
            nutrition: { calories: 312, protein: 30, carbs: 0, fat: 20 },
          },
          {
            name: "Cauliflower Rice (150g)",
            nutrition: { calories: 38, protein: 3, carbs: 7, fat: 0 },
          },
          {
            name: "Olive Oil (1 tbsp)",
            nutrition: { calories: 119, protein: 0, carbs: 0, fat: 14 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Greek Yogurt Full Fat (150g)",
            nutrition: { calories: 150, protein: 9, carbs: 5, fat: 11 },
          },
          {
            name: "Walnuts (20g)",
            nutrition: { calories: 131, protein: 3, carbs: 3, fat: 13 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Chicken Breast (180g)",
            nutrition: { calories: 297, protein: 56, carbs: 0, fat: 6 },
          },
          {
            name: "Zucchini (150g)",
            nutrition: { calories: 26, protein: 2, carbs: 5, fat: 0 },
          },
          {
            name: "Bell Pepper (100g)",
            nutrition: { calories: 31, protein: 1, carbs: 7, fat: 0 },
          },
          {
            name: "Olive Oil (1 tbsp)",
            nutrition: { calories: 119, protein: 0, carbs: 0, fat: 14 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Oats (80g)",
            nutrition: { calories: 303, protein: 10, carbs: 54, fat: 6 },
          },
          {
            name: "Soy Milk (250ml)",
            nutrition: { calories: 100, protein: 8, carbs: 10, fat: 4 },
          },
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Mixed Nuts (30g)",
            nutrition: { calories: 180, protein: 5, carbs: 6, fat: 16 },
          },
          {
            name: "Apple (1 medium)",
            nutrition: { calories: 72, protein: 0, carbs: 19, fat: 0 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Tofu (150g)",
            nutrition: { calories: 114, protein: 12, carbs: 3, fat: 6 },
          },
          {
            name: "Brown Rice (150g cooked)",
            nutrition: { calories: 168, protein: 4, carbs: 35, fat: 1 },
          },
          {
            name: "Edamame (100g)",
            nutrition: { calories: 121, protein: 11, carbs: 10, fat: 5 },
          },
          {
            name: "Soy Sauce (1 tbsp)",
            nutrition: { calories: 10, protein: 1, carbs: 1, fat: 0 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Hummus (100g)",
            nutrition: { calories: 166, protein: 8, carbs: 14, fat: 10 },
          },
          {
            name: "Whole Wheat Pita (1)",
            nutrition: { calories: 170, protein: 6, carbs: 35, fat: 1 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Black Beans (150g cooked)",
            nutrition: { calories: 227, protein: 15, carbs: 41, fat: 1 },
          },
          {
            name: "Quinoa (100g cooked)",
            nutrition: { calories: 120, protein: 4, carbs: 21, fat: 2 },
          },
          {
            name: "Roasted Sweet Potato (150g)",
            nutrition: { calories: 129, protein: 2, carbs: 30, fat: 0 },
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
        name: "Breakfast",
        foods: [
          {
            name: "Whole Eggs (2)",
            nutrition: { calories: 156, protein: 12, carbs: 1, fat: 10 },
          },
          {
            name: "Whole Wheat Bread (2 slices)",
            nutrition: { calories: 160, protein: 6, carbs: 30, fat: 2 },
          },
          {
            name: "Orange Juice (200ml)",
            nutrition: { calories: 88, protein: 1, carbs: 21, fat: 0 },
          },
        ],
      },
      {
        name: "Mid-Morning Snack",
        foods: [
          {
            name: "Banana (1 medium)",
            nutrition: { calories: 89, protein: 1, carbs: 23, fat: 0 },
          },
          {
            name: "Peanut Butter (1 tbsp)",
            nutrition: { calories: 94, protein: 4, carbs: 3, fat: 8 },
          },
        ],
      },
      {
        name: "Lunch",
        foods: [
          {
            name: "Tuna (150g)",
            nutrition: { calories: 180, protein: 40, carbs: 0, fat: 2 },
          },
          {
            name: "White Rice (120g cooked)",
            nutrition: { calories: 156, protein: 3, carbs: 34, fat: 0 },
          },
          {
            name: "Mixed Salad (100g)",
            nutrition: { calories: 20, protein: 1, carbs: 4, fat: 0 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
          },
        ],
      },
      {
        name: "Evening Snack",
        foods: [
          {
            name: "Greek Yogurt (150g)",
            nutrition: { calories: 88, protein: 15, carbs: 4, fat: 1 },
          },
          {
            name: "Mixed Berries (80g)",
            nutrition: { calories: 46, protein: 1, carbs: 11, fat: 0 },
          },
        ],
      },
      {
        name: "Dinner",
        foods: [
          {
            name: "Whole Eggs (2)",
            nutrition: { calories: 156, protein: 12, carbs: 1, fat: 10 },
          },
          {
            name: "Boiled Potatoes (200g)",
            nutrition: { calories: 154, protein: 4, carbs: 36, fat: 0 },
          },
          {
            name: "Green Beans (100g)",
            nutrition: { calories: 31, protein: 2, carbs: 7, fat: 0 },
          },
          {
            name: "Olive Oil (1 tsp)",
            nutrition: { calories: 40, protein: 0, carbs: 0, fat: 5 },
          },
        ],
      },
    ],
  },
];
