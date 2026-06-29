import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço",
};

export default function TermosPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Termos de Serviço</h1>
      <div className="space-y-4 text-muted-foreground">
        <p>
          Ao utilizar o NextPrisma Boilerplate, você concorda com os seguintes
          termos e condições.
        </p>
        <h2 className="text-lg font-semibold text-foreground">1. Uso do Software</h2>
        <p>
          O NextPrisma Boilerplate é fornecido como uma base de código aberta
          sob licença MIT. Você pode usar, modificar e distribuir livremente,
          desde que mantenha os créditos originais.
        </p>
        <h2 className="text-lg font-semibold text-foreground">2. Responsabilidades</h2>
        <p>
          O software é fornecido &quot;como está&quot;, sem garantias de qualquer
          tipo. O autor não se responsabiliza por danos decorrentes do uso
          deste software.
        </p>
        <h2 className="text-lg font-semibold text-foreground">3. Contas de Usuário</h2>
        <p>
          Você é responsável por manter a confidencialidade de suas credenciais
          e por todas as atividades realizadas em sua conta.
        </p>
        <h2 className="text-lg font-semibold text-foreground">4. Alterações</h2>
        <p>
          Estes termos podem ser atualizados a qualquer momento.
          Recomendamos revisá-los periodicamente.
        </p>
        <p className="text-sm pt-4">
          Última atualização: Junho de 2026.
        </p>
      </div>
    </main>
  );
}
