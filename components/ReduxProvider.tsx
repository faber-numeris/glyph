"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { LanguageSync } from "@/components/LanguageSync";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <LanguageSync />
      {children}
    </Provider>
  );
}