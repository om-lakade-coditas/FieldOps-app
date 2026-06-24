import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/apiSlice";
import loginRegisterReducer from "../slices/loginRegisterSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        loginRegister : loginRegisterReducer
    },
    middleware: (getMiddleware) => 
        getMiddleware().concat(apiSlice.middleware),
    devTools: true
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>() ;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;