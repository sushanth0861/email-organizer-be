// import lucia from "lucia";
// import { pgAdapter } from "@lucia-auth/adapter-postgresql";
// import bcrypt from "bcrypt";
// import { db } from "../models/index"; // Import your database connection
// import { users } from "../models/schema"; // Import the users schema

// // Initialize Lucia authentication
// export const auth = lucia({
//   adapter: pgAdapter(db, {
//     user: users, // Your users table
//     key: "user_auth_keys", // Table for storing user keys
//   }),
//   env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
//   transformDatabaseUser: (userData) => ({
//     id: userData.id,
//     email: userData.email,
//     name: userData.name,
//   }),
//   passwordHashing: bcrypt.hash,
//   // Other settings if needed
// });

// export type Auth = typeof auth;
