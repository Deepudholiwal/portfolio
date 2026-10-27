import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminSessionMaxAge,
  hasValidAdminSession,
  isAdminLoginConfigured,
  isAdminPasswordValid,
} from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      success: true,
      authenticated: hasValidAdminSession(request),
      configured: isAdminLoginConfigured(),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  if (!isAdminLoginConfigured()) {
    return NextResponse.json(
      { success: false, error: "Admin login is unavailable. Contact the site owner to finish setting it up." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const password =
    typeof body === "object" && body !== null && "password" in body
      ? body.password
      : undefined;

  if (!isAdminPasswordValid(password)) {
    return NextResponse.json(
      { success: false, error: "Incorrect admin password." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: getAdminSessionMaxAge(),
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}
