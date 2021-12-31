require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500'],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);

app.get('/api/v1/place', (req, res) => {
  res.json({ message: 'hello world!' });
});

app.post('/api/v1/place', (req, res) => {
  console.log(req.body);
});

app.listen(app.get('port'), () => {
  console.log('Start');
});
