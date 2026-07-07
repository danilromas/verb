"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { catalogBenefits, faqs } from "@/lib/site-data"

export function AdditionalSections() {
  return (
    <>
      <section id="reviews" className="py-24">
        <div className="section-shell">
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="section-card p-8 md:p-10">
              <span className="eyebrow">Почему доверяют</span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
                Доверие в строительстве строится на понятности, дисциплине и доказуемости решений.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Поэтому в новой версии сайта trust-секции становятся такими же важными, как и визуальная часть бренда:
                договор, гарантии, смета, документы, география и формат контроля.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {catalogBenefits.map((benefit) => (
                <div key={benefit.title} className="section-card p-6">
                  <benefit.icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-5 text-xl font-semibold text-[var(--brand-ink)]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24">
        <div className="section-shell">
          <div className="section-card p-8 md:p-10">
            <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
              <div>
                <span className="eyebrow">FAQ и прозрачность</span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
                  Отвечаем на ключевые вопросы до старта проекта.
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Этот блок закрывает самые частые возражения: можно ли заказать отдельный этап, как формируется смета,
                  как идет дистанционный контроль и что именно получает заказчик по итогу.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`} className="rounded-[1.5rem] border border-border/70 bg-white/70 px-6">
                    <AccordionTrigger className="text-left text-lg font-semibold text-[var(--brand-ink)] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
