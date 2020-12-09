const port = process.env.port || 3000;
const express = require('express');
const ejs = require('ejs');
const layouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(layouts);

const homeController = require('./controllers/homeController.js');
app.get('/', homeController.renderIndex);

const server = app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
