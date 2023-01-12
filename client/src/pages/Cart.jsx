import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { publicRequest, userRequest } from "../requestMethods";
import StripeCheckout from "react-stripe-checkout"
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;
const Title = styled.h1`
  font-size: 25px;
  text-align: center;
`;
const TopButton = styled.button`
  padding: 10px 10px;
  background-color: ${(props) => (props.color === "black" ? "black" : "white")};
  color: ${(props) => (props.color === "white" ? "black" : "white")};
  cursor: pointer;
  font-weight: 600;
`;
const TopTexts = styled.div`
  display: flex;
`;
const TopText = styled.p`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
`;
const Bottom = styled.div`
  display: flex;
`;
const ProductList = styled.div`
  flex: 3;
`;
const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const Image = styled.img`
  flex: 1;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const Details = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const ProductName = styled.p`
  font-size: 15px;
`;
const ProductId = styled.p`
  margin: 10px 0;
  font-size: 15px;
`;
const ProductColor = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  margin-bottom: 10px;
`;
const ProductSize = styled.p`
  font-size: 15px;
`;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15x;
`;

const Amount = styled.p`
  margin: 0 10px;
  font-weight: 600;
`;

const Price = styled.p`
  margin-top: 10px;
  font-size: 25px;
  font-weight: 600;
`;
const Summary = styled.div`
  flex: 1;
  border-radius: 10px;
  border: 1px solid lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 50vh;
`;
const SummaryTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const SummaryItem = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.type === "total" ? 25 : 15)}px;
  font-weight: ${(props) => (props.type === "total" ? 600 : 500)};
`;

const SummaryItemText = styled.p``;
const SummaryItemPrice = styled.p``;
const CheckoutButton = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  padding: 10px;
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState("");
  const history = useHistory();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await publicRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log(res.data)
        history.push("/success", { data: res.data });
      } catch(err) { console.log(err)}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton color="white">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton color="black">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <ProductList>
            {cart.product.map((product) => (
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <Amount>{product.amount}</Amount>
                    <Remove />
                  </ProductAmountContainer>

                  <Price>{product.amount * product.price}</Price>
                </PriceDetails>
              </ProductDetail>
            ))}
          </ProductList>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Shoppe" // the pop-in header title
              description={`Your Total is ${cart.total}`} // the pop-in header subtitle
              image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
              billingAddress
              shippingAddress
              amount={cart.total*100} // cents
              token={onToken}
              stripeKey="pk_test_51LRb1ISJibQTVjUithotR2LqcfU13Qv9ZXLdy2TIVBPab05kFKWPUVjVS2fJXYaMK1dsgSTLcUKDnFXGxatQEDIJ00P4G295yh"
            >
              <CheckoutButton>CHECKOUT NOW</CheckoutButton>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
