import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const faqs = [
  {
    q: "Como alterar minha senha?",
    a: "Vá em Configurações > Senha, informe sua senha atual e a nova senha.",
  },
  {
    q: "Esqueci minha senha, o que fazer?",
    a: "Na página de login, clique em 'Esqueceu a senha?' e siga as instruções enviadas para seu e-mail.",
  },
  {
    q: "Como atualizar meu nome?",
    a: "Acesse Configurações > Perfil e edite o campo Nome.",
  },
  {
    q: "O e-mail pode ser alterado?",
    a: "No momento o e-mail não pode ser alterado após o cadastro.",
  },
  {
    q: "Meus dados são seguros?",
    a: "Sim. Utilizamos criptografia para senhas e boas práticas de segurança.",
  },
];

export default function HelpPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div>
          <h1 className="text-2xl font-bold">Ajuda</h1>
          <p className="text-muted-foreground">
            Perguntas frequentes sobre a plataforma
          </p>
        </div>

        <Separator />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-base">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{faq.a}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
