import express from "express";

const messagesRouter = express.Router();

messagesRouter.get('/', (req, res) => {
    return res.send('message');
});

messagesRouter.post('/', (req, res) => {
    return  res.send('post message')
});


