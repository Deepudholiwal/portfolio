CREATE TABLE "leads" (
	"id" text PRIMARY KEY,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"company" text,
	"country" text,
	"budget" text,
	"service" text NOT NULL,
	"message" text,
	"status" text DEFAULT 'New' NOT NULL,
	"source" text DEFAULT 'Website' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "visitors" (
	"id" text PRIMARY KEY,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"ip" text,
	"user_agent" text,
	"country" text,
	"city" text,
	"page" text NOT NULL,
	"referrer" text
);
