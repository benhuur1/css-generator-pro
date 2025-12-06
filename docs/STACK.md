# 🛠️ Stack Tecnológica - CSS Generator Pro

## 📚 Decisões Técnicas e Justificativas

Este documento explica **por que** escolhemos cada tecnologia do projeto.

---

## Frontend

### Next.js 14+ (App Router)

**Por quê?**

- ✅ Full-stack framework (frontend + backend no mesmo projeto)
- ✅ App Router = melhor performance e DX (Developer Experience)
- ✅ Server Components = menos JavaScript no cliente
- ✅ SEO excelente (importante para marketing)
- ✅ Deploy gratuito na Vercel
- ✅ Comunidade gigante = fácil achar soluções

**Alternativas consideradas:**

- ❌ Create React App (descontinuado)
- ❌ Vite + React (precisaria backend separado)
- ❌ Remix (comunidade menor)

---

### TypeScript

**Por quê?**

- ✅ Menos bugs em produção
- ✅ Autocomplete no editor
- ✅ Código mais profissional e manutenível
- ✅ Facilita refatoração
- ✅ Documentação automática via tipos

**Alternativas consideradas:**

- ❌ JavaScript puro (mais bugs, menos segurança)

---

### Tailwind CSS

**Por quê?**

- ✅ Desenvolvimento rápido
- ✅ Design consistente
- ✅ Sem conflito de classes CSS
- ✅ Responsivo fácil com classes utilitárias
- ✅ Otimização automática (remove CSS não usado)

**Alternativas consideradas:**

- ❌ CSS Modules (mais verboso)
- ❌ Styled Components (runtime overhead)
- ❌ SASS (menos produtivo)

---

### Shadcn/ui

**Por quê?**

- ✅ Componentes prontos e bonitos
- ✅ Totalmente customizável (copia código, não lib externa)
- ✅ Acessibilidade built-in
- ✅ Base no Radix UI (robusto)
- ✅ Dark mode fácil

**Alternativas consideradas:**

- ❌ Material-UI (muito "Google", pouco customizável)
- ❌ Chakra UI (bundle maior)
- ❌ Ant Design (muito "enterprise")

---

### Monaco Editor

**Por quê?**

- ✅ Mesmo editor do VS Code = familiar para devs
- ✅ Syntax highlighting profissional
- ✅ Autocomplete CSS
- ✅ Suporte a múltiplas linguagens
- ✅ Performance excelente

**Alternativas consideradas:**

- ❌ CodeMirror (menos features)
- ❌ Ace Editor (comunidade menor)

---

## Backend

### Next.js API Routes

**Por quê?**

- ✅ Mesmo projeto do frontend (fácil manutenção)
- ✅ Deploy junto (sem complexidade extra)
- ✅ TypeScript end-to-end
- ✅ Serverless automático na Vercel

**Alternativas consideradas:**

- ❌ Node.js + Express separado (mais complexo)
- ❌ FastAPI/Django (linguagem diferente)

---

### Prisma ORM

**Por quê?**

- ✅ TypeScript nativo = autocomplete das queries
- ✅ Migrations automáticas
- ✅ Prisma Studio = visualizar banco facilmente
- ✅ Sintaxe limpa e intuitiva
- ✅ Prevenção de SQL injection

**Exemplo:**

```typescript
// Com Prisma
const snippet = await prisma.snippet.findUnique({
  where: { id: snippetId },
});

// Sem Prisma (SQL puro)
const snippet = await db.query("SELECT * FROM snippets WHERE id = $1", [
  snippetId,
]);
```

**Alternativas consideradas:**

- ❌ TypeORM (mais complexo)
- ❌ Drizzle (comunidade menor)
- ❌ SQL puro (mais trabalhoso)

---

### PostgreSQL

**Por quê?**

- ✅ Banco relacional robusto
- ✅ Suporte a JSON (flexibilidade)
- ✅ Grátis no Supabase/Railway
- ✅ Escalável
- ✅ ACID compliance (transações confiáveis)

**Alternativas consideradas:**

- ❌ MongoDB (NoSQL = menos estrutura)
- ❌ MySQL (menos features modernas)
- ❌ SQLite (não escalável para SaaS)

---

### NextAuth.js

**Por quê?**

