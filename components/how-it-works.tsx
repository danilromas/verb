import { ClipboardList, Users, FileText, HardHat, CheckCircle2 } from "lucide-react"

const steps = [
  {
    title: "Заявка",
    description: "Оставьте запрос на сайте или свяжитесь с нами любым удобным способом для первичной консультации.",
    icon: ClipboardList,
  },
  {
    title: "Подбор специалистов",
    description: "Мы подбираем проверенных мастеров и инженеров, идеально подходящих под задачи вашего проекта.",
    icon: Users,
  },
  {
    title: "Смета и согласование",
    description: "Детальный расчет стоимости и сроков. Прозрачный договор и утверждение всех этапов работ.",
    icon: FileText,
  },
  {
    title: "Выполнение работ",
    description: "Профессиональная реализация проекта с соблюдением всех технологий и стандартов качества.",
    icon: HardHat,
  },
  {
    title: "Контроль и сдача",
    description: "Финальная проверка качества, подписание актов и предоставление гарантии на выполненные работы.",
    icon: CheckCircle2,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Как это работает</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Прозрачный процесс реализации вашего проекта от первого звонка до финальной сдачи
            </p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 group-hover:border-primary/40 transition-all duration-300 shadow-sm relative">
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
