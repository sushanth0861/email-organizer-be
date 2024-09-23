"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mailController_1 = require("../controllers/mailController");
const router = (0, express_1.Router)();
// Route for fetching mails
router.get('/', mailController_1.getAllMails);
exports.default = router;
//# sourceMappingURL=mailRoutes.js.map