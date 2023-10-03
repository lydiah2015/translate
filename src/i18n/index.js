import { createI18n } from "vue-i18n";

// export const defaultLocale = 'en-US'

import messages from './messages'

const i18n = createI18n({

  // default locale

  locale: 'fr',
  messages,


  // translations

  // messages: {

  //   en: {

  //     appTitle: 'Translation',

  //   },

  //   fr: {

  //     appTitle: 'Traduction',

  //   },

  // },

})

export default i18n