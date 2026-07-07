import { processStages } from "@/lib/site-data"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Как мы ведем проект</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Путь объекта от первого брифа до передачи ключей и документации.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Каждый этап нужен не ради процесса, а ради управляемости: понятный бюджет, корректные решения, меньше
            рисков и прозрачная коммуникация.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {processStages.map((step, index) => (
            <div key={step.title} className="section-card p-6">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Этап {index + 1}
                </div>
                <div className="text-2xl font-semibold text-primary/35">0{index + 1}</div>
              </div>
              <h3 className="mt-10 text-xl font-semibold text-[var(--brand-ink)]">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
