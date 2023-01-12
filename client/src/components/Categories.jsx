import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from "../components/CategoryItem"
const Container = styled.div`
display: flex;
margin: 20px;
`
const Categories = () => {
  return (
    <Container>
        {categories.map((item)=>{
            return(
                <CategoryItem item={item}/>
            )
        })}
    </Container>
  )
}

export default Categories