# 🚀 Guia Rápido de Início

Bem-vindo ao **CSS Generator Pro**! Este guia vai te ajudar a começar em minutos.

---

## ⚡ Quick Start (5 minutos)

### 1. Clone e Instale

```bash
# Clone o repositório
git clone https://github.com/benhuur1/css-generator-pro.git
cd css-generator-pro

# Instale dependências
npm install
# ou se preferir yarn
yarn install
```

### 2. Configure o Banco de Dados (Supabase Grátis)

1. Acesse [supabase.com](https://supabase.com) e crie uma conta
2. Crie um novo projeto
3. Vá em **Settings → Database** e copie a **Connection String**
4. Cole no `.env.local`:

```env
DATABASE_URL="postgresql://postgres:[SENHA]@db.[PROJETO].supabase.co:5432/postgres"
```

### 3. Configure Google OAuth

1. Acesse [console.cloud.google.com](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Vá em **APIs & Services → Credentials**
4. Clique em **Create Credentials → OAuth 2.0 Client ID**
5. Configure:
   - Application type: **Web application**
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
6. Copie **Client ID** e **Client Secret** para `.env.local`:

```env
GOOGLE_CLIENT_ID="123456789-abc.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-abc123..."
```

### 4. Gere NextAuth Secret

```bash
# Windows PowerShell
$bytes = New-Object byte[] 32
[Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
[Convert]::ToBase64String($bytes)

# Copie o resultado para .env.local:
NEXTAUTH_SECRET="resultado-aqui"
```

### 5. Configure Prisma

```bash
# Gerar cliente Prisma
npx prisma generate
# ou
yarn prisma generate

# Criar tabelas no banco
npx prisma db push
# ou
yarn prisma db push
```

### 6. Rode o Projeto!

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) 🎉

---

## 📋 Checklist Pós-Instalação

- [ ] Login com Google funcionando
- [ ] Consegue acessar o dashboard após login
- [ ] Banco de dados conectado (verifica com `npx prisma studio`)

---

## 🛠️ Comandos Úteis

```bash
# Ver banco de dados visualmente
npx prisma studio
# ou
yarn prisma studio

# Resetar banco de dados (CUIDADO!)
npx prisma db push --force-reset
# ou
yarn prisma db push --force-reset

# Ver logs detalhados do Prisma (npm)
DEBUG=prisma* npm run dev
# Ver logs detalhados do Prisma (yarn)
DEBUG=prisma* yarn dev

# Build para produção
npm run build && npm start
# ou
yarn build && yarn start
```

---

## 🐛 Problemas Comuns

### Erro: "Invalid `prisma.user.create()` invocation"

**Solução:** Rode `npx prisma generate` novamente.

### Erro: "Google OAuth redirect_uri_mismatch"

**Solução:** Adicione `http://localhost:3000/api/auth/callback/google` nas URIs autorizadas no Google Cloud Console.

### Erro: "Can't reach database server"

**Solução:** Verifique se a `DATABASE_URL` está correta no `.env.local`.

### Página em branco após login

**Solução:** Verifique se o `NEXTAUTH_SECRET` está configurado.

---

## 📚 Próximos Passos

Agora que o projeto está rodando, siga as issues para desenvolver:

1. **[Issue #1](https://github.com/benhuur1/css-generator-pro/issues/1)** - Setup inicial ✅ (você já fez!)
2. **[Issue #2](https://github.com/benhuur1/css-generator-pro/issues/2)** - Configurar Tailwind + Shadcn/ui
3. **[Issue #3](https://github.com/benhuur1/css-generator-pro/issues/3)** - Prisma ORM + Schema
4. **[Issue #4](https://github.com/benhuur1/css-generator-pro/issues/4)** - NextAuth completo
5. E assim por diante...

---

## 🎯 Desenvolvimento

### Estrutura de Branches

```bash
main          # Produção (sempre estável)
develop       # Desenvolvimento (features integradas aqui)
feature/nome  # Nova funcionalidade
fix/nome      # Correção de bug
```

### Workflow Recomendado

```bash
# Criar nova feature
git checkout -b feature/editor-css
# ... fazer alterações ...
git add .
git commit -m "Add: editor CSS básico"
git push origin feature/editor-css
# Abrir Pull Request no GitHub
```

---

## 📞 Precisa de Ajuda?

- 📖 [Documentação Completa](./README.md)
- 🗺️ [Roadmap](./ROADMAP.md)
- 📋 [Issues](https://github.com/benhuur1/css-generator-pro/issues)
- 💬 [Discussions](https://github.com/benhuur1/css-generator-pro/discussions)

---

**Boa sorte no desenvolvimento! 🚀**
