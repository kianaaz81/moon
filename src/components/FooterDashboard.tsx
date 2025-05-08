import { Box, Typography } from "@mui/material"
// import { useTranslation } from "react-i18next";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useThemeContext } from "../context/themeContext";
import { useLanguageContext } from "../context/languageContext";

const FooterDashboard = () => {
    const { colors } = useThemeContext();
    const { direction, fontFamily, numberFormat } = useLanguageContext();

    const date = new Date();
    const day = date.toLocaleDateString(numberFormat, {weekday: 'long'});
    const time = date.toLocaleDateString(numberFormat, {hour: '2-digit', minute: '2-digit'});

    return (
        <Box 
        sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            display: "flex",
            justifyContent: "end", 
            alignItems: "end", 
            p: 2,
            bgcolor: colors.background,
            boxShadow: colors.shadow,
            zIndex: 1000,
            fontFamily: fontFamily
        }}>
            <CalendarMonthOutlinedIcon sx={{color: colors.text, mr: 1}}/>
            <Typography sx={{ 
                fontFamily: fontFamily,
                direction: direction
            }}>
                {time} {day}
            </Typography>
        </Box>
    )
}
export default FooterDashboard;

