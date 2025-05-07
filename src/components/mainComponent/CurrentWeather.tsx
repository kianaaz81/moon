import { Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import {useTranslation} from 'react-i18next';
import LocationIcon from '@mui/icons-material/LocationOn';
import clear3d from '../../assets/clearweather.png';
import clouds3d from '../../assets/cloudyweather.png';
import rain3d from '../../assets/rainweather.png';
import snow3d from '../../assets/snowweather.png';
import mist3d from '../../assets/mistweather.png';
import drizzle3d from '../../assets/Drizzleweather.png';
import thunder3d from '../../assets/Thunderstormweather.png';
import { useThemeContext } from '../../context/themeContext';

interface CurrentWeatherData {
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

type CurrentWeatherProps = {
  data: CurrentWeatherData;
};

const weather3dIcons: Record<string, string> = {
  Clear: clear3d,
  Clouds: clouds3d,
  Rain: rain3d,
  Snow: snow3d,
  Mist: mist3d,
  Drizzle: drizzle3d,
  Thunderstorm: thunder3d,
};

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  const {mode}=useThemeContext();
  const {t , i18n}=useTranslation();
  const locale = i18n.language === 'fa' ? 'fa-IR' : 'en-US';
  
  const date = new Date(data.dt * 1000);
  const day= date.toLocaleDateString(locale , {weekday: 'long'});
  const time= date.toLocaleDateString(locale , {hour: '2-digit' , minute: '2-digit'})

  const weatherMain = data.weather[0]?.main || 'Clouds';
  const icon3d = weather3dIcons[weatherMain] || clouds3d;

  return(
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 4,
        maxWidth: { xs: '100%', sm: '70%' ,md: '50%'},
        mx: { xs: 0, sm: 3 },
        my: 3,
        bgcolor: mode === 'dark' ? '#292f44' : '#e1e9ee',
        boxShadow:  mode === 'dark'
        ? '0 2px 12px 0 rgba(31, 38, 135, 0.30)'
        : '0 2px 12px 0 rgba(31, 38, 135, 0.10)',
        display: 'flex',
        flexDirection: { xs: "row", sm: "row" }, 
        alignItems: 'center',
        minHeight: 200,
        gap: 2,
      }}
    >
      <Box sx={{ flex: 1 , width: { xs: "100%", sm: 400 }, display: 'grid' , gap: 4}}>
        <Box
          sx={{
            bgcolor:'#cdd9e0',
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 3,
            px: 2,
            py: 0.5,
          }}
        >
          <LocationIcon sx={{ mr: 1, fontSize: 25, color: '#5a6a7a' }} />
          <Typography  sx={{ color: '#3d4852' , fontWeight: 500 , fontSize:16}}>
            {data?.name || t('unknown_location')}
          </Typography>
        </Box>
        <Box>
          <Typography  sx={{ color: mode === 'dark' ? '#f3f4f7' : '#003464' , fontWeight: 700, mb: 0.5 , fontSize: 32}}>
          {day}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
          <Typography variant="body2" sx={{fontSize:14, color:  mode === 'dark' ? '#f3f4f7' : '#003464' }}>
            {time}
          </Typography>
        </Stack>
        </Box>
       <Box>
        <Typography variant="h3" sx={{ color:  mode === 'dark' ? '#f3f4f7' : '#003464', fontWeight: 700, lineHeight: 1.1 }}>
          {Math.round(data.main.temp) || t('no_data')}
          <Box component="span" sx={{ fontSize: 32, fontWeight: 400  }}>° C</Box>
        </Typography>
        <Typography variant="body2" sx={{ color: mode === 'dark' ? '#f3f4f7' : '#003464', mt: 0.5 }}>
          {t('high')} {Math.round(data?.main?.temp_max) || t('no_data')} / {t('low')} {Math.round(data?.main?.temp_min) || t('no_data')}
        </Typography>
       </Box>
      </Box>
      
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'end' }}>
        <img
          src={icon3d}
          alt={weatherMain}
          style={{
            width: 250,
            height: 187,
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.10))',
          }}
        />
        <Typography sx={{ color:  mode === 'dark' ? '#f3f4f7' : '#003464', fontWeight: 600 , fontSize:32 }}>
          {t(`weather.${weatherMain}`) || weatherMain}
        </Typography>
        <Typography sx={{ color: mode === 'dark' ? '#f3f4f7' : '#003464',  fontWeight: 400 , fontSize:16 }}>
          {t('feels_like')} {Math.round(data.main.feels_like) || t('no_data')}
        </Typography>
      </Box>
    </Paper>
  )
};

export default CurrentWeather;