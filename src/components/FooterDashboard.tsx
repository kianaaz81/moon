import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useThemeContext } from "../context/themeContext";

const FooterDashboard = () => {
    const {mode} = useThemeContext();
    const { i18n}=useTranslation();

    const locale = i18n.language === 'fa' ? 'fa-IR' : 'en-US';
    const date = new Date();
    const day= date.toLocaleDateString(locale , {weekday: 'long'});
    const time= date.toLocaleDateString(locale , {hour: '2-digit' , minute: '2-digit'});

    return (
        <Box 
        sx={{
            display:"flex" ,
            justifyContent:"end", 
            alignItems:"end", 
            p:4 , 
            boxShadow: mode === 'dark' 
            ? '0px 0px 10px 0px rgb(110, 110, 110)' 
            : '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
            }}>
            <CalendarMonthOutlinedIcon sx={{color: mode === 'dark' ? '#f3f4f7' : '#003464' , mr: 1}}/>
            <Typography>{time} {day}</Typography>
        </Box>
    )
}
export default FooterDashboard;

