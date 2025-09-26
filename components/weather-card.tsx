"use client";

import { Card } from "@/components/ui/card";
import { WeatherStats } from "./weather-stats";
import type { WeatherData } from "@/types/weather";

interface WeatherCardProps {
  weatherData: WeatherData;
}

export function WeatherCard({ weatherData }: WeatherCardProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">
            {weatherData.name}, {weatherData.country}
          </h3>
          <p className="text-sm opacity-75">
            {new Date().toLocaleDateString("en", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-6xl font-light">
              {weatherData.temperature}°
            </div>
            <p className="text-lg capitalize opacity-90">
              {weatherData.description}
            </p>
          </div>
          <div className="text-right">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt={weatherData.description}
              className="w-20 h-20"
            />
          </div>
        </div>

        <WeatherStats weatherData={weatherData} />
      </div>
    </Card>
  );
}
