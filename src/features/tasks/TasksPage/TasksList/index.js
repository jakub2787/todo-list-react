import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTasksDone, removeTasks, selectHideDone, selectTaskByQuery } from "../../tasksSlice";
import { LinkStyled } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParamName from "../searchQueryParamName";

const TasksList = () => {
    const location = useLocation()
    const query = (new URLSearchParams(location.search).get(searchQueryParamName));

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    hidden={task.done && hideDone}
                    key={task.id}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTasksDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content done={task.done}>
                        <LinkStyled to={`/zadania/${task.id}`}>{task.content}</LinkStyled>
                    </Content>

                    <Button
                        removeTasks
                        onClick={() => dispatch(removeTasks(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TasksList;
