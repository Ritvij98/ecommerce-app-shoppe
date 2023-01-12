import React from "react";
import styled from "styled-components";
import { Send } from "@mui/icons-material";
const Container = styled.div`
  background-color: #fcf5f5;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: 40px;
  border: 1px solid lightgray;

`;
const Input = styled.input`
  flex: 8;
  border:none;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  border: none;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
