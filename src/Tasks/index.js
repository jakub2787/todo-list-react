import "./style.css";

const Tasks = ({id, tasks, hideDoneTasks}) => (
    <ul className="tasks">    
    {tasks.map(task => (
            <li
            key={id} 
            className={`tasks__item ${task.done && hideDoneTasks ? "tasks__item--hidden" : "" }`}
            >
                         <button className=" 
            tasks__button--done">{task.done ? "✓" : ""}</button>
                <span className={`${task.done ? "tasks__item--done" : ""}`}>
                   {task.content}
                </span>
                <button className=" tasks__button--remove">🗑️
                </button>   
            </li>
        ))}
    </ul>
);
export default Tasks;
