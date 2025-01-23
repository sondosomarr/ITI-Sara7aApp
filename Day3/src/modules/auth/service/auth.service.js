import userModel from "../../../DB/models/User.model.js";
import * as bcrypt from 'bcrypt'
import sendEmail from "../../../utilits/nodemailer.js";
import cryptoJs from "crypto-js";
import jwt from "jsonwebtoken"
// import { signUpValidationSchema } from "../auth.validation.js";





export const register = async  ( req, res)=>{
    try {
       
        const {userName,email,password,confirmedPassword}=req.body;
    if(password != confirmedPassword){
        return res.status(422).json({message: "Passwords do not match"})
    }

    if(await userModel.findOne({email})){
        return res.status(409).json({message: "email already exists"})
    }
    const hashedPassword =  bcrypt.hashSync(password, +process.env.SALT_ROUND)
    if (req.body.phone) {
        const cipherPhone = cryptoJs.AES.encrypt(req.body.phone, process.env.SECRET_KEY).toString();
      }
      
    
    const user = await userModel.create({userName,email,password:hashedPassword})
    // email integration
   
    const objUser = user.toObject()
    delete objUser.password
    // to confirm user's email
    const token = jwt.sign({email},process.env.CONFIRMEMAIL)
    const url = `${req.protocol}://${req.host}:3000${req.baseUrl}/verify/${token}`
    await sendEmail(objUser.email,url);

    res.status(200).json({message: " welcome to register", objUser})
    
    } catch (error) {
        res.status(500).json({message: "server error", error:error.message})
    }

};

export const login = async  ( req, res)=>{
    try {
        const {email,password}=req.body;
    
    const user=await userModel.findOne({email})
    if(!user){
        return res.status(404).json({message: "email not exists"})
    }
    
    const match = bcrypt.compareSync(password, user.password)
    if(!match){
        return res.status(401).json({message: "password not correct"})
    }
    const objUser = user.toObject()
    delete objUser.password;
    const token = jwt.sign({id:user._id,isLoggedIn:true},process.env.TOKEN_SECRET_KEY)
    res.status(200).json({message: " welcome to sara7a App", token})
    
    } catch (error) {
        res.status(500).json({message: "server error", error:error.message})
    }

}

export const verify= async (req,res)=>{
  try {
    
    const {token} = req.params;
    const decoded = jwt.verify(token, process.env.CONFIRMEMAIL)
    const user = await userModel.findOne({email:decoded.email})
    if(!user){
      return res.status(404).json({message: "Email not found"})
    }
    await userModel.findByIdAndUpdate(user._id,{confirmEmail:true},{new:true})
    res.status(200).json({message: "email confirmed successfully"})
  } catch (error) {
    res.status(500).json({message: "server error", error: error.message})
    
  }
}