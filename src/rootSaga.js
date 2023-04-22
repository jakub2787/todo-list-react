import { all } from "react-redux/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
};