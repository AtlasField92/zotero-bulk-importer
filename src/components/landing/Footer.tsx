import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-sm sm:px-6 md:grid md:grid-cols-3 md:gap-6">
        <div className="flex items-center gap-3 md:justify-self-start">
          <img src="https://atlasfield92.github.io/zotero-bulk-importer/favicon.png" alt="Zotero Bulk Importer" className="size-9 rounded-md" />
          <div className="flex flex-col leading-tight">
            <span className="font-display font-semibold">Zotero Bulk Importer</span>
            <span className="text-xs text-primary-foreground/70">{t("footer.tagline")}</span>
          </div>
        </div>
        <div className="text-center text-primary-foreground/70 md:justify-self-center">{t("footer.rights")}</div>
        <div className="flex items-center gap-2 text-primary-foreground/70 md:justify-self-end">
          <span>Made with ❤️ in Europe 🇪🇺</span>
          <span className="text-primary-foreground/40">·</span>
          <a
            href="https://toreplace.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary-foreground"
          >
            © Atlas Field 2026
          </a>
        </div>
      </div>
    </footer>
  );
}
