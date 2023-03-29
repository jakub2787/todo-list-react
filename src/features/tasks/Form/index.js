import { useRef, useState } from "react";
import { StyledForm, Input, StyledButton } from "./styled";
import { useDispatch } from "react-redux";
import { addTasks } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const focusInput = () => inputRef.current.focus();

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addTasks({
            content: (newTaskContent.trim()),
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        focusInput();
    };
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