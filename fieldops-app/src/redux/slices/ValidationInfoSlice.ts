import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isModalOpen : true,
    showPassConstraints: false
}

export const ValidationInfoSlice = createSlice({
    name: "ValidationInfoSlice",
    initialState,
    reducers: {
        closeModal: (state) => {
            return {
                ...state, isModalOpen : false
            }
        },
        showPasswordConstraints: (state) => {
            return {
                ...state, showPassConstraints: true
            }
        },

    }
})


export const ValidationInfoService = {
    actions: ValidationInfoSlice.actions
}

const ValidationInfoReducer = ValidationInfoSlice.reducer
export default ValidationInfoReducer;