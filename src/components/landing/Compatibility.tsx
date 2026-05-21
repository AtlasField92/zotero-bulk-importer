import { useTranslation } from "react-i18next";
import { Check, X } from "lucide-react";

export function Compatibility() {
  const { t } = useTranslation();
  const rows = [
    { v: "Zotero 9.x", ok: true },
    { v: "Zotero 8.x", ok: true },
    { v: "Zotero 7.x", ok: true },
    { v: "Zotero 6.x", ok: false },
  ];
  return (
    <div className="flex flex-col">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("compat.title")}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{t("compat.subtitle")}</p>
      </div>
      <div className="mt-10 overflow-hidden rounded-xl border border-border/80 bg-card">
        <div className="grid grid-cols-2 border-b border-border/80 bg-muted/40 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>{t("compat.version")}</span>
          <span>{t("compat.supported")}</span>
        </div>
        {rows.map((r) => (
          <div key={r.v} className="grid grid-cols-2 items-center border-b border-border/60 px-6 py-5 last:border-b-0">
            <span className="font-mono text-sm">{r.v}</span>
            <span className="flex items-center gap-2 text-sm">
              {r.ok ? (
                <>
                  <Check className="size-4 text-green-600" />
                  {t("compat.yes")}
                </>
              ) : (
                <>
                  <X className="size-4 text-destructive" />
                  {t("compat.no")}
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
