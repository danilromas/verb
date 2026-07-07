"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-14">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">Усадьба Вербицких</div>
            <p className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-[var(--brand-ink)]">
              Архитектура, строительство, инженерия и контроль проекта в единой системе.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              Новый каркас сайта теперь ведет пользователя не только по лендингу, но и к отдельному большому каталогу
              направлений, где можно подробно раскрывать каждую услугу, этап, кейс и формат сопровождения.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Навигация</div>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link href="/" className="text-foreground/85 transition-colors hover:text-primary">
                Главная
              </Link>
              <Link href="/catalog" className="text-foreground/85 transition-colors hover:text-primary">
                Каталог направлений
              </Link>
              <a href="#portfolio" className="text-foreground/85 transition-colors hover:text-primary">
                Кейсы
              </a>
              <a href="#contact" className="text-foreground/85 transition-colors hover:text-primary">
                Контакты
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Контакты</div>
            <div className="mt-5 space-y-3 text-sm text-foreground/85">
              <a href="tel:+79785350407" className="block transition-colors hover:text-primary">
                +7 (978) 535-04-07
              </a>
              <a href="mailto:info@verbitsky-estate.ru" className="block transition-colors hover:text-primary">
                info@verbitsky-estate.ru
              </a>
              <p>Евпатория, ул. Эскадронная 11, офис 8</p>
              <Link href="/catalog" className="inline-flex items-center gap-2 font-semibold text-primary">
                Перейти в большой каталог
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
