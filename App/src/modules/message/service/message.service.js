import messageModel from "../../../DB/models/Message.model.js"


export const insertMessage= async(req, res) => {
   try {
    const {message,receiverId}=req.body
   if(!message && !receiverId){
    return res.status(400).json({message:"please provide a message and receiverId"})
   }
   const newMessage = await messageModel.insertMany({message,receiverId})
   res.status(201).json({message:"message created successfully", newMessage})

   } catch (error) {
    res.status(500).json({message: "server error", error: error.message})
    
   }
}

export const getAllMessages= async(req, res) => {
    try {
        const {receiverId}=req.params
        if(!receiverId){
            return res.status(400).json({message:"please provide a receiverId"})
        }
        const message = await messageModel.find({receiverId})
        res.status(200).json({message:"messages fetched successfully", message})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteMessage= async (req,res)=>{
    try {
        const {id}= req.params
        if(!id){
            return res.status(400).json({message:"please provide a id"})
        }
        const deleteMessage = await messageModel.findByIdAndDelete(id)
        res.status(200).json({message:"message deleted successfully", deleteMessage})
    } catch (error) {
        
    }

}