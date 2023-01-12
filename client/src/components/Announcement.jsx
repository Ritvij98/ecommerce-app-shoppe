import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height:30px;
background-color: teal;
display:flex;
align-items:center;
justify-content: center;
color:white;
font-size: 14px;
font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>Super Deal! Free shipping on all orders above $50.</Container>
  )
}

export default Announcement