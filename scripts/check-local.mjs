import assert from "node:assert/strict";
import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());
const base = process.env.LOCAL_TEST_URL || "http://localhost:3000";
assert.ok(
  new URL(base).hostname === "localhost",
  "Run this check only against localhost.",
);
const headers = {
  "Content-Type": "application/json",
  "x-admin-password": process.env.ADMIN_PASSWORD,
};
let leadId;
try {
  for (const path of ["/", "/admin"]) {
    assert.equal((await fetch(base + path)).status, 200, path);
  }
  assert.equal((await fetch(base + "/api/admin/leads")).status, 401);
  assert.equal(
    (
      await fetch(base + "/api/leads", {
        method: "POST",
        headers,
        body: JSON.stringify({ name: "X" }),
      })
    ).status,
    400,
  );
  const created = await fetch(base + "/api/leads", {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: "Local smoke test",
      email: "smoke@example.com",
      phone: "1234567890",
      service: "AI Development",
      message: "Local runtime check",
    }),
  });
  assert.equal(created.status, 201);
  leadId = (await created.json()).lead.id;
  const list = await fetch(base + "/api/admin/leads", { headers });
  assert.equal(list.status, 200);
  assert.ok((await list.json()).leads.some((lead) => lead.id === leadId));
  const updated = await fetch(base + "/api/admin/leads", {
    method: "PATCH",
    headers,
    body: JSON.stringify({ id: leadId, status: "Contacted" }),
  });
  assert.equal(updated.status, 200);
  assert.equal((await updated.json()).lead.status, "Contacted");
  console.log(
    "PASS: homepage, admin page, authorization, validation, lead creation, listing, and status update.",
  );
} finally {
  if (leadId) {
    const removed = await fetch(base + "/api/admin/leads", {
      method: "DELETE",
      headers,
      body: JSON.stringify({ id: leadId }),
    });
    assert.equal(removed.status, 200);
    console.log("PASS: deleted the test lead.");
  }
}
