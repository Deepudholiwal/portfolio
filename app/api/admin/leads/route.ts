import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasValidAdminSession } from "@/lib/admin-auth";

export async function GET(request: Request) {
  if (!hasValidAdminSession(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ success: true, leads });
  } catch {
    return NextResponse.json(
      { success: false, error: "You are signed in, but leads could not be loaded. Please try refreshing the lead list." },
      { status: 503 },
    );
  }
}

export async function PATCH(request: Request) {
  if (!hasValidAdminSession(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { id, status } = body;
  if (!id || !status) {
    return NextResponse.json({ success: false, error: "Missing payload" }, { status: 400 });
  }

  const lead = await prisma.lead.update({ where: { id }, data: { status } });
  return NextResponse.json({ success: true, lead });
}

export async function DELETE(request: Request) {
  if (!hasValidAdminSession(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { id } = body;
  if (!id) {
    return NextResponse.json({ success: false, error: "Missing id" }, { status: 400 });
  }

  await prisma.lead.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
