import{model, Schema} from "mongoose";

const roleType={
    admin:"admin",
    user:"user"
 
}

const userSchema = new Schema({
    userName:{
        type:String,
        required:[true,"this field is required"],
        minlength:2,
        maxlength:10
    },
    email:{
        type:String,
        required:[true,"this field is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"this field is required"],
    },
    phone: String,
    gender:{
        type:String,
        enum:["male","female"],
        default:"male",
    },
    DOB:Date,
    image: String,
    confirmEmail:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:Object.values(roleType),
        default: roleType.user
    }
   
}, {timestamp:true})

const userModel = model("User",userSchema)

export default userModel;