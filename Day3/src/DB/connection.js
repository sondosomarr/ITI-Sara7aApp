import mongoose from 'mongoose';

const connection =()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('DB connected'))
    .catch((err)=>console.error('DB connection error',err));
}

export default connection;