import { LOGIN, SIGNUP } from "./ActionTypes";

export const loginFunction = (value) => ({
    type: LOGIN,
    payload: value
})

export const signupFunction = (value) => ({
    type: SIGNUP,
    payload: value
})