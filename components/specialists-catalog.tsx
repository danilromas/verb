"use client"

import { Star, MessageSquare, Filter, Search, User } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const categories = ["Все", "Строительство", "Ремонт", "Инженерия", "Проектирование", "Дизайн"]

const specialists = [
  {
    id: 1,
    name: "Алексей Соколов",
    specialization: "Ведущий инженер-строитель",
    category: "Строительство",
    rating: 4.9,
    reviews: 124,
    image: "/placeholder-user.jpg",
    price: "от 1500 ₽/час",
  },
  {
    id: 2,
    name: "Марина Волкова",
    specialization: "Дизайнер интерьеров",
    category: "Дизайн",
    rating: 4.8,
    reviews: 86,
    image: "/placeholder-user.jpg",
    price: "от 2500 ₽/м²",
  },
  {
    id: 3,
    name: "Игорь Кузнецов",
    specialization: "Мастер отделочных работ",
    category: "Ремонт",
    rating: 5.0,
    reviews: 215,
    image: "/placeholder-user.jpg",
    price: "от 800 ₽/м²",
  },
  {
    id: 4,
    name: "Дмитрий Морозов",
    specialization: "Специалист по умным домам",
    category: "Инженерия",
    rating: 4.7,
    reviews: 54,
    image: "/placeholder-user.jpg",
    price: "от 3000 ₽/выезд",
  },
  {
    id: 5,
    name: "Елена Белова",
    specialization: "Архитектор-проектировщик",
    category: "Проектирование",
    rating: 4.9,
    reviews: 92,
    image: "/placeholder-user.jpg",
    price: "от 1000 ₽/м²",
  },
  {
    id: 6,
    name: "Виктор Громов",
    specialization: "Электромонтажник",
    category: "Инженерия",
    rating: 4.8,
    reviews: 143,
    image: "/placeholder-user.jpg",
    price: "от 1200 ₽/точка",
  },
]

export function SpecialistsCatalog() {
  const [activeCategory, setActiveCategory] = useState("Все")

  const filteredSpecialists = activeCategory === "Все" 
    ? specialists 
    : specialists.filter(s => s.category === activeCategory)

  return (
    <section id="specialists" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Каталог специалистов</h2>
              <p className="text-muted-foreground text-lg">
                Выбирайте проверенных профессионалов для ваших задач или доверьте подбор нашей системе.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-xl h-12 gap-2">
                <Filter className="w-4 h-4" />
                Фильтры
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Поиск по имени или навыку" 
                  className="pl-10 h-12 rounded-xl w-full md:w-[300px] border-border bg-background"
                />
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Specialists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpecialists.map((specialist) => (
              <div 
                key={specialist.id} 
                className="group bg-background border border-border/60 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className="p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-muted overflow-hidden flex items-center justify-center flex-shrink-0">
                      <User className="w-10 h-10 text-muted-foreground/40" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {specialist.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{specialist.specialization}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-bold">{specialist.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MessageSquare className="w-3 h-3" />
                          <span className="text-[10px] font-medium uppercase tracking-wider">{specialist.reviews} отзывов</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-muted/50 font-normal text-xs py-1 px-3">
                      {specialist.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-muted/50 font-normal text-xs py-1 px-3">
                      Проверен
                    </Badge>
                    <Badge variant="secondary" className="bg-muted/50 font-normal text-xs py-1 px-3">
                      8 лет опыта
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">СТОИМОСТЬ</span>
                      <span className="text-lg font-bold text-foreground">{specialist.price}</span>
                    </div>
                    <Button size="sm" className="rounded-xl px-6 h-10">
                      Связаться
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-xl px-12 h-14 text-lg transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary">
              Показать всех специалистов
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
