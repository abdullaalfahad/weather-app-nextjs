import type { WeatherData, ForecastDay, HourlyForecast } from "@/types/weather";

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export async function getWeatherData(query: string): Promise<{
  weatherData: WeatherData;
  forecast: ForecastDay[];
  hourlyForecast: HourlyForecast[];
}> {
  try {
    // Fetch current weather
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`,
      { cache: "no-store" }
    );

    if (!currentResponse.ok) {
      throw new Error("City not found");
    }

    const currentData = await currentResponse.json();

    const weatherData: WeatherData = {
      name: currentData.name,
      country: currentData.sys.country,
      temperature: Math.round(currentData.main.temp),
      description: currentData.weather[0].description,
      icon: currentData.weather[0].icon,
      feelsLike: Math.round(currentData.main.feels_like),
      humidity: currentData.main.humidity,
      windSpeed: Math.round(currentData.wind.speed * 3.6),
      pressure: currentData.main.pressure,
    };

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`,
      { cache: "no-store" }
    );

    let forecast: ForecastDay[] = [];
    let hourlyForecast: HourlyForecast[] = [];

    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();

      const dailyForecasts: ForecastDay[] = [];
      const processedDates = new Set();

      forecastData.list.forEach((item: any) => {
        const date = new Date(item.dt * 1000);
        const dateStr = date.toDateString();

        if (!processedDates.has(dateStr) && dailyForecasts.length < 7) {
          processedDates.add(dateStr);
          dailyForecasts.push({
            date: dateStr,
            day: date.toLocaleDateString("en", { weekday: "short" }),
            high: Math.round(item.main.temp_max),
            low: Math.round(item.main.temp_min),
            icon: item.weather[0].icon,
            description: item.weather[0].description,
          });
        }
      });

      forecast = dailyForecasts;

      hourlyForecast = forecastData.list.slice(0, 8).map((item: any) => ({
        time: new Date(item.dt * 1000).toISOString(),
        temperature: Math.round(item.main.temp),
        icon: item.weather[0].icon,
      }));
    }

    return { weatherData, forecast, hourlyForecast };
  } catch (error) {
    throw new Error("City not found. Please try again.");
  }
}
