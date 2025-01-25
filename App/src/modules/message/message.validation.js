import Joi from "joi";

export const messageValidationSchema = Joi.object({
    receiverId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    message: Joi.string().min(5).required()
}).options({allowUnknown: false})
