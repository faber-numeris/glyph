import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_SETTINGS, type SheetSettings } from "@/components/settings";

const initialState: SheetSettings = DEFAULT_SETTINGS;

export const sheetDataSlice = createSlice({
  name: "sheetData",
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
      return DEFAULT_SETTINGS;
    },
  },
});

export const {
  setStudentName,
  setGrade,
  setPracticeText,
  setLines,
  resetSettings,
} = sheetDataSlice.actions;

export default sheetDataSlice.reducer;