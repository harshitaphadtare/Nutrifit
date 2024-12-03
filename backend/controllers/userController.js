import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user function
const loginUser = async (req, res) => {
  const {email,password} = req.body;
  try {
    const user = await userModel.findOne({email});

    if(!user){
        return res.json({success:false,message:"User doesn't exit!"});
    }
    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.json({success:false,message:"Invalid credentials!"});
    }

    const token = createToken(user._id);
    res.json({success:true,token});

  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"});
  }
};


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' }); 
};

// Register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists!" });
    }

    // Validate email format and password strength
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email!" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password!" });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); // Add `await` here

    // Create new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Save user to database
    const user = await newUser.save();

    // Generate a token
    const token = createToken(user._id);

    // Respond with success and token
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };