"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const scrollToSection = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="section-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-white/80 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-sm">
              UV
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">Усадьба Вербицких</div>
              <div className="text-base font-semibold text-foreground">Архитектура. Строительство. Контроль.</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              О бренде
            </button>
            <button
              onClick={() => scrollToSection("specialists")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Команда
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("digital-features")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Digital
            </button>
            <Link href="/catalog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Каталог направлений
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="text-right">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Работаем по Крыму</div>
              <a href="tel:+79785350407" className="text-sm font-semibold text-foreground transition-colors hover:text-primary">
                +7 (978) 535-04-07
              </a>
            </div>
            <Button onClick={() => scrollToSection("contact")} className="rounded-xl px-6">
              Обсудить проект
            </Button>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-[2rem] border border-border/70 bg-white/90 p-5 shadow-xl backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-2">
              <button onClick={() => scrollToSection("about")} className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-primary">
                О бренде
              </button>
              <button onClick={() => scrollToSection("services")} className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-primary">
                Направления
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-primary">
                Проекты
              </button>
              <button onClick={() => scrollToSection("digital-features")} className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-primary">
                Digital-платформа
              </button>
              <Link href="/catalog" className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-primary">
                Большой каталог
              </Link>
            </nav>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-border/70 bg-muted/30 p-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Работаем по Крыму</div>
                <a href="tel:+79785350407" className="text-sm font-semibold text-foreground">
                  +7 (978) 535-04-07
                </a>
              </div>
              <Button onClick={() => scrollToSection("contact")} className="rounded-xl">
                Старт
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
