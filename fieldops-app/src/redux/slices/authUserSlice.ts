import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user_role: "",
    access_token: JSON.parse(localStorage.getItem("accessToken") as string) 
}

export const authUserSlice = createSlice({
    name:"authUser",
    initialState,
    reducers:{
        setRole: (state, { payload }) => {
            return {
                ...state, user_role : payload.payload.role
            }
        },
        setToken: (state, { payload }) => {
            return {
                ...state, access_token: payload.payload.token
            }
        }
    }
});


export const authUser = {
    actions: authUserSlice.actions
}

const authUserReducer = authUserSlice.reducer;
export default authUserReducer;