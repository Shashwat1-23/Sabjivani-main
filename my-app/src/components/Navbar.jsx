import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color:green;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const LogoImage = styled.img`
  width: 90px; /* Adjust the width of the image as needed */
  margin-right: 10px; /* Add margin to separate the logo and image */
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        {/* <LogoImage src={"https://dynamic.brandcrowd.com/preview/logodraft/711f7d9a-66e9-4d45-8592-7479e774d0c0/image/large.png"} alt="Logo" />  */}
        <Center>
          <Logo>SABJIVANI.</Logo>
        </Center>
        <Right>
        <MenuItem>
            <Link to="/home">HOME</Link>
          </MenuItem>
        <MenuItem>
            <Link to="/about">ABOUT</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">CONTACT</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Login">LOGIN</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/products">PREDICT</Link>
          </MenuItem>
        <MenuItem></MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge overlap="rectangular" badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
