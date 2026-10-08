import { ArrowLeft } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default function Loading() {
  return (
    <main className="min-h-screen bg-muted/40 p-6">
      <div className="mx-auto max-w-4xl space-y-8 py-4">
        <div
          className={buttonVariants({
            variant: "ghost",
            className: "flex items-center gap-2",
          })}
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </div>

        <div className="space-y-3">
          <div className="h-9 w-64 animate-pulse rounded-md bg-muted" />

          <div className="h-5 w-full max-w-xl animate-pulse rounded-md bg-muted" />
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 animate-pulse rounded-lg bg-muted" />

              <div className="space-y-2">
                <div className="h-5 w-48 animate-pulse rounded-md bg-muted" />

                <div className="h-4 w-72 animate-pulse rounded-md bg-muted" />
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="h-5 w-5 animate-pulse rounded bg-muted" />

              <div className="h-5 w-32 animate-pulse rounded-md bg-muted" />
            </CardHeader>

            <CardContent className="space-y-2">
              <div className="h-8 w-24 animate-pulse rounded-md bg-muted" />

              <div className="h-4 w-48 animate-pulse rounded-md bg-muted" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-5 w-5 animate-pulse rounded bg-muted" />

              <div className="h-5 w-32 animate-pulse rounded-md bg-muted" />
            </CardHeader>

            <CardContent className="space-y-2">
              <div className="h-8 w-24 animate-pulse rounded-md bg-muted" />

              <div className="h-4 w-56 animate-pulse rounded-md bg-muted" />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="flex items-center gap-3 p-6">
            <div className="h-5 w-5 animate-pulse rounded bg-muted" />

            <div className="space-y-2">
              <div className="h-4 w-32 animate-pulse rounded-md bg-muted" />

              <div className="h-4 w-40 animate-pulse rounded-md bg-muted" />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
