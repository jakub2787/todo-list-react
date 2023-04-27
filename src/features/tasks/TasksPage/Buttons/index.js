import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectIsEveryTasksDone, selectHideDone, selectAreTasksEmpty } from "../../tasksSlice";
import { StyledButtons, Wrapper } from "./styled";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            {!areTasksEmpty && (
                <>
                    <StyledButtons
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </StyledButtons>
                    <StyledButtons
                        onClick={() => dispatch((setAllDone()))}
                        disabled={isEveryTasksDone}
                    >
                        Ukończ wszystkie
                    </StyledButtons>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;