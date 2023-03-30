import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTasksDone, removeTasks } from "../tasksSlice";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
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
                        {task.content}
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
