import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { StyledButtons, Wrapper } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>
                    <StyledButtons
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </StyledButtons>
                    <StyledButtons
                        onClick={() => dispatch((setAllDone()))}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </StyledButtons>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;