import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Initialize React integration
  .init({
    resources: {
      en: { translation:  {
        "login": "ግባ",
        "id": "መለያ ቁጥር ያስገቡ",
        "password": "ሚስጥር ቁጥር ያስገቡ",
        "fpassword": "ሚስጥር ቁጥርኦትን ",
        "FDRE": "ፌደራል ማረሚያቤት",
        
      }
            
    },
      es: { translation:  
        {
            "login": "login!",
            "id": "Enter Id number",
            "password": "Enter your password",
            "fpassword": "forgot your password",
            "FDRE": "FEDERAL PRSISON POLICE"
          }
    },
    },
    lng: 'en', // Set default language
  });

export default i18n;
