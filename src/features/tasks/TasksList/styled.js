import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    align-items: center;

    ${({ hidden }) => hidden && css`
      display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
`}
`;

export const Button = styled.button`
    border: none;
    padding: 0px;
    height: 30px;
    width: 30px;
    transition: 1s;
    color: ${({ theme }) => theme.color.white};

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.forestGreen};

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
    `}

    ${({ removeTasks }) => removeTasks && css`
        background-color: ${({ theme }) => theme.color.crimson};

        &:hover {
            filter: brightness(110%);
        }

        &:active {
            filter: brightness(120%);
        }
    `}
`;