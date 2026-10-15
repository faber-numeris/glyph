import { useAppSelector } from "@/lib/store";
import { translations, type TranslationKey } from "@/lib/translations";

export type { Language, TranslationKey } from "@/lib/translations";

export const useTranslation = () => {
  const language = useAppSelector((state) => state.language.language);
  const t = (key: TranslationKey): string => translations[language][key];
  return { t, language };
};
