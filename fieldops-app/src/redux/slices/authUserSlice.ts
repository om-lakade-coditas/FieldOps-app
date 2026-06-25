import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user_role: "",
    access_token: ""
}

export const authUserSlice = createSlice({
    name:"authUser",
    initialState,
    reducers:{
        setRole: (state, data) => {
            return {
                ...state, user_role : data.payload.role
            }
        },
        setToken: (state, data) => {
            return {
                ...state, access_token: data.payload.token
            }
        }
    }
});


export const authUser = {
    actions: authUserSlice.actions
}

const authUserReducer = authUserSlice.reducer;
export default authUserReducer;