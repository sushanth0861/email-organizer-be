"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailRelations = exports.categoryRelations = exports.folderRelations = exports.userRelations = exports.mails = exports.categories = exports.folders = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
// Define Users Table
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)('email', { length: 255 }).unique().notNull(),
    hashedPassword: (0, pg_core_1.varchar)('hashedPassword', { length: 255 }), // New field for storing password
    provider: (0, pg_core_1.varchar)('provider', { length: 50 }), // e.g., 'github', 'google'
    providerId: (0, pg_core_1.varchar)('providerId', { length: 255 }), // e.g., GitHub or Google ID
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
// Define Folders Table
exports.folders = (0, pg_core_1.pgTable)('folders', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(), // e.g., Inbox, Archive, Trash
});
// Define Categories Table (for user-defined categories)
exports.categories = (0, pg_core_1.pgTable)('categories', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }).notNull(), // e.g., Work, Social, etc.
    userId: (0, pg_core_1.integer)('user_id').references(() => exports.users.id), // Categories are user-specific
});
// Define Mails Table
exports.mails = (0, pg_core_1.pgTable)('mails', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    userId: (0, pg_core_1.integer)('user_id').references(() => exports.users.id), // Email belongs to a user
    folderId: (0, pg_core_1.integer)('folder_id').references(() => exports.folders.id), // Email belongs to a folder
    categoryId: (0, pg_core_1.integer)('category_id').references(() => exports.categories.id), // Email may belong to a category
    subject: (0, pg_core_1.text)('subject').notNull(),
    body: (0, pg_core_1.text)('body').notNull(),
    from: (0, pg_core_1.varchar)('from', { length: 255 }).notNull(),
    to: (0, pg_core_1.varchar)('to', { length: 255 }).notNull(),
    read: (0, pg_core_1.boolean)('read').default(false),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    labels: (0, pg_core_1.json)('labels').$type(), // Nullable JSON array for labels
});
// Relations (optional, depends on use case)
exports.userRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    categories: many(exports.categories),
    mails: many(exports.mails),
}));
exports.folderRelations = (0, drizzle_orm_1.relations)(exports.folders, ({ many }) => ({
    mails: many(exports.mails),
}));
exports.categoryRelations = (0, drizzle_orm_1.relations)(exports.categories, ({ many, one }) => ({
    mails: many(exports.mails),
    user: one(exports.users),
}));
exports.mailRelations = (0, drizzle_orm_1.relations)(exports.mails, ({ one }) => ({
    user: one(exports.users),
    folder: one(exports.folders),
    category: one(exports.categories),
}));
//# sourceMappingURL=schema.js.map