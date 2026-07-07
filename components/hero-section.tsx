"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { siteStats } from "@/lib/site-data"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 architect-grid opacity-40" />
      <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(145,111,80,0.12),transparent_60%)] blur-3xl" />
      <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(48,67,115,0.14),transparent_60%)] blur-3xl" />

      <div className="section-shell relative">
        <div className="section-card overflow-hidden">
          <div className="grid gap-8 px-6 py-6 md:px-10 md:py-10 xl:grid-cols-[0.95fr_1.05fr] xl:px-14 xl:py-14">
            <div className="relative">
              <div className="eyebrow mb-6">
                <CheckCircle2 className="mr-2 h-3.5 w-3.5" />
                crimea premium build
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-[var(--brand-ink)] md:text-6xl xl:text-7xl">
                Архитектура и строительство без визуального шума.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                Полный цикл для частных и коммерческих объектов в Крыму: проект, реализация, контроль.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="h-14 rounded-xl px-8 text-base shadow-lg shadow-primary/15"
                >
                  Обсудить объект
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-xl border-border/80 bg-white/60 px-8 text-base"
                >
                  <Link href="/catalog">Смотреть каталог направлений</Link>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 lg:max-w-xl">
                {siteStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.5rem] border border-border/70 bg-white/70 p-4 shadow-sm">
                    <div className="text-2xl font-semibold tracking-tight text-[var(--brand-ink)]">{stat.value}</div>
                    <div className="mt-1 text-xs leading-5 text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
                <Image
                  src="/brutalist-concrete-1.png"
                  alt="Бетонная архитектурная композиция"
                  fill
                  className="object-cover grayscale"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Материал и форма</p>
                  <p className="mt-2 text-xl font-semibold">Строгая архитектурная подача вместо перегруженного лендинга</p>
                </div>
              </div>
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
                <Image
                  src="/brutalist-concrete-2.png"
                  alt="Монументальная бетонная архитектура"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
