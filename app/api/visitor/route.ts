import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { visitorSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const validated = visitorSchema.parse(payload);

    await prisma.visitor.create({ data: {
      page: validated.page,
      referrer: validated.referrer || null,
      ip: validated.ip || null,
      userAgent: validated.userAgent || null,
      country: validated.country || null,
      city: validated.city || null
    }});

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Invalid request." }, { status: 400 });
  }
}
