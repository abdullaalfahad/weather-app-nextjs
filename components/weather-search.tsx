"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWeatherSearch } from "@/hooks/use-weather-search";

export function WeatherSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, error, searchWeather } = useWeatherSearch();
  const router = useRouter();

  const pathName = usePathname();

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    const data = await searchWeather(searchQuery);

    if (data) {
      router.push(`/weather?city=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-3xl w-full">
        <h2 className="text-white text-2xl font-light text-balance mb-5">
          How's the sky looking today?
        </h2>

        <div className="flex items-center space-x-3 w-full mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5" />
            <Input
              type="text"
              placeholder="Search for a place..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/20 border-white/20 text-white placeholder:text-white/60 rounded-lg h-12 pl-10 pr-4"
            />
          </div>
          <Button
            onClick={handleSearch}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-12 rounded-lg font-medium"
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>

        {error && <p className="text-red-300 text-sm">{error}</p>}

        {!error && pathName === "/" && (
          <div className="pt-16">
            <Search className="w-12 h-12 text-black mx-auto mb-4" />
            <p className="text-white/60 text-center text-sm">
              Search for a city to see weather information
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
