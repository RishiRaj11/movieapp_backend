import User from "../model/user_schema.js";

export const userSignUp = async (request, response) => {
  try {
    const existUser = await User.findOne({ email: request.body.email });
    if (existUser) {
      return response
      .json({status:409, message: "User already exist" });;
    }else{
      const user = request.body;
      const newUser = new User(user);
      await newUser.save();
      return response.status(201).json({ message: " Signed Up successfully " });
    }
    
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const existUser = await User.find();
    
    if (existUser) {
      return response.status(200).json({ data: existUser });
    } else {
      return response.status(401).json(`Invalid login`);
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
