import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
   
    display:flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
`;

const Wrapper = styled.div`
    width:40%;
    background-color: white;
    padding: 20px;
`;
const Title = styled.h1`
font-weight: 600;
font-size: 25px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    min-width:40%;
    flex: 1;
    margin: 20px 10px 0 0;
    padding: 10px;
    border: 1px solid lightgray;
`;
const Agreement = styled.p`
 margin: 20px 0;
 font-size: 1px;
 
`;
const Button = styled.button`
    background-color: teal;
    border: none;
    padding: 15px 20px;
    color: white;
    font-weight: 400;
    cursor: pointer;
    width: 20%;
`;


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email ID" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>  By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></Agreement>
          <Button>SUBMIT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
