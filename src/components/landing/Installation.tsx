import { Trans, useTranslation } from "react-i18next";

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-5">
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground">
        {n}
      </span>
      <span className="pt-1 text-sm leading-relaxed text-foreground">{children}</span>
    </li>
  );
}

export function Installation() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("install.title")}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{t("install.subtitle")}</p>
      </div>
      <ol className="mt-10 space-y-6 rounded-xl border border-border/80 bg-card p-8">
        <Step n={1}>
          <Trans
            i18nKey="install.xpi.step1"
            components={{
              1: (
                <a
                  href="https://github.com/AtlasField92/zotero-bulk-importer-plugin/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary underline underline-offset-2 hover:no-underline"
                />
              ),
            }}
          />
        </Step>
        <Step n={2}>{t("install.xpi.step2")}</Step>
        <Step n={3}>{t("install.xpi.step3")}</Step>
        <Step n={4}>{t("install.xpi.step4")}</Step>
      </ol>
    </div>
  );
}
