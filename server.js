import express from "express";
import connection from "./dbconnection.js";
import cors from 'cors'
import router from "./routes/route.js";
import dotenv from 'dotenv';
//import defaultData from "./default.js";
const app = express();

dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
app.use("/",router);


const URL =process.env.MONGODB_URI || "mongodb+srv://rishi:rishi12345@cluster0.fhtn3ag.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;



connection(URL);
app.listen(PORT, () => {
  console.log("Listening at port  5000");
});
//defaultData();
