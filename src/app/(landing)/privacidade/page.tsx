import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacidadePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Política de Privacidade</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>
          Sua privacidade é importante. Esta política descreve como coletamos,
          usamos e protegemos suas informações.
        </p>
        <h2 className="text-lg font-semibold text-foreground">1. Dados Coletados</h2>
        <p>
          Coletamos apenas as informações necessárias para o funcionamento da
          plataforma: nome, e-mail e dados de autenticação.
        </p>
        <h2 className="text-lg font-semibold text-foreground">2. Uso dos Dados</h2>
        <p>
          Seus dados são usados exclusivamente para fornecer acesso à
          plataforma, gerenciar sua conta e melhorar a experiência do usuário.
        </p>
        <h2 className="text-lg font-semibold text-foreground">3. Armazenamento</h2>
        <p>
          Os dados são armazenados de forma segura em banco de dados com
          criptografia. Senhas são hashadas antes do armazenamento.
        </p>
        <h2 className="text-lg font-semibold text-foreground">4. Compartilhamento</h2>
        <p>
          Não compartilhamos seus dados pessoais com terceiros, exceto quando
          exigido por lei.
        </p>
        <h2 className="text-lg font-semibold text-foreground">5. Seus Direitos</h2>
        <p>
          Você pode solicitar a exclusão de seus dados a qualquer momento
          entrando em contato conosco.
        </p>
        <p className="text-sm pt-4">
          Última atualização: Junho de 2026.
        </p>
      </div>
    </main>
  );
}
