import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;
export const Input = styled.input`
    padding: 10px;
    border: 1px solid hsl(0, 1%, 82%);
`;
export const StyledButton = styled.button`
    background-color: hsl(187, 100%, 25%);
    padding: 10px;
    color: white;
    border: none;
    transition: 1s;

    &:hover {
        background-color: hsl(187, 100%, 30%);
        transform: scale(1.1);
    }
`;