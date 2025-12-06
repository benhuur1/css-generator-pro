import { Code2, Palette, Zap, Layout, FolderOpen, Smartphone } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Editor CSS Visual",
    description: "Ajuste padding, margin, cores e tamanhos de fonte de forma visual, sem precisar escrever código manualmente.",
  },
  {
    icon: Smartphone,
    title: "Preview Responsivo",
    description: "Visualize seu CSS em desktop, tablet e mobile lado a lado. Teste breakpoints customizados em tempo real.",
  },
  {
    icon: FolderOpen,
    title: "Biblioteca de Snippets",
    description: "Salve e organize seus códigos CSS favoritos por categorias: botões, forms, cards, layouts e mais.",
  },
  {
    icon: Palette,
    title: "Design System Generator",
    description: "Defina suas cores, fontes e espaçamentos uma vez. Gere um sistema de design completo automaticamente.",
  },
  {
    icon: Zap,
    title: "Export para Elementor",
    description: "Exporte seu CSS diretamente no formato JSON do Elementor. Copie e cole no seu projeto WordPress.",
  },
  {
    icon: Layout,
    title: "Templates Prontos",
    description: "Acesse biblioteca com centenas de snippets prontos: hero sections, pricing tables, forms e muito mais.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Tudo que você precisa para gerar CSS profissional
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Economize horas de trabalho com ferramentas poderosas e intuitivas
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-6 transition-all hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
