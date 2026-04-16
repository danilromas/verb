"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Maximize2, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    title: "Вилла в Ялте",
    category: "Дома",
    description: "Проектирование и строительство загородного дома площадью 350 м² с панорамным остеклением.",
    image: "/modern-repaired-highway-in-crimea-after-constructi.jpg", // Using available images
    tags: ["Строительство", "Архитектура"],
  },
  {
    id: 2,
    title: "Апартаменты 'Бриз'",
    category: "Ремонт",
    description: "Дизайн-проект и ремонт под ключ в современном минималистичном стиле.",
    image: "/modern-urban-street-in-armyansk-after-infrastructu.jpg",
    tags: ["Ремонт", "Дизайн"],
  },
  {
    id: 3,
    title: "Бизнес-центр 'Крым'",
    category: "Коммерция",
    description: "Комплексное обслуживание инженерных систем и систем безопасности.",
    image: "/completed-infrastructure-object-based-on-engineeri.jpg",
    tags: ["Инженерия", "Коммерция"],
  },
]

const categories = ["Все", "Дома", "Ремонт", "Коммерция"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [isBeforeAfterHover, setIsBeforeAfterHover] = useState(false)

  const filteredItems = activeCategory === "Все" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Портфолио проектов</h2>
              <p className="text-muted-foreground text-lg">
                Реализованные кейсы: от частных резиденций до крупных коммерческих и инфраструктурных объектов.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-muted/50 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Before/After Showcase */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Пример работы: До / После</h3>
            </div>
            <div 
              className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              onMouseEnter={() => setIsBeforeAfterHover(true)}
              onMouseLeave={() => setIsBeforeAfterHover(false)}
            >
              <div className="absolute inset-0 flex">
                <div className="relative w-1/2 h-full">
                  <Image 
                    src="/old-damaged-highway-in-crimea-before-repair.jpg" 
                    alt="Before" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg text-white font-bold text-sm uppercase tracking-widest border border-white/20">
                    До
                  </div>
                </div>
                <div className="relative w-1/2 h-full">
                  <Image 
                    src="/modern-repaired-highway-in-crimea-after-constructi.jpg" 
                    alt="After" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-primary/80 backdrop-blur-md rounded-lg text-white font-bold text-sm uppercase tracking-widest border border-white/20">
                    После
                  </div>
                </div>
              </div>
              
              {/* Slider Handle (Visual only for now) */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-white shadow-lg z-10 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary">
                   <div className="flex gap-1">
                     <div className="w-1 h-3 bg-primary rounded-full" />
                     <div className="w-1 h-3 bg-primary rounded-full" />
                   </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold text-white mb-2">Обновление инфраструктурного объекта</h4>
                <p className="text-white/80 max-w-xl">
                  Комплексная реконструкция дорожного покрытия и благоустройство прилегающей территории с использованием современных материалов.
                </p>
              </div>
            </div>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-muted rounded-3xl overflow-hidden aspect-[4/5] hover:shadow-2xl transition-all duration-700"
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white px-2 py-1 bg-white/20 backdrop-blur-md rounded-md border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                  </p>
                  <Button size="sm" className="w-fit bg-white text-black hover:bg-primary hover:text-white rounded-xl h-10 px-6 gap-2 group/btn">
                    Подробнее
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black cursor-pointer">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-xl px-12 h-14 text-lg border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              Смотреть все проекты
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
