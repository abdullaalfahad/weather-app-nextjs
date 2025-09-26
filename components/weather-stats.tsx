"use client";

import { Thermometer, Droplets, Wind } from "lucide-react";
import type { WeatherData } from "@/types/weather";

interface WeatherStatsProps {
  weatherData: WeatherData;
}

export function WeatherStats({ weatherData }: WeatherStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
      <div className="text-center">
        <Thermometer className="w-5 h-5 mx-auto mb-1 opacity-75" />
        <div className="text-lg font-medium">{weatherData.feelsLike}°</div>
        <div className="text-xs opacity-75">Feels like</div>
      </div>
      <div className="text-center">
        <Droplets className="w-5 h-5 mx-auto mb-1 opacity-75" />
        <div className="text-lg font-medium">{weatherData.humidity}%</div>
        <div className="text-xs opacity-75">Humidity</div>
      </div>
      <div className="text-center">
        <Wind className="w-5 h-5 mx-auto mb-1 opacity-75" />
        <div className="text-lg font-medium">{weatherData.windSpeed} km/h</div>
        <div className="text-xs opacity-75">Wind</div>
      </div>
    </div>
  );
}
