import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
   
    display:flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
`;

const Wrapper = styled.div`
    width:25%;
    background-color: white;
    padding: 20px;
`;
const Title = styled.h1`
font-weight: 600;
font-size: 25px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
`;
const Input = styled.input`
    min-width:80%;
    flex: 1;
    margin: 20px 10px 0px 0;
    padding: 10px;
    border: 1px solid lightgray;
`;

const Button = styled.button`
margin-top: 20px;
    background-color: teal;
    border: none;
    padding: 15px 20px;
    color: white;
    font-weight: 400;
    cursor: pointer;
    width: 40%;
`;

const Link = styled.a`
    text-decoration: underline;
    font-size: 12px;
margin-top: 10px;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOG IN</Button> 
          
          <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        
       
      </Wrapper>
    </Container>
  )
}

export default Login