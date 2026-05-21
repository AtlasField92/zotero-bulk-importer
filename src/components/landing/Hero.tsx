import { useTranslation } from "react-i18next";
import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/app-screenshot.png";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden border-b border-border/60"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t("hero.subtitle")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="https://github.com/AtlasField92/zotero-bulk-importer-plugin/releases">
                <Download className="size-4" />
                {t("hero.ctaPrimary")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/AtlasField92/zotero-bulk-importer-plugin" target="_blank" rel="noreferrer">
                <Github className="size-4" />
                {t("hero.ctaSecondary")}
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt={t("hero.imageAlt")}
            width={1536}
            height={1024}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
