"use client";

import { Sun, Cloud, CloudRain, CloudSnow, Zap } from "lucide-react";

interface WeatherIconProps {
  iconCode: string;
  className?: string;
}

export function WeatherIcon({
  iconCode,
  className = "w-6 h-6",
}: WeatherIconProps) {
  const code = iconCode.substring(0, 2);

  switch (code) {
    case "01":
      return <Sun className={className} />;
    case "02":
    case "03":
    case "04":
      return <Cloud className={className} />;
    case "09":
    case "10":
      return <CloudRain className={className} />;
    case "11":
      return <Zap className={className} />;
    case "13":
      return <CloudSnow className={className} />;
    default:
      return <Sun className={className} />;
  }
}
