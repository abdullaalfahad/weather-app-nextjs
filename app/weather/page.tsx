import { redirect } from "next/navigation";
import { getWeatherData } from "@/lib/weather-api";
import { WeatherCard } from "@/components/weather-card";

interface WeatherPageProps {
  searchParams: { city?: string };
}

export default async function WeatherPage({ searchParams }: WeatherPageProps) {
  const city = searchParams.city;

  if (!city) {
    redirect("/");
  }

  let weatherData, forecast, hourlyForecast, error;

  try {
    const data = await getWeatherData(city);
    weatherData = data.weatherData;
    forecast = data.forecast;
    hourlyForecast = data.hourlyForecast;
  } catch (err) {
    error = err instanceof Error ? err.message : "An error occurred";
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {weatherData ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <WeatherCard weatherData={weatherData} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
