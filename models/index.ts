import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";
import * as dotenv from 'dotenv';  // Import dotenv

dotenv.config();  // Load environment variables

// Ensure DATABASE_URL is defined or provide a fallback value
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables");
}

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, {
  schema,
});
