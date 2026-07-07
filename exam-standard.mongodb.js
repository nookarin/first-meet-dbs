use("sample_mflix");

db.movies.find(
    {type: "movie", year: {$gte: 2010}, "imdb.rating": {$gte: 8} } ,
    {_id: 0, title: 1, year: 1, genres: 1, "imdb.rating": 1},
    {sort: {"imdb.rating": -1, year: -1}, limit: 10}
)