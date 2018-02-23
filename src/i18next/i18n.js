import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import languageDetector from 'i18next-react-native-language-detector';

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    resources: {
      sr: {
        loan: {
          title: 'Kalkulator kredita'
        },
        common: {
          actions: {
            toggleToSerbian: 'Srpski',
            toggleToEnglish: 'English'
          }
        },
        offer: {
          creditCost: 'Ukupna cena kredita'
        }
      },
      en: {
        home: {
          title: 'Welcome',
          introduction:
            'This text comes from i18next and isssss provided in english.'
        },
        page2: {
          title: 'Page 2',
          introduction: 'This text on page two.'
        },
        common: {
          currentLanguage: 'The current language is "{{lng}}"',
          actions: {
            toggleToSerbian: 'Srpski',
            toggleToEnglish: 'English',
            goToPage2: 'Open page 2'
          },
          infoText:
            '<0><0>Eins </O><1>Zwei </1><2>Drei </2><3>Vier </3><4>Fünf</4></O>'
        },
        modal: {
          description: 'This is a mordal'
        },
        loan: {
          title: 'Loan Calculator'
        },
        offer: {
          creditCost: 'Total cost of credit'
        }
      },
      de: {
        home: {
          title: 'Willkommen',
          introduction: 'Dieser Text ist von i18next und ist in deutsch.'
        },
        page2: {
          title: 'Seite 2',
          introduction: 'Text auf Seite 2'
        },
        common: {
          currentLanguage: 'Die Sprache ist auf "{{lng}}" gesetzt',
          actions: {
            toggleToGerman: 'Deutsch',
            toggleToEnglish: 'English',
            goToPage2: 'Öffne Seite 2'
          }
        }
      }
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false // not needed for react as it does escape per default to prevent xss!
    },
    react: {
      bindI18n: 'languageChanged'
    }
  });

export default i18n;
