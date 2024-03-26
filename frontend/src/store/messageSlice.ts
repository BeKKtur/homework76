import { Message } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import {fetchMessage, sendMessage} from "./messageThunk";

interface MessageState {
    message: Message[];
    fetchLoading: boolean;
    sendLoading: boolean;
}

const initialState:MessageState = {
    message: [],
    fetchLoading: false,
    sendLoading: false
}

export const messageSlice = createSlice({
    name:'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendMessage.pending, (state) => {
            state.sendLoading = true;
        }).addCase(sendMessage.fulfilled, (state) => {
            state.sendLoading = false;
        }).addCase(sendMessage.rejected, (state) => {
            state.sendLoading = false;
        });

        builder.addCase(fetchMessage.pending, (state) => {
            state.fetchLoading = true;
        }).addCase(fetchMessage.fulfilled, (state,{payload: message}) => {
            state.fetchLoading = false;
            state.message = message;
        }).addCase(fetchMessage.rejected, (state) => {
            state.fetchLoading = false;
        })
    }
});

export const messageReducers = messageSlice.reducer;
