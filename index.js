const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.post('/createFile', (req, res) => {


  // // Get the current timestamp
  const timestamp = new Date().toISOString();

  // Write the file
  fs.writeFile("./timestamp/date-time.txt", timestamp, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating file');
    }

    console.log('File created successfully');
    return res.send('File created successfully');
  });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
