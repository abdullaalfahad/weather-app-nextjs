# 🌦 Weather App (Next.js)

A responsive weather application built with **Next.js 15**, **React 19**, **TailwindCSS**, and **Biome**.  
It fetches real-time weather data from the **OpenWeatherMap API** and displays current, hourly, and 7-day forecasts.

---

## ✨ Features

- 🔍 **City Search** – Search weather by city name with autocomplete support
- 🌡 **Current Weather** – Temperature, condition, city & country, current date
- 📊 **Weather Statistics** – Feels like, humidity, wind speed, precipitation/pressure
- 📅 **Forecasts** – 7-day forecast (high/low temps, icons) and hourly forecast (8+ hours)
- 🎨 **Responsive UI** – Works seamlessly on mobile and desktop
- ⚡ **Fast Build** – Uses Next.js **Turbopack**
- 🛠 **Developer Tools** – Code formatting and linting with **Biome**

---

## 📸 Design Reference

This project follows the provided Figma design:  
👉 [Figma Link](https://www.figma.com/design/kYIFVoln5iuxQqWZQDoy6F/weather-app?node-id=156-791&t=XyZL0MQEa5GEexbQ-1)

---

## 🚀 Tech Stack

- [Next.js 15](https://nextjs.org/) (with Turbopack)
- [React 19](https://react.dev/)
- [TailwindCSS 4](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Biome](https://biomejs.dev/) (linting & formatting)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## ⚙️ Installation & Setup

Clone the repo:

```bash
git clone https://github.com/your-username/weather-app-nextjs.git
cd weather-app-nextjs
```

Install dependencies with **pnpm**:

```bash
pnpm install
```

Create a `.env.local` file in the root directory and add your OpenWeather API key:

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

---

## 🏃 Development

Run the app in development mode:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## 🧹 Code Quality

Format code:

```bash
pnpm format
```

Lint code:

```bash
pnpm lint
```

---

## 🌍 Deployment

This app can be easily deployed to **Vercel** (recommended) or other platforms like DigitalOcean, AWS, or Railway.

For Vercel:

1. Push your code to GitHub.
2. Import your repo into [Vercel](https://vercel.com/).
3. Add your environment variables.
4. Deploy 🎉

---

## 📂 Project Structure

```
weather-app-nextjs/
├── app/               # Next.js App Router
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── public/            # Static assets
├── styles/            # Tailwind / global styles
├── types/             # TypeScript types
├── .env.local         # Environment variables
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## 📜 License

This project is licensed under the **MIT License**.
