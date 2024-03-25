import { configureStore } from '@reduxjs/toolkit';
import { messageReducers } from '../store/messageSlice';

export const store = configureStore({
    reducer: {
        messages: messageReducers
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;