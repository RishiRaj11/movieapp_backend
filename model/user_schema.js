import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
  },
  userType: {
    type: String,
    require: true,
    trim: true,
  },
});

const user = mongoose.model("User", userSchema);

export default user;
