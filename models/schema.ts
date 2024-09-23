import { pgTable, serial, text, timestamp, boolean, varchar, json, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Define Users Table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  hashedPassword: varchar('hashedPassword', { length: 255 }),  // New field for storing password
  provider: varchar('provider', { length: 50 }),  // e.g., 'github', 'google'
  providerId: varchar('providerId', { length: 255 }),  // e.g., GitHub or Google ID
  createdAt: timestamp('created_at').defaultNow(),
});

// Define Folders Table
export const folders = pgTable('folders', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),  // e.g., Inbox, Archive, Trash
});

// Define Categories Table (for user-defined categories)
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),  // e.g., Work, Social, etc.
  userId: integer('user_id').references(() => users.id),  // Categories are user-specific
});

// Define Mails Table
export const mails = pgTable('mails', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),  // Email belongs to a user
  folderId: integer('folder_id').references(() => folders.id),  // Email belongs to a folder
  categoryId: integer('category_id').references(() => categories.id),  // Email may belong to a category
  subject: text('subject').notNull(),
  body: text('body').notNull(),
  from: varchar('from', { length: 255 }).notNull(),
  to: varchar('to', { length: 255 }).notNull(),
  read: boolean('read').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  labels: json('labels').$type<string[] | null>(),  // Nullable JSON array for labels
});

// Relations (optional, depends on use case)
export const userRelations = relations(users, ({ many }) => ({
  categories: many(categories),
  mails: many(mails),
}));

export const folderRelations = relations(folders, ({ many }) => ({
  mails: many(mails),
}));

export const categoryRelations = relations(categories, ({ many, one }) => ({
  mails: many(mails),
  user: one(users),
}));

export const mailRelations = relations(mails, ({ one }) => ({
  user: one(users),
  folder: one(folders),
  category: one(categories),
}));
