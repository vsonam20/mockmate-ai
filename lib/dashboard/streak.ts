type Interview = {
  created_at: string;
};

export function calculateStreak(interviews: Interview[]) {
  if (!interviews.length) {
    return {
      streak: 0,
      message: "Complete your first interview today!",
    };
  }

  // Get unique interview days
  const days = new Set(
    interviews.map((i) =>
      new Date(i.created_at).toISOString().split("T")[0]
    )
  );

  let streak = 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  while (true) {
    const day = today.toISOString().split("T")[0];

    if (days.has(day)) {
      streak++;
      today.setDate(today.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    streak,
    message:
      streak === 0
        ? "Complete your first interview today!"
        : "Keep it alive today!",
  };
}