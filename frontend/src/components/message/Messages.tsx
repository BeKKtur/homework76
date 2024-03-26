import {Container, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";
import {fetchMessage} from "../../store/messageThunk";
import dayjs from 'dayjs'


const Messages = () => {
    const messages = useAppSelector(state => state.messages.message);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMessage());
    }, [dispatch]);

    return (
        <Container maxWidth='md'>
            {messages.map(message => (
                <Card key={message.id} sx={{ minWidth: 275, mb: 2}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {dayjs(message.date).format('DD-MM-YYYY HH:mm:ss')}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {message.author}
                        </Typography>
                        <Typography variant="body2">
                            {message.message}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Messages;