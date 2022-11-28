import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }
    return (
        <form onSubmit={onFormSubmit} className="form">
            <input

                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                className="form__input"
                placeholder="Co jest do zrobienia?"
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
}
export default Form;