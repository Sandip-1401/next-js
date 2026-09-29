import { draftMode } from "next/headers";

export async function GET() {
  const draft = await draftMode();
  draft.disable();

  return Response.redirect("http://localhost:3000");
}