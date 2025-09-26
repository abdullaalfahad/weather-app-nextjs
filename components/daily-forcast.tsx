"use client";

import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./weather-icon";
import type { ForecastDay } from "@/types/weather";

interface DailyForecastProps {
  forecast: ForecastDay[];
}

export function DailyForecast({ forecast }: DailyForecastProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
      <h4 className="text-lg font-medium mb-4">Daily Forecast</h4>
      <div className="grid grid-cols-7 gap-2">
        {forecast.map((day, index) => (
          <div key={index} className="text-center space-y-2">
            <div className="text-sm opacity-75">{day.day}</div>
            <div className="flex justify-center">
              <WeatherIcon iconCode={day.icon} />
            </div>
            <div className="text-sm">
              <div className="font-medium">{day.high}°</div>
              <div className="opacity-75">{day.low}°</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
