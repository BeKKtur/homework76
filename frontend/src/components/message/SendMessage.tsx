import {Button, Container, Grid} from "@mui/material";

const SendMessage = () => {
    return (
        <Container maxWidth='md'>
            <form>
                <Grid display='flex' alignItems='start' flexDirection='column'>
                    <label>Author</label>
                    <input
                        name='author'
                        id='author'
                        type="text"
                        style={{width: 400,padding: 10, marginBottom: 10}}
                    />
                </Grid>
                <Grid display='flex' alignItems='start' flexDirection='column'>
                    <label>Message</label>
                    <input
                        name='message'
                        id='message'
                        type="text"
                        style={{width: 400,padding: 10, marginBottom: 10}}
                    />
                </Grid>
                <Button variant="outlined">Outlined</Button>
            </form>
        </Container>
    );
};

export default SendMessage;