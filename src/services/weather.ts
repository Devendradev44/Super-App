import axiosInstance from "@/lib/axios";
import type { WeatherData } from "@/types/weather";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export const getWeather = async (
  city = "Bangalore"
): Promise<WeatherData> => {
  const response = await axiosInstance.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    }
  );

  const data = response.data;

  return {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    condition: data.weather[0].main,
    icon: data.weather[0].icon,
  };
};