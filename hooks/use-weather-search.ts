// hooks/useWeatherSearch.js
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export const useWeatherSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      return await response.json();
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    searchWeather,
  };
};
