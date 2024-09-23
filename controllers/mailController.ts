// import { Request, Response } from 'express';
// import { db } from '../models/index';  // Import the initialized database connection
// import { mails, folders, categories } from '../models/schema';  // Import the mails, folders, and categories table schema
// import { eq } from 'drizzle-orm/expressions';  // Import expression functions for condition matching

// export const getAllMails = async (req: Request, res: Response) => {
//   try {
//     // Perform a join to include folder and category names
//     const allMails = await db
//       .select({
//         id: mails.id,
//         userId: mails.userId,
//         folder: folders.name,   // Select the folder name
//         category: categories.name,  // Select the category name
//         subject: mails.subject,
//         body: mails.body,
//         from: mails.from,
//         to: mails.to,
//         read: mails.read,
//         createdAt: mails.createdAt,
//         labels: mails.labels
//       })
//       .from(mails)
//       .leftJoin(folders, eq(mails.folderId, folders.id))  // Join with the folders table
//       .leftJoin(categories, eq(mails.categoryId, categories.id));  // Join with the categories table

//     console.log(allMails);

//     // Send the result as JSON
//     res.status(200).json(allMails);
//   } catch (error) {
//     console.error('Error fetching mails:', error);
//     res.status(500).json({ error: 'Failed to fetch mails' });
//   }
// };

import { Request, Response } from 'express';
// Import hardcoded mail data from mail.ts
import { mails } from '../data/mails';  // Ensure this is the path to the data.ts file

export const getAllMails = async (req: Request, res: Response) => {
  try {
    // Respond with hardcoded mails
    res.status(200).json(mails);
  } catch (error) {
    console.error('Error fetching mails:', error);
    res.status(500).json({ error: 'Failed to fetch mails' });
  }
};
