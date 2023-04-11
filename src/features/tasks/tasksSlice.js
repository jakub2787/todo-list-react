import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTasks: ({ tasks }, { payload: task }) => {
            tasks.push(task);
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
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => {
                task.done = true;
            })
        },
    },
});

export const {
    addTasks,
    toggleHideDone,
    toggleTasksDone,
    removeTasks,
    setAllDone,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectHideDone = state => selectTasksState(state).hideDone;

export default tasksSlice.reducer;