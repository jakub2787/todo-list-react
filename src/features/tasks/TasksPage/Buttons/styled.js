import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    transition: filter 0.3s;
        
    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
    
    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;