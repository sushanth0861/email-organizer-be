"use strict";
// import { Request, Response } from 'express';
// import { db } from '../models/index';  // Import the initialized database connection
// import { mails, folders, categories } from '../models/schema';  // Import the mails, folders, and categories table schema
// import { eq } from 'drizzle-orm/expressions';  // Import expression functions for condition matching
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
exports.getAllMails = void 0;
// Import hardcoded mail data from mail.ts
const mails_1 = require("../data/mails"); // Ensure this is the path to the data.ts file
const getAllMails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Respond with hardcoded mails
        res.status(200).json(mails_1.mails);
    }
    catch (error) {
        console.error('Error fetching mails:', error);
        res.status(500).json({ error: 'Failed to fetch mails' });
    }
});
exports.getAllMails = getAllMails;
//# sourceMappingURL=mailController.js.map