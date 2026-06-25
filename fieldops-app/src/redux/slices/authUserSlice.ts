import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user_role: "" 
}

export const authUserSlice = createSlice({
    name:"authUser",
    initialState,
    reducers:{
        setRoleAsTechnician: (state) => {
            state.user_role = "TECHNICIAN"
        },
        setRoleAsDispatcher: (state) => {
            state.user_role = "DISPATCHER"
        },
        setRoleAsCustomer: (state) => {
            state.user_role = "CUSTOMER"
        },
    }
});


export const authUser = {
    actions: authUserSlice.actions
}

const authUserReducer = authUserSlice.reducer;
export default authUserReducer;