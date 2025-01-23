

import Joi from "joi";

export const signUpValidationSchema=Joi.object({
    userName: Joi.string().min(3).max(10).required(),
    email: Joi.string().email({minDomainSegments:2,tlds:['com','net']}).required(),
    password: Joi.string().min(8).required(),
    confirmedPassword: Joi.string().valid(Joi.ref("password")).required()
    
}).options({allowUnknown: false})



export const signInValidationSchema=Joi.object({
    email: Joi.string().email({minDomainSegments:2,tlds:['com','net']}).required(),
    password: Joi.string().min(8).required()
}).options({allowUnknown: false})