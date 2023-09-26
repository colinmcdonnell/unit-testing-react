import { useState } from "react";
import * as S from "./LoginForm.styled";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";

const submitForm = (success) => (success ? "success!" : "error message");

const LoginForm = ({ formSuccess = true }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);

  const isValid = Boolean(userName.length) && Boolean(password.length);

  return (
    <S.FormContainer>
      <TextField
        id="user name"
        label="User Name"
        value={userName}
        // isRequired - Do I need to test this?
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        value={password}
        maxLength={10}
        // isRequired - Do I need to test this?
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        disabled={!isValid}
        onClick={() => {
          setResponse(submitForm(formSuccess));
        }}
      >
        Submit
      </Button>
      {Boolean(response) && <span>{response}</span>}
    </S.FormContainer>
  );
};

export default LoginForm;
