import jwt from "jsonwebtoken"
import userModel from "../../../DB/models/User.model.js";

export const updateUser=async (req,res)=>{
    try {
        const {token}= req.headers;
        console.log(token);
        
        const decoded=jwt.verify(token,process.env.TOKEN_SECRET_KEY);
        console.log(decoded);
        const updatedUser= await userModel.findByIdAndUpdate(decoded.id,{userName:req.body.userName},{ new:true})
        // we add {new:true} obj bec. findByIdAndUpdate returns the old documents
        res.status(200).json({message:"welcome" , updatedUser}) 
    } catch (error) {
        
    }
}