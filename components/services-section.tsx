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
  ClipboardCheck,
  Home as HomeIcon,
  GraduationCap
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const serviceCategories = [
  {
    id: "construction",
    label: "Строительство",
    icon: Building2,
    highlight: true,
    services: [
      { title: "Проектирование и сметы", icon: DraftingCompass, description: "Разработка детальных архитектурных и инженерных проектов с точным расчетом стоимости, учитывающим все этапы работ." },
      { title: "Согласование", icon: FileText, description: "Полное юридическое сопровождение и получение разрешений на строительство в соответствии с нормами РФ." },
      { title: "Подключение коммуникаций", icon: Zap, description: "Проектирование и монтаж систем электроснабжения, водопровода, газа, канализации и отопления." },
      { title: "Снос зданий", icon: Trash2, description: "Безопасный демонтаж строений любой сложности с последующей очисткой и вывозом строительного мусора." },
      { title: "Утилизация отходов", icon: Truck, description: "Вывоз и экологически безопасная утилизация строительных отходов в соответствии с экологическими стандартами." },
      { title: "Строительство домов", icon: Home, description: "Возведение частных коттеджей, многоэтажных зданий и коммерческих объектов «под ключ» с гарантией качества." },
      { title: "Благоустройство", icon: Trees, description: "Ландшафтный дизайн, озеленение, создание парковых зон и комфортной городской среды." },
    ]
  },
  {
    id: "renovation",
    label: "Ремонт и отделка",
    icon: Paintbrush,
    services: [
      { title: "Дизайн и визуализация", icon: Palette, description: "Создание уникальных интерьеров с 3D-визуализацией каждого помещения и подбором материалов." },
      { title: "Ремонт под ключ", icon: Hammer, description: "Полный цикл отделочных работ от черновых этапов до финального декора и мебелирования." },
      { title: "Клининг", icon: Sparkles, description: "Профессиональная послестроительная уборка и подготовка объекта к заселению или сдаче." },
      { title: "Вывоз мусора", icon: Trash2, description: "Оперативный вывоз строительных отходов на всех этапах ремонта." },
    ]
  },
  {
    id: "engineering",
    label: "Инженерия и техника",
    icon: Settings,
    services: [
      { title: "Аренда спецтехники", icon: Truck, description: "Широкий парк строительной техники для выполнения любых задач на объекте." },
      { title: "Установка лифтов", icon: Building2, description: "Монтаж и техническое обслуживание лифтового оборудования любых производителей." },
      { title: "Кондиционирование", icon: Fan, description: "Проектирование и установка систем вентиляции, кондиционирования и увлажнения воздуха." },
      { title: "Умный дом", icon: Cpu, description: "Внедрение современных систем автоматизации и управления домом: освещение, климат, безопасность." },
    ]
  },
  {
    id: "realestate",
    label: "Недвижимость",
    icon: HomeIcon,
    services: [
      { title: "Покупка и продажа", icon: HomeIcon, description: "Помощь в подборе, проверке и оформлении сделок с недвижимостью в Крыму." },
      { title: "Аренда", icon: HomeIcon, description: "Поиск и оформление аренды жилой и коммерческой недвижимости на выгодных условиях." },
      { title: "Оценка недвижимости", icon: Scale, description: "Профессиональная оценка стоимости объектов недвижимости для любых целей." },
      { title: "Юридическое сопровождение", icon: FileText, description: "Полное юридическое сопровождение сделок с недвижимостью." },
    ]
  },
  {
    id: "education",
    label: "Обучение",
    icon: GraduationCap,
    services: [
      { title: "Курсы для строителей", icon: HardHat, description: "Обучение современным строительным технологиям и техникам безопасности." },
      { title: "Дизайн интерьеров", icon: Palette, description: "Практические курсы по созданию функциональных и красивых интерьеров." },
      { title: "Управление проектами", icon: ClipboardCheck, description: "Обучение эффективному управлению строительными и ремонтными проектами." },
      { title: "Мастер-классы", icon: GraduationCap, description: "Регулярные мастер-классы от ведущих специалистов отрасли." },
    ]
  },
  {
    id: "support",
    label: "Сервисы и сопровождение",
    icon: ShieldCheck,
    services: [
      { title: "Юридическое сопровождение", icon: Scale, description: "Юридическая чистота сделок и защита интересов заказчика на всех этапах." },
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
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all ${category.highlight ? 'data-[state=active]:bg-accent data-[state=active]:text-accent-foreground' : ''}`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0 focus-visible:outline-none">
                {/* Highlight section for Construction */}
                {category.highlight && (
                  <div className="mb-12 p-8 bg-accent/10 border-2 border-accent/30 rounded-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Building2 className="w-8 h-8 text-accent" />
                      Наше ключевое направление — Строительство
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-foreground mb-3 text-lg">Почему выбирают нас?</h4>
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">•</span>
                            <span>Опыт работы более 8 лет на рынке Крыма</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">•</span>
                            <span>Полный цикл работ от проекта до сдачи под ключ</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">•</span>
                            <span>Гарантия на все виды выполненных работ</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">•</span>
                            <span>Прозрачная смета без скрытых платежей</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-3 text-lg">Основные этапы работ</h4>
                        <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                          <li>Консультация и обсуждение пожеланий</li>
                          <li>Разработка архитектурного проекта</li>
                          <li>Составление сметы и согласование</li>
                          <li>Строительство и монтажные работы</li>
                          <li>Внутренние отделочные работы</li>
                          <li>Сдача объекта и гарантийное обслуживание</li>
                        </ol>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl h-12 px-8 text-lg">
                        Начать проект строительства
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      className={`group p-6 bg-background border border-border/60 rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col items-start ${category.highlight ? 'hover:border-accent/40 hover:shadow-accent/5' : 'hover:border-primary/40 hover:shadow-primary/5'}`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${category.highlight ? 'bg-accent/5 group-hover:bg-accent/10' : 'bg-primary/5 group-hover:bg-primary/10'}`}>
                        <service.icon className={`w-6 h-6 transition-transform duration-300 ${category.highlight ? 'text-accent group-hover:scale-110' : 'text-primary group-hover:scale-110'}`} />
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 transition-colors ${category.highlight ? 'text-foreground group-hover:text-accent' : 'text-foreground group-hover:text-primary'}`}>
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
