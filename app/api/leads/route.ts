import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { leadSchema } from "@/lib/validators";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const result = leadSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error.issues[0]?.message || "Please check your form details." },
      { status: 400 },
    );
  }

  try {
    const [lead] = await db.insert(leads).values(result.data).returning();
    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to save your inquiry right now. Please try again shortly or email me directly." },
      { status: 503 },
    );
  }
}
