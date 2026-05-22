import { createFileRoute } from "@tanstack/react-router";
import "@/i18n";
import en from "@/i18n/locales/en.json";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";

import { Installation } from "@/components/landing/Installation";
import { Compatibility } from "@/components/landing/Compatibility";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import {
  SITE_URL,
  SITE_NAME,
  SUPPORTED_LOCALES,
  softwareApplicationJsonLd,
  faqJsonLd,
  howToJsonLd,
} from "@/lib/seo";

const TITLE =
  "Zotero Bulk Importer — Batch import scientific references into Zotero";
const DESCRIPTION =
  "Open-source Zotero plugin to bulk import scientific references from a list of URLs. Uses the same translators as the Zotero Connector browser extension, with a configurable delay between requests.";

export const Route = createFileRoute("/")({
  head: () => {
    const faqItems = Object.values(en.faq.items).map((it) => ({
      q: it.q,
      a: it.a,
    }));
    const howToSteps = Object.values(en.how.steps).map((s) => ({
      name: s.title,
      text: s.desc,
    }));

    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        {
          name: "keywords",
          content:
            "Zotero, bulk import, batch import, references, bibliography, research, plugin, translators, Zotero Connector",
        },
        { name: "author", content: "atlasfieldREPLACE" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "theme-color", content: "#0f172a" },

        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SITE_URL },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:image", content: `${SITE_URL}/favicon.png` },
        { property: "og:image:alt", content: `${SITE_NAME} logo` },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESCRIPTION },
        { name: "twitter:image", content: `${SITE_URL}/favicon.png` },
      ],
      links: [
        { rel: "canonical", href: SITE_URL },
        ...SUPPORTED_LOCALES.map((lng) => ({
          rel: "alternate",
          hrefLang: lng,
          href: `${SITE_URL}/?lang=${lng}`,
        })),
        { rel: "alternate", hrefLang: "x-default", href: SITE_URL },
        //Uncomment to enable PWA
        // { rel: "manifest", href: "/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "https://atlasfield92.github.io/zotero-bulk-importer/favicon.png" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareApplicationJsonLd()),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(faqItems)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            howToJsonLd("How to bulk import references into Zotero", howToSteps),
          ),
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <section id="install" className="scroll-mt-24 border-b border-border/60 bg-paper/40">
          <div className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-24 md:py-28">
            <Installation />
            <Compatibility />
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
