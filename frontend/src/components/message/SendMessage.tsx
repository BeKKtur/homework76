import {Button, Container, Grid} from "@mui/material";
import {useAppDispatch} from "../../app/hooks";
import {useState} from "react";
import {MessageWithoutId} from "../../types";
import * as React from "react";
import {sendMessage} from "../../store/messageThunk";

const SendMessage = () => {
    const [messages, setMessages] = useState<MessageWithoutId>({
        message: '',
        author: '',
    });
    const dispatch = useAppDispatch();

    const onSubmitMessage = (e:React.FormEvent) => {
        e.preventDefault();
        const message:MessageWithoutId = {
            message: messages.message,
            author: messages.author
        }
        dispatch(sendMessage(message));
    }

    const onChangeMessage = (e:React.ChangeEvent <HTMLInputElement>) => {
        e.preventDefault();
        setMessages(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }





    return (
        <Container maxWidth='md'>
            <form onSubmit={onSubmitMessage}>
                <Grid display='flex' alignItems='start' flexDirection='column'>
                    <label>Author</label>
                    <input
                        name='author'
                        id='author'
                        type="text"
                        style={{width: 400,padding: 10, marginBottom: 10}}
                        value={messages.author}
                        onChange={onChangeMessage}
                        required
                    />
                </Grid>
                <Grid display='flex' alignItems='start' flexDirection='column'>
                    <label>Message</label>
                    <input
                        name='message'
                        id='message'
                        type="text"
                        style={{width: 400,padding: 10, marginBottom: 10}}
                        value={messages.message}
                        onChange={onChangeMessage}
                        required
                    />
                </Grid>
                <Button variant="outlined" type='submit'>Outlined</Button>
            </form>
        </Container>
    );
};

export default SendMessage;