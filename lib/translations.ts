export type Language = "fr" | "en";

export const DEFAULT_LANGUAGE: Language = "fr";

export const translations = {
  fr: {
    appDescription: "Créez une feuille de pratique d'écriture manuscrite et imprimez-la pour votre élève.",
    studentName: "Nom de l'élève",
    studentNamePlaceholder: "p. ex. Ava Martinez",
    grade: "Année scolaire",
    gradePlaceholder: "p. ex. 1re année",
    practiceText: "Texte de pratique",
    practiceTextDescription: "Répété sur chaque ligne de la feuille",
    numberOfLines: "Nombre de lignes",
    printSheet: "Imprimer la feuille",
    print: "Imprimer",
    resetToDefaults: "Rétablir les valeurs par défaut",
    language: "Langue",
    sheetTitle: "Pratique d'écriture",
    defaultPracticeText: "Portez ce vieux whisky au juge blond qui fume",
  },
  en: {
    appDescription: "Design a handwriting practice sheet and print it for your student.",
    studentName: "Student name",
    studentNamePlaceholder: "e.g. Ava Martinez",
    grade: "Grade",
    gradePlaceholder: "e.g. 1st grade",
    practiceText: "Practice text",
    practiceTextDescription: "Replicated on every line of the sheet",
    numberOfLines: "Number of lines",
    printSheet: "Print sheet",
    print: "Print",
    resetToDefaults: "Reset to defaults",
    language: "Language",
    sheetTitle: "Handwriting Practice",
    defaultPracticeText: "The quick brown fox jumps over the lazy dog",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["fr"];
