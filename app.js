const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: '首頁' });
});

app.get('/about', (req, res) => {
  res.render('index', { title: 'About' });
});

app.get('/portfolio', (req, res) => {
  res.render('index', { title: 'Portfolio' });
});

app.get('/contact', (req, res) => {
  res.render('index', { title: 'Contact' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});