"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-muted/30 rounded-[48px] p-8 md:p-16 border border-border/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Начните свой проект сегодня</h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут для обсуждения деталей и предварительного расчета.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">ГОРЯЧАЯ ЛИНИЯ</p>
                      <a href="tel:+79782729998" className="text-xl font-bold text-foreground hover:text-primary transition-colors">+7 (978) 272-99-98</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">EMAIL</p>
                      <a href="mailto:info@verbitsky-estate.ru" className="text-xl font-bold text-foreground hover:text-primary transition-colors">info@verbitsky-estate.ru</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">ОФИС</p>
                      <p className="text-xl font-bold text-foreground">г. Евпатория, ул. Эскадронная 11 офис 8</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 md:p-10 rounded-[32px] border border-border/50 shadow-xl shadow-black/5">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Заявка принята!</h3>
                    <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время. Спасибо за доверие!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Ваше имя</label>
                        <Input placeholder="Иван Иванов" className="h-14 rounded-xl border-border bg-muted/20" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" className="h-14 rounded-xl border-border bg-muted/20" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Тип услуги</label>
                      <Select>
                        <SelectTrigger className="h-14 rounded-xl border-border bg-muted/20">
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="construction">Строительство</SelectItem>
                          <SelectItem value="renovation">Ремонт и отделка</SelectItem>
                          <SelectItem value="engineering">Инженерия</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Комментарий (необязательно)</label>
                      <Textarea placeholder="Краткое описание задачи..." className="min-h-[120px] rounded-xl border-border bg-muted/20 resize-none" />
                    </div>

                    <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                      Отправить заявку
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <p className="text-[10px] text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
