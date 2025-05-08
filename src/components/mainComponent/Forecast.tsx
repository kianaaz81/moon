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
import { useLanguageContext } from '../../context/languageContext';

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
  const {colors}=useThemeContext();
  const {t , i18n} = useTranslation(); 
  const {numberFormat} = useLanguageContext();

  const getTranslatedDay = (timestamp: number) => {
    const locale = i18n.language === 'fa' ? 'fa-IR' : 'en-US';
    const dayName = new Date(timestamp * 1000).toLocaleDateString(locale, { weekday: 'long' });
    return dayName;
  };

  return (
    <Box sx={{ 
      m: 5, 
      width: '100%' ,  
      bgcolor: colors.bgColorMain, 
      borderRadius: 4,
      px: { xs: 1, sm: 4 },
      py: { xs: 2, sm: 3 },
      mx: {xs: 0, sm: 0.5},
      boxShadow:  colors.shadow,
      }}>
      <Typography  
      gutterBottom 
      sx={{
        fontSize:{ xs: 18 , sm: 24}, 
        fontWeight:600 , 
        pl: {xs: 2 , sm: 5},
         }}>
        {t('forecast')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          overflowX: 'hidden',
          width: '100%',
          height: {xs: 220 , sm: 280 , md: 380},
          pl: {xs:0 , sm: 4},
          pt:{xs:0.5 , sm: 2}
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
                flex: 1, 
                minWidth: 0,
                mx: 1,
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 2,
                bgcolor: colors.bgColorForecast,
                boxSizing: 'border-box',
              }}
            >
              <Typography 
              color="text.secondary" 
              align="center" 
              noWrap 
              sx={{ 
                fontSize: { xs: 12, sm: 16 , md: 20}  , 
                fontWeight: {xs : 200 , sm: 500} , 
                pt: 2
                }}>
                {getTranslatedDay(item.dt)}
              </Typography>
              <Divider 
                sx={{ 
                  width: '40%', 
                  border: 'none',
                  bgcolor: colors.bgColorForecast,
                  boxShadow: colors.shadowForecast,
                  my: 1 
                }} 
              />
              <Box 
              sx={{    
                my: { xs: 2, sm: 2 },
                height: { xs: 60 , sm: 80, md: 150 }, 
                 }}
                 >
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
                  {new Intl.NumberFormat(numberFormat).format(Math.round(item.main.temp))}°C
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
  };

export default Forecast;