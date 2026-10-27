import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "portfolio_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

export function isAdminPasswordValid(password: unknown) {
  const expected = getAdminPassword();
  if (typeof password !== "string" || !expected) return false;

  const providedBuffer = Buffer.from(password);
  const expectedBuffer = Buffer.from(expected);
  return (
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer)
  );
}

export function createAdminSessionToken() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS;
  const signature = createHmac("sha256", getAdminPassword())
    .update(String(expiresAt))
    .digest("hex");

  return `${expiresAt}.${signature}`;
}

export function hasValidAdminSession(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookie = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${ADMIN_SESSION_COOKIE}=`));
  const token = cookie?.slice(ADMIN_SESSION_COOKIE.length + 1);
  const [expiresAtText, providedSignature, ...extraParts] = token?.split(".") || [];
  const expiresAt = Number(expiresAtText);
  const adminPassword = getAdminPassword();

  if (
    !adminPassword ||
    !token ||
    extraParts.length > 0 ||
    !Number.isInteger(expiresAt) ||
    expiresAt <= Math.floor(Date.now() / 1000) ||
    !providedSignature ||
    !/^[0-9a-f]{64}$/i.test(providedSignature)
  ) {
    return false;
  }

  const expectedSignature = createHmac("sha256", adminPassword)
    .update(String(expiresAt))
    .digest();
  const providedBuffer = Buffer.from(providedSignature, "hex");

  return (
    providedBuffer.length === expectedSignature.length &&
    timingSafeEqual(providedBuffer, expectedSignature)
  );
}

export function getAdminSessionMaxAge() {
  return SESSION_MAX_AGE_SECONDS;
}
