import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
  margin: 10px 0;
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
  border-bottom: 1px solid  hsl(0, 1%, 82%);

  @media (max-width: 767px) {
    display: grid;
    grid-template-rows: auto 1fr;  
}
`;
