import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const todoStore = configureStore({
    reducer: {
        task : todoReducer,
    }
})

export default todoStore;