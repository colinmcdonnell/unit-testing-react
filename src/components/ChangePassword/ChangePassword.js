import { useState } from 'react'
import Button from '../Button/Button'
import TextField from '../TextField/TextField'
import { FormContainer } from '../LoginForm/LoginForm.styled'

const isValidPasswordChars = (string) => /^[a-zA-Z0-9]+$/.test(string)

const ChangePasswordForm = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const isPasswordValid = Boolean(password) && isValidPasswordChars(password)
  const isConfirmPasswordValid = Boolean(confirmPassword) && isValidPasswordChars(confirmPassword)
  const isPasswordSame = password === confirmPassword
  const isFormValid = isPasswordValid && isConfirmPasswordValid && isPasswordSame

  return (
    <FormContainer>
      <TextField id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <TextField id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <Button disabled={!isFormValid}>Submit</Button>

      {!isPasswordValid && <div>password must only contain letters and/or numbers</div>}
      {!isConfirmPasswordValid && <div>confirm password must only contain letters and/or numbers</div>}
      {!isPasswordSame && <div>passwords do not match</div>}
    </FormContainer>
  )
}

export default ChangePasswordForm
