import{model, Schema} from "mongoose";



const photoSchema = new Schema({
    title:{
        type:String,
    },
    
    
    image:{
        type:String,
        required:[true,"this field is required"]
    } 
   
   
}, {timestamp:true})

const photoModel = model("Photo",photoSchema)

export default photoModel;