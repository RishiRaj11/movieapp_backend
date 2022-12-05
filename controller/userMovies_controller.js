import Movies from  '../model/allmovies_schema.js'


export const addNewMovie = async (request, response) => {
    try {
      const existMovie = await Movies.findOne({ title: request.body.title });
      if (existMovie) {
        return response
          .json({status:409, message: "This movie  already exist" });
      }
      const movie = request.body;
      const newMovie = new Movies(movie);
      await newMovie.save();
      response.status(200).json({ message: " Movie added  successfully " });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  };

  export const getUserAllMovies = async (request, response) => {
    const {creatorEmail,id}=request.params;
    try {
      const movies = await Movies.find({creatorEmail:creatorEmail});
      if (movies) {
        response.status(200).json(movies);
      } else {
        response.status(401).json({ message: "Movies not found for this user" });
      }
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  export const updateMovie = async (request, response) => {
    const {creatorEmail,_id}=request.params;
    let movie;
    try {
        movie = await Movies.findByIdAndUpdate(_id, {
            title,
            year,
            genres,
            ratings,
            poster,
            contentRating,
            duration,
            releaseDate,
            averageRating,
            originalTitle,
            storyline,
            actors,
            imdbRating,
            posterurl
        });
        await movie.save();
        response.status(200).json({message:"Movie Update"});
    } catch (error) {
      response.status(500).json({ message: error });
    }
  };

  export const deleteMovie = async (request, response) => {
    const {creatorEmail,id}=request.params;
    try {
      const movies = await Movies.findByIdAndDelete(id);
      response.status(200).json({message:"Successfull deleted"})
    } catch (error) { 
      response.status(500).json({ message: error });
    }
  };
  