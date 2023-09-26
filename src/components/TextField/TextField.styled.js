import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: grid;
  gap: 8px;
  position: relative;
`;

export const Label = styled.label`
  text-align: left;

  span {
    color: #980038;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
`;

export const Input = styled.input`
  height: 36px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0 12px;
`;

export const ErrorMessage = styled.span`
  color: #980038;
  margin-right: auto;
`;
