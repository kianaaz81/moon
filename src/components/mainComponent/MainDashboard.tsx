import React from "react";
import CurrentWeather from "./CurrentWeather";
import { Box , CircularProgress } from '@mui/material';
import WeatherChart from "./weatherChart";
import ForecastWeather from "./Forecast"; 
import Lottie from "lottie-react";
import nonDataFoundAnimation from "../../Animation - 1746707980850.json";

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
        <Box sx={{ 
          p: { xs: 1, sm: 2, md: 3 },
          width: '100%',
          maxWidth: '1400px',
          mx: 'auto'
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            pt: 2
          }}>
            {loading && <CircularProgress />}
            {error && 
            (<Lottie 
            animationData={nonDataFoundAnimation} 
            style={{ width: 150, height: 100 }}
            loop={true} 
            />
            )}
          </Box>
          
          <Box sx={{
            display: 'grid',
          }}>
          <Box sx={{
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: { xs: 'column', sm: 'row'},
          }}>
            {current && <CurrentWeather data={current} />}
            <WeatherChart/>
          </Box>
        
          {forecast.length > 0 && <ForecastWeather data={forecast} />}
          </Box>

        </Box>
      </React.Fragment>
    )
}
export default Main;