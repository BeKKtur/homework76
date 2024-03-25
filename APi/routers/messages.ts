import express from "express";
import fileDb from "../fileDb";
import {MessageWithoutId} from "../types";

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
    const message = await fileDb.getItem()
    return res.send(message);
});

messagesRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const message = await fileDb.getItemById(id);
    if(!message) {
        return res.status(404).json({error:'Not found'});
    }

    return res.send(message);
})

messagesRouter.post('/', async  (req, res) => {
    const messageData:MessageWithoutId = {
        message: req.body.message,
        author: req.body.author
    }
    const message = await fileDb.addItem(messageData);
    return  res.send(message);
});

export default messagesRouter;


