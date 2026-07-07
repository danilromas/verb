import Link from "next/link"
import { ArrowUpRight, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { platformFeatures } from "@/lib/site-data"

export function DigitalFeatures() {
  return (
    <section id="digital-features" className="py-24">
      <div className="section-shell">
        <div className="grid items-center gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Digital platform</span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[var(--brand-ink)] md:text-5xl">
              Управление объектом в цифровой среде, а не в хаосе чатов и звонков.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Цифровой кабинет клиента делает реализацию прозрачной: этапы, документы, фото, смета и ключевые решения
              всегда собраны в одном месте.
            </p>

            <div className="mt-10 space-y-4">
              {platformFeatures.map((feature) => (
                <div key={feature.title} className="section-card p-5">
                  <div className="flex gap-4">
                    <div className="rounded-2xl border border-border/70 bg-white/80 p-3 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8 h-14 rounded-xl px-8 text-base">
              <Link href="/catalog">
                Изучить сервисы и формат работы
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="section-card architect-grid relative overflow-hidden p-5 md:p-7">
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.75rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(245,242,238,0.9))] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Кабинет клиента</div>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--brand-ink)]">Резиденция у побережья</h3>
                  </div>
                  <div className="rounded-full border border-border/70 bg-white/80 px-3 py-1 text-xs font-semibold text-primary">live</div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Смета", "График", "Документы"].map((item) => (
                    <div key={item} className="rounded-2xl border border-border/70 bg-white/75 p-4 text-sm font-medium text-foreground/85">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-border/70 bg-white/70 p-5">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Прогресс этапа</span>
                    <span>65%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-muted/40">
                    <div className="h-2 w-2/3 rounded-full bg-[linear-gradient(90deg,var(--primary),var(--accent))]" />
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-dashed border-border bg-white/40 p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Журнал площадки</div>
                  <div className="mt-3 space-y-3">
                    {["Фото скрытых работ загружены", "Акт на этап подготовлен", "Согласовано изменение по отделке"].map((log) => (
                      <div key={log} className="rounded-xl bg-white/75 px-4 py-3 text-sm text-foreground/85">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-[1.75rem] border border-border/70 bg-[linear-gradient(180deg,rgba(28,38,63,0.98),rgba(63,49,40,0.95))] p-6 text-white">
                  <QrCode className="h-8 w-8 text-white/80" />
                  <div className="mt-10 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">On-site access</div>
                  <p className="mt-3 text-lg font-semibold">QR-коды на объекте для доступа к чертежам, этапам и контактам.</p>
                </div>
                <div className="rounded-[1.75rem] border border-border/70 bg-white/70 p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Преимущество</div>
                  <p className="mt-3 text-lg font-semibold text-[var(--brand-ink)]">
                    Заказчик видит весь проект в понятной среде, а не собирает картину по кускам.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
