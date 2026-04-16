import { Building2, Code2, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">О нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы объединяем экспертизу в строительстве и информационных технологиях для создания комплексных решений
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Наша миссия</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Усадьба Вербицких - это объединение профессионалов с многолетним опытом работы. Мы специализируемся на строительстве зданий, комплексов, промышленных объектов, а также разрабатываем IT-решения для современного бизнеса.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Разработка проектов, все виды согласований, ввод в эксплуатацию - мы сопровождаем клиента на каждом этапе от идеи до реализации.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Наши ценности</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Качество и надёжность во всём, что мы делаем</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Индивидуальный подход к каждому проекту</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Соблюдение сроков и договорённостей</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Инновационный подход и современные технологии</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <Building2 className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <Code2 className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">IT</div>
              <div className="text-sm text-muted-foreground">Решения</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <Users className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">55+</div>
              <div className="text-sm text-muted-foreground">Специалистов</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg border border-border">
              <Award className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">2021</div>
              <div className="text-sm text-muted-foreground">Год основания</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
