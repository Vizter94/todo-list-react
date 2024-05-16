import {
  SectionStyled,
  HeaderStyled,
  TitleStyled,
  ContainerStyled,
} from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
  <SectionStyled>
    <HeaderStyled>
      <TitleStyled>{title}</TitleStyled>
      {extraHeaderContent}
    </HeaderStyled>
    <ContainerStyled>{body}</ContainerStyled>
  </SectionStyled>
);

export default Section;
