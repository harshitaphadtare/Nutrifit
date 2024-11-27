import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrpyt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req,res) =>{

}

//register user
const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try {
        //checking if user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists!"});
        }
        //validating email fromat and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email!"});
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter strong password!"});
        }

        //hashing user password
        const salt = await bcrpyt.genSalt(10);
        const hashedPassword = bcrpyt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        });

        const user = await newUser.save();
        

    } catch (error) {
        
    }
}

export {loginUser,registerUser};