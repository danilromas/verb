"use client"

import { useState } from "react"
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="section-card overflow-hidden p-8 md:p-10 xl:p-14">
          <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Финальный контакт</span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
                Обсудим объект, формат работы и предварительный сценарий реализации.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Здесь новый сайт должен завершаться не generic-формой, а ощущением личного контакта с сильной командой.
                Поэтому блок собран как консультационная точка входа.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: Phone, label: "Телефон", value: "+7 (978) 535-04-07", href: "tel:+79785350407" },
                  { icon: Mail, label: "Email", value: "info@verbitsky-estate.ru", href: "mailto:info@verbitsky-estate.ru" },
                  { icon: MapPin, label: "Офис", value: "Евпатория, ул. Эскадронная 11, офис 8" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-border/70 bg-white/70 p-5">
                    <div className="flex gap-4">
                      <div className="rounded-2xl border border-border/70 bg-white/80 p-3 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="mt-2 block text-lg font-semibold text-[var(--brand-ink)] transition-colors hover:text-primary">
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-lg font-semibold text-[var(--brand-ink)]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,240,234,0.92))] p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-[var(--brand-ink)]">Заявка принята</h3>
                  <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">
                    Мы свяжемся с вами в ближайшее время и обсудим подходящий формат работы по объекту.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Старт проекта</div>
                    <h3 className="mt-3 text-2xl font-semibold text-[var(--brand-ink)]">Кратко опишите задачу, а мы предложим маршрут реализации.</h3>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Имя</label>
                      <Input required placeholder="Как к вам обращаться" className="h-14 rounded-xl bg-white/80" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Телефон</label>
                      <Input required placeholder="+7 (___) ___-__-__" className="h-14 rounded-xl bg-white/80" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Направление</label>
                    <Select>
                      <SelectTrigger className="h-14 rounded-xl bg-white/80">
                        <SelectValue placeholder="Что вас интересует" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="architecture">Архитектура и проектирование</SelectItem>
                        <SelectItem value="construction">Строительство</SelectItem>
                        <SelectItem value="interiors">Ремонт и интерьер</SelectItem>
                        <SelectItem value="engineering">Инженерные системы</SelectItem>
                        <SelectItem value="smart">Умный дом</SelectItem>
                        <SelectItem value="landscape">Благоустройство</SelectItem>
                        <SelectItem value="docs">Документация и согласования</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Комментарий</label>
                    <Textarea className="min-h-[160px] rounded-xl bg-white/80" placeholder="Тип объекта, стадия проекта, город, ориентиры по задачам и срокам" />
                  </div>

                  <Button type="submit" className="h-14 w-full rounded-xl text-base font-semibold">
                    Отправить запрос
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
