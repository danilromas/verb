"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Герб Усадьбы Вербицких"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-lg font-semibold tracking-tight text-foreground">Усадьба Вербицких</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("specialists")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Специалисты
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
              Платформа
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6"
            >
              Начать проект
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("specialists")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Специалисты
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("digital-features")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Платформа
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 rounded-xl"
            >
              Начать проект
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
