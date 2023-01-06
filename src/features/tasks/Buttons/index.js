import React from "react";
import { StyledButtons, Wrapper } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <Wrapper>
        {tasks.length > 0 && (
            <>
                <StyledButtons
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                </StyledButtons>
                <StyledButtons
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </StyledButtons>
            </>
        )}
    </Wrapper>
);

export default Buttons;