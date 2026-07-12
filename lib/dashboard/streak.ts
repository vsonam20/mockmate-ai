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

  // Unique interview days
  const days = new Set(
    interviews.map((i) =>
      new Date(i.created_at).toISOString().split("T")[0]
    )
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Decide where to start counting
  let currentDay = new Date(today);

  const todayString = today.toISOString().split("T")[0];
  const yesterdayString = yesterday.toISOString().split("T")[0];

  if (!days.has(todayString)) {
    if (days.has(yesterdayString)) {
      currentDay = yesterday;
    } else {
      return {
        streak: 0,
        message: "Complete your first interview today!",
      };
    }
  }

  let streak = 0;

  while (true) {
    const day = currentDay.toISOString().split("T")[0];

    if (days.has(day)) {
      streak++;
      currentDay.setDate(currentDay.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    streak,
    message:
      streak > 0
        ? "Keep it alive today!"
        : "Complete your first interview today!",
  };
}