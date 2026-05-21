import { useTranslation } from "react-i18next";
import {
  FolderTree,
  ShieldCheck,
  Timer,
  Activity,
  Paperclip,
  Globe,
  type LucideIcon,
} from "lucide-react";

const items: { key: string; Icon: LucideIcon }[] = [
  { key: "collection", Icon: FolderTree },
  { key: "local", Icon: ShieldCheck },
  { key: "delay", Icon: Timer },
  { key: "progress", Icon: Activity },
  { key: "pdf", Icon: Paperclip },
  { key: "fallback", Icon: Globe },
];

export function Features() {
  const { t } = useTranslation();
  return (
    <section id="features" className="scroll-mt-24 border-b border-border/60 bg-paper/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("features.title")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("features.subtitle")}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, Icon }) => (
            <div
              key={key}
              className="group relative rounded-xl border border-border/80 bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {t(`features.items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`features.items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
