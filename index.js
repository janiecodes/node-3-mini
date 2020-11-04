require('dotenv').config();
const express = require("express");
const massive = require('massive');
const app = express();
const {getPlanes, addPlane} = require('./controller');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log(`Connected to database!`)
});

app.get('/api/planes', getPlanes);
app.post('/api/planes', addPlane);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
