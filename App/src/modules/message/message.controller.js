import { Router } from "express";
import * as messageRoutes from "./service/message.service.js";
import { validation } from "../../utilits/validation.js";
import { messageValidationSchema } from "./message.validation.js";

const Routes = Router();

Routes.post('/insertMessage', validation(messageValidationSchema), messageRoutes.insertMessage)
Routes.get('/getAllMessages/:receiverId', messageRoutes.getAllMessages)
Routes.delete('/deleteMessage/:id', messageRoutes.deleteMessage)

export default Routes