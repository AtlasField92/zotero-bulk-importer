// Central SEO config — update SITE_URL when the site is published to a custom domain.
export const SITE_URL = "https://zotero-bulk-importer.lovable.app";
export const SITE_NAME = "Zotero Bulk Importer";
export const AUTHOR_NAME = "atlasfieldREPLACE";
export const GITHUB_URL = "https://github.com/atlasfieldREPLACE/zotero-bulk-import";

export const SUPPORTED_LOCALES = ["en", "fr", "es", "zh", "hi", "de", "it", "pl"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "ResearchApplication",
    applicationSubCategory: "Reference manager plugin",
    operatingSystem: "Windows, macOS, Linux",
    description:
      "Open-source Zotero 7 plugin to bulk import scientific references from a plain text list of URLs, using the same Zotero translators as the browser Zotero Connector extension.",
    url: SITE_URL,
    image: `${SITE_URL}/favicon.png`,
    license: "https://opensource.org/licenses/MIT",
    isAccessibleForFree: true,
    softwareRequirements: "Zotero 7",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: AUTHOR_NAME },
    codeRepository: GITHUB_URL,
    keywords:
      "Zotero, bulk import, batch import, references, bibliography, research, plugin, Zotero 7, translators",
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function howToJsonLd(name: string, steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
