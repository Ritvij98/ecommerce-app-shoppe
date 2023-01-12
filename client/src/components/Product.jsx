import React from "react";
import styled from "styled-components";
import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";
import {Link } from "react-router-dom"
const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  background-color: #f5fbfd;
  position: relative;
  margin: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  z-index: 2;
  height: 75%;
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: white;
  height: 200px;
  width: 200px;
  position: absolute;
`;

const Button = styled.button`
  border-radius: 50%;
  background-color: white;
  border: none;
  padding: 10px;
  margin: 10px;
  cursor: pointer;

  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background-color: #e9f5f5;
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt="not available" />
      <Info>
        <Button>
          <ShoppingCart />
        </Button>
        <Link to={`/product/${item._id}`}>
          <Button>
            <Search />
          </Button>
        </Link>
        <Button>
          <FavoriteBorder />
        </Button>
      </Info>
    </Container>
  );
};

export default Product;
