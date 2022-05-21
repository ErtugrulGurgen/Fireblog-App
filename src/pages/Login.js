import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { signInUser, signUpProvider } from "../helpers/Firebase";
import { FormContainer, Header, RegisterContainer, StyledButton, StyledForm, StyledInput } from "./RegisterStyles";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser(email, password, navigate);
  };

  const handleGoogleProvider = ()=>{
    signUpProvider(navigate);
  }
    return (
      <RegisterContainer>
      <FormContainer>
        <Header>
          <h1>Login</h1>
        </Header>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
        <StyledInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <StyledButton variant="primary" type="submit">Login</StyledButton>
        <StyledButton variant="primary" type="submit" onClick={handleGoogleProvider}>Continue with Google</StyledButton> 
      </StyledForm>
      </FormContainer>
    </RegisterContainer>
    );
  };

export default Login;
