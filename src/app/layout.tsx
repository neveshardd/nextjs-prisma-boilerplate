import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NextPrisma — Boilerplate Moderno Open Source",
    template: "%s — NextPrisma",
  },
  description:
    "Boilerplate gratuito e open source com Next.js 16, Prisma 7, Better Auth, shadcn/ui, Tailwind CSS v4, autenticação completa, dashboard, dark mode e deploy pronto. Ideal para SaaS e aplicações web modernas.",
  keywords: [
    "next.js",
    "prisma",
    "better-auth",
    "shadcn",
    "tailwind css",
    "boilerplate",
    "saas",
    "typescript",
    "react",
    "autenticação",
    "dashboard",
  ],
  authors: [{ name: "neveshardd" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "NextPrisma Boilerplate",
    title: "NextPrisma — Boilerplate Moderno Open Source",
    description:
      "Boilerplate gratuito com Next.js 16, Prisma 7, Better Auth, shadcn/ui, autenticação, dashboard e dark mode.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextPrisma — Boilerplate Moderno Open Source",
    description:
      "Boilerplate gratuito com Next.js 16, Prisma 7, Better Auth, shadcn/ui, autenticação, dashboard e dark mode.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  document.documentElement.style.colorScheme = theme;
                } catch(e) {}
              })();
            `,
          }}
        />
        <ThemeProvider defaultTheme="system">
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
