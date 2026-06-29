"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { GalleryVerticalEnd, ArrowLeft } from "lucide-react";

const forgotSchema = z.object({
  email: z.string().email("E-mail inválido"),
});

type ForgotInput = z.infer<typeof forgotSchema>;

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotInput>({
    resolver: zodResolver(forgotSchema),
  });

  async function onSubmit(data: ForgotInput) {
    setError(null);

    const { error: reqError } = await authClient.requestPasswordReset({
      email: data.email,
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (reqError) {
      setError(reqError.message ?? "Erro ao solicitar redefinição");
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <GalleryVerticalEnd className="size-6" />
              </div>
            </div>
            <CardTitle className="text-xl">Verifique seu e-mail</CardTitle>
            <CardDescription>
              Se existir uma conta com este e-mail, enviaremos um link de
              redefinição de senha.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button variant="outline" asChild>
              <Link href="/login">
                <ArrowLeft className="mr-2 size-4" />
                Voltar ao login
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-6" />
            </div>
          </div>
          <CardTitle className="text-xl">Esqueceu sua senha?</CardTitle>
          <CardDescription>
            Digite seu e-mail e enviaremos um link para redefinir sua senha
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </Field>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar link de redefinição"}
              </Button>
            </FieldGroup>
          </form>

          <div className="mt-4 text-center text-sm">
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Lembrou da senha? Faça login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
