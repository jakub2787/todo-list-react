import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTasksDone, removeTasks, selectHideDone } from "../../tasksSlice";
import { LinkStyled } from "./styled";

const TasksList = () => {
    const tasks = useSelector(selectTasks);
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
