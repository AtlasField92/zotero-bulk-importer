import { useTranslation } from "react-i18next";
import { FileText, Folder, FolderOpen, Check, Library } from "lucide-react";

export function HowItWorks() {
  const { t } = useTranslation();
  const steps = ["one", "two", "three"] as const;

  const visuals = [StepFileVisual, StepCollectionVisual, StepImportVisual];

  return (
    <section id="how" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("how.title")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("how.subtitle")}</p>
        </div>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-6">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[88px] hidden md:block"
          >
            <svg className="w-full" height="2" preserveAspectRatio="none">
              <line
                x1="16%"
                x2="84%"
                y1="1"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="2 8"
                className="text-border"
              />
            </svg>
          </div>

          {steps.map((s, i) => {
            const Visual = visuals[i];
            return (
              <div key={s} className="relative flex flex-col">
                <div className="relative mx-auto flex h-[176px] w-full max-w-xs items-center justify-center rounded-xl border border-border/80 bg-card p-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]">
                  <Visual />
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-2xl font-semibold text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold">
                    {t(`how.steps.${s}.title`)}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`how.steps.${s}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepFileVisual() {
  return (
    <div className="w-full max-w-[240px] overflow-hidden rounded-md border border-border/70 bg-background font-mono text-[11px] shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-border/70 bg-muted/50 px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="ml-1.5 flex items-center gap-1 text-[10px] text-muted-foreground">
          <FileText className="!h-3 !w-3" /> urls.txt
        </span>
      </div>
      <div className="space-y-1 px-3 py-2.5">
        {[
          "https://arxiv.org/abs/2403.17564",
          "https://doi.org/10.1038/nature12373",
          "https://nature.com/articles/d41586",
        ].map((url, i) => (
          <div key={i} className="flex gap-2">
            <span className="w-3 select-none text-right text-muted-foreground/50">
              {i + 1}
            </span>
            <span className="truncate text-foreground/80">{url}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepCollectionVisual() {
  const rows = [
    { icon: Library, label: "My Library", depth: 0, active: false },
    { icon: Folder, label: "Papers", depth: 1, active: false },
    { icon: FolderOpen, label: "AI Research", depth: 2, active: true },
    { icon: Folder, label: "Datasets", depth: 1, active: false },
  ];
  return (
    <div className="w-full max-w-[240px] overflow-hidden rounded-md border border-border/70 bg-background text-[12px] shadow-sm">
      <div className="border-b border-border/70 bg-muted/50 px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
        Collection
      </div>
      <ul className="py-1.5">
        {rows.map((r, i) => {
          const Icon = r.icon;
          return (
            <li
              key={i}
              className={`flex items-center gap-2 px-2 py-1 ${
                r.active ? "bg-accent/15 text-foreground" : "text-foreground/80"
              }`}
              style={{ paddingLeft: `${8 + r.depth * 14}px` }}
            >
              <Icon
                className={`!h-3.5 !w-3.5 ${
                  r.active ? "text-accent" : "text-muted-foreground"
                }`}
              />
              <span className="truncate">{r.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function StepImportVisual() {
  return (
    <div className="w-full max-w-[240px] space-y-2.5 rounded-md border border-border/70 bg-background p-3 text-[11px] shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-medium text-foreground/90">Importing…</span>
        <span className="font-mono text-muted-foreground">3 / 5</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: "60%" }}
        />
      </div>
      <ul className="space-y-1 pt-1 font-mono text-[10.5px]">
        {[
          { ok: true, t: "arxiv.org/abs/2403…" },
          { ok: true, t: "doi.org/10.1038/n…" },
          { ok: false, t: "nature.com/article…" },
        ].map((r, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {r.ok ? (
              <Check className="!h-3 !w-3 text-green-500" />
            ) : (
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
            )}
            <span className="truncate text-muted-foreground">{r.t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
