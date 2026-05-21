import { useTranslation } from "react-i18next";

export function InputFormat() {
  const { t } = useTranslation();
  return (
    <section className="border-b border-border/60 bg-paper/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("format.title")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("format.subtitle")}</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-border/80 bg-primary text-primary-foreground shadow-xl shadow-primary/20">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="size-2.5 rounded-full bg-white/30" />
            <span className="size-2.5 rounded-full bg-white/30" />
            <span className="size-2.5 rounded-full bg-white/30" />
            <span className="ml-3 font-mono text-xs text-white/60">sources.txt</span>
          </div>
          <pre className="overflow-x-auto px-5 py-5 font-mono text-sm leading-relaxed">
{`https://doi.org/10.1038/s41586-023-00000-0
https://www.nature.com/articles/s41586-023-00001-0
https://pubmed.ncbi.nlm.nih.gov/12345678/
https://arxiv.org/abs/2310.12345`}
          </pre>
        </div>
      </div>
    </section>
  );
}
