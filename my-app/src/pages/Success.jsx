// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";
// //import { userRequest } from "../requestMethods";

// const Success = () => {
//   const location = useLocation();
//   const data = location.state.stripeData;
//   const cart = location.state.cart;
//   const currentUser = useSelector((state) => state.user.currentUser);
//   const [orderId, setOrderId] = useState(null);

//   useEffect(() => {
//     const createOrder = async () => {
//       try {
//         const res = await userRequest.post("/orders", {
//           userId: currentUser._id,
//           products: cart.products.map((item) => ({
//             productId: item._id,
//             quantity: item._quantity,
//           })),
//           amount: cart.total,
//           address: data.billing_details.address,
//         });
//         setOrderId(res.data._id);
//       } catch {}
//     };
//     data && createOrder();
//   }, [cart, data, currentUser]);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {orderId
//         ? `Order has been created successfully. Your order number is ${orderId}`
//         : `Successfull. Your order is being prepared...`}
//       <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
//     </div>
//   );
// };

// export default Success;

import React from 'react';
import styled from 'styled-components';

const StyledThankYou = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;

  h1 {
    color: #333;
    font-size: 24px;
  }

  p {
    color: #555;
    font-size: 16px;
    margin: 10px 0;
  }
`;

const Success = () => {
  return (
    <div>
      <StyledThankYou>
      <h1>Thank You for Your Purchase!</h1>
      <p>Your payment was successful.</p>
      <p>Your order will be processed and shipped shortly.</p>
      <p>Thank you for choosing our store!</p>
      </StyledThankYou>
    </div>
  );
};

export default Success;