import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const { t } = useTranslation();
  const keys = ["q1", "q2", "q3", "q5"] as const;
  return (
    <section id="faq" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("faq.title")}
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {keys.map((k) => (
            <AccordionItem key={k} value={k}>
              <AccordionTrigger className="text-left font-display text-lg font-medium">
                {t(`faq.items.${k}.q`)}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {t(`faq.items.${k}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
