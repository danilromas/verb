"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/site-data"

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Кейсы и объекты</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Визуальная подача вместо длинных объяснений.
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Добавил ваши референсные изображения, чтобы экран стал строже, чище и ближе к архитектурной эстетике.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">
            <Image src="/brutalist-concrete-2.png" alt="Архитектурный кейс" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white md:p-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Featured case</div>
              <h3 className="mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">Строгая архитектура, чистая геометрия, полный контроль реализации.</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {["420 м²", "14 месяцев", "full cycle"].map((item) => (
                  <div key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="section-card p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Подход</div>
              <p className="mt-4 text-xl font-semibold text-[var(--brand-ink)]">Меньше текста, больше формы, материала и ритма.</p>
            </div>
            <div className="relative min-h-[248px] overflow-hidden rounded-[2rem]">
              <Image src="/brutalist-concrete-1.png" alt="Материал" fill className="object-cover grayscale" />
            </div>
            <div className="section-card p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Дальше сюда можно поставить</div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                реальные фото объектов, интерьерные кадры, планы и детали материалов вместо временных архитектурных
                референсов.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="section-card p-6">
              <div className="rounded-[1.5rem] border border-border/70 bg-[linear-gradient(180deg,rgba(243,240,235,0.95),rgba(255,255,255,0.7))] p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{project.type}</div>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--brand-ink)]">{project.title}</h3>
                <div className="mt-6 rounded-2xl border border-border/70 bg-white/75 px-4 py-3 text-sm font-medium text-foreground/85">
                  {project.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="outline" className="h-14 rounded-xl border-border/80 bg-white/60 px-8">
            <Link href="/catalog">
              Перейти в каталог направлений
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
