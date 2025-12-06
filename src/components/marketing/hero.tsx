"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Ferramenta profissional para desenvolvedores Elementor</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            Gere código CSS{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              responsivo
            </span>{" "}
            em segundos
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
            Pare de perder tempo ajustando padding, margin e responsividade manualmente.
            Crie e gerencie seus snippets CSS de forma visual e profissional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link href="/register">
                Começar Grátis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">Ver Funcionalidades</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            Usado por <span className="font-semibold text-slate-900 dark:text-white">500+</span>{" "}
            desenvolvedores WordPress e Elementor
          </p>
        </div>

        {/* Feature Preview Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">
          <div className="rounded-lg border bg-white/50 p-4 backdrop-blur-sm dark:bg-slate-900/50">
            <div className="text-2xl font-bold text-blue-600">⚡</div>
            <div className="mt-2 font-semibold">Editor Visual</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Ajuste CSS visualmente
            </div>
          </div>
          <div className="rounded-lg border bg-white/50 p-4 backdrop-blur-sm dark:bg-slate-900/50">
            <div className="text-2xl font-bold text-indigo-600">📱</div>
            <div className="mt-2 font-semibold">Preview Responsivo</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Desktop, tablet e mobile
            </div>
          </div>
          <div className="rounded-lg border bg-white/50 p-4 backdrop-blur-sm dark:bg-slate-900/50">
            <div className="text-2xl font-bold text-purple-600">💾</div>
            <div className="mt-2 font-semibold">Biblioteca</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Salve seus snippets
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
