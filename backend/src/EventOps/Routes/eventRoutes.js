import { Router } from 'express';
import { getEvent, deleteEvent, getEventById, updateEvent, createEvent } from "../Controller/eventController.js";

const eventRouter = Router();
eventRouter.get('/event', getEvent);
eventRouter.post('/event', createEvent);
eventRouter.put('/event/:id', updateEvent);
eventRouter.get('/event/:id', getEventById);
eventRouter.delete('/event/:id', deleteEvent);

export default eventRouter;
