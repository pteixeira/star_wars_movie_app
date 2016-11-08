var express = require('express');
var app = express(); // new express application
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
var routes = require('./routes');

// Home route
app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// 404 not found - must be at the bottom
app.get('*', routes.not_found);

// Listen
app.listen(process.env.PORT || 3000, () => {
});
