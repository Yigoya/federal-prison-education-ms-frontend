import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Initialize React integration
  .init({
    resources: {
      en: { translation: {
        "login": "login!",
        "id": "Enter Id number",
        "password": "Enter your password",
        "fpassword": "forgot your password",
        "FDRE": "FEDERAL PRSISON POLICE",
        "courses":"courses",
        "kality": "Kality Prison",
        "dashboard": "Dashboardes",
        "students": "Students",
        "teacher": "Teacher",
        "staff": "Staff Member",
        "admin": "Admin",
        "registerStudent": "Register Student",
        "registerStudents": "Register Student",
        "registerStaff": "Register Staff",
        "viewStudent": "View Student",
        "viewStaff": "View Staff",
        "registerStu": "Click here to register a student",
        "registerSta": "Click here to register a staff members",
        "viewStu": "Click here to see students",
        "studentregistration": "Student Registration",
        "fullname": "Full Name",
        "enter": "click to enter value",
        "zone": "Zone",
        "age": "Age",
        "period": "Period",
        "crime": "Crime",
        "year": "mm/yyyy",
        "chosenGrade": "Chosen Grade",
        "status": "Status",
        "new": "New",
        "old": "Old",
        "language": "Language",
        "amharic": "Amharic",
        "oromifa": "Oromifa",
        "ethnicity":"Ethnicity",
        "ethiopian": "Ethiopian",
        "kenya":"Kenyan",
        "arab":"Arab",
        "bengali":"Bengali",
        "burmese":"Burmese",
        "chinese":"Chinese",
        "fulani":"Fulani",
        "hausa":"Hausa",
        "japanese":"Japanese",
        "korean":"Korean",
        "maasai":"Maasai",
        "amherican":"Amherican",
        "pashtun":"Pashtun",
        "punjabi":"Punjabi",
        "sindhi":"Sindhi",
        "register":"Register",
        "profile":"Profile",
        "pyear":"Year",
        "personalInfo":"Personal Information",
        "basicDetail":"Basic Detail",
        "department":"Department",
        "section":"Section",
        "email":"Email",
        "phoneNo":"Phone Number",
        "Fname": "First name",
        "Lname": "Last name",
        "ID": "Id Number",
        "entereth" :"Select Ethnicity"
      }
            
    },
      am: { translation:  
        {
          "login": "ግባ",
          "admin": "አድሚን",
          "courses":"ኮርሶች",
          "id": "መለያ ቁጥር ያስገቡ",
          "password": "ሚስጥር ቁጥር ያስገቡ",
          "fpassword": "ሚስጥር ቁጥርኦትን ",
          "registerStudents": "ይመዝግቡ",
          "FDRE": "ፌደራል ማረሚያቤት",
          "kality": "ቃሊቲ ምረሚያ",
            "dashboard": "ዳሽቦርድ",
            "students": "ተማሪዎች",
            "teacher": "መምህር",
            "staff": "የሰራተኞች",
            "registerStudent": "ተማሪ ይመዝገቡ",
            "registerStaff": "ሠራተኞች ይመዝገቡ",
            "viewStudent": "ተማሪን ይመልከቱ",
            "viewStaff": "ሰራተኞችን ልማየት እዚህ ይጫኑ",
            "registerStu": "ተማሪ ለመመዝገብ እዚህ ይጫኑ",
            "registerSta": "ሰራተኞችን ለመመዝገብ እዚህ ይጫኑ",
            "viewStu": "ተማሪ ልማየት እዚህ ይጫኑ",
            "studentregistration": "የተማሪ ምዝገባ",
            "fullname": "ሙሉ ስም",
            "enter": "ለማስገባት ይጫኑ",
            "zone": "ዞን",
            "age": "ዕድሜ",
            "period": "እስራት ጊዜ",
            "crime": "ወንጀል",
            "year": "ወወ/ዓዓዓዓ",
            "start": "Start",
            "end": "End",
            "parole":"Parol",
            "chosenGrade": "የመረጡት የትምህርት ደረጃ",
            "status": "ሁኔታ",
            "new": "አዲስ",
            "old": "ነባር",
            "language": "ቋንቋ",
            "amharic": "አማርኛ",
            "oromifa": "OROMIFA",
            "ethnicity": "ዜግነት",
            "ethiopian": "ኢትዮጵያዊ",
            "kenya":"ኬንያዊ",
            "arab":"አረብ",
            "bengali":"ቤንጋሊ",
            "burmese":"በርሚስ",
            "chinese":"ቻይናዊ",
            "fulani":"ፉላኒ",
            "hausa":"ሃውሳ",
            "japanese":"ጃፓናዊ",
            "korean":"ኮሪያዊ",
            "maasai":"ማሳይ",
            "amherican":"አሜሪካዊ",
            "pashtun":"ፓሽቱን",
            "punjabi":"ፑንጃቢ",
            "sindhi":"ስንድሂ",
            "register":"ምዝገባ",
            "profile":"መገለጫ",
            "pyear":"አመት",
            "personalInfo":"የግል መረጃ",
            "basicDetail":"መሰረታዊ መረጃ",
            "department":"ዲፓርትመንት",
            "section":"ክፍል",
            "email":"ኢሜል",
            "phoneNo":"ስልክ ቁጥር",
            "Fname": "ስም",
            "Lname": "አባት ስም",
            "ID": "መለያ ቁጥር",
            "start": "እስር ምጀመሪያ",
            "end": "እስር ማለቂያ",
            "parole":"በአመክሮ እስር",
            "entereth" :"ዜግነት ይምረጡ",
            "classroom": ""
        }
    },
    },
    lng: 'am', // Set default language
  });

export default i18n;
