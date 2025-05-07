import React from "react";
import CurrentWeather from "./CurrentWeather";
import { Box, Typography, CircularProgress } from '@mui/material';
import WeatherChart from "./weatherChart";
import ForecastWeather from "./Forecast"; 

interface MainProps {
    loading: boolean;
    error: string | null;
    current: {
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
    } | null;
    forecast: {
      dt: number;
      main: {
        temp: number;
      };
      weather: {
        icon: string;
        main: string;
      }[];
    }[];
  }

const Main: React.FC<MainProps> = ({ loading, error, current, forecast }) =>{
    return(
      <React.Fragment>
        <Box p={2}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
          }}>
            {loading && <CircularProgress />}
            {error && <Typography color="error" variant="h6">{error}</Typography>}
          </Box>
          
          <Box sx={{
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: {xs: 'column', sm: 'row', md: 'row'}
          }}>
            {current && <CurrentWeather data={current} />}
            <WeatherChart/>
          </Box>
        
          {forecast.length > 0 && <ForecastWeather data={forecast} />}
        </Box>
      </React.Fragment>
    )
}
export default Main;