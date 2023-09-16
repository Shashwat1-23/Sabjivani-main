import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";



const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// const Heading = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   margin-left: 550px;
//   color: #333;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #007bff;
//   }

// `;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 36px;
  color: #333;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: -10px;
    left: 0;
    background: linear-gradient(to right, #007bff, #00bcd4);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Productss = () => {
  return (
    
    <Container>
        <Navbar />
        <br></br>
        <Heading>Veggies</Heading>
        <ProductGrid>
      {popularProducts.map((item) => (
           <Link to={`/get_predicted_price/apple_price`}>
        <Product item={item} />
      </Link>
        // <Product item={item} key={item.id} />
      ))}
      </ProductGrid>
    </Container>
  );
};





export default Productss;