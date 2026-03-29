import axios from "axios";

const USDA_BASE_URL = "https://api.nal.usda.gov/fdc/v1";
const API_KEY = process.env.USDA_API_KEY!;

export interface Nutrition {
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}

export const fetchFoodsByIds = async (
  ids: number[]
): Promise<Record<number, Nutrition>> => {
  try {
    const uniqueIds = [...new Set(ids)];

    const responses = await Promise.all(
      uniqueIds.map((id) =>
        axios.get(`${USDA_BASE_URL}/food/${id}`, {
          params: { api_key: API_KEY },
          timeout: 5000,
        })
      )
    );

    const result: Record<number, Nutrition> = {};

    responses.forEach((res) => {
      const food = res.data;

      result[food.fdcId] = {
        calories: food.labelNutrients?.calories?.value,
        protein: food.labelNutrients?.protein?.value,
        carbs: food.labelNutrients?.carbohydrates?.value,
        fat: food.labelNutrients?.fat?.value,
      };
    });

    return result;
  } catch (error) {
    console.error("USDA fetch error:", error);
    return {};
  }
};