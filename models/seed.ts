import { db } from './index'; // Ensure the db is properly initialized
import { folders, categories, mails, users } from './schema'; // Import your schema tables
import { eq } from 'drizzle-orm/expressions'; // Import `eq` from expressions

async function seedDatabase() {
  const userId = 1; // Example userId

  // Create a user first
  const [user] = await db
    .insert(users)
    .values({ name: 'John Doe', email: 'john@example.com', provider: 'github', providerId: 'github-123' })
    .returning({ id: users.id });

  // Insert folders (shared for all users)
  await db.insert(folders).values([
    { name: 'Inbox' },
    { name: 'Trash' },
  ]);

  // Insert categories associated with the user
  await db.insert(categories).values([
    { name: 'Work', userId: user.id },
    { name: 'Personal', userId: user.id },
  ]);

  // Get random folder and category for assigning to emails
  const folderList = await db.select().from(folders);
  const categoryList = await db.select().from(categories).where(eq(categories.userId, user.id));

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

    await db.insert(mails).values({
      ...mail,
      userId: user.id,
      folderId,
      categoryId,
    });
  }

  console.log('Database seeded successfully.');
}

seedDatabase().catch((err) => {
  console.error('Seeding failed:', err);
});
