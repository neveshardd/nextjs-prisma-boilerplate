import {
  Zap,
  Shield,
  Box,
  Database,
  Paintbrush,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Next.js 16",
    description:
      "App Router, React 19, Server Components e tudo que o Next.js tem de melhor pra oferecer.",
  },
  {
    icon: Database,
    title: "Prisma 7 + PostgreSQL",
    description:
      "ORM moderno com type-safety, migrations automáticas e suporte a PostgreSQL em produção.",
  },
  {
    icon: Shield,
    title: "Better Auth",
    description:
      "Autenticação completa com email/senha, sessões seguras e middleware de proteção de rotas.",
  },
  {
    icon: Box,
    title: "shadcn/ui",
    description:
      "Componentes acessíveis e customizáveis. Copie, cole e adapte sem depender de pacotes terceiros.",
  },
  {
    icon: Paintbrush,
    title: "Tailwind CSS v4",
    description:
      "Estilização utilitária moderna com performance máxima e tema escuro incluso.",
  },
  {
    icon: Gauge,
    title: "Ferramentas de Qualidade",
    description:
      "Biome para formatação e linting, TypeScript estrito e validação com Zod + React Hook Form.",
  },
];

export function Features() {
  return (
    <section className="bg-background px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Tudo que você precisa
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ferramentas cuidadosamente escolhidas pra você não perder tempo
            configurando e ir direto ao que importa: construir.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
