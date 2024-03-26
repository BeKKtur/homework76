export interface Message {
    id: string;
    message: string;
    author: string;
    date: string;
}

export type MessageWithoutId = Omit<Message, 'id', 'date'>