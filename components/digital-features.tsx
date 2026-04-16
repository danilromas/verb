import { Smartphone, LayoutDashboard, Camera, QrCode, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Личный кабинет заказчика",
    description: "Весь ваш проект в одном приложении. Управляйте задачами, просматривайте документы и оплачивайте счета онлайн.",
    icon: LayoutDashboard,
  },
  {
    title: "Отслеживание в реальном времени",
    description: "Визуальный прогресс-бар каждого этапа работ. Вы всегда знаете, что происходит на объекте прямо сейчас.",
    icon: Smartphone,
  },
  {
    title: "Фото и видео отчёты",
    description: "Ежедневные обновления с площадки. Просматривайте галерею выполненных работ и этапов скрытых коммуникаций.",
    icon: Camera,
  },
  {
    title: "QR-коды на объекте",
    description: "Сканируйте коды на месте для моментального доступа к чертежам, спецификациям и контактным лицам.",
    icon: QrCode,
  },
  {
    title: "Полная прозрачность",
    description: "История изменений, фиксация всех договоренностей и прозрачная смета без скрытых платежей.",
    icon: ShieldCheck,
  },
]

export function DigitalFeatures() {
  return (
    <section id="digital-features" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <span>Цифровое превосходство</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Ваш проект в цифровом пространстве
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
              Мы объединили строительную экспертизу с современными IT-решениями, чтобы сделать процесс создания вашего дома максимально комфортным и прозрачным.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button size="lg" className="rounded-xl h-14 px-8 text-lg">
                Попробовать демо-кабинет
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Visual representation of the dashboard */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card p-4 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="aspect-[4/3] bg-muted/50 rounded-2xl flex items-center justify-center p-8 overflow-hidden">
                <div className="w-full h-full bg-background rounded-xl shadow-lg p-6 border border-border/50">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-32 h-4 bg-muted rounded-full" />
                    <div className="w-8 h-8 rounded-full bg-primary/10" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="h-20 bg-muted/30 rounded-lg animate-pulse" />
                    <div className="h-20 bg-muted/30 rounded-lg animate-pulse" />
                    <div className="h-20 bg-muted/30 rounded-lg animate-pulse" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-full bg-muted/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-primary" />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Прогресс: 65%</span>
                      <span>Этап: Внутренняя отделка</span>
                    </div>
                    <div className="h-40 bg-muted/10 rounded-xl border-2 border-dashed border-muted flex items-center justify-center">
                      <Camera className="w-8 h-8 text-muted/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements for visual depth */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-background border border-border shadow-xl rounded-2xl p-4 flex flex-col items-center justify-center animate-bounce duration-[3000ms]">
               <QrCode className="w-12 h-12 text-primary mb-2" />
               <span className="text-[10px] font-bold text-center">SCAN TO VIEW PROJECT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
