"use client";

import { useState } from "react";

const OPENWEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export function useCityAutocomplete() {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (query: string) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          query
        )}&limit=5&appid=${OPENWEATHER_API_KEY}`
      );
      const data = await res.json();
      setSuggestions(data || []);
    } catch (err) {
      console.error("Error fetching city suggestions:", err);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  return { suggestions, fetchSuggestions, loading, setSuggestions };
}
