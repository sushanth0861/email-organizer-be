const assignRandomCategory = () => {
  const categories = ["Social", "Updates", "Forums", "Shopping", "Promotions", "Work", "Personal"];
  return categories[Math.floor(Math.random() * categories.length)];
};

export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    userId: 1, // Assuming a userId
    folder: "Inbox",
    category: assignRandomCategory(),
    subject: "Meeting Tomorrow",
    body: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    from: "williamsmith@example.com", // Sender's email
    to: "recipient@example.com", // Recipient's email
    read: true,
    createdAt: "2023-10-22T09:00:00", // Adjusted to match createdAt
    labels: ["meeting", "work", "important"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    userId: 2, // Assuming a different userId
    folder: "Inbox",
    category: assignRandomCategory(),
    subject: "Re: Project Update",
    body: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
    from: "alicesmith@example.com",
    to: "recipient@example.com",
    read: true,
    createdAt: "2023-10-22T10:30:00",
    labels: ["work", "important"],
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    userId: 1,
    folder: "Archive",
    category: assignRandomCategory(),
    subject: "Weekend Plans",
    body: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
    from: "bobjohnson@example.com",
    to: "recipient@example.com",
    read: true,
    createdAt: "2023-04-10T11:45:00",
    labels: ["personal"],
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    userId: 1,
    folder: "Inbox",
    category: assignRandomCategory(),
    subject: "Re: Question about Budget",
    body: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    from: "emilydavis@example.com",
    to: "recipient@example.com",
    read: false,
    createdAt: "2023-03-25T13:15:00",
    labels: ["work", "budget"],
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    userId: 1,
    folder: "Inbox",
    category: assignRandomCategory(),
    subject: "Important Announcement",
    body: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
    from: "michaelwilson@example.com",
    to: "recipient@example.com",
    read: false,
    createdAt: "2023-03-10T15:00:00",
    labels: ["meeting", "work", "important"],
  },
  {
    id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
    userId: 2,
    folder: "Inbox",
    category: assignRandomCategory(),
    subject: "Re: Feedback on Proposal",
    body: "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI've attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Sarah",
    from: "sarahbrown@example.com",
    to: "recipient@example.com",
    read: true,
    createdAt: "2023-02-15T16:30:00",
    labels: ["work"],
  },
  // Continue with other mail entries similarly...
];
