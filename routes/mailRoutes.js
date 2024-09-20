const express = require('express');
const router = express.Router();

const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi, let's have a meeting tomorrow to discuss the project...",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"],
    folder: "Inbox",
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Alice Smith",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: "Thank you for the project update. It looks great!...",
    date: "2023-10-22T10:30:00",
    read: true,
    labels: ["work", "important"],
    folder: "Inbox",
  },
  // Add all other mail objects here
];

// Define a GET route to return mails
router.get('/mails', (req, res) => {
  res.json(mails);
  console.log("hello")
});

module.exports = router;
