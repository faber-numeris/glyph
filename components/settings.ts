export interface SheetSettings {
  studentName: string;
  grade: string;
  practiceText: string;
  lines: number;
}

export const DEFAULT_SETTINGS: SheetSettings = {
  studentName: "",
  grade: "",
  practiceText: "Portez ce vieux whisky au juge blond qui fume",
  lines: 12,
};