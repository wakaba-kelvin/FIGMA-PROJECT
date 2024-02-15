import { Router } from 'express';
import { getComment, deleteComment, getCommentById, updateComment, createComment} from "../Controller/commentController.js";

const commentRouter = Router();
commentRouter.get('/comment', getComment);
commentRouter.post('/comment', createComment);
commentRouter.put('/comment/:id', updateComment);
commentRouter.get('/comment/:id', getCommentById);
commentRouter.delete('/comment/:id', deleteComment);




export default commentRouter;
