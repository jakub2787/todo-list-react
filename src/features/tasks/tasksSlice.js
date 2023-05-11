import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksInLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
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
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
    },
});

export const {
    addTasks,
    toggleHideDone,
    toggleTasksDone,
    removeTasks,
    fetchExampleTasks,
    setAllDone,
    setTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsLoading = (state) => selectTasksState(state).loading === true;

export const selectTaskByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
};

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;