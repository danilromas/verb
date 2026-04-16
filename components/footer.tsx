"use client"

import Image from "next/image"
import { Facebook, Instagram, Send, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Герб Усадьбы Вербицких"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="text-xl font-bold tracking-tight text-foreground">Усадьба Вербицких</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Единая цифровая платформа для строительства, ремонта и сервисного обслуживания в Крыму. От идеи до реализации.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border hover:border-primary hover:text-primary transition-all">
                  <Send className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border hover:border-primary hover:text-primary transition-all">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border hover:border-primary hover:text-primary transition-all">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Платформа</h4>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Услуги</button></li>
                <li><button onClick={() => scrollToSection("specialists")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Специалисты</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Портфолио</button></li>
                <li><button onClick={() => scrollToSection("digital-features")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Цифровые возможности</button></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Компания</h4>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection("how-it-works")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Как это работает</button></li>
                <li><button onClick={() => scrollToSection("reviews")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Отзывы</button></li>
                <li><button onClick={() => scrollToSection("blog")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Блог</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Контакты</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Контакты</h4>
              <div className="space-y-4">
                <a href="tel:+79782729998" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  +7 (978) 272-99-98
                </a>
                <p className="text-sm text-muted-foreground">
                  г. Евпатория,<br />
                  ул. Эскадронная 11 офис 8

                </p>
                <div className="pt-4">
                  <Button onClick={scrollToTop} variant="secondary" size="sm" className="rounded-xl gap-2 text-xs font-bold uppercase tracking-widest">
                    Наверх
                    <ArrowUp className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Усадьба Вербицких. Все права защищены.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
