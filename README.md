# 🎨 CSS Generator Pro

> **SaaS para desenvolvedores front-end** - Gere código CSS responsivo visualmente e gerencie snippets de código.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📋 Sobre o Projeto

O **CSS Generator Pro** é uma ferramenta SaaS criada para resolver as dores de desenvolvedores front-end, especialmente aqueles que trabalham com WordPress e Elementor.

### 🎯 Problema que Resolve

- ❌ Ajustar padding, margin e responsividade manualmente é **chato e repetitivo**
- ❌ Copiar código CSS customizado entre projetos dá trabalho
- ❌ Testar em múltiplos dispositivos (desktop/tablet/mobile) é demorado
- ❌ Não existe ferramenta específica para Elementor developers

### ✨ Solução

- ✅ **Editor visual** para ajustar CSS com preview em tempo real
- ✅ **Biblioteca de snippets** para salvar e reutilizar código
- ✅ **Preview responsivo** lado a lado (Desktop/Tablet/Mobile)
- ✅ **Design System Generator** para criar temas customizados
- ✅ **Importar do Figma** e exportar para Elementor

---

## 🚀 Funcionalidades

### MVP (Versão 1.0)

- ✅ Autenticação (Google OAuth + Email/Senha)
- ✅ Editor CSS básico com preview responsivo
- ✅ CRUD completo de snippets
- ✅ Sistema de categorias e tags
- ✅ Landing page profissional
- ✅ Dashboard do usuário
- ✅ Sistema de planos (Free/Pro/Agency)

### Roadmap (Futuro)

- 🔄 Monaco Editor (VS Code integrado)
- 🔄 Importar design do Figma
- 🔄 Templates premium prontos
- 🔄 Pagamentos (Stripe + PIX)
- 🔄 Design System Generator
- 🔄 Compartilhamento de snippets

📖 **[Ver ROADMAP completo](./ROADMAP.md)**

---

## 🛠️ Stack Tecnológica

| Camada             | Tecnologia               | Por Quê?                        |
| ------------------ | ------------------------ | ------------------------------- |
| **Frontend**       | Next.js 14 + TypeScript  | Full-stack, SEO, deploy fácil   |
| **Estilização**    | Tailwind CSS + Shadcn/ui | Rápido, bonito, customizável    |
| **Backend**        | Next.js API Routes       | Mesmo projeto, serverless       |
| **Banco de Dados** | PostgreSQL + Prisma      | Robusto, type-safe              |
| **Autenticação**   | NextAuth.js              | Integração perfeita com Next.js |
| **Pagamentos**     | Stripe + Mercado Pago    | Internacional + Brasil (PIX)    |
| **Deploy**         | Vercel                   | Grátis, automático, rápido      |

📖 **[Ver decisões técnicas detalhadas](./docs/STACK.md)**

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ([download](https://nodejs.org/))
- PostgreSQL ([Supabase grátis](https://supabase.com/) recomendado)
- Conta Google Cloud (para OAuth)

### Passo a Passo

1. **Clone o repositório**

```bash
git clone https://github.com/benhuur1/css-generator-pro.git
cd css-generator-pro
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/css_generator_pro"
NEXTAUTH_SECRET="gere-com-openssl-rand-base64-32"
GOOGLE_CLIENT_ID="seu-client-id"
GOOGLE_CLIENT_SECRET="seu-secret"
```

4. **Configure o banco de dados**

```bash
npx prisma generate
npx prisma db push
```

5. **Rode o projeto localmente**

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) 🎉

---

## 📂 Estrutura do Projeto

```
css-generator-pro/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rotas de autenticação
│   ├── (dashboard)/       # Rotas do dashboard (protegidas)
│   ├── (marketing)/       # Landing page, pricing
│   └── api/               # API Routes
├── components/            # Componentes React
│   ├── ui/               # Shadcn/ui components
│   ├── editor/           # Editor CSS
│   ├── snippets/         # CRUD snippets
│   └── dashboard/        # Layout dashboard
├── lib/                   # Utilities
│   ├── db.ts             # Prisma client
│   ├── auth.ts           # NextAuth config
│   └── utils.ts          # Helpers
├── prisma/               # Database schema
├── docs/                 # Documentação
│   ├── STACK.md         # Decisões técnicas
│   └── FEATURES.md      # Funcionalidades detalhadas
├── ROADMAP.md           # Planejamento de fases
└── PROJECT_PLAN.md      # Checklist de tarefas
```

---

## 🧪 Scripts Disponíveis

```bash
# Com npm
npm run dev          # Rodar localmente (porta 3000)
npm run build        # Build para produção
npm run start        # Rodar build de produção
npm run lint         # Rodar ESLint
npm run type-check   # Verificar tipos TypeScript

# Com yarn
yarn dev             # Rodar localmente (porta 3000)
yarn build           # Build para produção
yarn start           # Rodar build de produção
yarn lint            # Rodar ESLint
yarn type-check      # Verificar tipos TypeScript

# Prisma (funciona com ambos)
npx prisma studio    # Abrir interface do banco de dados
yarn prisma studio   # Alternativa com yarn
```

---

## 📚 Documentação

- **[ROADMAP.md](./ROADMAP.md)** - Fases do projeto e cronograma
- **[PROJECT_PLAN.md](./PROJECT_PLAN.md)** - Checklist detalhado de tarefas
- **[docs/STACK.md](./docs/STACK.md)** - Decisões técnicas e justificativas
- **[docs/FEATURES.md](./docs/FEATURES.md)** - Todas as funcionalidades planejadas
- **[Issues do GitHub](https://github.com/benhuur1/css-generator-pro/issues)** - Tarefas organizadas

---

## 🎯 Planos de Monetização

| Plano      | Preço     | Funcionalidades                               |
| ---------- | --------- | --------------------------------------------- |
| **Free**   | R$ 0      | 5 snippets, editor básico, preview responsivo |
| **Pro**    | R$ 29/mês | Ilimitado, Monaco Editor, templates premium   |
| **Agency** | R$ 79/mês | Tudo do Pro + 5 usuários, white label         |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📈 Status do Projeto

- **Fase Atual:** Setup Inicial (Fase 1) 🟡
- **Progresso MVP:** 30%
- **Próximas Etapas:** Configurar Tailwind + Shadcn/ui (Issue #2)

📊 **[Ver todas as issues](https://github.com/benhuur1/css-generator-pro/issues)**

---

## 📞 Contato

- **GitHub:** [@benhuur1](https://github.com/benhuur1)
- **Issues:** [Relatar bug/sugestão](https://github.com/benhuur1/css-generator-pro/issues/new)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](./LICENSE) para mais detalhes.

---

## 🌟 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework incrível
- [Vercel](https://vercel.com/) - Hosting gratuito
- [Shadcn/ui](https://ui.shadcn.com/) - Componentes lindos
- [Prisma](https://www.prisma.io/) - ORM type-safe

---

<div align="center">
  <strong>Feito com ❤️ por desenvolvedores, para desenvolvedores</strong>
</div>
