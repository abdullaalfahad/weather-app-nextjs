export interface WeatherData {
  name: string;
  country: string;
  temperature: number;
  description: string;
  icon: string;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
}

export interface ForecastDay {
  date: string;
  day: string;
  high: number;
  low: number;
  icon: string;
  description: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  icon: string;
}
