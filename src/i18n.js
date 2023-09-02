import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "login.welcome": "Welcome",
      "login.serverError": "Server Error",
      "paragraph": "react-i18next is a powerful internationalization framework for React / React Native which is based on i18next."
    }
  },

  ar : {
    translation:{
        "nav.home": "الرئيسية",
        "login.welcome": "اهلا",
        "login.serverError": "علامة تجارية",
        "paragraph": "react-i18next هو علامة تجارية قوية ة  لـ React / React Native الذي يعتمد على i18next."
    }
  },

};
 
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  lng: 'ar',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
