const path = require('path');
const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '5mb' }));

app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

// In order to render a page in Express, we need to:
// 1. Define a view (rendering) engine
// Ex.: EJS, Mustache, Handlebars, Jade/Pug, etc.
// 2. Inside our routes, we have a res.render(...)
// 3. We pass that res.render 2 things:
// - the file (page template) we want to use
// - the data we want to send to that file
// 4. Express takes the HTML/JS/CSS and combines it with the data sent (possibly dynamic data)
// 5. The final compiled result will be an HTML/JS/CSS file with all the data in the right format for the browser to read

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(3000);