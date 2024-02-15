import joi from 'joi';


export const userValidator = (user) => {
    const userValidatorSchema = joi.object({
        UserID: joi.number().integer().required(),
        Username: joi.string().required(),
        Email: joi.string().email().required(),
        Password: joi.string().required(),
        TagName: joi.string().max(50),
        Location: joi.string().max(100).required(),
    });
    return userValidatorSchema.validate(user);
}