export interface SheetSettings {
  studentName: string;
  grade: string;
  practiceText: string;
  lines: number;
}

export const DEFAULT_SETTINGS: SheetSettings = {
  studentName: "",
  grade: "",
  practiceText: "The quick brown fox jumps over the lazy dog",
  lines: 12,
};