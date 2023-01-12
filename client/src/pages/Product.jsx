import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartReducer";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin: 30px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  width: 50%;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.h3``;
const FilterColor = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
const Select = styled.select`
  margin-left: 10px;
  border: 1px solid lightgrey;
  padding: 5px 10px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;
const AmountContainer = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
`;
const Amount = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin: 0 5px;
  border: 1px solid teal;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background-color: white;
  border: 2px solid teal;
  padding: 15px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleAmount = (type) => {
    if (type === "inc") {
      setAmount(amount + 1);
    } else {
      amount > 1 && setAmount(amount - 1);
    }
  };

  const handleClick = (e) => {
    dispatch(addProduct({...product,size,color,amount}))
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt="" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => 
          <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              )}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Select onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => {
                  return <Option key={s}>{s}</Option>;
                })}
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleAmount("dec")} />
              <Amount>{amount}</Amount>
              <Add onClick={() => handleAmount("inc")} />
            </AmountContainer>
            <Button onClick={()=>handleClick()}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
