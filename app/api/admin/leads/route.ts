import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { hasValidAdminSession } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const idSchema = z.object({ id: z.string().min(1).max(100) });
const updateSchema = idSchema.extend({ status: z.enum(["New", "Contacted", "Qualified", "Closed"]) });

function unauthorized() {
  return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
}

function unavailable(error: string) {
  return NextResponse.json({ success: false, error }, { status: 503 });
}

export async function GET(request: Request) {
  if (!hasValidAdminSession(request)) return unauthorized();
  try {
    const rows = await db.select().from(leads).orderBy(desc(leads.createdAt));
    return NextResponse.json({ success: true, leads: rows }, { headers: { "Cache-Control": "private, no-store" } });
  } catch {
    return unavailable("You are signed in, but leads could not be loaded. Please try refreshing the lead list.");
  }
}

export async function PATCH(request: Request) {
  if (!hasValidAdminSession(request)) return unauthorized();
  const result = updateSchema.safeParse(await request.json().catch(() => null));
  if (!result.success) {
    return NextResponse.json({ success: false, error: "Provide a lead ID and valid status." }, { status: 400 });
  }
  try {
    const [lead] = await db.update(leads).set({ status: result.data.status })
      .where(eq(leads.id, result.data.id)).returning();
    if (!lead) return NextResponse.json({ success: false, error: "Lead not found." }, { status: 404 });
    return NextResponse.json({ success: true, lead });
  } catch {
    return unavailable("Unable to update the lead. Please try again.");
  }
}

export async function DELETE(request: Request) {
  if (!hasValidAdminSession(request)) return unauthorized();
  const result = idSchema.safeParse(await request.json().catch(() => null));
  if (!result.success) {
    return NextResponse.json({ success: false, error: "Provide a lead ID." }, { status: 400 });
  }
  try {
    const [lead] = await db.delete(leads).where(eq(leads.id, result.data.id)).returning({ id: leads.id });
    if (!lead) return NextResponse.json({ success: false, error: "Lead not found." }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch {
    return unavailable("Unable to delete the lead. Please try again.");
  }
}
