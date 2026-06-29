import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NextPrisma. Todos os direitos
          reservados.
        </p>

        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/termos" className="hover:text-foreground transition-colors">
            Termos
          </Link>
          <Link href="/privacidade" className="hover:text-foreground transition-colors">
            Privacidade
          </Link>
          <Link href="/contato" className="hover:text-foreground transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </footer>
  );
}
