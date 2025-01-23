import { Router } from "express";
import * as authRoutes from "./service/auth.service.js";
import { validation } from "../../utilits/validation.js";
import { signInValidationSchema, signUpValidationSchema } from "./auth.validation.js";


const routes = Router();

routes.post('/signUP',validation(signUpValidationSchema), authRoutes.register);
routes.post('/login',validation(signInValidationSchema), authRoutes.login)
routes.get('/verify/:token',authRoutes.verify)

export default routes;
