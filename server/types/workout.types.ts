export interface Exercise {
  wgerId: number;
  name: string;
}

export interface ExerciseWithDetails extends Exercise {
  details?: {
    description?: string;
    muscles?: string[];
  };
}
