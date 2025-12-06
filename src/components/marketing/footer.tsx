import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const navigation = {
  product: [
    { name: "Funcionalidades", href: "#features" },
    { name: "Preços", href: "#pricing" },
    { name: "Documentação", href: "/docs" },
    { name: "Roadmap", href: "/roadmap" },
  ],
  company: [
    { name: "Sobre", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contact" },
  ],
  legal: [
    { name: "Privacidade", href: "/privacy" },
    { name: "Termos", href: "/terms" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/benhuur1/css-generator-pro",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:contato@cssgeneratorpro.com",
      icon: Mail,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-white">
                CSS Generator Pro
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Ferramenta profissional para desenvolvedores Elementor gerarem CSS responsivo com precisão e agilidade.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Produto</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-center text-slate-400">
            &copy; {new Date().getFullYear()} CSS Generator Pro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
