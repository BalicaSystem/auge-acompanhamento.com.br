import { getSystemStatus } from "@/services/status";

export async function GET() {
  try {
    const status = await getSystemStatus();

    return Response.json(status);
  } catch {
    return Response.json(
      {
        error: "Unable to retrieve system status",
      },
      {
        status: 503,
      },
    );
  }
}
