const express = require('express');
const mailRoutes = require('./routes/mailRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', mailRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
