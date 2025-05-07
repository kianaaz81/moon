import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';
import { useThemeContext } from '../../context/themeContext';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { useLanguageContext } from '../../context/languageContext';

type MonthlyTemp = {
    month: string; 
    temp: number;  
  };
  
  const data: MonthlyTemp[] = [
    { month: 'Jan', temp: 15 },
    { month: 'Feb', temp: 25 },
    { month: 'Mar', temp: 20 },
    { month: 'Apr', temp: 15 },
    { month: 'May', temp: 25 },
    { month: 'Jun', temp: 37 },
    { month: 'Jul', temp: 29 },
    { month: 'Aug', temp: 32 },
    { month: 'Sep', temp: 38 },
    { month: 'Oct', temp: 25 },
    { month: 'Nov', temp: 28 },
    { month: 'Dec', temp: 31 },
  ];

const WeatherChart =()=>{
  const {mode}=useThemeContext();
  const {t} = useTranslation();  
  const theme = useTheme();
  const { direction } = useLanguageContext();
  
     const translatedData = data.map(item => ({
      ...item,
      month: t(`months.${item.month}`),
    }));

    return(
      <Box 
        sx={{
          p: { xs: 1, sm: 2 },
          borderRadius: 3,
          bgcolor: mode === 'dark' ? '#292f44' : '#e1e9ee',
          boxShadow:  mode === 'dark'
          ? '0 2px 12px 0 rgba(31, 38, 135, 0.30)'
          : '0 2px 12px 0 rgba(31, 38, 135, 0.10)',
          width: '100%',
          maxWidth: { xs: '100%', sm: '70%' ,md: ' 50%'},
          mx: 'auto',
          my: 3,
          minHeight: 250,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
       <Typography 
         variant="h6"
         gutterBottom
         sx={{
           textAlign: 'start',
           fontWeight: 700, 
           color: mode === 'dark' ? '#f3f4f7' : '#003464' ,
           pr: {xs: 2 , sm: 5},
         }}>
         {t('average_monthly_temperature')}
       </Typography>
        <Box sx={{ flex: 1, minHeight: 200 , height: { xs: 250, sm: 300, md: 350 }, }}>
          <ResponsiveContainer width="100%" height="100%" minHeight="100%">
            <LineChart 
              data={translatedData} 
              margin={{ 
                top: 10, 
                bottom: 10,
                left: direction === 'rtl' ? 40 : 10,
                right: direction === 'rtl' ? 10 : 40
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={mode === 'dark' ? '#444' : '#ccc'} />
              <XAxis dataKey="month" tick={{ fontSize: 12 ,fill: mode === 'dark' ? '#f3f4f7' : '#003464' }}/>
             <YAxis
               domain={[10, 40]}
               unit="°C"
               tick={{
                fontSize: 12,
                fill: mode === 'dark' ? '#f3f4f7' : '#003464'
               }}
               orientation={direction === 'rtl' ? 'right' : 'left'}
               tickMargin={direction === 'rtl' ? 30 : 8}
             />
              <Tooltip
                contentStyle={{
                  background: mode === 'dark' ? '#23263a' : '#fff',
                  borderRadius: 8,
                  border: 'none',
                  boxShadow: theme.shadows[2],
                  fontSize: 13,
                }}
              />
              <Line
                type="linear"
                dataKey="temp"
                stroke={theme.palette.primary.main}
                strokeWidth={3}
                dot={false} 
                activeDot={{ r: 6, stroke: theme.palette.primary.main, strokeWidth: 2, fill: '#fff' }} 
                />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    )
}
export default WeatherChart;