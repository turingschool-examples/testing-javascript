const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const livereload = require('express-livereload');

app.use(express.static(__dirname));
app.listen(port, () => {
  console.log(`🏃  The server is running.`);
  console.log(`Head over to http://localhost:${port} to see your tests in action.`);
});

livereload(app, {
  watchDir: __dirname
});
