import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
display:flex;
align-items: center;
`;
const FilterText = styled.span`
font-size: 20px;
  font-weight: 600;

`;
const Select = styled.select`
margin-left: 20px;
border: 1px solid lightgrey;
padding: 10px;
`;
const Option = styled.option`margin:10px 10px`;

const ProductList = () => {

  const location = useLocation();
  const category = location.pathname.split("/")[2]

  const [filters,setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const changeFilter = (e) => {
    setFilters({...filters,[e.target.name]:e.target.value})
  }

   
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select name="color" onChange={changeFilter} value={filters.color}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={changeFilter} value={filters.size}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option >Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
