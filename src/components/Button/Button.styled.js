import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  padding: 8px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus:active {
    outline: none;
  }

  &:hover {
    background-color: #d7d7d8;
  }

  &:hover::after {
    border-radius: inherit;
  }

  &:active:hover::after {
    border-radius: 16px;
  }
`;
