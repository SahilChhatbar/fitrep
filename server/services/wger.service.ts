import axios from "axios";
    
export interface ExerciseDetails {
  description?: string;
  muscles?: number[];
}

export const fetchExercisesByIds = async (
  ids: number[]
): Promise<Record<number, ExerciseDetails>> => {
  try {
    const uniqueIds = [...new Set(ids)];

    const responses = await Promise.all(
      uniqueIds.map((id) =>
        axios.get(`https://wger.de/api/v2/exercise/${id}`, {
          timeout: 5000,
        })
      )
    );

    const result: Record<number, ExerciseDetails> = {};

    responses.forEach((res) => {
      const ex = res.data;

      result[ex.id] = {
        description: ex.description,
        muscles: ex.muscles,
      };
    });

    return result;
  } catch (error) {
    console.error("WGER fetch error:", error);
    return {};
  }
};