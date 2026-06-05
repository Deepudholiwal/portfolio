import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(30),
  company: z.string().max(100).optional().or(z.literal("")),
  country: z.string().max(100).optional().or(z.literal("")),
  budget: z.string().max(100).optional().or(z.literal("")),
  service: z.string().min(1).max(100),
  message: z.string().max(2000).optional().or(z.literal(""))
});

export const visitorSchema = z.object({
  page: z.string().max(150),
  referrer: z.string().max(300).optional().or(z.literal("")),
  ip: z.string().optional().or(z.literal("")),
  userAgent: z.string().optional().or(z.literal("")),
  country: z.string().max(100).optional().or(z.literal("")),
  city: z.string().max(100).optional().or(z.literal(""))
});
