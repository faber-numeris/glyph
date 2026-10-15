"use client";

import {Button, Divider, Group, NumberInput, Paper, Select, Stack, Text, Textarea, TextInput, Title,} from "@mantine/core";
import {IconBraces, IconPrinter, IconWriting} from "@tabler/icons-react";
import {
    resetSettings,
    setGrade,
    setLines,
    setPracticeText,
    setStudentName,
} from "@/lib/features/settings/settingsSlice";
import {useTranslation} from "@/lib/i18n";
import {translations, type Language} from "@/lib/translations";
import {setLanguage} from "@/lib/features/language/languageSlice";
import {useAppDispatch, useAppSelector} from "@/lib/store";

interface SidebarProps {
    onPrint: () => void;
}

export function Sidebar({onPrint}: SidebarProps) {
    const settings = useAppSelector((state) => state.sheetData);
    const dispatch = useAppDispatch();
    const {t, language} = useTranslation();

    const handleLanguageChange = (value: string | null) => {
        if (value !== "fr" && value !== "en") return;
        const next: Language = value;
        // Keep the default practice sentence in sync with the language if untouched.
        if (settings.practiceText === translations[language].defaultPracticeText) {
            dispatch(setPracticeText(translations[next].defaultPracticeText));
        }
        dispatch(setLanguage(next));
    };

    return (
        <aside className="app-sidebar">
            <Paper shadow="sm" radius="md" p="lg" withBorder className="sidebar-paper">
                <Stack gap="md">
                    <Group gap="xs">
                        <IconWriting size={26} color="var(--mantine-color-indigo-6)"/>
                        <Title order={3}>Glyph</Title>
                    </Group>
                    <Text size="sm" c="dimmed">
                        {t("appDescription")}
                    </Text>

                    <Divider/>

                    <TextInput
                        label={t("studentName")}
                        placeholder={t("studentNamePlaceholder")}
                        value={settings.studentName}
                        onChange={(event) => dispatch(setStudentName(event.currentTarget.value))}
                    />

                    <TextInput
                        label={t("grade")}
                        placeholder={t("gradePlaceholder")}
                        value={settings.grade}
                        onChange={(event) => dispatch(setGrade(event.currentTarget.value))}
                    />

                    <Textarea
                        label={t("practiceText")}
                        description={t("practiceTextDescription")}
                        placeholder={t("defaultPracticeText")}
                        autosize
                        minRows={2}
                        maxRows={4}
                        value={settings.practiceText}
                        onChange={(event) => dispatch(setPracticeText(event.currentTarget.value))}
                    />

                    <NumberInput
                        label={t("numberOfLines")}
                        min={4}
                        max={24}
                        allowDecimal={false}
                        value={settings.lines}
                        onChange={(value) => {
                            const parsed = typeof value === "number" ? value : Number.parseFloat(value);
                            if (Number.isFinite(parsed)) dispatch(setLines(parsed));
                        }}
                    />

                    <Divider/>

                    <Button
                        fullWidth
                        size="md"
                        leftSection={<IconPrinter size={18}/>}
                        rightSection={<IconBraces size={14}/>}
                        onClick={onPrint}
                    >
                        {t("printSheet")}
                    </Button>

                    <Button
                        fullWidth
                        variant="subtle"
                        color="gray"
                        onClick={() => dispatch(resetSettings(t("defaultPracticeText")))}
                    >
                        {t("resetToDefaults")}
                    </Button>

                    <Divider/>

                    <Select
                        label={t("language")}
                        allowDeselect={false}
                        value={language}
                        data={[
                            {value: "fr", label: "Français"},
                            {value: "en", label: "English"},
                        ]}
                        onChange={handleLanguageChange}
                    />
                </Stack>
            </Paper>
        </aside>
    );
}