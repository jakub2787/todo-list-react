import "./style.css";
import { useRef, useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }
    return (
        <form onSubmit={onFormSubmit} className="form">
            <input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                className="form__input"
                placeholder="Co jest do zrobienia?"
            />
            <button onClick={focusInput} className="form__button">Dodaj zadanie</button>
        </form>
    );
}
export default Form;