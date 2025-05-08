import { useThemeContext } from '../../context/themeContext';
import { Box , Button } from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTranslation } from 'react-i18next';


export const ModeComponent =()=>{
     const {mode , setMode}=useThemeContext();
     const { t } = useTranslation(); 
     
return(
    <Box sx={{ display: 'flex', gap: 1, mt: 1, mb: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setMode('light')}
                fullWidth
                sx={{display:'flex' , 
                  textTransform: 'none',
                  gap: 1 , 
                  color: mode === 'light' ? '#2196f3' :'#8895a0',
                  borderColor:  mode === 'light' ? '#2196f3' : '#ccc',
                }}>
                <LightModeOutlinedIcon fontSize="small"/>
                {t('light')}
              </Button>
              <Button
                 variant="outlined"
                onClick={() => setMode('dark')}
                fullWidth
                sx={{display:'flex' , 
                  gap: 1 , 
                  textTransform: 'none',
                  color: mode === 'dark' ? '#2196f3' :'#8895a0',
                  borderColor:  mode === 'dark' ? '#2196f3' : '#ccc',
                }}>
                <DarkModeOutlinedIcon  fontSize="small"/>
                {t('dark')}
              </Button>
            </Box>
)
}