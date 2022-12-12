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
    border-bottom: 1px solid hsl(0, 1%, 82%);
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
    color: white;

    ${({toggleDone}) => toggleDone && css`
        background-color: hsl(120, 61%, 34%);

        &:hover {
            background-color: hsl(120, 61%, 39%); 
        }
    `}
    ${({remove}) => remove && css`
        background-color: hsl(348, 83%, 47%);

        &:hover {
            background-color: hsl(348, 83%, 55%);
        }
    `}
`;