import { NextResponse } from "next/server";
import { db } from "@/db";
import { visitors } from "@/db/schema";
import { visitorSchema } from "@/lib/validators";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const result = visitorSchema.safeParse(await request.json().catch(() => null));
  if (!result.success) {
    return NextResponse.json({ success: false, error: "Invalid visitor request." }, { status: 400 });
  }
  try {
    await db.insert(visitors).values(result.data);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, error: "Unable to record visit." }, { status: 503 });
  }
}
