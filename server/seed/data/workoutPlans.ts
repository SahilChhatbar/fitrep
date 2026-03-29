export const workoutPlans = [
  // ─── BEGINNER (1–10) ─────────────────────────────────────────────────────

  {
    name: "3-Day Full Body Beginner",
    level: "beginner",
    goal: "general_fitness",
    daysPerWeek: 3,
    split: "full_body",
    schedule: [
      {
        day: "Day 1",
        focus: "Full Body A",
        exercises: [
          {
            name: "Squat",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Stand with feet shoulder-width apart, lower hips until thighs are parallel to the floor, then drive up through heels.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Lie flat on a bench, lower the barbell to chest level and press back up to full arm extension.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Hinge at the hips, grip a barbell and pull it to your lower chest, keeping elbows close to your body.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Press a barbell from shoulder level to full overhead extension while keeping core tight.",
              muscles: ["Deltoids", "Triceps", "Upper Chest"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "30 sec",
            details: {
              description:
                "Hold a push-up position on forearms, keeping body in a straight line from head to heels.",
              muscles: ["Core", "Abs", "Glutes"],
            },
          },
        ],
      },
      {
        day: "Day 2",
        focus: "Full Body B",
        exercises: [
          {
            name: "Deadlift",
            sets: 3,
            reps: "8",
            details: {
              description:
                "Hinge at the hips, grip a barbell on the floor and stand up straight, keeping back flat throughout.",
              muscles: ["Hamstrings", "Glutes", "Lower Back", "Traps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "6-8",
            details: {
              description:
                "Hang from a bar with palms facing away and pull yourself up until chin clears the bar.",
              muscles: ["Lats", "Biceps", "Rear Deltoid"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Hold dumbbells at your sides and curl them toward your shoulders while keeping elbows stationary.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Using a cable machine, push the bar down from chest height to full arm extension while keeping elbows pinned.",
              muscles: ["Triceps"],
            },
          },
          {
            name: "Leg Raises",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Hang from a bar or lie flat and raise your legs to 90 degrees, keeping them straight.",
              muscles: ["Abs", "Hip Flexors"],
            },
          },
        ],
      },
      {
        day: "Day 3",
        focus: "Full Body C",
        exercises: [
          {
            name: "Goblet Squat",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Hold a dumbbell at chest height and perform a squat, keeping chest tall and knees tracking over toes.",
              muscles: ["Quadriceps", "Glutes", "Core"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10",
            details: {
              description:
                "On a 30–45 degree incline bench, press dumbbells from shoulder level to full extension.",
              muscles: ["Upper Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Sit at a cable machine, grip the bar wide and pull it to upper chest while leaning slightly back.",
              muscles: ["Lats", "Biceps", "Rear Deltoid"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Hold dumbbells at your sides and raise them out to shoulder height with a slight bend in the elbow.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Hinge at the hips with soft knees, lowering a barbell along your legs until you feel a hamstring stretch.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
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
        focus: "Full Body A",
        exercises: [
          {
            name: "Squat",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Stand with feet shoulder-width apart, lower hips until thighs are parallel to the floor, then drive up through heels.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Lie flat on a bench, lower the barbell to chest level and press back up to full arm extension.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Hinge at the hips, grip a barbell and pull it to your lower chest.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "30 sec",
            details: {
              description:
                "Hold a push-up position on forearms, keeping body in a straight line.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day 2",
        focus: "Full Body B",
        exercises: [
          {
            name: "Deadlift",
            sets: 3,
            reps: "8",
            details: {
              description:
                "Hinge at the hips, grip a barbell on the floor and stand up straight.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "6-8",
            details: {
              description:
                "Pull yourself up until chin clears the bar, using an overhand grip.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Press a barbell from shoulder level to full overhead extension.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Leg Raises",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Lie flat and raise legs to 90 degrees keeping them straight.",
              muscles: ["Abs", "Hip Flexors"],
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
        focus: "Bodyweight Upper",
        exercises: [
          {
            name: "Push Up",
            sets: 4,
            reps: "12",
            details: {
              description:
                "Start in a plank position and lower your chest to the floor, then push back up.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Diamond Push Up",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Place hands close together forming a diamond shape and perform a push up to emphasize the triceps.",
              muscles: ["Triceps", "Inner Chest"],
            },
          },
          {
            name: "Inverted Row",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Lie under a table or bar, grip it and row your chest up to it keeping body straight.",
              muscles: ["Lats", "Biceps", "Rear Deltoid"],
            },
          },
          {
            name: "Pike Push Up",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Start in a downward dog position and lower your head toward the floor to target the shoulders.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "40 sec",
            details: {
              description:
                "Hold a forearm plank position keeping body in a straight line.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day 2",
        focus: "Bodyweight Lower",
        exercises: [
          {
            name: "Bodyweight Squat",
            sets: 4,
            reps: "15",
            details: {
              description:
                "Stand with feet shoulder-width apart and lower into a squat until thighs are parallel to the floor.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Lunges",
            sets: 3,
            reps: "12 each leg",
            details: {
              description:
                "Step forward and lower your back knee toward the floor, then push back to the starting position.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
          {
            name: "Glute Bridge",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Lie on your back with feet flat, drive hips up to full extension squeezing glutes at the top.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Step Up",
            sets: 3,
            reps: "12 each leg",
            details: {
              description:
                "Step onto an elevated surface leading with one foot and drive up, alternating legs.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Calf Raise",
            sets: 3,
            reps: "20",
            details: {
              description:
                "Stand on the edge of a step and raise up onto your toes, then lower slowly.",
              muscles: ["Calves"],
            },
          },
        ],
      },
      {
        day: "Day 3",
        focus: "Full Body Circuit",
        exercises: [
          {
            name: "Burpee",
            sets: 4,
            reps: "10",
            details: {
              description:
                "Drop into a push-up, perform the push-up, jump feet to hands and explosively jump up.",
              muscles: ["Full Body", "Cardio"],
            },
          },
          {
            name: "Mountain Climber",
            sets: 3,
            reps: "20 each leg",
            details: {
              description:
                "In a plank position, alternate driving knees to your chest rapidly.",
              muscles: ["Core", "Abs", "Hip Flexors"],
            },
          },
          {
            name: "Jump Squat",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Perform a squat and explosively jump at the top, landing softly back into the squat position.",
              muscles: ["Quadriceps", "Glutes", "Calves"],
            },
          },
          {
            name: "Push Up",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Lower chest to the floor from a plank position, then push back up.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "40 sec",
            details: {
              description:
                "Hold a forearm plank position keeping body in a straight line.",
              muscles: ["Core", "Abs"],
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
        focus: "Full Body A",
        exercises: [
          {
            name: "Goblet Squat",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Hold a dumbbell at chest height and squat until thighs are parallel to the floor.",
              muscles: ["Quadriceps", "Glutes", "Core"],
            },
          },
          {
            name: "Dumbbell Bench Press",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Lie flat on a bench holding dumbbells at chest level and press up to full extension.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Dumbbell Row",
            sets: 3,
            reps: "12 each arm",
            details: {
              description:
                "Place one hand and knee on a bench, row the dumbbell to your hip keeping elbow close.",
              muscles: ["Lats", "Biceps", "Rhomboids"],
            },
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Press dumbbells from shoulder level to full overhead extension.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "30 sec",
            details: {
              description:
                "Hold a forearm plank position keeping body in a straight line.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day 2",
        focus: "Full Body B",
        exercises: [
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Hold dumbbells and hinge at the hips, lowering them along your legs until you feel a hamstring stretch.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "12",
            details: {
              description:
                "On an incline bench, press dumbbells from shoulder level to full extension.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Raise dumbbells out to shoulder height with a slight bend in the elbow.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Curl dumbbells from hip level to shoulders while keeping elbows stationary.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Dumbbell Tricep Overhead Extension",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Hold one dumbbell overhead with both hands and lower it behind your head, then extend back up.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Day 3",
        focus: "Full Body C",
        exercises: [
          {
            name: "Dumbbell Lunge",
            sets: 3,
            reps: "10 each leg",
            details: {
              description:
                "Hold dumbbells at your sides and step forward into a lunge, keeping torso upright.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
          {
            name: "Dumbbell Chest Fly",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Lie flat on a bench, lower dumbbells in a wide arc and bring them back together over chest.",
              muscles: ["Chest", "Front Deltoid"],
            },
          },
          {
            name: "Dumbbell Pullover",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Lie perpendicular on a bench, lower a dumbbell behind your head in a wide arc and return.",
              muscles: ["Lats", "Chest"],
            },
          },
          {
            name: "Dumbbell Shrug",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Hold dumbbells at your sides and shrug shoulders straight up toward ears.",
              muscles: ["Traps"],
            },
          },
          {
            name: "Leg Raises",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Lie flat and raise your legs to 90 degrees keeping them straight.",
              muscles: ["Abs", "Hip Flexors"],
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
        focus: "Full Body Machines",
        exercises: [
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Sit in the machine, place feet shoulder-width on the platform and press to full extension.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
          {
            name: "Chest Press Machine",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Sit upright, grip the handles and press forward to full extension.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Grip the bar wide and pull it to upper chest while leaning slightly back.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Lie face down on the machine and curl your heels toward your glutes.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Cable Crunch",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Kneel at a cable machine, hold the rope at your head and crunch downward.",
              muscles: ["Abs"],
            },
          },
        ],
      },
      {
        day: "Day 2",
        focus: "Upper Machines",
        exercises: [
          {
            name: "Shoulder Press Machine",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Sit upright and press the handles overhead to full extension.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Sit at a cable row station and pull the handle to your lower chest, squeezing shoulder blades.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Pec Deck",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Sit at the machine and bring the pads together in front of your chest.",
              muscles: ["Chest"],
            },
          },
          {
            name: "Bicep Curl Machine",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Rest arms on the pad and curl the handle toward your shoulders.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Using a cable machine, push the bar from chest height to full arm extension.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Day 3",
        focus: "Lower + Core",
        exercises: [
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Sit in the machine and extend your legs to full extension, squeezing quads at the top.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Curl your heels toward your glutes against the resistance.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Hip Abductor Machine",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Sit in the machine and push your knees outward against the resistance.",
              muscles: ["Glutes", "Hip Abductors"],
            },
          },
          {
            name: "Calf Raise Machine",
            sets: 3,
            reps: "20",
            details: {
              description:
                "Sit with pads on knees and raise up onto toes, then lower slowly.",
              muscles: ["Calves"],
            },
          },
          {
            name: "Ab Machine Crunch",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Crunch forward against the machine resistance contracting the abs fully.",
              muscles: ["Abs"],
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
        day: "Upper A",
        focus: "Upper Body Push/Pull",
        exercises: [
          {
            name: "Bench Press",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Lie flat on a bench and press a barbell from chest to full arm extension.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Hinge at the hips and pull a barbell to your lower chest.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "10",
            details: {
              description:
                "Press a barbell from shoulders to full overhead extension.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Pull the bar to upper chest from an overhead position.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Curl dumbbells from hip to shoulder level.",
              muscles: ["Biceps"],
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
            sets: 3,
            reps: "10",
            details: {
              description: "Barbell back squat to parallel.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description: "Hip hinge movement emphasizing hamstrings.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Lunges",
            sets: 3,
            reps: "10 each leg",
            details: {
              description: "Step forward into a lunge keeping torso upright.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Press through a machine platform to full extension.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Calf Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Rise onto toes on a step or calf raise machine.",
              muscles: ["Calves"],
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
        day: "Day A",
        focus: "Strength A (SL1 inspired)",
        exercises: [
          {
            name: "Squat",
            sets: 3,
            reps: "5",
            details: {
              description:
                "Barbell back squat with progressive overload focus.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            sets: 3,
            reps: "5",
            details: {
              description:
                "Flat barbell bench press with progressive overload focus.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "5",
            details: {
              description:
                "Barbell row to lower chest with progressive overload focus.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "45 sec",
            details: {
              description: "Core stability hold.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day B",
        focus: "Strength B (SL1 inspired)",
        exercises: [
          {
            name: "Squat",
            sets: 3,
            reps: "5",
            details: {
              description:
                "Barbell back squat with progressive overload focus.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "5",
            details: {
              description:
                "Standing barbell press overhead with progressive overload focus.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Deadlift",
            sets: 1,
            reps: "5",
            details: {
              description:
                "Conventional deadlift — performed once per session with maximum effort.",
              muscles: ["Hamstrings", "Glutes", "Lower Back", "Traps"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "45 sec",
            details: {
              description: "Core stability hold.",
              muscles: ["Core", "Abs"],
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
        day: "Circuit A",
        focus: "Full Body Circuit",
        exercises: [
          {
            name: "Burpee",
            sets: 4,
            reps: "10",
            details: {
              description:
                "Full body explosive movement combining a push-up and jump.",
              muscles: ["Full Body", "Cardio"],
            },
          },
          {
            name: "Push Up",
            sets: 3,
            reps: "12",
            details: {
              description: "Bodyweight chest press from plank position.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Jump Squat",
            sets: 3,
            reps: "15",
            details: {
              description: "Squat and explode upward into a jump.",
              muscles: ["Quadriceps", "Glutes", "Calves"],
            },
          },
          {
            name: "Mountain Climber",
            sets: 3,
            reps: "20 each leg",
            details: {
              description:
                "Alternate driving knees to chest rapidly from a plank position.",
              muscles: ["Core", "Abs", "Hip Flexors"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "40 sec",
            details: {
              description: "Hold a forearm plank.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Cardio A",
        focus: "Steady State Cardio",
        exercises: [
          {
            name: "Cycling",
            sets: 1,
            reps: "30 min",
            details: {
              description:
                "Moderate intensity steady state cycling at 60-70% max heart rate.",
              muscles: ["Quadriceps", "Hamstrings", "Calves"],
            },
          },
        ],
      },
      {
        day: "Circuit B",
        focus: "Full Body Circuit",
        exercises: [
          {
            name: "Lunge",
            sets: 3,
            reps: "12 each leg",
            details: {
              description: "Alternating forward lunges.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
          {
            name: "Inverted Row",
            sets: 3,
            reps: "10",
            details: {
              description: "Row your chest up to a bar or table edge.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Glute Bridge",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Drive hips up from a lying position squeezing glutes.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Bicycle Crunch",
            sets: 3,
            reps: "15 each side",
            details: {
              description:
                "Alternate bringing opposite elbow to opposite knee in a cycling motion.",
              muscles: ["Abs", "Obliques"],
            },
          },
          {
            name: "Jump Rope",
            sets: 3,
            reps: "1 min",
            details: {
              description: "Continuous jump rope at moderate pace.",
              muscles: ["Calves", "Cardio"],
            },
          },
        ],
      },
      {
        day: "Cardio B",
        focus: "HIIT Cardio",
        exercises: [
          {
            name: "Sprint Intervals",
            sets: 8,
            reps: "30 sec on / 30 sec off",
            details: {
              description:
                "Sprint at max effort for 30 seconds, rest for 30 seconds, repeat.",
              muscles: ["Quadriceps", "Hamstrings", "Calves", "Cardio"],
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
        focus: "Cardio + Upper",
        exercises: [
          {
            name: "Cycling",
            sets: 1,
            reps: "20 min",
            details: {
              description: "Warm up with moderate intensity cycling.",
              muscles: ["Quadriceps", "Hamstrings", "Calves"],
            },
          },
          {
            name: "Push Up",
            sets: 3,
            reps: "12",
            details: {
              description: "Bodyweight chest press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Inverted Row",
            sets: 3,
            reps: "10",
            details: {
              description: "Row chest to a bar or table.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "12",
            details: {
              description: "Press dumbbells from shoulder level overhead.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "30 sec",
            details: {
              description: "Hold a forearm plank.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day 2",
        focus: "Cardio + Lower",
        exercises: [
          {
            name: "Treadmill Walk/Jog",
            sets: 1,
            reps: "20 min",
            details: {
              description: "Walk or jog at a brisk pace.",
              muscles: ["Cardio", "Calves"],
            },
          },
          {
            name: "Bodyweight Squat",
            sets: 3,
            reps: "15",
            details: {
              description: "Squat to parallel using only bodyweight.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Glute Bridge",
            sets: 3,
            reps: "15",
            details: {
              description: "Drive hips up from lying position.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Lunges",
            sets: 3,
            reps: "10 each leg",
            details: {
              description: "Forward lunges keeping torso upright.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Calf Raise",
            sets: 3,
            reps: "20",
            details: { description: "Rise onto toes.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Day 3",
        focus: "Full Body Strength",
        exercises: [
          {
            name: "Goblet Squat",
            sets: 3,
            reps: "12",
            details: {
              description: "Squat holding a dumbbell at chest.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Dumbbell Bench Press",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Press dumbbells from chest level to full extension.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Dumbbell Row",
            sets: 3,
            reps: "12 each arm",
            details: {
              description: "Row a dumbbell to your hip.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "12",
            details: {
              description: "Hip hinge with dumbbells.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bicycle Crunch",
            sets: 3,
            reps: "15 each side",
            details: {
              description: "Alternate elbow to opposite knee.",
              muscles: ["Abs", "Obliques"],
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
        day: "Day A",
        focus: "Full Body A",
        exercises: [
          {
            name: "Squat",
            sets: 3,
            reps: "8-10",
            details: {
              description:
                "Barbell or goblet squat with focus on progressive overload each session.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            sets: 3,
            reps: "8-10",
            details: {
              description:
                "Flat bench press, add weight each session when reps are completed.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "8-10",
            details: {
              description:
                "Pull barbell to lower chest from a hinged position.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "12-15",
            details: {
              description: "Raise dumbbells to shoulder height.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "45 sec",
            details: {
              description: "Forearm plank hold.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day B",
        focus: "Full Body B",
        exercises: [
          {
            name: "Deadlift",
            sets: 3,
            reps: "6-8",
            details: {
              description:
                "Conventional deadlift with progressive overload focus.",
              muscles: ["Hamstrings", "Glutes", "Lower Back", "Traps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "8-10",
            details: {
              description: "Standing barbell press, add weight each session.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Pull bar to upper chest from overhead.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Alternate dumbbell curl.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Leg Raises",
            sets: 3,
            reps: "12-15",
            details: {
              description: "Raise legs to 90 degrees from lying position.",
              muscles: ["Abs", "Hip Flexors"],
            },
          },
        ],
      },
    ],
  },

  // ─── INTERMEDIATE (11–20) ─────────────────────────────────────────────────

  {
    name: "Push Pull Legs",
    level: "intermediate",
    goal: "muscle_gain",
    daysPerWeek: 3,
    split: "ppl",
    schedule: [
      {
        day: "Push",
        focus: "Chest / Shoulders / Triceps",
        exercises: [
          {
            name: "Bench Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Flat barbell bench press.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Press dumbbells on a 30 degree incline.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "8-10",
            details: {
              description: "Standing barbell or dumbbell overhead press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Cable Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Single arm lateral raise on a cable.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            details: {
              description: "Cable pushdown with rope or bar.",
              muscles: ["Triceps"],
            },
          },
          {
            name: "Overhead Tricep Extension",
            sets: 3,
            reps: "12",
            details: {
              description: "Extend a cable or dumbbell from behind the head.",
              muscles: ["Triceps", "Long Head"],
            },
          },
        ],
      },
      {
        day: "Pull",
        focus: "Back / Biceps",
        exercises: [
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Pull barbell to lower chest from a hip hinge.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "8-10",
            details: {
              description:
                "Full range of motion pull-up, add weight if bodyweight is easy.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Wide grip pulldown to upper chest.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Seated cable row to lower chest.",
              muscles: ["Rhomboids", "Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Alternating dumbbell curl.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Neutral grip curl for brachialis and brachioradialis.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
        ],
      },
      {
        day: "Legs",
        focus: "Quads / Hamstrings / Glutes / Calves",
        exercises: [
          {
            name: "Squat",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Barbell back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description: "Hip hinge emphasizing hamstrings.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: {
              description: "Machine leg press.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Machine leg curl.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Machine leg extension.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15-20",
            details: {
              description: "Standing calf raise.",
              muscles: ["Calves"],
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
        day: "Upper A (Strength)",
        focus: "Heavy Upper Body",
        exercises: [
          {
            name: "Bench Press",
            sets: 4,
            reps: "5",
            details: {
              description:
                "Heavy flat bench press — priority strength movement.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "5",
            details: {
              description: "Heavy barbell row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "6-8",
            details: {
              description: "Standing barbell press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "6-8",
            details: {
              description: "Weighted pull-up if bodyweight is too easy.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Side raise for shoulder width.",
              muscles: ["Side Deltoid"],
            },
          },
        ],
      },
      {
        day: "Lower A (Strength)",
        focus: "Heavy Lower Body",
        exercises: [
          {
            name: "Squat",
            sets: 4,
            reps: "5",
            details: {
              description:
                "Heavy barbell back squat — priority strength movement.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "8",
            details: {
              description: "Hip hinge with heavy load.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "10",
            details: {
              description: "Heavy machine press for quad volume.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "10",
            details: {
              description: "Machine hamstring curl.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "12-15",
            details: {
              description: "Standing calf raise.",
              muscles: ["Calves"],
            },
          },
        ],
      },
      {
        day: "Upper B (Volume)",
        focus: "Upper Body Hypertrophy",
        exercises: [
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Upper chest emphasis.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 4,
            reps: "12",
            details: {
              description: "Seated cable row for back volume.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "12",
            details: {
              description: "Seated dumbbell press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: {
              description: "Wide grip pulldown.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12-15",
            details: {
              description: "Alternating dumbbell curl.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            details: { description: "Cable pushdown.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Lower B (Volume)",
        focus: "Lower Body Hypertrophy",
        exercises: [
          {
            name: "Front Squat",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Barbell front squat emphasizing quads.",
              muscles: ["Quadriceps", "Core", "Glutes"],
            },
          },
          {
            name: "Deadlift",
            sets: 3,
            reps: "6",
            details: {
              description: "Conventional deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation machine.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring isolation machine.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Barbell or bodyweight hip thrust for glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15-20",
            details: {
              description: "Standing calf raise.",
              muscles: ["Calves"],
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
        focus: "Chest / Shoulders / Triceps",
        exercises: [
          {
            name: "Bench Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Flat barbell bench press.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Incline press for upper chest.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "8-10",
            details: {
              description: "Standing overhead press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Cable Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Side delt isolation.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            details: {
              description: "Cable tricep pushdown.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Pull",
        focus: "Back / Biceps",
        exercises: [
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Heavy barbell row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "8-10",
            details: {
              description: "Full range pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Seated cable row.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description:
                "Cable face pull for rear delts and rotator cuff health.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Neutral grip curl.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
        ],
      },
      {
        day: "Legs",
        focus: "Quads / Hamstrings / Glutes",
        exercises: [
          {
            name: "Squat",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Barbell back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description: "Hip hinge emphasizing hamstrings.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: {
              description: "Machine leg press.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Machine hamstring curl.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15-20",
            details: {
              description: "Standing calf raise.",
              muscles: ["Calves"],
            },
          },
        ],
      },
      {
        day: "Upper",
        focus: "Upper Volume Day",
        exercises: [
          {
            name: "Incline Barbell Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Barbell press on incline.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 4,
            reps: "12",
            details: {
              description: "Wide grip pulldown.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Side raise for shoulder width.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: { description: "Alternating curl.", muscles: ["Biceps"] },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "12",
            details: {
              description: "EZ bar skull crusher for tricep long head.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Lower Accessory",
        focus: "Glutes / Hamstrings Focus",
        exercises: [
          {
            name: "Hip Thrust",
            sets: 4,
            reps: "12",
            details: {
              description: "Barbell hip thrust for glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Front Squat",
            sets: 3,
            reps: "8",
            details: {
              description: "Barbell front squat.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Seated Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 3,
            reps: "20",
            details: { description: "Calf raise.", muscles: ["Calves"] },
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
        day: "Day A",
        focus: "Squat + Push Focus",
        exercises: [
          {
            name: "Squat",
            sets: 4,
            reps: "6",
            details: {
              description: "Heavy barbell back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            sets: 4,
            reps: "6",
            details: {
              description: "Heavy flat bench press.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "8",
            details: {
              description: "Barbell row as a push-pull balance.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Side deltoid isolation.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "45 sec",
            details: {
              description: "Core stability.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day B",
        focus: "Deadlift + Pull Focus",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "5",
            details: {
              description: "Heavy conventional deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Overhead Press",
            sets: 4,
            reps: "6",
            details: {
              description: "Standing overhead press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "6-8",
            details: {
              description: "Weighted pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "8",
            details: {
              description: "Hip hinge for hamstring volume.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Ab Rollout",
            sets: 3,
            reps: "10",
            details: {
              description: "Roll out on an ab wheel from knees or standing.",
              muscles: ["Abs", "Core"],
            },
          },
        ],
      },
      {
        day: "Day C",
        focus: "Squat + Pull Focus",
        exercises: [
          {
            name: "Front Squat",
            sets: 4,
            reps: "6",
            details: {
              description: "Barbell front squat.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Incline Bench Press",
            sets: 4,
            reps: "8",
            details: {
              description: "Incline barbell press.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "10",
            details: {
              description: "Seated cable row.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 3,
            reps: "10",
            details: {
              description: "Barbell hip thrust.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Leg Raises",
            sets: 3,
            reps: "15",
            details: {
              description: "Hanging or lying leg raises.",
              muscles: ["Abs", "Hip Flexors"],
            },
          },
        ],
      },
      {
        day: "Day D",
        focus: "Deadlift + Volume",
        exercises: [
          {
            name: "Squat",
            sets: 3,
            reps: "8",
            details: {
              description: "Back squat at slightly lower intensity.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8",
            details: {
              description: "Barbell row for back volume.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Bench Press",
            sets: 3,
            reps: "8",
            details: {
              description: "Flat bench press at moderate weight.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Curl for bicep volume.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12",
            details: {
              description: "Cable pushdown for tricep volume.",
              muscles: ["Triceps"],
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
        day: "Upper A",
        focus: "Strength Upper",
        exercises: [
          {
            name: "Bench Press",
            sets: 5,
            reps: "5",
            details: {
              description: "5x5 heavy bench press.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 5,
            reps: "5",
            details: {
              description: "5x5 heavy barbell row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "8",
            details: {
              description: "Strict overhead press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Lateral raise for shoulder hypertrophy.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12",
            details: {
              description: "Cable tricep pushdown.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Lower A",
        focus: "Strength Lower",
        exercises: [
          {
            name: "Squat",
            sets: 5,
            reps: "5",
            details: {
              description: "5x5 heavy back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "8",
            details: {
              description: "Hip hinge for posterior chain.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "10",
            details: {
              description: "Machine quad volume.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "12-15",
            details: {
              description: "Standing calf raise.",
              muscles: ["Calves"],
            },
          },
        ],
      },
      {
        day: "Upper B",
        focus: "Volume Upper",
        exercises: [
          {
            name: "Incline Barbell Press",
            sets: 4,
            reps: "8",
            details: {
              description: "Incline bench for upper chest.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 4,
            reps: "8",
            details: {
              description: "Weighted or bodyweight pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "10",
            details: {
              description: "Seated dumbbell press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Seated cable row.",
              muscles: ["Lats", "Rhomboids"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: { description: "Alternating curl.", muscles: ["Biceps"] },
          },
        ],
      },
      {
        day: "Lower B",
        focus: "Volume Lower",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "5",
            details: {
              description: "Heavy conventional deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Front Squat",
            sets: 3,
            reps: "8",
            details: {
              description: "Front squat for quad emphasis.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 3,
            reps: "12",
            details: {
              description: "Glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15",
            details: { description: "Calf isolation.", muscles: ["Calves"] },
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
        day: "Chest + Triceps",
        focus: "Chest / Triceps",
        exercises: [
          {
            name: "Bench Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Flat barbell bench press.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Upper chest emphasis.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Fly",
            sets: 3,
            reps: "12-15",
            details: {
              description: "Cable chest fly for peak contraction.",
              muscles: ["Chest"],
            },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "10-12",
            details: {
              description: "EZ bar skull crusher.",
              muscles: ["Triceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            details: { description: "Cable pushdown.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Back + Biceps",
        focus: "Back / Biceps",
        exercises: [
          {
            name: "Deadlift",
            sets: 3,
            reps: "6-8",
            details: {
              description: "Conventional deadlift.",
              muscles: ["Lower Back", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Barbell row for back thickness.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: {
              description: "Wide grip pulldown.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Seated cable row.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Alternating dumbbell curl.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Neutral grip curl.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
        ],
      },
      {
        day: "Shoulders + Abs",
        focus: "Shoulders / Core",
        exercises: [
          {
            name: "Overhead Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Standing or seated barbell press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Side delt isolation.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Rear delt and external rotation health.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
          {
            name: "Front Raise",
            sets: 3,
            reps: "12",
            details: {
              description: "Dumbbell or plate front raise.",
              muscles: ["Front Deltoid"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "60 sec",
            details: { description: "Core hold.", muscles: ["Core", "Abs"] },
          },
          {
            name: "Leg Raises",
            sets: 3,
            reps: "15",
            details: {
              description: "Hanging or lying leg raises.",
              muscles: ["Abs", "Hip Flexors"],
            },
          },
        ],
      },
      {
        day: "Legs",
        focus: "Quads / Hamstrings / Glutes / Calves",
        exercises: [
          {
            name: "Squat",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Barbell back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description: "Hip hinge.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: {
              description: "Machine press.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: { description: "Machine curl.", muscles: ["Hamstrings"] },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15-20",
            details: { description: "Calf isolation.", muscles: ["Calves"] },
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
        day: "Day 1 - Power",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Box Jump",
            sets: 4,
            reps: "6",
            details: {
              description:
                "Jump onto a plyo box explosively, land softly and step back down.",
              muscles: ["Quadriceps", "Glutes", "Calves"],
            },
          },
          {
            name: "Squat",
            sets: 4,
            reps: "6",
            details: {
              description: "Heavy squat for power base.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Push Press",
            sets: 3,
            reps: "6",
            details: {
              description: "Dip and drive the bar overhead using leg drive.",
              muscles: ["Deltoids", "Triceps", "Legs"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "8",
            details: {
              description: "Explosive barbell row.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "45 sec",
            details: {
              description: "Core stability.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day 2 - Conditioning",
        focus: "Cardio + Conditioning",
        exercises: [
          {
            name: "Sprint Intervals",
            sets: 8,
            reps: "30 sec on / 30 sec off",
            details: {
              description: "Max effort sprints with rest periods.",
              muscles: ["Quadriceps", "Hamstrings", "Calves", "Cardio"],
            },
          },
          {
            name: "Battle Ropes",
            sets: 4,
            reps: "30 sec",
            details: {
              description: "Alternating arm waves with battle ropes.",
              muscles: ["Shoulders", "Core", "Cardio"],
            },
          },
          {
            name: "Burpee",
            sets: 3,
            reps: "10",
            details: {
              description: "Full body explosive movement.",
              muscles: ["Full Body"],
            },
          },
        ],
      },
      {
        day: "Day 3 - Strength",
        focus: "Compound Strength",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "5",
            details: {
              description: "Heavy conventional deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Bench Press",
            sets: 4,
            reps: "6",
            details: {
              description: "Flat bench press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "8",
            details: {
              description: "Strict pull-ups.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "8",
            details: {
              description: "Standing press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Ab Rollout",
            sets: 3,
            reps: "10",
            details: {
              description: "Ab wheel rollout.",
              muscles: ["Abs", "Core"],
            },
          },
        ],
      },
      {
        day: "Day 4 - Mobility + Accessory",
        focus: "Mobility / Injury Prevention",
        exercises: [
          {
            name: "Single Leg Romanian Deadlift",
            sets: 3,
            reps: "10 each leg",
            details: {
              description: "Unilateral hinge for balance and stability.",
              muscles: ["Hamstrings", "Glutes", "Core"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Rear delt and rotator cuff health.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 3,
            reps: "12",
            details: {
              description: "Glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Shoulder health.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "60 sec",
            details: {
              description: "Core stability.",
              muscles: ["Core", "Abs"],
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
        day: "Push A",
        focus: "Chest Focus",
        exercises: [
          {
            name: "Bench Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Flat bench press, chest emphasis.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Upper chest focus.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Fly",
            sets: 3,
            reps: "15",
            details: {
              description: "Chest isolation at peak contraction.",
              muscles: ["Chest"],
            },
          },
          {
            name: "Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Side delt volume.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "12",
            details: {
              description: "Tricep long head isolation.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Pull A",
        focus: "Back Thickness",
        exercises: [
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Heavy row for back thickness.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: {
              description: "Back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Mid back volume.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Rear delt health.",
              muscles: ["Rear Deltoid"],
            },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Brachialis and bicep volume.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
        ],
      },
      {
        day: "Legs",
        focus: "Full Lower",
        exercises: [
          {
            name: "Squat",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Barbell back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description: "Posterior chain emphasis.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: { description: "Quad volume.", muscles: ["Quadriceps"] },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "20",
            details: { description: "Calf isolation.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Push B",
        focus: "Shoulder Focus",
        exercises: [
          {
            name: "Overhead Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Strict overhead press, shoulder emphasis.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Side delt hypertrophy.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Incline Bench Press",
            sets: 3,
            reps: "10",
            details: {
              description: "Upper chest and front delt volume.",
              muscles: ["Upper Chest", "Front Deltoid"],
            },
          },
          {
            name: "Cable Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Constant tension side raise.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "15",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
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
        day: "Upper A",
        focus: "Heavy Upper",
        exercises: [
          {
            name: "Bench Press",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Heavy flat bench press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Heavy barbell row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "8",
            details: {
              description: "Standing press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "8",
            details: {
              description: "Weighted pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: { description: "Side delt.", muscles: ["Side Deltoid"] },
          },
        ],
      },
      {
        day: "Lower A",
        focus: "Squat Focus",
        exercises: [
          {
            name: "Squat",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Heavy back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description: "Posterior chain.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: { description: "Quad volume.", muscles: ["Quadriceps"] },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15",
            details: { description: "Calf.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Upper B",
        focus: "Volume Upper",
        exercises: [
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Upper chest volume.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 4,
            reps: "12",
            details: {
              description: "Back volume.",
              muscles: ["Lats", "Rhomboids"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Shoulder volume.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12-15",
            details: { description: "Bicep volume.", muscles: ["Biceps"] },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Rear delt health.",
              muscles: ["Rear Deltoid"],
            },
          },
        ],
      },
      {
        day: "Lower B",
        focus: "Deadlift Focus",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "5",
            details: {
              description: "Heavy conventional deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Front Squat",
            sets: 3,
            reps: "8",
            details: {
              description: "Quad emphasis.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 3,
            reps: "12",
            details: {
              description: "Glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15",
            details: { description: "Calf.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Upper C",
        focus: "Arm + Shoulder Focus",
        exercises: [
          {
            name: "Overhead Press",
            sets: 4,
            reps: "8",
            details: {
              description: "Strict press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 4,
            reps: "12",
            details: {
              description: "Back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "EZ Bar Curl",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Bicep curl with EZ bar.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "12",
            details: { description: "Tricep long head.", muscles: ["Triceps"] },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: { description: "Side delt.", muscles: ["Side Deltoid"] },
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
        focus: "Chest / Shoulders / Triceps",
        exercises: [
          {
            name: "Bench Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Flat bench press.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Upper chest.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "10",
            details: {
              description: "Shoulder press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Lateral Raise",
            sets: 3,
            reps: "15",
            details: { description: "Side delt.", muscles: ["Side Deltoid"] },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            details: { description: "Tricep isolation.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Pull",
        focus: "Back / Biceps",
        exercises: [
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Heavy row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "8-10",
            details: { description: "Pull-up.", muscles: ["Lats", "Biceps"] },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Mid back.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: { description: "Rear delt.", muscles: ["Rear Deltoid"] },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Bicep + brachialis.",
              muscles: ["Biceps", "Brachialis"],
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
            sets: 4,
            reps: "8-10",
            details: {
              description: "Back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description: "Posterior chain.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: { description: "Quad volume.", muscles: ["Quadriceps"] },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: { description: "Hamstring.", muscles: ["Hamstrings"] },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15-20",
            details: { description: "Calf.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Upper",
        focus: "Upper Body Volume",
        exercises: [
          {
            name: "Incline Barbell Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Upper chest emphasis.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 4,
            reps: "12",
            details: {
              description: "Back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "12",
            details: {
              description: "Seated press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: { description: "Bicep.", muscles: ["Biceps"] },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "12",
            details: { description: "Tricep.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Lower Accessory",
        focus: "Glutes / Hamstrings",
        exercises: [
          {
            name: "Hip Thrust",
            sets: 4,
            reps: "12",
            details: {
              description: "Glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Front Squat",
            sets: 3,
            reps: "8",
            details: {
              description: "Quad emphasis.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Seated Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 3,
            reps: "20",
            details: { description: "Calf.", muscles: ["Calves"] },
          },
        ],
      },
    ],
  },

  // ─── ADVANCED (21–30) ────────────────────────────────────────────────────

  {
    name: "PPL Advanced",
    level: "advanced",
    goal: "muscle_gain",
    daysPerWeek: 6,
    split: "ppl",
    schedule: [
      {
        day: "Push A",
        focus: "Chest Focus",
        exercises: [
          {
            name: "Bench Press",
            sets: 5,
            reps: "5-8",
            details: {
              description: "Heavy flat bench press.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Incline Barbell Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Upper chest.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Fly",
            sets: 3,
            reps: "12-15",
            details: { description: "Chest isolation.", muscles: ["Chest"] },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Side delt volume.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
          },
          {
            name: "Overhead Tricep Extension",
            sets: 3,
            reps: "12",
            details: { description: "Long head tricep.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Pull A",
        focus: "Back Thickness",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "4-6",
            details: {
              description: "Heavy conventional deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back", "Traps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Heavy row for back thickness.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Mid back volume.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Rear delt and rotator cuff.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
          {
            name: "EZ Bar Curl",
            sets: 3,
            reps: "10-12",
            details: { description: "Bicep volume.", muscles: ["Biceps"] },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Brachialis volume.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
        ],
      },
      {
        day: "Legs A",
        focus: "Quad Dominant",
        exercises: [
          {
            name: "Squat",
            sets: 5,
            reps: "5-8",
            details: {
              description: "Heavy back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Quad volume.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring balance.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 5,
            reps: "15-20",
            details: { description: "Calf isolation.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Push B",
        focus: "Shoulder Focus",
        exercises: [
          {
            name: "Overhead Press",
            sets: 5,
            reps: "5-8",
            details: {
              description: "Heavy standing press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Side delt hypertrophy.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Upper chest and front delt.",
              muscles: ["Upper Chest", "Front Deltoid"],
            },
          },
          {
            name: "Cable Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Constant tension lateral raise.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "10-12",
            details: { description: "Tricep long head.", muscles: ["Triceps"] },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "15",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Pull B",
        focus: "Back Width",
        exercises: [
          {
            name: "Weighted Pull Up",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Weighted pull-up for back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Wide grip for back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Incline Dumbbell Row",
            sets: 3,
            reps: "12",
            details: {
              description:
                "Chest supported row eliminating lower back fatigue.",
              muscles: ["Lats", "Rhomboids"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Rear delt and health.",
              muscles: ["Rear Deltoid"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: { description: "Bicep peak.", muscles: ["Biceps"] },
          },
          {
            name: "Preacher Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Strict curl for bicep belly.",
              muscles: ["Biceps"],
            },
          },
        ],
      },
      {
        day: "Legs B",
        focus: "Posterior Chain",
        exercises: [
          {
            name: "Romanian Deadlift",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Heavy hip hinge for hamstrings.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Barbell hip thrust for glutes.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Bulgarian Split Squat",
            sets: 3,
            reps: "10 each leg",
            details: {
              description:
                "Rear foot elevated split squat for unilateral strength.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
          {
            name: "Seated Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 5,
            reps: "15-20",
            details: { description: "Calf volume.", muscles: ["Calves"] },
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
            sets: 4,
            reps: "6-10",
            details: {
              description: "Flat barbell bench, warm up properly.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Upper chest emphasis.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Fly",
            sets: 3,
            reps: "12-15",
            details: {
              description: "Peak contraction chest isolation.",
              muscles: ["Chest"],
            },
          },
          {
            name: "Pec Deck",
            sets: 3,
            reps: "12-15",
            details: {
              description: "Machine fly for constant chest tension.",
              muscles: ["Chest"],
            },
          },
          {
            name: "Dumbbell Pullover",
            sets: 3,
            reps: "12",
            details: {
              description: "Chest and lat stretch.",
              muscles: ["Chest", "Lats"],
            },
          },
        ],
      },
      {
        day: "Back",
        focus: "Back",
        exercises: [
          {
            name: "Deadlift",
            sets: 3,
            reps: "5",
            details: {
              description: "Heavy deadlift for overall back thickness.",
              muscles: ["Lower Back", "Hamstrings", "Glutes", "Traps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Mid back thickness.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: { description: "Width finisher.", muscles: ["Lats"] },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Mid back detail.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Rear delt and rotator cuff.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
        ],
      },
      {
        day: "Shoulders",
        focus: "Shoulders",
        exercises: [
          {
            name: "Overhead Press",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Heavy standing or seated press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 5,
            reps: "15",
            details: {
              description: "Side delt hypertrophy.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Cable Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Constant tension lateral.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Rear Delt Fly",
            sets: 4,
            reps: "15",
            details: {
              description: "Dumbbell or machine rear delt fly.",
              muscles: ["Rear Deltoid"],
            },
          },
          {
            name: "Barbell Shrug",
            sets: 4,
            reps: "12",
            details: { description: "Trap development.", muscles: ["Traps"] },
          },
        ],
      },
      {
        day: "Arms",
        focus: "Biceps / Triceps",
        exercises: [
          {
            name: "EZ Bar Curl",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Bicep mass builder.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Incline Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Long head bicep stretch.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Brachialis and forearm.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
          {
            name: "Skull Crusher",
            sets: 4,
            reps: "10-12",
            details: { description: "Tricep long head.", muscles: ["Triceps"] },
          },
          {
            name: "Overhead Tricep Extension",
            sets: 3,
            reps: "12",
            details: {
              description: "Tricep long head stretch.",
              muscles: ["Triceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            details: { description: "Tricep finisher.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Legs",
        focus: "Legs",
        exercises: [
          {
            name: "Squat",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Barbell back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10",
            details: {
              description: "Posterior chain.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 4,
            reps: "12-15",
            details: {
              description: "Quad volume.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Curl",
            sets: 4,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 5,
            reps: "15-20",
            details: { description: "Calf volume.", muscles: ["Calves"] },
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
        day: "Chest",
        focus: "Chest",
        exercises: [
          {
            name: "Bench Press",
            sets: 5,
            reps: "6-8",
            details: {
              description: "Flat barbell press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Upper chest.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Decline Bench Press",
            sets: 3,
            reps: "10",
            details: {
              description: "Lower chest emphasis.",
              muscles: ["Lower Chest", "Triceps"],
            },
          },
          {
            name: "Cable Fly",
            sets: 3,
            reps: "15",
            details: { description: "Chest isolation.", muscles: ["Chest"] },
          },
          {
            name: "Pec Deck",
            sets: 3,
            reps: "15",
            details: { description: "Machine fly.", muscles: ["Chest"] },
          },
        ],
      },
      {
        day: "Back",
        focus: "Back",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "4-6",
            details: {
              description: "Heavy deadlift.",
              muscles: ["Lower Back", "Hamstrings", "Glutes", "Traps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8",
            details: {
              description: "Thickness row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Width pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: { description: "Width finisher.", muscles: ["Lats"] },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Mid back.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: { description: "Rear delt.", muscles: ["Rear Deltoid"] },
          },
        ],
      },
      {
        day: "Shoulders",
        focus: "Shoulders",
        exercises: [
          {
            name: "Overhead Press",
            sets: 5,
            reps: "6-8",
            details: {
              description: "Heavy press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 5,
            reps: "15-20",
            details: {
              description: "Side delt volume.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Cable Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Constant tension.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Rear Delt Fly",
            sets: 4,
            reps: "15",
            details: {
              description: "Rear delt isolation.",
              muscles: ["Rear Deltoid"],
            },
          },
          {
            name: "Barbell Shrug",
            sets: 4,
            reps: "10-12",
            details: { description: "Trap volume.", muscles: ["Traps"] },
          },
        ],
      },
      {
        day: "Arms",
        focus: "Biceps / Triceps",
        exercises: [
          {
            name: "EZ Bar Curl",
            sets: 4,
            reps: "10-12",
            details: { description: "Bicep mass.", muscles: ["Biceps"] },
          },
          {
            name: "Incline Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: { description: "Long head stretch.", muscles: ["Biceps"] },
          },
          {
            name: "Preacher Curl",
            sets: 3,
            reps: "12",
            details: { description: "Strict form curl.", muscles: ["Biceps"] },
          },
          {
            name: "Skull Crusher",
            sets: 4,
            reps: "10-12",
            details: { description: "Tricep long head.", muscles: ["Triceps"] },
          },
          {
            name: "Overhead Tricep Extension",
            sets: 3,
            reps: "12",
            details: { description: "Tricep stretch.", muscles: ["Triceps"] },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "15",
            details: { description: "Tricep finisher.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Legs",
        focus: "Legs",
        exercises: [
          {
            name: "Squat",
            sets: 5,
            reps: "6-8",
            details: {
              description: "Heavy back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Posterior chain.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 4,
            reps: "10-12",
            details: { description: "Quad volume.", muscles: ["Quadriceps"] },
          },
          {
            name: "Leg Curl",
            sets: 4,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 5,
            reps: "15-20",
            details: { description: "Calf volume.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Core + Weak Points",
        focus: "Core / Lagging Muscles",
        exercises: [
          {
            name: "Ab Rollout",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Full core activation.",
              muscles: ["Abs", "Core"],
            },
          },
          {
            name: "Hanging Leg Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Lower ab emphasis.",
              muscles: ["Abs", "Hip Flexors"],
            },
          },
          {
            name: "Cable Crunch",
            sets: 3,
            reps: "15",
            details: { description: "Weighted ab crunch.", muscles: ["Abs"] },
          },
          {
            name: "Hip Thrust",
            sets: 4,
            reps: "12",
            details: {
              description: "Glute accessory.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "20",
            details: {
              description: "Rotator cuff health.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
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
        day: "Day 1 - Squat",
        focus: "Squat + Accessory",
        exercises: [
          {
            name: "Squat",
            sets: 5,
            reps: "3-5",
            details: {
              description: "Heavy competition-style back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "8",
            details: {
              description: "Posterior chain accessory.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "10",
            details: { description: "Quad volume.", muscles: ["Quadriceps"] },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring balance.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15",
            details: { description: "Calf.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Day 2 - Bench",
        focus: "Bench + Accessory",
        exercises: [
          {
            name: "Bench Press",
            sets: 5,
            reps: "3-5",
            details: {
              description: "Heavy competition-style bench.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Close Grip Bench Press",
            sets: 3,
            reps: "8",
            details: {
              description: "Tricep strength builder.",
              muscles: ["Triceps", "Chest"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10",
            details: {
              description: "Upper chest hypertrophy.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "10",
            details: { description: "Tricep accessory.", muscles: ["Triceps"] },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Shoulder health.",
              muscles: ["Side Deltoid"],
            },
          },
        ],
      },
      {
        day: "Day 3 - Deadlift",
        focus: "Deadlift + Accessory",
        exercises: [
          {
            name: "Deadlift",
            sets: 5,
            reps: "2-4",
            details: {
              description: "Heavy competition-style deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back", "Traps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "6",
            details: {
              description: "Upper back strength.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Pull Up",
            sets: 3,
            reps: "8",
            details: {
              description: "Back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Shoulder health.",
              muscles: ["Rear Deltoid"],
            },
          },
          {
            name: "Ab Rollout",
            sets: 3,
            reps: "10",
            details: {
              description: "Core strength.",
              muscles: ["Abs", "Core"],
            },
          },
        ],
      },
      {
        day: "Day 4 - Upper Hypertrophy",
        focus: "Upper Volume",
        exercises: [
          {
            name: "Overhead Press",
            sets: 4,
            reps: "8",
            details: {
              description: "Shoulder hypertrophy.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 4,
            reps: "12",
            details: {
              description: "Back width volume.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: { description: "Side delt.", muscles: ["Side Deltoid"] },
          },
          {
            name: "EZ Bar Curl",
            sets: 3,
            reps: "12",
            details: { description: "Bicep.", muscles: ["Biceps"] },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12",
            details: { description: "Tricep.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Day 5 - Lower Hypertrophy",
        focus: "Lower Volume",
        exercises: [
          {
            name: "Front Squat",
            sets: 4,
            reps: "8",
            details: {
              description: "Quad-focused squat.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 4,
            reps: "12",
            details: {
              description: "Glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Bulgarian Split Squat",
            sets: 3,
            reps: "10 each leg",
            details: {
              description: "Unilateral leg strength.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 5,
            reps: "15-20",
            details: { description: "Calf volume.", muscles: ["Calves"] },
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
        day: "Day A",
        focus: "Squat + Push",
        exercises: [
          {
            name: "Squat",
            sets: 5,
            reps: "4-6",
            details: {
              description: "Heavy back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            sets: 4,
            reps: "5-6",
            details: {
              description: "Heavy bench press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "8",
            details: {
              description: "Barbell row for upper back.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: { description: "Side delt.", muscles: ["Side Deltoid"] },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "60 sec",
            details: {
              description: "Core stability.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day B",
        focus: "Deadlift + Pull",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "3-5",
            details: {
              description: "Heavy deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Overhead Press",
            sets: 4,
            reps: "5-6",
            details: {
              description: "Heavy standing press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Weighted pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "8",
            details: {
              description: "Hamstring accessory.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Ab Rollout",
            sets: 3,
            reps: "10",
            details: {
              description: "Core strength.",
              muscles: ["Abs", "Core"],
            },
          },
        ],
      },
      {
        day: "Day C",
        focus: "Squat + Pull",
        exercises: [
          {
            name: "Front Squat",
            sets: 4,
            reps: "5-6",
            details: {
              description: "Quad emphasis squat.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Incline Bench Press",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Upper chest strength.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 4,
            reps: "10",
            details: {
              description: "Back volume.",
              muscles: ["Lats", "Rhomboids"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 3,
            reps: "10",
            details: {
              description: "Glute strength.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Leg Raises",
            sets: 3,
            reps: "15",
            details: {
              description: "Lower abs.",
              muscles: ["Abs", "Hip Flexors"],
            },
          },
        ],
      },
      {
        day: "Day D",
        focus: "Deadlift + Volume",
        exercises: [
          {
            name: "Squat",
            sets: 3,
            reps: "8",
            details: {
              description: "Moderate intensity back squat.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Heavy row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Bench Press",
            sets: 3,
            reps: "8",
            details: {
              description: "Moderate bench volume.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "EZ Bar Curl",
            sets: 3,
            reps: "12",
            details: { description: "Bicep volume.", muscles: ["Biceps"] },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "12",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Day E",
        focus: "Accessory + Weak Points",
        exercises: [
          {
            name: "Bulgarian Split Squat",
            sets: 3,
            reps: "10 each leg",
            details: {
              description: "Unilateral leg strength.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Face Pull",
            sets: 4,
            reps: "15",
            details: {
              description: "Shoulder health.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Side delt volume.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Brachialis.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
          {
            name: "Calf Raise",
            sets: 5,
            reps: "20",
            details: { description: "Calf volume.", muscles: ["Calves"] },
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
        day: "Upper A - Strength",
        focus: "Heavy Upper",
        exercises: [
          {
            name: "Bench Press",
            sets: 5,
            reps: "3-5",
            details: {
              description: "Heavy bench press.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Barbell Row",
            sets: 5,
            reps: "3-5",
            details: {
              description: "Heavy barbell row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "6",
            details: {
              description: "Standing press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            sets: 3,
            reps: "6",
            details: {
              description: "Weighted pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Shoulder health.",
              muscles: ["Side Deltoid"],
            },
          },
        ],
      },
      {
        day: "Lower A - Strength",
        focus: "Heavy Lower",
        exercises: [
          {
            name: "Squat",
            sets: 5,
            reps: "3-5",
            details: {
              description: "Heavy back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "6-8",
            details: {
              description: "Posterior chain.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "8",
            details: {
              description: "Quad accessory.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "10",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "12-15",
            details: { description: "Calf.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Upper B - Volume",
        focus: "Upper Hypertrophy",
        exercises: [
          {
            name: "Incline Barbell Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Upper chest volume.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Back volume.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Shoulder volume.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: {
              description: "Back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "EZ Bar Curl",
            sets: 3,
            reps: "12",
            details: { description: "Bicep volume.", muscles: ["Biceps"] },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "12",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Lower B - Volume",
        focus: "Lower Hypertrophy",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "4-5",
            details: {
              description: "Heavy deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Front Squat",
            sets: 3,
            reps: "8",
            details: {
              description: "Quad emphasis.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 4,
            reps: "12",
            details: {
              description: "Glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Bulgarian Split Squat",
            sets: 3,
            reps: "10 each leg",
            details: {
              description: "Unilateral strength.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15-20",
            details: { description: "Calf volume.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Upper C - Arms / Shoulders",
        focus: "Arm + Shoulder Focus",
        exercises: [
          {
            name: "Overhead Press",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Strength press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 5,
            reps: "15-20",
            details: {
              description: "Side delt hypertrophy.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "EZ Bar Curl",
            sets: 4,
            reps: "10",
            details: { description: "Bicep mass.", muscles: ["Biceps"] },
          },
          {
            name: "Tricep Pushdown",
            sets: 4,
            reps: "12",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "20",
            details: {
              description: "Rotator cuff health.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
        ],
      },
      {
        day: "Lower C - Weak Points",
        focus: "Glutes / Hamstrings / Calves",
        exercises: [
          {
            name: "Hip Thrust",
            sets: 5,
            reps: "10-12",
            details: {
              description: "Heavy glute work.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 4,
            reps: "8",
            details: {
              description: "Hamstring volume.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Seated Leg Curl",
            sets: 4,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Leg Extension",
            sets: 3,
            reps: "15",
            details: { description: "Quad balance.", muscles: ["Quadriceps"] },
          },
          {
            name: "Calf Raise",
            sets: 6,
            reps: "15-20",
            details: {
              description: "High volume calf work.",
              muscles: ["Calves"],
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
        day: "Push A",
        focus: "Heavy Push",
        exercises: [
          {
            name: "Bench Press",
            sets: 5,
            reps: "4-6",
            details: {
              description: "Heavy flat bench.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Overhead Press",
            sets: 4,
            reps: "5-6",
            details: {
              description: "Heavy standing press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "8-10",
            details: {
              description: "Upper chest accessory.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 3,
            reps: "15",
            details: { description: "Side delt.", muscles: ["Side Deltoid"] },
          },
          {
            name: "Close Grip Bench Press",
            sets: 3,
            reps: "8",
            details: {
              description: "Tricep strength.",
              muscles: ["Triceps", "Chest"],
            },
          },
        ],
      },
      {
        day: "Pull A",
        focus: "Heavy Pull",
        exercises: [
          {
            name: "Deadlift",
            sets: 5,
            reps: "3-4",
            details: {
              description: "Heavy conventional deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back", "Traps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "5-6",
            details: {
              description: "Heavy row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            sets: 3,
            reps: "6-8",
            details: {
              description: "Weighted pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Shoulder health.",
              muscles: ["Rear Deltoid"],
            },
          },
          {
            name: "EZ Bar Curl",
            sets: 3,
            reps: "10",
            details: { description: "Bicep.", muscles: ["Biceps"] },
          },
        ],
      },
      {
        day: "Push B",
        focus: "Push Volume",
        exercises: [
          {
            name: "Incline Barbell Press",
            sets: 4,
            reps: "8",
            details: {
              description: "Upper chest volume.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 4,
            reps: "10",
            details: {
              description: "Shoulder hypertrophy.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Cable Fly",
            sets: 3,
            reps: "12-15",
            details: { description: "Chest isolation.", muscles: ["Chest"] },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Side delt volume.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 4,
            reps: "12",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
          },
        ],
      },
      {
        day: "Pull B",
        focus: "Pull Volume",
        exercises: [
          {
            name: "Lat Pulldown",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Back width.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Back volume.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Incline Dumbbell Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Chest supported row.",
              muscles: ["Lats", "Rhomboids"],
            },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Brachialis and forearm.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
          {
            name: "Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: { description: "Bicep peak.", muscles: ["Biceps"] },
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
        day: "Day 1 - Power",
        focus: "Explosive Power",
        exercises: [
          {
            name: "Power Clean",
            sets: 5,
            reps: "3",
            details: {
              description:
                "Olympic lift — pull the barbell from the floor explosively and catch in a front rack position.",
              muscles: ["Full Body", "Quadriceps", "Hamstrings", "Traps"],
            },
          },
          {
            name: "Box Jump",
            sets: 5,
            reps: "5",
            details: {
              description:
                "Max height box jump for explosive lower body power.",
              muscles: ["Quadriceps", "Glutes", "Calves"],
            },
          },
          {
            name: "Push Press",
            sets: 4,
            reps: "5",
            details: {
              description: "Dip and drive barbell overhead using leg power.",
              muscles: ["Deltoids", "Triceps", "Legs"],
            },
          },
          {
            name: "Squat",
            sets: 4,
            reps: "5",
            details: {
              description: "Heavy back squat.",
              muscles: ["Quadriceps", "Glutes", "Hamstrings"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "60 sec",
            details: {
              description: "Core stability.",
              muscles: ["Core", "Abs"],
            },
          },
        ],
      },
      {
        day: "Day 2 - Speed / Conditioning",
        focus: "Sprint + Agility",
        exercises: [
          {
            name: "Sprint Intervals",
            sets: 10,
            reps: "40m sprint",
            details: {
              description: "Max effort 40 meter sprints with 60 seconds rest.",
              muscles: ["Quadriceps", "Hamstrings", "Calves", "Cardio"],
            },
          },
          {
            name: "Lateral Shuffle",
            sets: 4,
            reps: "30 sec",
            details: {
              description: "Lateral agility drill side to side.",
              muscles: ["Adductors", "Abductors", "Calves"],
            },
          },
          {
            name: "Burpee",
            sets: 4,
            reps: "10",
            details: {
              description: "Full body conditioning.",
              muscles: ["Full Body"],
            },
          },
          {
            name: "Battle Ropes",
            sets: 4,
            reps: "30 sec",
            details: {
              description: "Upper body conditioning.",
              muscles: ["Shoulders", "Core"],
            },
          },
        ],
      },
      {
        day: "Day 3 - Strength",
        focus: "Compound Strength",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "4",
            details: {
              description: "Heavy conventional deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back"],
            },
          },
          {
            name: "Bench Press",
            sets: 4,
            reps: "5",
            details: {
              description: "Heavy bench press.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            sets: 4,
            reps: "6",
            details: {
              description: "Weighted pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 3,
            reps: "6",
            details: {
              description: "Standing press.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Ab Rollout",
            sets: 3,
            reps: "10",
            details: {
              description: "Core strength.",
              muscles: ["Abs", "Core"],
            },
          },
        ],
      },
      {
        day: "Day 4 - Mobility + Accessory",
        focus: "Injury Prevention / Balance",
        exercises: [
          {
            name: "Single Leg Romanian Deadlift",
            sets: 3,
            reps: "10 each leg",
            details: {
              description: "Unilateral stability and balance.",
              muscles: ["Hamstrings", "Glutes", "Core"],
            },
          },
          {
            name: "Face Pull",
            sets: 4,
            reps: "15",
            details: {
              description: "Rotator cuff health.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 3,
            reps: "12",
            details: { description: "Glute strength.", muscles: ["Glutes"] },
          },
          {
            name: "Copenhagen Plank",
            sets: 3,
            reps: "20 sec each side",
            details: {
              description: "Groin and adductor strength, injury prevention.",
              muscles: ["Adductors", "Core"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "20",
            details: { description: "Ankle stability.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Day 5 - Full Body",
        focus: "Competition Simulation",
        exercises: [
          {
            name: "Squat",
            sets: 3,
            reps: "6",
            details: {
              description: "Sub-maximal squat.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            sets: 3,
            reps: "6",
            details: {
              description: "Moderate bench.",
              muscles: ["Chest", "Triceps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 3,
            reps: "8",
            details: {
              description: "Back volume.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Jump Squat",
            sets: 3,
            reps: "8",
            details: {
              description: "Explosive lower body.",
              muscles: ["Quadriceps", "Glutes", "Calves"],
            },
          },
          {
            name: "Plank",
            sets: 3,
            reps: "60 sec",
            details: { description: "Core.", muscles: ["Core", "Abs"] },
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
        focus: "Chest — High Volume",
        exercises: [
          {
            name: "Bench Press",
            sets: 5,
            reps: "8-12",
            details: {
              description:
                "Flat bench — multiple warm-up sets then working sets.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "10-12",
            details: {
              description: "Upper chest focus.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Decline Bench Press",
            sets: 3,
            reps: "10-12",
            details: {
              description: "Lower chest.",
              muscles: ["Lower Chest", "Triceps"],
            },
          },
          {
            name: "Cable Fly",
            sets: 4,
            reps: "15",
            details: {
              description: "Constant tension chest isolation.",
              muscles: ["Chest"],
            },
          },
          {
            name: "Pec Deck",
            sets: 3,
            reps: "15",
            details: {
              description: "Machine fly for pump.",
              muscles: ["Chest"],
            },
          },
          {
            name: "Push Up",
            sets: 2,
            reps: "To failure",
            details: {
              description: "Burnout finisher.",
              muscles: ["Chest", "Triceps"],
            },
          },
        ],
      },
      {
        day: "Back",
        focus: "Back — High Volume",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "5-6",
            details: {
              description: "Heavy deadlift for overall back.",
              muscles: ["Lower Back", "Hamstrings", "Glutes", "Traps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Back thickness.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Width builder.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            details: { description: "Width finisher.", muscles: ["Lats"] },
          },
          {
            name: "Cable Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Mid back detail.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Face Pull",
            sets: 4,
            reps: "15",
            details: {
              description: "Rear delt and cuff health.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
            },
          },
        ],
      },
      {
        day: "Shoulders",
        focus: "Shoulders — High Volume",
        exercises: [
          {
            name: "Overhead Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Mass builder for shoulders.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 6,
            reps: "15-20",
            details: {
              description: "Side delt hypertrophy — high volume.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Cable Lateral Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Constant tension lateral.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Rear Delt Fly",
            sets: 4,
            reps: "15-20",
            details: {
              description: "Rear delt detail.",
              muscles: ["Rear Deltoid"],
            },
          },
          {
            name: "Barbell Shrug",
            sets: 4,
            reps: "12",
            details: { description: "Trap volume.", muscles: ["Traps"] },
          },
          {
            name: "Upright Row",
            sets: 3,
            reps: "12",
            details: {
              description: "Side delt and trap builder.",
              muscles: ["Side Deltoid", "Traps"],
            },
          },
        ],
      },
      {
        day: "Arms",
        focus: "Biceps / Triceps — High Volume",
        exercises: [
          {
            name: "EZ Bar Curl",
            sets: 4,
            reps: "10-12",
            details: { description: "Bicep mass.", muscles: ["Biceps"] },
          },
          {
            name: "Incline Dumbbell Curl",
            sets: 3,
            reps: "12",
            details: { description: "Long head stretch.", muscles: ["Biceps"] },
          },
          {
            name: "Preacher Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Strict bicep belly.",
              muscles: ["Biceps"],
            },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Brachialis and forearm.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
          {
            name: "Skull Crusher",
            sets: 4,
            reps: "10-12",
            details: { description: "Tricep long head.", muscles: ["Triceps"] },
          },
          {
            name: "Overhead Tricep Extension",
            sets: 3,
            reps: "12",
            details: {
              description: "Long head stretch.",
              muscles: ["Triceps"],
            },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "15",
            details: {
              description: "Tricep pump finisher.",
              muscles: ["Triceps"],
            },
          },
        ],
      },
      {
        day: "Legs",
        focus: "Legs — High Volume",
        exercises: [
          {
            name: "Squat",
            sets: 5,
            reps: "8-12",
            details: {
              description: "Barbell back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 4,
            reps: "10",
            details: {
              description: "Hamstring focus.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Leg Press",
            sets: 4,
            reps: "12-15",
            details: {
              description: "Quad volume.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Curl",
            sets: 4,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Leg Extension",
            sets: 4,
            reps: "15",
            details: {
              description: "Quad isolation.",
              muscles: ["Quadriceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 6,
            reps: "15-20",
            details: { description: "Calf high volume.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Core + Cardio",
        focus: "Core / Conditioning",
        exercises: [
          {
            name: "Ab Rollout",
            sets: 4,
            reps: "12",
            details: {
              description: "Full core activation.",
              muscles: ["Abs", "Core"],
            },
          },
          {
            name: "Hanging Leg Raise",
            sets: 4,
            reps: "15",
            details: {
              description: "Lower abs.",
              muscles: ["Abs", "Hip Flexors"],
            },
          },
          {
            name: "Cable Crunch",
            sets: 3,
            reps: "15",
            details: { description: "Weighted ab work.", muscles: ["Abs"] },
          },
          {
            name: "Cycling",
            sets: 1,
            reps: "20 min",
            details: {
              description:
                "Moderate intensity cardio for recovery and conditioning.",
              muscles: ["Cardio", "Quadriceps"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "20",
            details: {
              description: "Shoulder health maintenance.",
              muscles: ["Rear Deltoid", "Rotator Cuff"],
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
        day: "Day 1 - Heavy Push + Legs",
        focus: "Squat + Bench",
        exercises: [
          {
            name: "Squat",
            sets: 5,
            reps: "4-6",
            details: {
              description: "Heavy back squat.",
              muscles: ["Quadriceps", "Hamstrings", "Glutes"],
            },
          },
          {
            name: "Bench Press",
            sets: 4,
            reps: "5-8",
            details: {
              description: "Heavy flat bench.",
              muscles: ["Chest", "Triceps", "Front Deltoid"],
            },
          },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "8",
            details: {
              description: "Posterior chain.",
              muscles: ["Hamstrings", "Glutes"],
            },
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10",
            details: {
              description: "Upper chest accessory.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15",
            details: { description: "Calf.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Day 2 - Heavy Pull",
        focus: "Deadlift + Rows",
        exercises: [
          {
            name: "Deadlift",
            sets: 4,
            reps: "3-5",
            details: {
              description: "Heavy deadlift.",
              muscles: ["Hamstrings", "Glutes", "Lower Back", "Traps"],
            },
          },
          {
            name: "Barbell Row",
            sets: 4,
            reps: "6-8",
            details: {
              description: "Heavy row.",
              muscles: ["Lats", "Rhomboids", "Biceps"],
            },
          },
          {
            name: "Weighted Pull Up",
            sets: 3,
            reps: "6-8",
            details: {
              description: "Weighted pull-up.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Face Pull",
            sets: 3,
            reps: "15",
            details: {
              description: "Rear delt health.",
              muscles: ["Rear Deltoid"],
            },
          },
          {
            name: "EZ Bar Curl",
            sets: 3,
            reps: "10",
            details: { description: "Bicep.", muscles: ["Biceps"] },
          },
        ],
      },
      {
        day: "Day 3 - Hypertrophy Upper",
        focus: "Upper Volume",
        exercises: [
          {
            name: "Incline Barbell Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Upper chest focus.",
              muscles: ["Upper Chest", "Triceps"],
            },
          },
          {
            name: "Overhead Press",
            sets: 4,
            reps: "8-10",
            details: {
              description: "Shoulder volume.",
              muscles: ["Deltoids", "Triceps"],
            },
          },
          {
            name: "Cable Row",
            sets: 4,
            reps: "12",
            details: {
              description: "Back volume.",
              muscles: ["Rhomboids", "Lats"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 4,
            reps: "15",
            details: { description: "Side delt.", muscles: ["Side Deltoid"] },
          },
          {
            name: "Skull Crusher",
            sets: 3,
            reps: "12",
            details: { description: "Tricep long head.", muscles: ["Triceps"] },
          },
          {
            name: "Hammer Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Brachialis.",
              muscles: ["Biceps", "Brachialis"],
            },
          },
        ],
      },
      {
        day: "Day 4 - Hypertrophy Lower",
        focus: "Lower Volume",
        exercises: [
          {
            name: "Front Squat",
            sets: 4,
            reps: "8",
            details: {
              description: "Quad emphasis squat.",
              muscles: ["Quadriceps", "Core"],
            },
          },
          {
            name: "Hip Thrust",
            sets: 4,
            reps: "12",
            details: {
              description: "Glute isolation.",
              muscles: ["Glutes", "Hamstrings"],
            },
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12",
            details: { description: "Quad volume.", muscles: ["Quadriceps"] },
          },
          {
            name: "Bulgarian Split Squat",
            sets: 3,
            reps: "10 each leg",
            details: {
              description: "Unilateral strength.",
              muscles: ["Quadriceps", "Glutes"],
            },
          },
          {
            name: "Leg Curl",
            sets: 3,
            reps: "12",
            details: {
              description: "Hamstring isolation.",
              muscles: ["Hamstrings"],
            },
          },
          {
            name: "Calf Raise",
            sets: 4,
            reps: "15-20",
            details: { description: "Calf volume.", muscles: ["Calves"] },
          },
        ],
      },
      {
        day: "Day 5 - Weak Points + Core",
        focus: "Accessory Work",
        exercises: [
          {
            name: "Lat Pulldown",
            sets: 4,
            reps: "12",
            details: {
              description: "Back width volume.",
              muscles: ["Lats", "Biceps"],
            },
          },
          {
            name: "Dumbbell Lateral Raise",
            sets: 5,
            reps: "15",
            details: {
              description: "Side delt hypertrophy.",
              muscles: ["Side Deltoid"],
            },
          },
          {
            name: "Preacher Curl",
            sets: 3,
            reps: "12",
            details: { description: "Bicep belly.", muscles: ["Biceps"] },
          },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12",
            details: { description: "Tricep volume.", muscles: ["Triceps"] },
          },
          {
            name: "Ab Rollout",
            sets: 4,
            reps: "10",
            details: {
              description: "Core strength.",
              muscles: ["Abs", "Core"],
            },
          },
          {
            name: "Hanging Leg Raise",
            sets: 3,
            reps: "15",
            details: {
              description: "Lower abs.",
              muscles: ["Abs", "Hip Flexors"],
            },
          },
        ],
      },
    ],
  },
];
