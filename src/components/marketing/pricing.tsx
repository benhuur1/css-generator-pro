import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar e testar a plataforma",
    features: [
      "5 snippets salvos",
      "Editor CSS básico",
      "Preview responsivo",
      "Categorias padrão",
      "Exportar código",
    ],
    cta: "Começar Grátis",
    href: "/register",
    popular: false,
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    description: "Para desenvolvedores profissionais e freelancers",
    features: [
      "Snippets ilimitados",
      "Editor avançado (Monaco)",
      "Templates premium",
      "Design System Generator",
      "Exportar .css e .scss",
      "Versionamento de código",
      "Importar do Figma",
      "Suporte prioritário",
    ],
    cta: "Começar Teste Grátis",
    href: "/register",
    popular: true,
  },
  {
    name: "Agency",
    price: "R$ 79",
    period: "/mês",
    description: "Para agências e times de desenvolvimento",
    features: [
      "Tudo do plano Pro",
      "Até 5 usuários",
      "Compartilhamento de snippets",
      "Biblioteca de equipe",
      "White label",
      "Suporte prioritário VIP",
      "Onboarding personalizado",
    ],
    cta: "Contatar Vendas",
    href: "/register",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Planos simples e transparentes
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Comece grátis e faça upgrade quando precisar de mais recursos
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-blue-500 shadow-xl scale-105 dark:border-blue-400"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-600 dark:text-slate-400">
          Todos os planos incluem 14 dias de teste grátis. Cancele quando quiser, sem perguntas.
        </p>
      </div>
    </section>
  )
}
