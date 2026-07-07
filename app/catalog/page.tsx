import Link from "next/link"
import { ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ecosystemCompanies } from "@/lib/ecosystem-data"
import { catalogBenefits, catalogFacts, serviceDirections } from "@/lib/site-data"

export default function CatalogPage() {
  return (
    <main className="min-h-screen pb-20 pt-20 selection:bg-primary selection:text-primary-foreground">
      <Header />
      <div className="section-shell pt-8">
        <section className="section-card overflow-hidden p-8 md:p-10 xl:p-14">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">Каталог направлений</span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight text-[var(--brand-ink)] md:text-6xl">
                Большой подробный каталог услуг и форматов сопровождения проекта.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                Каждое направление — отдельный бренд экосистемы со своим стилем, контентом и формой заявки. Здесь —
                обзор; детали на отдельных сайтах направлений.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 rounded-xl px-8">
                  <Link href="/#contact">
                    Обсудить направление
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 rounded-xl border-border/80 bg-white/60 px-8">
                  <Link href="/">Вернуться на главную</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {catalogFacts.map((fact) => (
                <div key={fact.label} className="rounded-[1.75rem] border border-border/70 bg-white/75 p-6">
                  <div className="text-3xl font-semibold tracking-tight text-[var(--brand-ink)]">{fact.value}</div>
                  <div className="mt-2 text-sm leading-7 text-muted-foreground">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {catalogBenefits.map((benefit) => (
            <div key={benefit.title} className="section-card p-6">
              <benefit.icon className="h-5 w-5 text-accent" />
              <h2 className="mt-5 text-xl font-semibold text-[var(--brand-ink)]">{benefit.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{benefit.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 section-card p-8 md:p-10">
          <span className="eyebrow">Компании экосистемы</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--brand-ink)]">
            Вертикали бизнеса под одним зонтиком
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Строительство, обучение, материалы, недвижимость, логистика и инженерное оборудование — каждая компания со
            своим сайтом и отдельной формой связи.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {ecosystemCompanies.map((company) => (
              <a
                key={company.slug}
                href={company.subsiteUrl}
                className="group rounded-[1.5rem] border border-border/70 bg-white/75 p-6 transition-colors hover:border-primary/30 hover:bg-white"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{company.brand}</div>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--brand-ink)]">{company.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{company.tagline}</p>
                  </div>
                  <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.32fr_0.68fr]">
          <aside className="section-card h-fit p-6 xl:sticky xl:top-28">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Навигация</div>
            <nav className="mt-5 flex flex-col gap-2">
              {serviceDirections.map((direction) => (
                <a
                  key={direction.slug}
                  href={`#${direction.slug}`}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted/50 hover:text-primary"
                >
                  {direction.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-6">
            {serviceDirections.map((direction) => (
              <section id={direction.slug} key={direction.slug} className="section-card scroll-mt-28 p-8 md:p-10">
                <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
                  <div>
                    <div className="flex items-center gap-3 text-primary">
                      <direction.icon className="h-5 w-5" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        {direction.brand}
                      </span>
                    </div>
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--brand-ink)]">{direction.title}</h2>
                    <p className="mt-5 text-lg leading-8 text-muted-foreground">{direction.longDescription}</p>

                    <div className="mt-8 rounded-[1.5rem] border border-border/70 bg-muted/20 p-5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Подходит для</div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {direction.audience.map((item) => (
                          <span key={item} className="rounded-full border border-border/70 bg-white/70 px-3 py-2 text-sm text-foreground/85">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-border/70 bg-white/70 p-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Что входит</div>
                      <div className="mt-4 space-y-3">
                        {direction.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm leading-7 text-foreground/85">
                            <Check className="mt-1 h-4 w-4 text-accent" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/70 bg-white/70 p-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Этапы</div>
                      <div className="mt-4 space-y-3">
                        {direction.steps.map((step) => (
                          <div key={step} className="flex items-start gap-3 text-sm leading-7 text-foreground/85">
                            <ChevronRight className="mt-1 h-4 w-4 text-primary" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="h-12 rounded-xl px-6">
                    <a href={direction.subsiteUrl}>
                      Сайт направления
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-xl border-border/80 bg-white/60 px-6">
                    <a href={`${direction.subsiteUrl}#form-${direction.slug}`}>Заявка в {direction.brand}</a>
                  </Button>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {direction.highlights.map((item) => (
                    <div key={item} className="rounded-[1.5rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(243,239,232,0.75))] p-5 text-sm leading-7 text-foreground/85">
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
