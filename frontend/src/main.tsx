import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import {Provider} from "react-redux";
import {store} from "./app/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)
