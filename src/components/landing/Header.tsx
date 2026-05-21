import { useTranslation } from "react-i18next";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

export function Header() {
  const { t } = useTranslation();
  const links = [
    { href: "#features", key: "features" },
    { href: "#how", key: "howItWorks" },
    { href: "#install", key: "install" },
    { href: "#faq", key: "faq" },
  ] as const;

  return (
    <header
      className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md"
      aria-label="Site header"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.hash) {
              history.replaceState(null, "", window.location.pathname + window.location.search);
            }
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 font-display text-lg font-semibold"
          aria-label="Zotero Bulk Importer — home"
        >
          <img src={logo} alt="Zotero Bulk Importer" className="h-28 w-auto -my-4" />
        </a>
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a key={l.key} href={l.href} className="transition-colors hover:text-foreground">
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button
            asChild
            size="sm"
            className="bg-support text-support-foreground shadow-lg shadow-support/30 hover:bg-support/90"
          >
            <a href="https://buymeacoffee.com/atlasfield92" target="_blank" rel="noreferrer">
              <Coffee className="size-4" />
              <span className="hidden sm:inline">{t("nav.support")}</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
