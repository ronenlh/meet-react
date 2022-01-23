import { INCREMENT, DECREMENT, SET_COUNTER } from "./types";

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const setCounter = (steps: number) => ({
    type: SET_COUNTER,
    payload: steps
});