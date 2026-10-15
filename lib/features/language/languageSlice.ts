import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_LANGUAGE, type Language } from "@/lib/translations";

export const languageSlice = createSlice({
  name: "language",
  initialState: { language: DEFAULT_LANGUAGE as Language },
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
