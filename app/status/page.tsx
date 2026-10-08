import Link from "next/link";
import { Activity, ArrowLeft, Clock, Database, HardDrive } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";

type StatusResponse = {
  updated_at: string;
  dependecies: {
    database: {
      version: string;
      max_connections: number;
      opened_connections: number;
    };
  };
};

export const metadata: Metadata = {
  title: "Auge Motos | Status do Sistema",
};

async function getStatus(): Promise<StatusResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/v1/status`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch status");
  }

  return response.json();
}

export default async function StatusPage() {
  try {
    const status = await getStatus();
    const database = status.dependecies.database;

    return (
      <main className="min-h-screen bg-muted/40 p-6">
        <div className="mx-auto max-w-4xl space-y-8 py-4">
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
              className: "flex items-center gap-2",
            })}
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Status do sistema
            </h1>

            <p className="mt-2 text-muted-foreground">
              Informações sobre o funcionamento da aplicação e do banco de
              dados.
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-green-100 p-2 text-green-600">
                  <Activity className="h-5 w-5" />
                </div>

                <div>
                  <CardTitle>Sistema operacional</CardTitle>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Todos os serviços estão respondendo.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <Database className="h-5 w-5 text-muted-foreground" />
                <CardTitle>PostgreSQL</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-2xl font-semibold">v{database.version}</p>

                <p className="text-sm text-muted-foreground">
                  Versão do banco de dados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HardDrive className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Conexões</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-2xl font-semibold">
                  {database.opened_connections}

                  <span className="text-base font-normal text-muted-foreground">
                    {" "}
                    / {database.max_connections}
                  </span>
                </p>

                <p className="text-sm text-muted-foreground">
                  Conexões abertas / máximo permitido
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="flex items-center gap-3 p-6">
              <Clock className="h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm font-medium">Última atualização</p>

                <p className="text-sm text-muted-foreground">
                  {new Date(status.updated_at).toLocaleString("pt-BR")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  } catch {
    return (
      <main className="min-h-screen bg-muted/40 p-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
              className: "flex items-center gap-2",
            })}
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>

          <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
            <Card className="w-full max-w-md border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Serviço indisponível
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Não foi possível consultar o status do sistema.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    );
  }
}
