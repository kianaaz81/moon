import React, { useEffect, useState, Suspense } from "react";
import { fetchCurrentWeather, fetchForecast } from "../weatherService";
import Main from "../components/mainComponent/MainDashboard";
import FooterDashboard from "../components/FooterDashboard";
import { CircularProgress, Box } from '@mui/material';

// Lazy load HeaderDashboard
const HeaderDashboard = React.lazy(() => import("../components/headerComponent/HeaderDashboard"));

interface CurrentWeather {
  name: string;
  dt: number;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    main: string;
  }[];
}

const Dashboard: React.FC = () => {
  const [city, setCity] = useState<string>('San Francisco');
  const [current, setCurrent] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (city.trim().length < 2) return;

    const delayDebounce = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);

        const res1 = await fetchCurrentWeather(city);
        const res2 = await fetchForecast(city);

        setCurrent(res1.data);
        const daily = res2.data.list.filter((_: ForecastItem, i: number) => i % 8 === 0);
        setForecast(daily);
      } catch {
        setError('city not found');
        setCurrent(null);
        setForecast([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [city]);

  return (
    <React.Fragment>
      <Suspense fallback={
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '60px',
          bgcolor: 'background.paper'
        }}>
          <CircularProgress size={24} />
        </Box>
      }>
        <HeaderDashboard city={city} onCityChange={setCity} />
      </Suspense>
      <Main loading={loading} error={error} current={current} forecast={forecast} />
      <FooterDashboard />
    </React.Fragment>
  );
};

export default Dashboard;