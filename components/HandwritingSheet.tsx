"use client";

import styles from "./HandwritingSheet.module.css";
import {useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {useTranslation} from "@/lib/i18n";

export const HandwritingSheet = () => {
    const studentName = useSelector((state: RootState) => state.sheetData.studentName);
    const gradeName = useSelector((state: RootState) => state.sheetData.grade);
    const practiceText = useSelector((state: RootState) => state.sheetData.practiceText);
    const lines = useSelector((state: RootState) => state.sheetData.lines);
    const {t} = useTranslation();

    return (
        <div className={styles.sheetCard}>
            <header className={styles.sheetCardHeader}>
                <div>
                    <div className={styles.headerName}>{studentName}</div>
                    <div className={styles.headerGrade}>{gradeName}</div>
                </div>
                <div className={styles.headerTitle}>{t("sheetTitle")}</div>
            </header>

            <div className={styles.writingLines}>
                {Array.from({length: lines}).map((_, index) => (
                    <div key={index}>
                        <div className={styles.writingLine}>
                            {practiceText}
                        </div>
                        <div className={styles.writingLine}>
                            &nbsp;
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};