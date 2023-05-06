import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export const NavigationStyled = styled.nav`
  background-color: ${({ theme }) => theme.color.teal};
  padding: 4px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
display: grid;
grid-template-columns: 1fr 1fr;
`;

export const NavigationLink = styled(NavLink)`
  color: ${({theme}) => theme.color.white};
  border: none;
  text-decoration: none;
  font-size: 17px;

  &:visited {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
`;