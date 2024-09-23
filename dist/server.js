"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const logger_1 = __importDefault(require("./middlewares/logger")); // Ensure the path is correct
const mailRoutes_1 = __importDefault(require("./routes/mailRoutes")); // Existing mail routes
const authRoutes_1 = __importDefault(require("./routes/authRoutes")); // Add auth routes
const cookie_parser_1 = __importDefault(require("cookie-parser")); // For handling cookies with JWT
const app = (0, express_1.default)();
// app.use(cors({
//   origin: process.env.CORS_ORIGIN, // Dynamically set allowed origin
//   credentials: true, // Allow cookies and credentials
// }));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)()); // Parse cookies
// Logger middleware
app.use((req, res, next) => {
    logger_1.default.info(`${req.method} ${req.url}`);
    next();
});
// Auth routes for login, register, and logout
app.use('/api/auth', authRoutes_1.default); // New authentication routes
// Mail routes for handling mail operations
app.use('/api/mails', mailRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger_1.default.info(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map