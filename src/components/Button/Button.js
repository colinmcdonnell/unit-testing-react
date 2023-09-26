import * as S from './Button.styled'

const Button = ({ onClick, onSubmit, disabled, children }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} onSubmit={onSubmit}>
      {children}
    </S.Button>
  )
}

export default Button
