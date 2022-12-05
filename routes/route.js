import { Router } from "express";
import { userLogin,userSignUp } from "../controller/user_controller.js";
import  {getAllMovies} from '../controller/movies_controller.js'
import { addNewMovie,getUserAllMovies,updateMovie ,deleteMovie} from './../controller/userMovies_controller.js';


const router=Router();


// login & signup
router.get("/login",userLogin);
router.post("/signup",userSignUp);

// For all movies for home page
router.get("/movies",getAllMovies);
//For Users
router.get("/user/movies/:creatorEmail",getUserAllMovies);
router.post("/user/addmovie",addNewMovie);
router.put("/user/updatemovie/:id",updateMovie);
router.delete("/user/deletemovie/:id",deleteMovie);




export default router;