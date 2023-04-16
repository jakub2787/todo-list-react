import { StyledButtons } from "../Buttons/styled";
import { Wrapper } from "../Buttons/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";

const ExampleTasks = () => {

    const dispatch = useDispatch();
    return (
        <Wrapper onClick={() => dispatch(fetchExampleTasks())}>
            <StyledButtons>Pobierz przykładowe zadania</StyledButtons>
        </Wrapper>

    )
};

export default ExampleTasks;