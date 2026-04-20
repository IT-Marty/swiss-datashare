import { getCookie } from "cookies-next";
import { useState } from "react";
import useTranslate from "../../hooks/useTranslate.hook";
import { LOCALES } from "../../i18n/locales";
import i18nUtil from "../../utils/i18n.util";
import userPreferences from "../../utils/userPreferences.util";
import { Select } from "../ui";

const LanguagePicker = ({ compact = false }: { compact?: boolean }) => {
  const t = useTranslate();
  const [selectedLanguage, setSelectedLanguage] = useState(
    getCookie("language")?.toString() ?? LOCALES.ENGLISH.code,
  );

  const languages = Object.values(LOCALES).map((locale) => ({
    value: locale.code,
    label: locale.name,
  }));

  const onChangeLanguage = (value: string) => {
    setSelectedLanguage(value);
    i18nUtil.setLanguageCookie(value);
    userPreferences.set("locale", value);
    location.reload();
  };

  if (compact) {
    return (
      <select
        aria-label={t("account.card.language.title")}
        value={selectedLanguage}
        onChange={(e) => onChangeLanguage(e.target.value)}
        className="text-xs bg-transparent border border-gray-300 dark:border-gray-700 rounded px-2 py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-1 focus:ring-primary-500"
      >
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <Select
      label={t("account.card.language.title")}
      helperText={t("account.card.language.description")}
      value={selectedLanguage}
      options={languages}
      onChange={(e) => {
        if (!e) return;
        onChangeLanguage(e.target.value);
      }}
    />
  );
};

export default LanguagePicker;
