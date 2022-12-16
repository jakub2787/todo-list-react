import { useRef, useState } from "react";
import { StyledForm, Input, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const focusInput = () => inputRef.current.focus();


    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        focusInput();
    }
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                placeholder="Co jest do zrobienia?"
            />
            <StyledButton onClick={focusInput} >Dodaj zadanie</StyledButton>
        </StyledForm>
    );
}
export default Form;