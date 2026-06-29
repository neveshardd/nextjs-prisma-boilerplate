<div align="center">
  <h1>NextPrisma Boilerplate</h1>
  <p>
    <strong>Next.js 16 · Prisma 7 · Better Auth · shadcn/ui · Tailwind CSS v4</strong>
  </p>
  <p>
    <a href="#-sobre"><img src="https://img.shields.io/badge/status-pronto-22c55e" alt="Status" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License" /></a>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.2-black?logo=next.js" alt="Next.js 16" /></a>
    <a href="https://www.prisma.io"><img src="https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma" alt="Prisma 7" /></a>
    <a href="https://www.betterauth.dev"><img src="https://img.shields.io/badge/Better_Auth-1.6-purple" alt="Better Auth" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss" alt="Tailwind CSS v4" /></a>
    <a href="https://nextprisma-boilerplate.vercel.app"><img src="https://img.shields.io/badge/deploy-Vercel-000?logo=vercel" alt="Deploy" /></a>
  </p>
</div>

---

## ✨ Sobre

**NextPrisma** é um boilerplate moderno, gratuito e open source para criar aplicações web completas com React, Next.js e TypeScript.

Ele reúne as melhores ferramentas do ecossistema em uma base sólida, testada e pronta para produção — desde autenticação e banco de dados até dashboard, tema escuro e componentes acessíveis.

### 🎯 Pra quem é?

- **Desenvolvedores** que querem começar um projeto SaaS sem perder dias configurando
- **Equipes** que precisam de uma base consistente com TypeScript estrito e boas práticas
- **Estudantes** que querem aprender um stack moderno na prática

---

## 🚀 Stack

| Ferramenta | Versão | Propósito |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2 | Framework React com App Router e Server Components |
| [Prisma](https://www.prisma.io) | 7 | ORM type-safe com migrations e PostgreSQL |
| [Better Auth](https://www.betterauth.dev) | 1.6 | Autenticação completa (email/senha, sessões, reset de senha) |
| [shadcn/ui](https://ui.shadcn.com) | — | Componentes acessíveis e customizáveis (radix-nova) |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilização utilitária com performance máxima |
| [Zod](https://zod.dev) | 4 | Validação de schemas com type inference |
| [React Hook Form](https://react-hook-form.com) | 7 | Formulários performáticos com validação |
| [Biome](https://biomejs.dev) | 2 | Linter e formatador rápido |

---

## 📦 O que vem incluso

### 🔐 Autenticação
- Login e cadastro com email/senha (Better Auth)
- Esqueci minha senha com token de reset
- Proteção de rotas via proxy (middleware)
- Sessões seguras com cookies httpOnly

### 📊 Dashboard
- Sidebar responsiva com navegação
- Cards com métricas (Receita, Clientes, etc.)
- Gráfico de área interativo
- Tabela de dados completa com:
  - Ordenação, filtros e paginação
  - Seleção de linhas
  - Edição inline
  - Drag-and-drop
  - Drawer de detalhes

### 👤 Perfil e Configurações
- Página de perfil com avatar upload
- Alteração de nome e senha
- Tema escuro/claro com toggle

### 🎨 UI/UX
- shadcn/ui (23+ componentes)
- Tema escuro e claro
- Responsivo (mobile-first)
- Notificações toast (sonner)
- Tooltips, badges, tabs e muito mais

### 🗄️ Banco de Dados
- Prisma 7 com adapter PostgreSQL
- SQLite para desenvolvimento local
- Migrations automáticas
- Schema com User, Session, Account

---

## 🧰 Pré-requisitos

- **Node.js** >= 20 (recomendado 22+)
- **npm** ou **pnpm**

---

## ⚙️ Como usar

```bash
# Clone o repositório
git clone https://github.com/neveshardd/nextjs-prisma-boilerplate.git
cd nextjs-prisma-boilerplate

# Instale as dependências
npm install

# Copie as variáveis de ambiente
cp .env.example .env

# Gere o cliente Prisma e rode as migrations
npx prisma generate
npx prisma migrate dev --name init

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) 🚀

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── (auth)/             # Login, registro, forgot/reset password
│   ├── (dashboard)/        # Dashboard, configurações, data library
│   │   ├── dashboard/
│   │   ├── settings/
│   │   ├── data-library/
│   │   └── layout.tsx
│   ├── (landing)/          # Landing page
│   ├── api/auth/           # Better Auth handler
│   ├── globals.css
│   ├── layout.tsx          # Root layout com ThemeProvider
│   └── not-found.tsx       # Página 404
├── components/
│   ├── auth/               # Formulários de autenticação
│   ├── landing/            # Hero e Features
│   ├── layout/             # Header e Footer da landing
│   ├── ui/                 # shadcn/ui components
│   └── ...                 # Dashboard components
├── lib/
│   ├── auth.ts             # Configuração do Better Auth
│   ├── auth-client.ts      # Client do Better Auth
│   └── prisma.ts           # Singleton do PrismaClient
├── schemas/
│   └── auth.ts             # Schemas Zod
├── generated/prisma/       # Prisma Client gerado
├── hooks/                  # Custom hooks
├── proxy.ts                # Middleware de proteção
└── middleware.ts           # (deprecated — use proxy.ts)
```

---

## 🌐 SEO

O projeto já inclui:

- Meta tags Open Graph e Twitter Cards
- JSON-LD com schema.org (SoftwareSourceCode)
- Robots meta index/follow
- Sitemap (adicione com `next-sitemap`)
- URLs amigáveis com App Router

---

## 🔧 Comandos úteis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Compila para produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Verifica código com Biome |
| `npm run format` | Formata código com Biome |
| `npm run db:generate` | Gera Prisma Client |
| `npm run db:migrate` | Roda migrations |
| `npm run db:studio` | Abre Prisma Studio |
| `npm run db:push` | Sincroniza schema com o banco |

---

## 🐳 Produção

O projeto está implantado no **Vercel** com deploy automático via GitHub:

🔗 **https://nextprisma-boilerplate.vercel.app**

### Deploy manual

```bash
npx vercel --prod
```

### PostgreSQL em produção

Para trocar SQLite por PostgreSQL:

1. Instale o driver PostgreSQL: `npm install @prisma/adapter-pg pg`
2. Atualize o `DATABASE_URL` no `.env` para PostgreSQL
3. Altere o adapter em `src/lib/prisma.ts` para `PrismaPg`
4. Atualize o provider em `prisma/schema.prisma` para `postgresql`
5. Rode `npx prisma migrate deploy`

---

## 🔄 Integração GitHub + Vercel

Ao fazer push para a branch `master`, o Vercel automaticamente faz o deploy de produção:

```
git add .
git commit -m "feat: minha alteração"
git push
```

✅ O deploy acontece em segundos e o link de produção é atualizado.

### Status do último deploy

[![Vercel](https://img.shields.io/github/deployments/neveshardd/nextjs-prisma-boilerplate/production?label=deploy&logo=vercel)](https://nextprisma-boilerplate.vercel.app)

---

## 📄 Licença

Distribuído sob licença **MIT**. Veja [LICENSE](LICENSE) para mais informações.

---

<div align="center">
  <p>Feito por <a href="https://github.com/neveshardd">neveshardd</a></p>
  <p>
    <a href="https://github.com/neveshardd/nextjs-prisma-boilerplate/issues">Reportar bug</a>
    ·
    <a href="https://github.com/neveshardd/nextjs-prisma-boilerplate/pulls">Pull Requests</a>
  </p>
</div>
