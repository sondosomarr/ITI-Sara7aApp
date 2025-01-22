import userModel from "../../../DB/models/User.model.js";
import * as bcrypt from 'bcrypt'
import sendEmail from "../../nodemailer.js";
import cryptoJs from "crypto-js";


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
    cipherPhone= CryptoJS.AES.encrypt(phone,
        
    )
    
    const user = await userModel.create({userName,email,password:hashedPassword})
    // email integration
    sendEmail(email,'this message from nodemailer','confirm registration')
    const objUser = user.toObject()
    delete objUser.password

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
    delete objUser.password
    res.status(200).json({message: " welcome to sara7a App", objUser})
    
    } catch (error) {
        res.status(500).json({message: "server error", error:error.message})
    }

}

