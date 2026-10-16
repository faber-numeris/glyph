export interface SheetSettings {
  studentName: string;
  grade: string;
  practiceText: string;
  lines: number;
}

export const DEFAULT_SETTINGS: SheetSettings = {
  studentName: "",
  grade: "",
  practiceText: "Une lune, une robe, une soupe",
  lines: 6,
};