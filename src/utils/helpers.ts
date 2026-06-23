export const truncateText = (
  text: string,
  maxLength = 120
): string => {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength) + "...";
};

export const formatTemperature = (temp: number) => {
  return `${Math.round(temp)}°C`;
};

export const formatTime = (value: number) => {
  return value.toString().padStart(2, "0");
};