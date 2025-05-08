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
  const {colors} = useThemeContext();
  const {t} = useTranslation();
    return(
        <React.Fragment>
          <Box sx={{
            display:"flex" ,
            justifyContent:"space-between", 
            alignItems:"center", 
            p:2 , 
            boxShadow: colors.shadow,
            bgcolor: colors.background,
            }}
            >
           <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <img src={logo} alt="logo" style={{ width: 50, height: 50 , borderRadius: '50%'}} /> 
            <Typography 
            sx={{ 
              fontWeight: 400, 
              color: colors.text, 
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
