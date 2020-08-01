/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const { join } = require('path');
const { static } = express;
const app = express();
const port = 5000;

// app.use(static(join(__dirname)));

app.get('*', function (req, res) {
  res.sendFile(join(__dirname,'index.html'));
});

app.listen(port);
// Log to feedback that this is actually running
// eslint-disable-next-line
console.log(`Server started on port ${port}`);
