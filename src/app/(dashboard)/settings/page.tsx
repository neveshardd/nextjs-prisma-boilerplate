"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authClient } from "@/lib/auth-client";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, EyeOff } from "lucide-react";

const profileSchema = z.object({
  name: z.string().min(2, "Nome precisa ter ao menos 2 caracteres"),
});

const passwordSchema = z.object({
  currentPassword: z.string().min(6, "Senha atual precisa ter ao menos 6 caracteres"),
  newPassword: z.string().min(6, "Nova senha precisa ter ao menos 6 caracteres"),
  confirmPassword: z.string().min(6, "Confirme a nova senha"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Senhas não conferem",
  path: ["confirmPassword"],
});

type ProfileInput = z.infer<typeof profileSchema>;
type PasswordInput = z.infer<typeof passwordSchema>;

export default function SettingsPage() {
  const { data: session, refetch } = authClient.useSession();
  const [profileError, setProfileError] = useState<string | null>(null);
  const [profileSuccess, setProfileSuccess] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [avatarUploading, setAvatarUploading] = useState(false);

  const profileForm = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    values: { name: session?.user?.name ?? "" },
  });

  const passwordForm = useForm<PasswordInput>({
    resolver: zodResolver(passwordSchema),
  });

  async function onProfileSubmit(data: ProfileInput) {
    setProfileError(null);
    setProfileSuccess(null);

    const { error } = await authClient.updateUser({ name: data.name });
    if (error) {
      setProfileError(error.message ?? "Erro ao atualizar perfil");
      return;
    }

    setProfileSuccess("Perfil atualizado com sucesso");
    refetch();
  }

  async function onPasswordSubmit(data: PasswordInput) {
    setPasswordError(null);
    setPasswordSuccess(null);

    const { error } = await authClient.changePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
    if (error) {
      setPasswordError(error.message ?? "Erro ao alterar senha");
      return;
    }

    setPasswordSuccess("Senha alterada com sucesso");
    passwordForm.reset();
  }

  async function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setAvatarUploading(true);
    setProfileError(null);
    setProfileSuccess(null);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64 = event.target?.result as string;
      const { error } = await authClient.updateUser({ image: base64 });
      if (error) {
        setProfileError(error.message ?? "Erro ao atualizar avatar");
      } else {
        setProfileSuccess("Avatar atualizado");
        refetch();
      }
      setAvatarUploading(false);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div>
          <h1 className="text-2xl font-bold">Configurações</h1>
          <p className="text-muted-foreground">
            Gerencie suas informações pessoais e segurança
          </p>
        </div>

        <Separator />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <Card className="w-full lg:max-w-md">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="size-14">
                    <AvatarImage src={session?.user?.image ?? undefined} />
                    <AvatarFallback className="text-lg">
                      {session?.user?.name?.charAt(0)?.toUpperCase() ?? "U"}
                    </AvatarFallback>
                  </Avatar>
                  <label
                    htmlFor="avatar-upload"
                    className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity hover:opacity-100"
                  >
                    <span className="text-xs text-white">
                      {avatarUploading ? "..." : "Editar"}
                    </span>
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarUpload}
                    disabled={avatarUploading}
                  />
                </div>
                <div>
                  <CardTitle>{session?.user?.name ?? "Usuário"}</CardTitle>
                  <CardDescription>{session?.user?.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={profileForm.handleSubmit(onProfileSubmit)}>
                <FieldGroup>
                  {profileError && (
                    <p className="text-sm text-destructive">{profileError}</p>
                  )}
                  {profileSuccess && (
                    <p className="text-sm text-emerald-600">{profileSuccess}</p>
                  )}

                  <Field>
                    <FieldLabel htmlFor="name">Nome</FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      {...profileForm.register("name")}
                    />
                    {profileForm.formState.errors.name && (
                      <p className="text-sm text-destructive">
                        {profileForm.formState.errors.name.message}
                      </p>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel>E-mail</FieldLabel>
                    <Input
                      type="email"
                      value={session?.user?.email ?? ""}
                      disabled
                      className="text-muted-foreground"
                    />
                    <p className="text-xs text-muted-foreground">
                      O e-mail não pode ser alterado no momento
                    </p>
                  </Field>

                  <div>
                    <Button
                      type="submit"
                      disabled={profileForm.formState.isSubmitting}
                    >
                      {profileForm.formState.isSubmitting ? "Salvando..." : "Salvar alterações"}
                    </Button>
                  </div>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>

          <Card className="w-full lg:max-w-md">
            <CardHeader>
              <CardTitle>Alterar senha</CardTitle>
              <CardDescription>
                Escolha uma senha forte e única
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}>
                <FieldGroup>
                  {passwordError && (
                    <p className="text-sm text-destructive">{passwordError}</p>
                  )}
                  {passwordSuccess && (
                    <p className="text-sm text-emerald-600">{passwordSuccess}</p>
                  )}

                  <Field>
                    <FieldLabel htmlFor="currentPassword">Senha atual</FieldLabel>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showCurrent ? "text" : "password"}
                        placeholder="Sua senha atual"
                        {...passwordForm.register("currentPassword")}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowCurrent(!showCurrent)}
                        tabIndex={-1}
                      >
                        {showCurrent ? <EyeOff className="size-4 text-muted-foreground" /> : <Eye className="size-4 text-muted-foreground" />}
                      </Button>
                    </div>
                    {passwordForm.formState.errors.currentPassword && (
                      <p className="text-sm text-destructive">
                        {passwordForm.formState.errors.currentPassword.message}
                      </p>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="newPassword">Nova senha</FieldLabel>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNew ? "text" : "password"}
                        placeholder="Nova senha"
                        {...passwordForm.register("newPassword")}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowNew(!showNew)}
                        tabIndex={-1}
                      >
                        {showNew ? <EyeOff className="size-4 text-muted-foreground" /> : <Eye className="size-4 text-muted-foreground" />}
                      </Button>
                    </div>
                    {passwordForm.formState.errors.newPassword && (
                      <p className="text-sm text-destructive">
                        {passwordForm.formState.errors.newPassword.message}
                      </p>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="confirmPassword">Confirmar nova senha</FieldLabel>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirm ? "text" : "password"}
                        placeholder="Confirme a nova senha"
                        {...passwordForm.register("confirmPassword")}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowConfirm(!showConfirm)}
                        tabIndex={-1}
                      >
                        {showConfirm ? <EyeOff className="size-4 text-muted-foreground" /> : <Eye className="size-4 text-muted-foreground" />}
                      </Button>
                    </div>
                    {passwordForm.formState.errors.confirmPassword && (
                      <p className="text-sm text-destructive">
                        {passwordForm.formState.errors.confirmPassword.message}
                      </p>
                    )}
                  </Field>

                  <div>
                    <Button
                      type="submit"
                      disabled={passwordForm.formState.isSubmitting}
                    >
                      {passwordForm.formState.isSubmitting ? "Alterando..." : "Alterar senha"}
                    </Button>
                  </div>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
