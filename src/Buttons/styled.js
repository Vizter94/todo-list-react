import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  background: transparent;
  color: rgb(0, 172, 172);
  font-weight: bold;
  font-size: small;
  margin: 0 0 0 20px;
  transition: color 0.5s;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: rgba(0, 128, 128, 0.555);
  }
  &:disabled {
    color: grey;
  }
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
