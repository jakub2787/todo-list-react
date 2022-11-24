import "./style.css";

const Tasks = ({ id, tasks, hideDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={id}
                className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
            >
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`${task.done ? "tasks__item--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove">🗑️
                </button>
            </li>
        ))}
    </ul>
);



export default Tasks;
