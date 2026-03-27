export interface DietFood {
  fdcId: number;
  name: string;
}

export interface DietFoodWithDetails extends DietFood {
  nutrition?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
}

export interface DietPlanResponse {
  id: string;
  name: string;
  goal: string;
  meals: {
    name: string;
    foods: DietFoodWithDetails[];
  }[];
}
