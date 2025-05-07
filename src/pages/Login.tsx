import React, { FormEvent, useState } from "react";
import loginLight from "../assets/login-img.png";
import loginDark from '../assets/loginDark-img.png'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';  
import { Box, InputLabel, MenuItem, Select, FormControl, Typography, Button, TextField } from '@mui/material'; 
import { useThemeContext } from "../context/themeContext";
import { useLanguageContext } from "../context/languageContext";

const Login: React.FC =()=>{
   const {mode}=useThemeContext();
   const { direction, language, setLanguage } = useLanguageContext();
   const [name, setName] = useState<string>('');
   const { t } = useTranslation();  
   const navigate = useNavigate();

   const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     navigate('/Dashboard');
   }

    return(
      <Box dir={direction} 
      sx={{ 
        display: 'flex',  
        flexDirection: 'column', 
        alignItems: 'center' , 
        m: 5 
        }}>
      <Box
        sx={{
          borderRadius: 4,
          mt: 4,
          mb: 4,
          display: 'flex',
          flexDirection: { xs: 'row', md: 'row' },
          alignItems: 'center',
          minHeight: 400,
          boxShadow: 3,
          bgcolor: mode === 'dark' ? '#292f45' : '#fff',
          overflow: 'hidden',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: { xs: '85%', md: '50%' },
            p: 5,
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: mode === 'dark' ? '#292f45' : '#fff',
          }}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ pb: 2 }}>
            {t('login')}
          </Typography>
          <TextField
            fullWidth
            label={t('namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            required
            sx={{ mb: 17}}
          />
          <Button type="submit" variant="contained" fullWidth sx={{bgcolor: '#2196f3'}}>
            {t('loginButton')}
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: 200, md: 'auto' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={mode === 'dark' ? loginDark : loginLight}
            alt="weather pic"
            sx={{ 
              width: {xs: '100%', md: '100%'},
              height: 'auto',
              minHeight: 400,
            }}
          />
        </Box>
      </Box>
      <Box mt={2}>
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
          <InputLabel>{t('language')}</InputLabel>
          <Select value={language} onChange={(e) => setLanguage(e.target.value as 'en' | 'fa')}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fa">Persian</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>        
    )
}
export default Login;