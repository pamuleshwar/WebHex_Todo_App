import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoTask : [],
        completeTask: [],
    },
    reducers: {
        addTask: (state,action) => {
            state.todoTask.push(action.payload);
        },
        updateTodo : (state,action) => {
            state.todoTask = action.payload;
        },
        addCompleteTask: (state, action) => {
            state.completeTask.push(action.payload);
        },
        updateCompleteTask: (state, action) => {
            state.completeTask = action.payload;
        }
    }
})

export const {addTask, updateTodo, addCompleteTask, updateCompleteTask} = todoSlice.actions;

export default todoSlice.reducer;
