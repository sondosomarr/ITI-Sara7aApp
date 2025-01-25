
import{model, Schema, Types} from "mongoose";



const messageSchema = new Schema({
    message:{
        type:String,
        required:[true,"this field is required"],
    },
    receiverId:{
        type:Types.ObjectId,
       ref:"User"
    },
   
}, {timestamp:true})

const messageModel = model("Message",messageSchema)

export default messageModel;