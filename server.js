const express = require('express');
const sql = require('mssql');

const app = express();
const port = 3000;

// SQL server configuration
const config = {
  user: 'sa',
  password: 'pass1word',
  server: '10.70.39.112',
  database: 'LENOVO',
};

// Endpoint for checking SQL server connection
app.get('/check-connection', (req, res) => {
  sql.connect(config, (err) => {
    if (err) {
      console.log('Connection failed:', err);
      res.send('Connection failed');
    } else {
      console.log('Connected successfully');
      res.send('Connected successfully');
    }
  });
});

// Serve the login page
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
