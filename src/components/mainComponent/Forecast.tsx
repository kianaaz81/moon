import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';  
import clear3d from '../../assets/clearweather.png';  
import clouds3d from '../../assets/cloudyweather.png'; 
import rain3d from '../../assets/rainweather.png';
import snow3d from '../../assets/snowweather.png';
import mist3d from '../../assets/mistweather.png';
import drizzle3d from '../../assets/Drizzleweather.png';
import thunder3d from '../../assets/Thunderstormweather.png';
import { useThemeContext } from '../../context/themeContext';

interface ForecastItem {
    dt: number;
    main: {
      temp: number;
    };
    weather:{
      icon:string;
      main: string;
    }[];
  }

type ForecastProps = {
  data: ForecastItem[];
}

const weather3dIcons: Record<string, string> = {
  Clear: clear3d,
  Clouds: clouds3d,
  Rain: rain3d,
  Snow: snow3d,
  Mist: mist3d,
  Drizzle: drizzle3d,
  Thunderstorm: thunder3d,
};

const Forecast: React.FC<ForecastProps> = ({ data }) => {
  const {mode}=useThemeContext();
  const {t} = useTranslation(); 

  const getTranslatedDay = (timestamp: number) => {
    const dayName = new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    return t(`days.${dayName}`);
  };

  return (
    <Box sx={{ 
      m: 3, 
      width: '100%' ,  
      bgcolor: mode === 'dark' ? '#292f44' : '#e1e9ee' , 
      height:{xs: 300 , sm: 370 , md: 470},
      borderRadius: 4,
      mx: {xs: 0, sm: 0.5},
      boxShadow:  mode === 'dark'
      ? '0 2px 12px 0 rgba(31, 38, 135, 0.30)'
      : '0 2px 12px 0 rgba(31, 38, 135, 0.10)',
      }}>
      <Typography  gutterBottom 
      sx={{
        fontSize:{ xs: 18 , sm: 24}, 
        fontWeight:600 , 
        pl: {xs: 2 , sm: 5},
        pr: {xs: 2 , sm: 5},
        pt: {xs: 2 , sm: 3},
         }}>
        {t('forecast')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          width: '100%',
          height: {xs: 220 , sm: 280 , md: 380},
          pl: {xs:0 , sm: 4},
          pr: {xs:0 , sm: 4},
          pt:{xs:1 , sm: 3}

        }}
      >
        {data.map((item, index) => {
          const main = item.weather[0]?.main || 'Clear';
          const icon3d = weather3dIcons[main] || weather3dIcons['Clear'];
          return (
            <Paper
              key={index}
              elevation={3}
              sx={{
                flex: '1 1 0', 
                minWidth: {xs: 80 , sm: 150},
                mx: 1,
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 2,
                bgcolor: mode === 'dark' ? '#3f4861' : '#cdd9e0',
                boxSizing: 'border-box',
              }}
            >
              <Typography 
              color="text.secondary" 
              align="center" 
              noWrap 
              sx={{ 
                fontSize: { xs: 12, sm: 20 }  , 
                fontWeight: {xs : 200 , sm: 500} , 
                pt: 3
                }}>
                {getTranslatedDay(item.dt)}
              </Typography>
              <Divider 
                sx={{ 
                  width: '40%', 
                  border: 'none',
                  bgcolor: mode == 'dark' ?' rgb(172, 172, 172) ':'rgba(0, 0, 0, 0.25)',
                  boxShadow: mode === 'dark' 
                  ? '0px 8px 8px 1.5px rgb(172, 172, 172)' 
                  : '0px 8px 8px 1.5px rgba(0, 0, 0, 0.25)',
                  my: 1 
                }} 
              />
              <Box 
              sx={{    
                my: { xs: 2, sm: 2 },
                height: { xs: 60 , sm: 80, md: 150 }, 
                pt: {md : 5}
                 }}>
                <img
                  src={icon3d}
                  alt={main}
                  style={{  width: 'auto', height: '100%' }}
                />
              </Box>
              <Typography variant="h6" 
              sx={{ 
                fontWeight: 600, 
                fontSize: { xs: 14, sm: 18 },
                pt: {md : 4}
                 }}>
                  
                {Math.round(item.main.temp)}°C
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
  };

export default Forecast;