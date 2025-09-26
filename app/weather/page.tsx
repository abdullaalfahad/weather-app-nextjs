import { redirect } from "next/navigation";
import { getWeatherData } from "@/lib/weather-api";
import { WeatherCard } from "@/components/weather-card";
import { DailyForecast } from "@/components/daily-forcast";
import { ForecastDay, WeatherData } from "@/types/weather";
import { HourlyForecast } from "@/components/hourly-forcast";
import { WeatherSearch } from "@/components/weather-search";
import type { HourlyForecast as HourlyForecastType } from "@/types/weather";

interface WeatherPageProps {
  searchParams: Promise<{ city: string }>;
}

export default async function WeatherPage({ searchParams }: WeatherPageProps) {
  const { city } = await searchParams;

  if (!city) {
    redirect("/");
  }

  let weatherData: WeatherData | undefined = undefined;
  let forecast: ForecastDay[] = [];
  let hourlyForecast: HourlyForecastType[] = [];

  try {
    const data = await getWeatherData(city);
    weatherData = data.weatherData;
    forecast = data.forecast;
    hourlyForecast = data.hourlyForecast;
  } catch (err) {
    weatherData = undefined;
    forecast = [];
    hourlyForecast = [];
    console.log(err);
  }

  return (
    <div>
      <WeatherSearch />
      {weatherData ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
          <div className="lg:col-span-2 space-y-6">
            <WeatherCard weatherData={weatherData} />
            {forecast?.length > 0 && <DailyForecast forecast={forecast} />}
          </div>

          {hourlyForecast && hourlyForecast.length > 0 && (
            <div>
              <HourlyForecast hourlyForecast={hourlyForecast} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
