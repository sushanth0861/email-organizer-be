import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middlewares/logger'; // Ensure the path is correct
import mailRoutes from './routes/mailRoutes'; // Existing mail routes
import authRoutes from './routes/authRoutes'; // Add auth routes
import cookieParser from 'cookie-parser'; // For handling cookies with JWT

const app = express();

// app.use(cors({
//   origin: process.env.CORS_ORIGIN, // Dynamically set allowed origin
//   credentials: true, // Allow cookies and credentials
// }));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser()); // Parse cookies

// Logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Auth routes for login, register, and logout
app.use('/api/auth', authRoutes); // New authentication routes

// Mail routes for handling mail operations
app.use('/api/mails', mailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
