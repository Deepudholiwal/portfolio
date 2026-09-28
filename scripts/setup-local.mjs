import { randomBytes } from "node:crypto";
import { existsSync, writeFileSync } from "node:fs";

if (!existsSync(".env")) {
  writeFileSync(
    ".env",
    [
      'DATABASE_URL="file:./dev.db"',
      `ADMIN_PASSWORD="${randomBytes(24).toString("hex")}"`,
      'NEXT_PUBLIC_SITE_URL="http://localhost:3000"',
      "",
    ].join("\n"),
    { flag: "wx", mode: 0o600 },
  );
  console.log(
    "Created .env with a generated admin password. Read ADMIN_PASSWORD there to sign in.",
  );
} else {
  console.log("Keeping existing .env configuration.");
}
