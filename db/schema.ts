import { randomUUID } from "node:crypto";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: text("id").primaryKey().$defaultFn(() => randomUUID()),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company"),
  country: text("country"),
  budget: text("budget"),
  service: text("service").notNull(),
  message: text("message"),
  status: text("status").notNull().default("New"),
  source: text("source").notNull().default("Website"),
});

export const visitors = pgTable("visitors", {
  id: text("id").primaryKey().$defaultFn(() => randomUUID()),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  ip: text("ip"),
  userAgent: text("user_agent"),
  country: text("country"),
  city: text("city"),
  page: text("page").notNull(),
  referrer: text("referrer"),
});
