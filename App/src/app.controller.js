import connection from "./DB/connection.js";
import routes from "./modules/auth/auth.controller.js";
import userRoutes from "./modules/user/user.controller.js";
import messageRoutes from "./modules/message/message.controller.js";

const bootstrap = (app,express)=>{
app.use(express.json());
app.get('/' , (req, res) => res.status(200).json({message:" welcome to our saraha app"}))

connection()
app.use('/auth',routes)
app.use('/user',userRoutes)
app.use('/message',messageRoutes)



app.all("*", (req, res) =>{
    res.status(404).json({message: "page not found"})
})

}
export default bootstrap;