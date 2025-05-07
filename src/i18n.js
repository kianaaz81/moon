// src/i18n.js  
import i18n from 'i18next';  
import { initReactI18next } from 'react-i18next';  

const resources = {  
  en: {  
    translation: {  
      login: 'Login',  
      namePlaceholder: 'Enter Your Name',  
      loginButton: 'LOGIN',  
      language: 'Language',  
      weather_dashborad: 'Weather Dashboard',
      // weather translation
      unknown_location: 'Unknown Location',
      no_data: 'No Data',
      feels_like: 'Feels Like',
      high: 'High',
      low: 'Low',
      weather:{
        Clear: "Clear",
        Clouds: "Cloudy",
        Rain: "Rain",
        Snow: "Snow",
        Mist: "Mist",
        Drizzle: "Drizzle",
        Thunderstorm: "Thunderstorm",
       },
      // days
      days: {
        Sunday: "Sunday",
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
        Friday: "Friday",
        Saturday: "Saturday",
      },
      forecast: '5 Day Forecast',
      // chart
      average_monthly_temperature :'Average Monthly Temperature',
      months: {
        Jan: "Jan",
        Feb: "Feb",
        Mar: "Mar",
        Apr: "Apr",
        May: "May",
        Jun: "Jun",
        Jul: "Jul",
        Aug: "Aug",
        Sep: "Sep",
        Oct: "Oct",
        Nov: "Nov",
        Dec: "Dec",
      },
      // setting translation
      mode: 'Mode',
      dark: 'Dark',
      light: 'Light',
      fa: 'fa',
      en: 'en',
      exit: 'Exit',
    },  
  },  
  fa: {  
    translation: {  
      login: 'ورود',  
      namePlaceholder: 'نام خود را وارد کنید',  
      loginButton: 'ورود',  
      language: 'زبان',  
      weather_dashborad: 'داشبورد هواشناسی',
       //  ترجمه‌های هواشناسی
       unknown_location: 'مکان نامشخص',
       no_data: 'اطلاعاتی وجود ندارد',
       feels_like: 'درجه احساس می شود',
       high: 'بیشینه',
       low: 'کمینه',
       weather:{
        Clear: "صاف",
        Clouds: "ابری",
        Rain: "بارانی",
        Snow: "برفی",
        Mist: "مه",
        Drizzle: "باران ریز",
        Thunderstorm: "طوفانی",
       },
      //  روزها
       days: {
        Sunday: "یک‌شنبه",
        Monday: "دوشنبه",
        Tuesday: "سه‌شنبه",
        Wednesday: "چهارشنبه",
        Thursday: "پنج‌شنبه",
        Friday: "جمعه",
        Saturday: "شنبه",
      },
       forecast: 'پیش بینی 5 روز',
      //  جدول
       average_monthly_temperature : 'میانگین دمای ماهانه',
       months: {
        Jan: "فروردین",
        Feb: "اردیبهشت",
        Mar: "خرداد",
        Apr: "تیر",
        May: "مرداد",
        Jun: "شهریور",
        Jul: "مهر",
        Aug: "آبان",
        Sep: "آذر",
        Oct: "دی",
        Nov: "بهمن",
        Dec: "اسفند",
      },
      // setting translation
      mode: 'حالت',
      dark: 'تاریک',
      light: 'روشن',
      fa: 'فارسی',
      en: 'انگلیسی',
      exit: 'خروج',
    },  
  },  
};  

i18n  
  .use(initReactI18next).init({  
    resources,  
    lng: 'en',  
    fallbackLng: 'en',  
    interpolation: {  
      escapeValue: false,  
    },  
  });  

export default i18n;