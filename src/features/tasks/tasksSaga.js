import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./TasksPage/ExampleTasks/getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksInLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000)
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}
function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks)
    yield call(saveTasksInLocalStorage, tasks)
}
export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}