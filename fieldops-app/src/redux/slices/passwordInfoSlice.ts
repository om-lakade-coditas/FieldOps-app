import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isModalOpen : true
}

export const passwordInfoSlice = createSlice({
    name: "passwordInfoSlice",
    initialState,
    reducers: {
        closeModal: (state) => {
            state.isModalOpen = false
        }
    }
})


export const passwordInfoService = {
    actions: passwordInfoSlice.actions
}

const passwordInfoReducer = passwordInfoSlice.reducer
export default passwordInfoReducer;