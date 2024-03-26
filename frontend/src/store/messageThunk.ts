import {createAsyncThunk} from "@reduxjs/toolkit";
import {Message} from "../types";
import axiosApi from "../axiosApi";

export const sendMessage = createAsyncThunk<void, Message>(
    'message/sendMessage',
    async (addMessage) => {
        await axiosApi.post('/message', addMessage);
    }
);

export const fetchMessage = createAsyncThunk<Message[]>(
    'message/fetchMessage',
    async () => {
        const response = await axiosApi.get<Message[]>('/message');
        return response.data
    }
)