"use client";

import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./weather-icon";
import type { HourlyForecast as HourlyForecastType } from "@/types/weather";

interface HourlyForecastProps {
  hourlyForecast: HourlyForecastType[];
}

function formatHour(timeString: string) {
  const date = new Date(timeString);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: true,
  }).format(date);
}

export function HourlyForecast({ hourlyForecast }: HourlyForecastProps) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
      <h4 className="text-lg font-medium mb-4">Hourly Forecast</h4>
      <div className="space-y-3">
        {hourlyForecast.map((hour, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="text-sm opacity-75">{formatHour(hour.time)}</div>
            <div className="flex items-center space-x-2">
              <WeatherIcon iconCode={hour.icon} />
              <span className="text-sm font-medium">{hour.temperature}°</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
