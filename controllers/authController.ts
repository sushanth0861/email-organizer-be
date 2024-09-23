import bcrypt from 'bcryptjs';
import { db } from '../models'; // Your database connection
import { users } from '../models/schema'; // Assuming the users table schema is already there
import jwt from 'jsonwebtoken'; // JWT for authentication

// Register a new user
// export const registerUser = async (req: { body: { name: any; email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await db.select().from(users).where({ email }).first();
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert the new user into the database
//     await db.insert(users).values({
//       name,
//       email,
//       password: hashedPassword, // Add this to your users table schema
//     });

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// User login
// export const loginUser = async (req: { body: { email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; json: (arg0: { token: never; message: string; }) => void; }) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await db.select().from(users).where({ email }).first();
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Check if the password matches
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Create a JWT token
//     const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({ token, message: 'Login successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// User logout (for JWT-based auth)
// export const logoutUser = async (req: any, res: { json: (arg0: { message: string; }) => void; }) => {
//   // In JWT-based auth, logout can be handled on the client-side by simply deleting the token
//   res.json({ message: 'User logged out successfully' });
// };
