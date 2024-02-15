import { Router } from 'express';
import { getGroupMember, deleteGroupMember, getGroupMemberById, updateGroupMember, createGroupMember } from "../Controller/groupMembersController.js";

const groupMemberRouter = Router();
groupMemberRouter.get('/groupmembers', getGroupMember);
groupMemberRouter.post('/groupmembers', createGroupMember);
groupMemberRouter.put('/groupmembers/:id', updateGroupMember);
groupMemberRouter.get('/groupmembers/:id', getGroupMemberById);
groupMemberRouter.delete('/groupmembers/:id', deleteGroupMember);

export default groupMemberRouter;
