import Link from "next/link"
import { Button } from "@/components/ui/button"
import { serviceDirections } from "@/lib/site-data"

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Направления</span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Коротко и по делу.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              На главной только основные направления. Полная детализация вынесена в отдельный каталог.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="h-14 rounded-xl border-border/80 bg-white/60 px-8">
            <Link href="/catalog">Открыть большой каталог</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceDirections.map((direction) => (
            <a
              key={direction.slug}
              href={direction.subsiteUrl}
              className="section-card group block p-6 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <direction.icon className="h-5 w-5 text-accent" />
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{direction.brand}</div>
              <h3 className="mt-2 text-xl font-semibold text-[var(--brand-ink)]">{direction.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{direction.shortDescription}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
