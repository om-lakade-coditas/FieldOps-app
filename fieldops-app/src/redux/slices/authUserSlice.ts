import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user_role: "",
    access_token: ""
}

export const authUserSlice = createSlice({
    name:"authUser",
    initialState,
    reducers:{
        setRole: (state, { payload }) => {
            return {
                ...state, user_role : payload.role
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