import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import Product from './Product'
import axios from "axios"
const Container = styled.div`
    display:flex;
    padding: 20px;
    flex-wrap: wrap;
`

const Products = ({category,filters,sort}) => {

const [filteredProducts, setFilteredProducts] = useState([])
const [products,setProducts] = useState([])

useEffect(()=>{
  const getProducts = async () => {
    try {
      const res = await axios.get(
        category
          ? `http://localhost:5000/api/products?category=${category}`
          : "http://localhost:5000/api/products"
      );
      setProducts(res.data);
    } catch (err) {}
  };
  getProducts();
 },[category]) 

 useEffect(()=>{
  console.log(category,",",filters,",",sort,":",products)
  category &&
   setFilteredProducts(products.filter((item) => 
      Object.entries(filters).every(([key,value]) => 
        item[key].includes(value)
      )
    ))
    console.log("filtered",filteredProducts)
 },[category,filters,products])
 
 useEffect(()=>{
  let sorted;
  if(sort==="newest"){
    sorted =  filteredProducts.sort((a,b)=>a.CreatedAt - b.CreatedAt)
  }else if(sort==="asc"){
    sorted =  filteredProducts.sort((a,b)=>a.price - b.price)
  }else{
    sorted =  filteredProducts.sort((a,b)=>b.price - a.price)
  }
  setFilteredProducts(sorted)
  console.log("sorted",filteredProducts)
 },[sort])

  return (
    <Container>
        {category? filteredProducts.map((item)=>{
            return(
                <Product item={item} />
            )
        }) : products.slice(0,8).map((item)=>{
          return(
              <Product item={item} />
          )
      })}
    </Container>
  )
}

export default Products