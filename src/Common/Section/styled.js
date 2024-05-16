import styled from "styled-components";

export const SectionStyled = styled.section`
  display: grid;
  background-color: white;
  margin: 10px 0;
`;

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleStyled = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const ContainerStyled = styled.div`
  padding: 20px;
`;
