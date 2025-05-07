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
   const {mode}=useThemeContext();
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
             bgcolor:  mode === 'light' ? '#f0f8fa' :'#292f45', 
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
            color: mode === 'dark' ? '#fff' : '#000',  
            boxShadow:
            '0px 8px 16px rgba(0, 0, 0, 0.12), 0px 3px 6px rgba(0, 0, 0, 0.08)',
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
                color: mode === 'dark' ? '#fff' : '#3d4852' ,
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