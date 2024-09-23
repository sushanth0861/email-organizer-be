ALTER TABLE "folders" DROP CONSTRAINT "folders_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "hashedPassword" varchar(255);--> statement-breakpoint
ALTER TABLE "folders" DROP COLUMN IF EXISTS "user_id";