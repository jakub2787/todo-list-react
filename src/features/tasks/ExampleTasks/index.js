import { StyledButtons } from "../Buttons/styled";
import { Wrapper } from "../Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../tasksSlice";

const ExampleTasks = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    return (
        <Wrapper>
            <StyledButtons
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Ładowanie zadań" : "Pobierz przykładowe zadania"}
            </StyledButtons>

        </Wrapper>

    )
};

export default ExampleTasks;