var movies_json = require('../movies.json');

// Home route
exports.home = (req, res) => {
  var movies = movies_json.movies;

  res.render('home', {
    title: 'Star Wars Movies',
    movies: movies
  });
};

exports.movie_single = (req, res) => {
  var episode_number = req.params.episode_number;
  var movies = movies_json.movies;

  if (episode_number >= 1 && episode_number <= 6) {
    var movie = movies[episode_number - 1]; // arrays zero based, movies are not :P
    var title = movie.title;
    var main_characters = movie.main_characters;

    res.render('movie_single', {
      movies: movies,
      movie: movie,
      main_characters: main_characters,
      title: title
    });
  } else {
    res.render('not_found', {
      movies: movies,
      title: "This is not the page you are looking for"
    });
  }

};

// 404 not found - must be at the bottom
exports.not_found = (req, res) => {
  var movies = movies_json.movies;
  res.render('not_found', {
    movies: movies,
    title: "This is not the page you are looking for"
  });
};
