import * as S from "./TextField.styled";

const TextField = ({
  label,
  id,
  value,
  isRequired,
  maxLength,
  onChange,
  errorMessage,
}) => {
  return (
    <S.FieldWrapper>
      {Boolean(label) && (
        <S.Label htmlFor={id}>
          {label}
          {Boolean(isRequired) && <span>&#42;</span>}
        </S.Label>
      )}

      <S.InputWrapper>
        <S.Input
          id={id}
          value={value}
          maxLength={maxLength}
          onChange={(e) => onChange(e)}
        />
        {Boolean(errorMessage) && (
          <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        )}
      </S.InputWrapper>
    </S.FieldWrapper>
  );
};

export default TextField;
