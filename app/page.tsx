import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-md shadow-sm">
        <CardHeader>
          <CardTitle>Auge Acompanhamento</CardTitle>
          <CardDescription>
            Acompanhe seus atendimentos de forma simples e segura.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="rounded-lg border bg-background p-4">
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="font-medium">Em construção</span>
            </div>
            <div className="mt-2">
              <Link
                href={"/status"}
                className={buttonVariants({
                  variant: "secondary",
                })}
              >
                Ver Status
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
