import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 45%;

  @media (max-width: 767px) {
      display: grid;
      grid-template-rows: 1fr 1fr;
      margin-left: 0;
      justify-content: center;
      align-items: center; 
}
`;

export const StyledButtons = styled.button`
    border: none;
    padding: 15px;
    color: hsl(180, 100%, 25%);
    background-color: transparent;
    transition: 1s;

    &:hover {
        color: hsl(180, 100%, 35%);   
    }
    ${({disabled}) => disabled && css`
        color: #ccc;
    `}
`;