import React from "react"
import { Box, Typography } from '@mui/material';
import SearchBar from "./Searchbar";
import Setting from "./Setting";
import logo from '../../assets/logo.png';
import { useThemeContext } from "../../context/themeContext";
import { useTranslation } from "react-i18next";
interface HeaderProps {
  city: string;
  onCityChange: (city: string) => void;
}

const HeaderComponent: React.FC<HeaderProps>=({ city, onCityChange })=>{
  const {mode} = useThemeContext();
  const {t} = useTranslation();
    return(
        <React.Fragment>
          <Box sx={{
            display:"flex" ,
            justifyContent:"space-between", 
            alignItems:"center", 
            p:2 , 
            boxShadow: mode === 'dark' 
            ? '0px 4px 10px 0px rgb(110, 110, 110)' 
            : '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
            bgcolor: mode === 'dark' ? '#292f45' : '#fff',
            }}
            >
           <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <img src={logo} alt="logo" style={{ width: 50, height: 50 , borderRadius: '50%'}} /> 
            <Typography 
            sx={{ 
              fontWeight: 400, 
              color: mode === 'dark' ? '#f3f4f7' : '#003464'  , 
              fontSize: 16}}
              >{t('weather_dashborad')}
            </Typography>
           </Box>
              <Box display="flex" justifyContent="space-between"  alignItems="center" >
                <SearchBar city={city} onCityChange={onCityChange} />
                <Setting/>
              </Box>
          </Box>  
        </React.Fragment>
    )
}
export default HeaderComponent;
