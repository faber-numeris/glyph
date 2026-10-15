"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/lib/store";

export const LanguageSync = () => {
  const language = useAppSelector((state) => state.language.language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
};
