import  { useState } from "react"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Box , Button, Divider, IconButton, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../../context/themeContext';
import { ModeComponent } from "./modeComponent";
import { LanguageComponent } from "./languageComponent";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/languageContext";

const Setting=()=>{
   const {colors}=useThemeContext();
   const { direction } = useLanguageContext();
   const [open , setOpen]= useState<boolean>(false);
   const navigate = useNavigate();
   const { t } = useTranslation();

   const toggleOpen=()=> setOpen(!open);
 
    return(
        <Box sx={{position: 'relative' , display: 'inline-block' ,pr:2}}>
          <Box 
           onClick={toggleOpen}
           sx={{
             borderRadius: '8px' , 
             width: 40 , 
             height: 40 , 
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             border: ' 1px solid #cfd8dc',
             p:2.5,
             bgcolor:  colors.background, 
             cursor: 'pointer',
             '&:hover': {
             },
             }}
             >
            <IconButton sx={{ color: '#90a4ae'}} >
              <SettingsOutlinedIcon fontSize="medium" />
            </IconButton>
          </Box>
          
          {open && (
        <Paper 
          elevation={3} 
          sx={{
            position: 'absolute',
            top: 50,
            [direction === 'rtl' ? 'left' : 'right']: 0,
            width: 200,
            p: 2,
            borderRadius: '8px',
            color: colors.text,  
            boxShadow: colors.shadow,
            zIndex: 10,
          }}
        >
          <Box sx={{ fontWeight: 'samebold' }}>
            <Typography >{t('mode')}</Typography>
            <ModeComponent/>
            <Divider 
                sx={{ 
                 width: '100%',
                 mb:1
                }}/>
            <Typography>{t('language')}</Typography>
            <LanguageComponent/>
            <Divider 
                sx={{ 
                 width: '100%',
                 mb: 1
                }}/>

            <Button 
              variant="text" 
              sx={{
                color: colors.text,
                display: 'flex',
                textTransform: 'none',
                fontSize: 16,
                justifySelf: 'start' 
              }}  
              onClick={() => navigate('/')}
            >
              <LogoutOutlinedIcon/>
              {t('exit')}
            </Button>
          </Box>
        </Paper>
      )}
        </Box>
    )
}
export default Setting;