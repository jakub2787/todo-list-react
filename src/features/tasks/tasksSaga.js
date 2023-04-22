import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./ExampleTasks/getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksInLocalStorage";

function* fetchExampleTasksHandler() {
    try {
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