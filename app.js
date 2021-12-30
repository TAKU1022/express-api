const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);

app.get('/api/v1/place', (req, res) => {
  res.json({ message: 'hello world!' });
});

app.listen(app.get('port'), () => {
  console.log('Start');
});
