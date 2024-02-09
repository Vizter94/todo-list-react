import styled, { css } from "styled-components";

export const ListStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid #d9d9d9;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const DeleteStyled = styled.button`
  color: white;
  background-color: red;
  border: none;
  width: 30px;
  height: 30px;
  margin-left: auto;
  font-size: 25px;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DoneStyled = styled.button`
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  font-weight: bold;
  margin-right: 15px;
  background-color: green;

  &:hover {
    transform: scale(1.1);
  }

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const TextStyled = styled.p`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
