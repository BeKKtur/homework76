import { Message } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface MessageState {
    message: Message[];
    fetchLoading: boolean;
    addLoading: boolean;
}

const initialState:MessageState = {
    message: [],
    fetchLoading: false,
    addLoading: false
}

export const messageSlice = createSlice({
    name:'messages',
    initialState,
    reducers: {},
});

export const messageReducers = messageSlice.reducer;
export const selectMessages = (state:RootState) => state.messages.message