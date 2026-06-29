import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato",
};

const channels = [
  {
    icon: FaGithub,
    title: "GitHub",
    description: "Abra uma issue ou discussion",
    href: "https://github.com/neveshardd/nextjs-prisma-boilerplate/issues",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Envie um e-mail direto",
    href: "mailto:neveshardd@example.com",
  },
  {
    icon: MessageCircle,
    title: "Discussões",
    description: "Participe das discussões do projeto",
    href: "https://github.com/neveshardd/nextjs-prisma-boilerplate/discussions",
  },
];

export default function ContatoPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold">Contato</h1>
      <p className="mb-10 text-muted-foreground">
        Tem alguma dúvida, sugestão ou encontrou um bug? Entre em contato
        através de um dos canais abaixo.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <Card key={channel.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-base">{channel.title}</CardTitle>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Acessar →
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