- ✅ Integração perfeita com Next.js
- ✅ Google OAuth pronto
- ✅ JWT + Session handling
- ✅ Callbacks customizáveis
- ✅ Bem documentado

**Alternativas consideradas:**

- ❌ Auth0 (pago)
- ❌ Clerk (pago)
- ❌ Firebase Auth (vendor lock-in)
- ❌ Supabase Auth (menos features)

---

## Pagamentos

### Stripe

**Por quê?**

- ✅ Padrão da indústria
- ✅ Checkout simples
- ✅ Webhooks confiáveis
- ✅ Dashboard completo
- ✅ Suporte a assinaturas

---

### Mercado Pago (PIX)

**Por quê?**

- ✅ Brasileiro = aceita PIX
- ✅ Taxas menores que Stripe no Brasil
- ✅ Checkout transparente
- ✅ API boa

---

## Infraestrutura

### Vercel

**Por quê?**

- ✅ Empresa criadora do Next.js
- ✅ Deploy automático via GitHub
- ✅ Preview deploys (cada PR = URL única)
- ✅ Edge Functions
- ✅ Analytics built-in
- ✅ Plano grátis generoso

**Alternativas consideradas:**

- ❌ Netlify (menos otimizado para Next.js)
- ❌ AWS (muito complexo)
- ❌ Heroku (pago)

---

### Supabase

**Por quê?**

- ✅ PostgreSQL grátis até 500MB
- ✅ Interface visual do banco
- ✅ Backup automático
- ✅ API auto-gerada
- ✅ Storage de arquivos

**Alternativas consideradas:**

- ❌ PlanetScale (removeram plano grátis)
- ❌ Railway (plano grátis limitado)

---

## Ferramentas Auxiliares

### Zod

**Por quê?**

- ✅ Validação + TypeScript type inference
- ✅ Valida formulários e API
- ✅ Mensagens de erro customizáveis

---

### Lucide React

**Por quê?**

- ✅ 1000+ ícones SVG
- ✅ Leve e treeshakeable
- ✅ Consistente com Shadcn/ui

---

## Comparação de Custos

| Serviço      | Plano Grátis                | Pago A Partir De |
| ------------ | --------------------------- | ---------------- |
| Vercel       | 100GB bandwidth             | $20/mês          |
| Supabase     | 500MB DB + 1GB storage      | $25/mês          |
| Stripe       | Grátis + 2.9% por transação | -                |
| Mercado Pago | Grátis + ~3% por transação  | -                |

**Total estimado até 100 usuários pagos:** R$ 0-50/mês

---

## Arquitetura Visual

```
┌─────────────────────────────────────────────┐
│           USER (Browser)                     │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│      Next.js 14 (Vercel)                     │
│  ┌─────────────────────────────────────┐    │
│  │  App Router (React Server Components)│   │
│  │  - Landing pages                     │    │
│  │  - Dashboard                         │    │
│  │  - Editor                            │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │  API Routes (Serverless)            │    │
│  │  - /api/snippets                     │    │
│  │  - /api/auth                         │    │
│  │  - /api/webhooks                     │    │
│  └─────────────────────────────────────┘    │
└─────────────┬───────────────────────────────┘
              │
              ▼
    ┌─────────┴──────────┐
    │                    │
    ▼                    ▼
┌─────────────┐    ┌──────────────┐
│ PostgreSQL  │    │   Stripe/    │
│ (Supabase)  │    │  Mercado Pago│
│             │    │              │
│ - Users     │    │ - Payments   │
│ - Snippets  │    │ - Webhooks   │
│ - Sessions  │    │              │
└─────────────┘    └──────────────┘
```

---

## Performance Targets

| Métrica                      | Target  |
| ---------------------------- | ------- |
| First Contentful Paint (FCP) | < 1.5s  |
| Time to Interactive (TTI)    | < 3s    |
| Lighthouse Score             | > 90    |
| API Response Time            | < 200ms |

---

## Segurança

- ✅ HTTPS everywhere (Vercel)
- ✅ JWT tokens (NextAuth)
- ✅ CSRF protection
- ✅ SQL injection prevention (Prisma)
- ✅ Rate limiting (Vercel/Upstash)
- ✅ Environment variables (.env)

---

**Última atualização:** 06/12/2025
