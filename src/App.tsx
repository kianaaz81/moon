import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { lightTheme, darkTheme } from './theme';
import { ThemeProviderCustom, useThemeContext } from './context/themeContext';
import './i18n';
import { ThemeProvider, CssBaseline, CircularProgress, Box } from '@mui/material';
import { LanguageProvider } from './context/languageContext';
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));

const LoadingFallback = () => (
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    <CircularProgress />
  </Box>
);

const AppContext = () => {
  const { mode } = useThemeContext();
  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route 
            path='/dashboard' 
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Dashboard />
              </Suspense>
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

function App() {
  return (
    <ThemeProviderCustom>
      <LanguageProvider>
        <AppContext/>
      </LanguageProvider>
    </ThemeProviderCustom>
  );
}

export default App
