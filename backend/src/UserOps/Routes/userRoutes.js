import { Router } from 'express';
import { getUserById, createUser, deleteUser, getUser, updateUser, } from "../Controller/usersController.js";

const userRouter = Router();
userRouter.get('/users', getUser);
userRouter.post('/users', createUser);
userRouter.put('/users/:id', updateUser);
userRouter.get('/users/:id', getUserById);
userRouter.delete('/users/:id', deleteUser);
// todoRouter.patch('/users/:id', completeTodo);



export default userRouter;
