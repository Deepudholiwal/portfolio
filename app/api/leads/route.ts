import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validators";

async function sendEmailNotification(data: any) {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || "";
  if (!apiKey) return;
  return;
}

async function sendWhatsAppNotification(data: any) {
  return;
}

async function sendTelegramAlert(data: any) {
  return;
}

async function createCRMLead(data: any) {
  return;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const validated = leadSchema.parse(payload);

    const lead = await prisma.lead.create({ data: {
      name: validated.name,
      email: validated.email,
      phone: validated.phone,
      company: validated.company || null,
      country: validated.country || null,
      budget: validated.budget || null,
      service: validated.service,
      message: validated.message || null
    }});

    await Promise.all([
      sendEmailNotification(lead),
      sendWhatsAppNotification(lead),
      sendTelegramAlert(lead),
      createCRMLead(lead)
    ]);

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Invalid request." }, { status: 400 });
  }
}
