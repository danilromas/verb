import { Building2, ShieldCheck, Sparkles, Waypoints } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="section-card p-8 md:p-10">
            <span className="eyebrow">О бренде</span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Не просто строительная компания, а единый центр управления объектом.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Усадьба Вербицких объединяет архитектуру, стройку, инженерные решения, интерьер и цифровой контроль в одну
              рабочую систему. Заказчик получает не набор подрядчиков, а целостный процесс с понятной ответственностью.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Наш подход строится на дисциплине исполнения, эстетическом вкусе и прозрачной коммуникации на каждом этапе:
              от первой концепции до сдачи готового пространства.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Building2,
                title: "Полный цикл",
                text: "Архитектура, стройка, инженерия, отделка и сопровождение в единой логике проекта.",
              },
              {
                icon: ShieldCheck,
                title: "Прозрачная реализация",
                text: "Смета, этапы, документы и контроль качества фиксируются в понятной системе отчетности.",
              },
              {
                icon: Waypoints,
                title: "Координация сложных задач",
                text: "Мы увязываем десятки решений между собой, чтобы объект собирался без хаоса и потерь.",
              },
              {
                icon: Sparkles,
                title: "Эстетика без компромиссов",
                text: "Техническая надежность и визуальный уровень проекта развиваются параллельно, а не по очереди.",
              },
            ].map((item) => (
              <div key={item.title} className="section-card p-8">
                <item.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-6 text-2xl font-semibold text-[var(--brand-ink)]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
