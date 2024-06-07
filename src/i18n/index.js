import { createI18n } from "vue-i18n";
import translate_en from "./en";
import translate_km from "./km";

const i18n = createI18n({
    locale: "km",
    fallbackLocale: "km",
    messages: {
      en: translate_en,
      km: translate_km
    },
  });

  export default i18n 