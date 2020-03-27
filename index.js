const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({data: 'hello world'});
});

app.listen(port, () => {
  console.log('Server started successfully on port ' + port);
});
