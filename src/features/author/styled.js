import styled from "styled-components";

export const Paragraph = styled.p`
  padding: 15px;
  border: 3px solid;
  margin: 20px;
  padding: 19px;
  border: teal solid 8px;
  border-radius: 20px;
  box-shadow: 0px -1px 8px 0px rgba(0, 128, 128, 1);
`;

export const Image = styled.img`
  max-width: 250px;
  border-radius: 50%;
  box-shadow: 0px -1px 8px 0px rgba(0, 128, 128, 1);
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Tittle = styled.h2`
  margin: 0;
  padding: 10px;
  border-bottom: none;
  display: flex;
  justify-content: center;
`;
