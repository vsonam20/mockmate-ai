export function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return {
      greeting: "Good Morning",
      emoji: "☀️",
    };
  }

  if (hour < 18) {
    return {
      greeting: "Good Afternoon",
      emoji: "🌤️",
    };
  }

  return {
    greeting: "Good Evening",
    emoji: "🌙",
  };
}