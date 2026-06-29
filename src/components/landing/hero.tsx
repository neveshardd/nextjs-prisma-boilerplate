import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-4 pb-20 pt-24 md:pt-32">
      <div className="container mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-6 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
          Next.js 16 + Prisma 7 + Better Auth
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Crie aplicações modernas
          <br />
          <span className="text-primary">com rapidez e segurança</span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Um boilerplate completo com as melhores ferramentas do ecossistema
          React, Next.js e TypeScript. Pronto para usar em produção.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/register">Começar agora</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/login">Fazer login</Link>
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
