"use client"

import { Star, MessageCircle, ArrowRight, ExternalLink, Quote, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const reviews = [
  {
    name: "Константин Р.",
    text: "Пользовался услугой 'Ремонт под ключ'. Все прошло на высшем уровне. Особенно порадовал личный кабинет, где я мог видеть все фотоотчеты.",
    rating: 5,
    date: "Март 2024",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Ольга М.",
    text: "Строили загородный дом. Понравился комплексный подход: от проекта до ландшафтного дизайна. Все специалисты в одном месте.",
    rating: 5,
    date: "Январь 2024",
    avatar: "/placeholder-user.jpg",
  },
]

const blogPosts = [
  {
    title: "Тренды строительства в Крыму 2024",
    excerpt: "Какие материалы и технологии наиболее эффективны в условиях нашего климата.",
    category: "Строительство",
    image: "/construction-technical-consultation-blueprints-and.jpg",
  },
  {
    title: "Умный дом: с чего начать?",
    excerpt: "Пошаговое руководство по внедрению систем автоматизации в готовую квартиру.",
    category: "Технологии",
    image: "/specialized-construction-work-infrastructure-engin.jpg",
  },
]

const partners = [
  { name: "Partner 1", logo: "/placeholder-logo.svg" },
  { name: "Partner 2", logo: "/placeholder-logo.svg" },
  { name: "Partner 3", logo: "/placeholder-logo.svg" },
  { name: "Partner 4", logo: "/placeholder-logo.svg" },
]

export function AdditionalSections() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setIsDialogOpen(false)
    }, 3000)
  }

  return (
    <>
      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Отзывы клиентов</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Нам доверяют создание самого важного — домов, в которых живут и работают.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-background p-10 rounded-3xl border border-border/50 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Quote className="w-24 h-24 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-foreground italic mb-8 leading-relaxed relative z-10">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-border/50 pt-8">
                    <div className="w-14 h-14 rounded-full bg-muted overflow-hidden flex-shrink-0">
                       <Image src={review.avatar} alt={review.name} width={56} height={56} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">База знаний</h2>
                <p className="text-muted-foreground text-lg">
                  Полезные советы, аналитика рынка и кейсы от наших экспертов.
                </p>
              </div>
              <Button variant="link" className="text-primary font-bold gap-2 text-lg h-auto p-0 group">
                Все статьи
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {blogPosts.map((post, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6 shadow-lg">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary uppercase tracking-widest border border-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                    Читать полностью
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-muted/20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Наши партнеры и поставщики</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {partners.map((partner, index) => (
                <div key={index} className="relative w-32 h-12">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              ))}
            </div>
            
            <div className="mt-20 p-12 bg-primary rounded-[40px] text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Хотите стать нашим партнером?</h3>
              <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg relative z-10">
                Мы открыты к сотрудничеству с надежными поставщиками материалов и профессиональными бригадами.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-2xl h-14 px-10 text-lg shadow-xl shadow-black/10 transition-all hover:scale-105 relative z-10"
                onClick={() => setIsDialogOpen(true)}
              >
                Подать заявку на партнерство
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Заявка на партнерство</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Заполните форму, и мы свяжемся с вами в течение 1 рабочего дня.
            </DialogDescription>
          </DialogHeader>
          
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Star className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Заявка отправлена!</h3>
              <p className="text-muted-foreground">Спасибо за интерес к сотрудничеству.</p>
            </div>
          ) : (
            <form onSubmit={handlePartnershipSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Название компании / ФИО</label>
                <Input placeholder="Введите название компании или ваше имя" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input placeholder="email@example.com" type="email" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Тип сотрудничества</label>
                <select className="w-full h-10 rounded-lg border border-border bg-background px-3">
                  <option>Поставщик материалов</option>
                  <option>Строительная бригада</option>
                  <option>Проектная организация</option>
                  <option>Другое</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Комментарий</label>
                <Textarea placeholder="Расскажите о вашей компании и виде деятельности" className="min-h-[100px]" />
              </div>
              
              <div className="flex gap-3 pt-2">
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="flex-1">
                    Отмена
                  </Button>
                </DialogClose>
                <Button type="submit" className="flex-1">
                  Отправить заявку
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
