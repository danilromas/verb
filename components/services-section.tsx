import { 
  Building2, 
  Paintbrush, 
  Settings, 
  ShieldCheck, 
  DraftingCompass, 
  FileText, 
  Zap, 
  Trash2, 
  Trees, 
  Home, 
  Palette, 
  Hammer, 
  Sparkles, 
  Truck, 
  HardHat, 
  Fan, 
  Cpu, 
  Scale, 
  Calculator, 
  ClipboardCheck 
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const serviceCategories = [
  {
    id: "construction",
    label: "Строительство",
    icon: Building2,
    services: [
      { title: "Проектирование и сметы", icon: DraftingCompass, description: "Разработка детальных архитектурных и инженерных проектов с точным расчетом стоимости." },
      { title: "Согласование", icon: FileText, description: "Полное юридическое сопровождение и получение разрешений на строительство." },
      { title: "Подключение коммуникаций", icon: Zap, description: "Проектирование и монтаж систем электроснабжения, водопровода и газа." },
      { title: "Снос зданий", icon: Trash2, description: "Безопасный демонтаж строений любой сложности с последующей очисткой площадки." },
      { title: "Утилизация отходов", icon: Truck, description: "Вывоз и экологически безопасная утилизация строительного мусора." },
      { title: "Строительство домов", icon: Home, description: "Возведение частных коттеджей, многоэтажных зданий и коммерческих объектов." },
      { title: "Благоустройство", icon: Trees, description: "Ландшафтный дизайн, озеленение и создание комфортной городской среды." },
    ]
  },
  {
    id: "renovation",
    label: "Ремонт и отделка",
    icon: Paintbrush,
    services: [
      { title: "Дизайн и визуализация", icon: Palette, description: "Создание уникальных интерьеров с 3D-визуализацией каждого помещения." },
      { title: "Ремонт под ключ", icon: Hammer, description: "Полный цикл отделочных работ от черновых этапов до финального декора." },
      { title: "Клининг", icon: Sparkles, description: "Профессиональная послестроительная уборка и подготовка объекта к заселению." },
      { title: "Вывоз мусора", icon: Trash2, description: "Оперативный вывоз строительных отходов на всех этапах ремонта." },
    ]
  },
  {
    id: "engineering",
    label: "Инженерия и техника",
    icon: Settings,
    services: [
      { title: "Аренда спецтехники", icon: Truck, description: "Широкий парк строительной техники для выполнения любых задач на объекте." },
      { title: "Установка лифтов", icon: Building2, description: "Монтаж и техническое обслуживание лифтового оборудования." },
      { title: "Кондиционирование", icon: Fan, description: "Проектирование и установка систем вентиляции и кондиционирования." },
      { title: "Умный дом", icon: Cpu, description: "Внедрение современных систем автоматизации и управления домом." },
    ]
  },
  {
    id: "support",
    label: "Сервисы и сопровождение",
    icon: ShieldCheck,
    services: [
      { title: "Юридическое сопровождение", icon: Scale, description: "Юридическая чистота сделок и защита интересов заказчика." },
      { title: "Бухгалтерия и аудит", icon: Calculator, description: "Финансовый контроль, учет затрат и аудит строительных проектов." },
      { title: "Охрана объектов", icon: HardHat, description: "Обеспечение безопасности на строительных площадках и готовых объектах." },
      { title: "Документация", icon: ClipboardCheck, description: "Ведение исполнительной документации и контроль норм безопасности." },
    ]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Экосистема услуг</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Все необходимые сервисы для реализации вашего проекта — от идеи до финальной эксплуатации
            </p>
          </div>

          <Tabs defaultValue="construction" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-4 no-scrollbar">
              <TabsList className="bg-muted/50 p-1 h-auto flex-nowrap">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0 focus-visible:outline-none">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-background border border-border/60 rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-start"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                        <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
