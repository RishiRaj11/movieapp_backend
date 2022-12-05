import Movies from "../model/allmovies_schema.js";

export const getAllMovies = async (request, response) => {
  try {
    const movies = await Movies.find({});
    if (movies) {
      response.status(200).json(movies);
    } else {
      response.status(401).json({ message: "Movies not found" });
    }
  } catch (error) {
    response.status(500).json({ message: error });
  }
};


//For Users



