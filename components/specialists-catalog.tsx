"use client"

import Link from "next/link"
import { ArrowRight, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { leadTeam } from "@/lib/site-data"

export function SpecialistsCatalog() {
  return (
    <section id="specialists" className="py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Команда</span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Кураторская команда вокруг каждого проекта, а не случайный набор исполнителей.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Мы сознательно переводим этот блок из формата маркетплейса в формат leadership-команды: у проекта есть
              архитектурная, строительная, инженерная и клиентская линия ответственности.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="h-14 rounded-xl border-border/80 bg-white/60 px-8">
            <Link href="/catalog">
              Все направления и роли
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {leadTeam.map((member, index) => (
            <div key={member.name} className="section-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(237,232,225,0.95))] text-lg font-semibold text-primary">
                  0{index + 1}
                </div>
                <BadgeCheck className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-[var(--brand-ink)]">{member.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{member.role}</p>
              <div className="mt-8 border-t border-border/60 pt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Включается в проект на нужной глубине
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
