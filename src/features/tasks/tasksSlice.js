import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTasks: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        removeTasks: ({ tasks }, index) => {
            tasks.splice(index, 1)
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toggleTasksDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload)
            state.tasks[index].done = !state.tasks[index].done;
        },
    },
});

export const { addTasks, toggleHideDone, toggleTasksDone, removeTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;