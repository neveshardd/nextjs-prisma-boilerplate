import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "NextPrisma — Boilerplate Moderno Open Source",
  description:
    "Boilerplate gratuito e open source com Next.js 16, Prisma 7, Better Auth, shadcn/ui e Tailwind CSS v4. Autenticação completa, dashboard, dark mode e deploy pronto.",
  openGraph: {
    title: "NextPrisma — Boilerplate Moderno Open Source",
    description:
      "Boilerplate gratuito e open source com Next.js 16, Prisma 7, Better Auth, shadcn/ui e Tailwind CSS v4.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "NextPrisma Boilerplate",
  description:
    "Boilerplate moderno, gratuito e open source com Next.js 16, Prisma 7, Better Auth, shadcn/ui, Tailwind CSS v4, autenticação, dashboard e dark mode.",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1974",
  url: "https://github.com/neveshardd/nextjs-prisma-boilerplate",
  programmingLanguage: "TypeScript",
  applicationCategory: "WebApplication",
  license: "https://opensource.org/licenses/MIT",
  author: {
    "@type": "Person",
    name: "neveshardd",
    url: "https://github.com/neveshardd",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
