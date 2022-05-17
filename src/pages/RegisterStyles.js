
import styled from "styled-components";

export const RegisterContainer = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 500px;
  min-width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  border: 2px solid #e1f1dd;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -50px;
`;

export const Header = styled.h1`
  color: darkgray;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 2rem;
`;

export const StyledInput = styled.input`
  height: 50px;
  font-size: 1rem;
  width: 250px;
  border-radius: 5px;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  height: 50px;
  border-radius: 0.5rem;
  font-family:Arial, Helvetica, sans-serif;
  background-color: rgb(86, 141, 255);
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
  width: 15rem;
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;