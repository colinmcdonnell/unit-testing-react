import * as S from "./Button.styled";

const Button = ({ onClick, disabled, children }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;
