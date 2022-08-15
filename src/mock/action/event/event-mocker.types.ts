export type EventPayload = {
    [key: string]: any;
};

export type Event = {
    payload: EventPayload;
    filename?: string; 
}

export const DEFAULT_PAYLOAD: EventPayload = {};

export interface EventInterface {
    getPayload(): EventPayload
}
