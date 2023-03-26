import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  margin: 10px 0;
  box-shadow: 0 0 6px ${({ theme }) => theme.color.alto};
`;

export const SectionHeader = styled.h2`
  padding: 20px; 
  margin: 0;
`;

export const SectionBody = styled.div`
  padding: 15px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row; 
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-rows: auto 1fr;  
}
`;
