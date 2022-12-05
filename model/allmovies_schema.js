import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema([
  {
    title: {
      type: String,
      require: true,
      trim: true,
      unique:true,
    },
    year:{
        type: String,
        require: true,
        trim: true,
      } ,
    genres: [
      {
        type: String,
        require: true,
        trim: true,
      },
      {
        type: String,
        require: true,
        trim: true,
      },
    ],
    ratings: [
      
    ],
    poster: {
        type: String,
        
        trim: true,
      },
      contentRating:String,
      duration:{
        type: String,
        require: true,
        trim: true,
      },
      releaseDate:String,
      averageRating:Number,
      originalTitle:{
        type: String,
        trim: true,
      },
      storyline:{
        type: String,
        require: true,
        trim: true,
      },
      actors:[
        
      ],
      imdbRating:Number,
      posterurl:{
        type: String,
        trim: true,
      },
      creatorEmail: {
        type: String,        
        trim: true,
        lowercase: true,
      }
  },
]);

const movies = mongoose.model("movies", moviesSchema);
export default movies;
