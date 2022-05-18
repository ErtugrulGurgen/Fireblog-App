import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../helpers/Firebase";
import { FormContainer, Header, RegisterContainer, StyledButton, StyledForm, StyledInput } from "./RegisterStyles";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
    navigate("/");
  };
  return (
    <RegisterContainer>
      <FormContainer>
        <Header style={{paddingTop:"2rem"}}>
          <h1>Register</h1>
        </Header>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)}/>
        <StyledInput type="text" placeholder="Last Name"onChange={(e)=> setLastName(e.target.value)}/>
        <StyledInput type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
        <StyledInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <StyledButton variant="primary" type="submit">Register</StyledButton>
      </StyledForm>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
