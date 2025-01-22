import { Router } from "express";
import * as authRoutes from "./service/auth.service.js";


const routes = Router();

routes.post('/signUP', authRoutes.register);
routes.post('/login',authRoutes.login)

export default routes;
