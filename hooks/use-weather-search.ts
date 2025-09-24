// hooks/useWeatherSearch.js
import { useState } from "react";

export const useWeatherSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=9d729cfd40c256defac28e6a8266b774&units=metric`
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
