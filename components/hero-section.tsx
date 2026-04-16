"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background abstraction */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <CheckCircle2 className="w-3 h-3" />
            <span>Единая платформа сервиса в Крыму</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Все услуги для строительства и ремонта — в одном месте
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-normal max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            От проекта до реализации и обслуживания
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Оставить заявку
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-border hover:bg-muted h-14 px-8 text-lg rounded-xl transition-all"
            >
              Посмотреть услуги
            </Button>
          </div>

          {/* Trust Elements / Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto pt-8 border-t border-border/50 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground tracking-tight">150+</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Проектов в Крыму</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-border/50 px-8">
              <span className="text-3xl font-bold text-foreground tracking-tight">45+</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Специалистов</span>
            </div>
            <div className="hidden md:flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground tracking-tight">8 лет</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">На рынке</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
