const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({data: 'hello world'});
});

app.listen(port, () => {
  console.log('Server started successfully on port ' + port);
});
