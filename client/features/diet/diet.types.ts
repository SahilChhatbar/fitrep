export type DietType = 'Vegetarian' | 'Non-Vegetarian' | 'Vegan'
export type DietGoal = 'fat_loss' | 'muscle_gain' | 'maintenance'

export interface FoodNutrition {
  calories?: number
  protein?: number
  carbs?: number
  fat?: number
}

export interface Food {
  name: string
  nutrition?: FoodNutrition
}

export interface Meal {
  name: string
  foods: Food[]
}

export interface Diet {
  id: string
  name: string
  goal: DietGoal
  type: DietType
  calories: number
  macros: {
    protein: number
    carbs: number
    fat: number
  }
  meals: Meal[]
  createdAt: string // ISO string from backend
  updatedAt: string
}

export interface GetDietsParams {
  page?: number
  limit?: number
  goal?: DietGoal
  type?: DietType
}

export interface GetDietsResponse {
  data: Diet[]
  meta?: {
    page: number
    limit: number
    total?: number
    totalPages?: number
  }
}
