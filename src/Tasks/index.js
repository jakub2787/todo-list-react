import "./style.css";

const Tasks = ({ id, tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={id}
                className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
            >
                <button
                 className="tasks__button tasks__button--done"
                 onClick={()=> toggleTaskDone(task.id)}
                 >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "tasks__item--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="tasks__button tasks__button--remove">🗑️
                </button>
            </li>
        ))}
    </ul>
);



export default Tasks;
