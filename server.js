// Don't worry about this file right now. TLDR; It sets up a simple express server to help us keep things running smoothly.

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`🏃  The server is running.`);
  console.log(`Head over to http://localhost:${port} to see your tests in action.`);
});