import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
const Container = styled.div`
    flex:1;
    height: 70vh;
    position: relative;
    margin:3px;
   
`

const Image = styled.img`
    height:100%;
    width: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
  height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 30px;
`
const Button = styled.button`
    padding: 10px;
    border:none;
    font-weight: 600;
    background-color: white;
    color:gray;
    cursor: pointer;
`
const CategoryItem = (props) => {
  return (
    <Container>
        <Link to={`/products/${props.item.cat}`}>
        <Image src={props.item.img} alt=""/>
        <Info>
            <Title>{props.item.title}</Title>
            <Button>SHOP</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem