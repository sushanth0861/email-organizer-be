"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index"); // Ensure the db is properly initialized
const schema_1 = require("./schema"); // Import your schema tables
const expressions_1 = require("drizzle-orm/expressions"); // Import `eq` from expressions
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = 1; // Example userId
        // Create a user first
        const [user] = yield index_1.db
            .insert(schema_1.users)
            .values({ name: 'John Doe', email: 'john@example.com', provider: 'github', providerId: 'github-123' })
            .returning({ id: schema_1.users.id });
        // Insert folders (shared for all users)
        yield index_1.db.insert(schema_1.folders).values([
            { name: 'Inbox' },
            { name: 'Trash' },
        ]);
        // Insert categories associated with the user
        yield index_1.db.insert(schema_1.categories).values([
            { name: 'Work', userId: user.id },
            { name: 'Personal', userId: user.id },
        ]);
        // Get random folder and category for assigning to emails
        const folderList = yield index_1.db.select().from(schema_1.folders);
        const categoryList = yield index_1.db.select().from(schema_1.categories).where((0, expressions_1.eq)(schema_1.categories.userId, user.id));
        if (folderList.length === 0 || categoryList.length === 0) {
            throw new Error("No folders or categories available.");
        }
        const getRandomFolderAndCategory = () => {
            const randomFolder = folderList[Math.floor(Math.random() * folderList.length)];
            const randomCategory = categoryList[Math.floor(Math.random() * categoryList.length)];
            return {
                folderId: randomFolder.id,
                categoryId: randomCategory.id,
            };
        };
        // Insert sample mails
        const sampleMails = [
            {
                subject: 'Meeting Tomorrow',
                body: 'Hi, let\'s have a meeting tomorrow to discuss the project.',
                from: 'william@example.com',
                to: 'john@example.com',
                read: true,
                labels: ['meeting', 'work', 'important'],
            },
            // Add more sample mails if needed
        ];
        for (const mail of sampleMails) {
            const { folderId, categoryId } = getRandomFolderAndCategory();
            yield index_1.db.insert(schema_1.mails).values(Object.assign(Object.assign({}, mail), { userId: user.id, folderId,
                categoryId }));
        }
        console.log('Database seeded successfully.');
    });
}
seedDatabase().catch((err) => {
    console.error('Seeding failed:', err);
});
//# sourceMappingURL=seed.js.map