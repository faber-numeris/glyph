"use client";

import {Button, Divider, Group, NumberInput, Paper, Stack, Text, Textarea, TextInput, Title,} from "@mantine/core";
import {IconBraces, IconPrinter, IconWriting} from "@tabler/icons-react";
import {
    resetSettings,
    setGrade,
    setLines,
    setPracticeText,
    setStudentName,
} from "@/lib/features/settings/settingsSlice";
import {useAppDispatch, useAppSelector} from "@/lib/store";

interface SidebarProps {
    onPrint: () => void;
}

export function Sidebar({onPrint}: SidebarProps) {
    const settings = useAppSelector((state) => state.sheetData);
    const dispatch = useAppDispatch();

    return (
        <aside className="app-sidebar">
            <Paper shadow="sm" radius="md" p="lg" withBorder className="sidebar-paper">
                <Stack gap="md">
                    <Group gap="xs">
                        <IconWriting size={26} color="var(--mantine-color-indigo-6)"/>
                        <Title order={3}>Glyph</Title>
                    </Group>
                    <Text size="sm" c="dimmed">
                        Design a handwriting practice sheet and print it for your student.
                    </Text>

                    <Divider/>

                    <TextInput
                        label="Student name"
                        placeholder="e.g. Ava Martinez"
                        value={settings.studentName}
                        onChange={(event) => dispatch(setStudentName(event.currentTarget.value))}
                    />

                    <TextInput
                        label="Grade"
                        placeholder="e.g. 1st grade"
                        value={settings.grade}
                        onChange={(event) => dispatch(setGrade(event.currentTarget.value))}
                    />

                    <Textarea
                        label="Practice text"
                        description="Replicated on every line of the sheet"
                        placeholder="The quick brown fox jumps over the lazy dog"
                        autosize
                        minRows={2}
                        maxRows={4}
                        value={settings.practiceText}
                        onChange={(event) => dispatch(setPracticeText(event.currentTarget.value))}
                    />

                    <NumberInput
                        label="Number of lines"
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
                        Print sheet
                    </Button>

                    <Button
                        fullWidth
                        variant="subtle"
                        color="gray"
                        onClick={() => dispatch(resetSettings())}
                    >
                        Reset to defaults
                    </Button>
                </Stack>
            </Paper>
        </aside>
    );
}