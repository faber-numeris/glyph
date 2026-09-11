"use client";

import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sheetDataReducer from "./features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    sheetData: sheetDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;