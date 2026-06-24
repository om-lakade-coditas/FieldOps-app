import { createSlice } from "@reduxjs/toolkit";

interface loginState {
    showLogin : boolean;
}

const initialState : loginState = {
    showLogin : true
}

const loginRegisterSlice = createSlice({
    name: "loginRegisterSlice",
    initialState,
    reducers:{
        setLoggedInTrue : (state) => {
            state.showLogin = true
        },
        setLoggedInFalse : (state) => {
            state.showLogin = false
        }
    }
})


export const loginRegister = {
    actions: loginRegisterSlice.actions
}

const loginRegisterReducer = loginRegisterSlice.reducer
export default loginRegisterReducer;