import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isSidebarOpen: true
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        closeSidebar: (state) => {
            state.isSidebarOpen = false
        },
        openSidebar: (state) => {
            state.isSidebarOpen = true
        }
    }
})


export const sidebar = {
    actions: sidebarSlice.actions
}

const sidebarSliceReducer = sidebarSlice.reducer
export default sidebarSliceReducer;