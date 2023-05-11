import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    border: none;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(120%);
    }
`;