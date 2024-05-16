import styled from "styled-components";

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  padding-left: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background: hsl(180, 100%, 25%);
  color: white;
  padding: 10px;
  margin-left: 20px;
  border: none;
  transition: 0.8s;

  &:hover {
    background: hsl(180, 100%, 35%);
    transform: scale(1.1);
  }

  &:active {
    background: hsl(180, 100%, 40%);
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
`;
