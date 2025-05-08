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

const WeatherChart = () => {
  const {colors} = useThemeContext();
  const {t} = useTranslation();  
  const theme = useTheme();
  const { direction, fontFamily, numberFormat } = useLanguageContext();
  
  const translatedData = data.map(item => ({
    ...item,
    month: t(`months.${item.month}`),
  }));

  return(
    <Box 
      sx={{
        p: { xs: 1.5, sm: 2 },
        borderRadius: 3,
        bgcolor: colors.bgColorMain,
        boxShadow: colors.shadow,
        width: 1,
        maxWidth: {
          xs: '100%',
          sm: '90%',
          md: '70%',
          lg: '60%',
          xl: '50%'
        },
        mx: 'auto',
        my: 3,
        minHeight: 250,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        fontFamily: fontFamily,
        overflow: 'hidden',
      }}
      >
      <Typography 
        variant="h6"
        gutterBottom
        sx={{
          textAlign: 'start',
          fontWeight: 700, 
          color: colors.colorMain,
          pr: {xs: 2, sm: 5},
          pl: {xs: 4, sm: 5},
          fontSize: { xs: '1rem', sm: '1.25rem' },
          fontFamily: fontFamily
        }}
        >
        {t('average_monthly_temperature')}
      </Typography>

      <Box sx={{ 
        flex: 1, 
        height: { 
          xs: 250, 
          sm: 280, 
          md: 320, 
          lg: 360 
        },
        width: '100%',
        overflow: 'hidden'
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={translatedData} 
            margin={{ 
              top: 10, 
              bottom: 10,
              left: direction === 'rtl' ? 40 : 10,
              right: direction === 'rtl' ? 10 : 40
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={colors.bgColorChart} />
            <XAxis 
              dataKey="month" 
              tick={{ 
                fontSize: 12,
                fill: colors.colorMain,
                fontFamily: fontFamily
              }}
            />
            <YAxis
              domain={[10, 40]}
              unit="°C"
              tick={{
                fontSize: 12,
                fill: colors.colorMain,
                fontFamily: fontFamily
              }}
              orientation={direction === 'rtl' ? 'right' : 'left'}
              tickMargin={direction === 'rtl' ? 30 : 8}
              tickFormatter={(value) => new Intl.NumberFormat(numberFormat).format(value)}
            />
            <Tooltip
              contentStyle={{
                background: colors.bgColorMain, 
                borderRadius: 8,
                border: 'none',
                boxShadow: theme.shadows[2],
                fontSize: 13,
                fontFamily: fontFamily
              }}
            />
            <Line
              type="linear"
              dataKey="temp"
              stroke={theme.palette.primary.main}
              strokeWidth={3}
              dot={false} 
              activeDot={{ 
                r: 6, 
                stroke: theme.palette.primary.main, 
                strokeWidth: 2, 
                fill: '#fff' 
              }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}

export default WeatherChart;