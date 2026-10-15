"use client";

import { Button } from "@mantine/core";
import { IconPrinter } from "@tabler/icons-react";
import { HandwritingSheet } from "@/components/HandwritingSheet";
import { Sidebar } from "@/components/Sidebar";
import { useTranslation } from "@/lib/i18n";
import layoutStyles from "./page.module.css";

export default function Home() {
  const { t } = useTranslation();
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={layoutStyles.appLayout}>
      <div className={layoutStyles.appSidebarZone}>
        <Sidebar onPrint={handlePrint} />
      </div>

      <main className={layoutStyles.sheetZone}>
        <div className={layoutStyles.sheetHinter}>
          <Button
            size="xs"
            variant="filled"
            color="indigo"
            autoContrast
            leftSection={<IconPrinter size={16} />}
            onClick={handlePrint}
          >
            {t("print")}
          </Button>
        </div>

        <HandwritingSheet />
      </main>
    </div>
  );
}