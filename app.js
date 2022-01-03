require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const axios = require('axios');

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

app.get('/api/v1/place', async (req, res) => {
  const value = req.query.value;
  const api = await axios.get(
    `http://webservice.recruit.co.jp/hotpepper/shop/v1/?key=${
      process.env.API_KEY
    }&keyword=${encodeURIComponent(value)}&format=json`
  );
  res.json(api.data);
});

app.listen(app.get('port'), () => {
  console.log('Start');
});
