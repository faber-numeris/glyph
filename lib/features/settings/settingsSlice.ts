import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_SETTINGS, type SheetSettings } from "@/components/settings";

const initialState: SheetSettings = DEFAULT_SETTINGS;

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setStudentName(state, action: PayloadAction<string>) {
      state.studentName = action.payload;
    },
    setGrade(state, action: PayloadAction<string>) {
      state.grade = action.payload;
    },
    setPracticeText(state, action: PayloadAction<string>) {
      state.practiceText = action.payload;
    },
    setLines(state, action: PayloadAction<number>) {
      state.lines = action.payload;
    },
    resetSettings() {
      return initialState;
    },
  },
});

export const {
  setStudentName,
  setGrade,
  setPracticeText,
  setLines,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;