import { Box , Button } from "@mui/material";
import { useLanguageContext } from "../../context/languageContext";
import { useTranslation } from 'react-i18next';

 
 export const LanguageComponent=()=>{
     const { language, setLanguage } = useLanguageContext();
     const { t } = useTranslation(); 
 
return(
    <Box sx={{ display: 'flex', gap: 1, mt: 1, mb: 2 }}>
              <Button
               variant="outlined"
                onClick={() => setLanguage('en')}
                fullWidth
                 sx={{display:'flex' , 
                  gap: 1 , 
                  textTransform: 'none',
                  color: language === 'en' ? '#2196f3' :'#8895a0',
                  borderColor:  language === 'en' ? '#2196f3' : '#ccc',
                }}
              >
                {t('en')}
              </Button>
              <Button
                variant="outlined"
                onClick={() => setLanguage('fa')}
                fullWidth
                sx={{display:'flex' , 
                  gap: 1 , 
                  textTransform: 'none',
                  color: language === 'fa' ? '#2196f3' :'#8895a0',
                  borderColor:  language === 'fa' ? '#2196f3' : '#ccc',
                }}
              >
                {t('fa')}
              </Button>
            </Box>

)
}