import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React from "react";
import "./checkoutForm.css";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      backgroundColor: "white",
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cardElementPay = async () => {
    const response = await fetch("/.netlify/functions/checkout", {
      method: "post",
    });
    const data = await response.json();
    console.log("DAta = ", data);

    const result = await stripe.confirmCardPayment(data.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Zubair Hafeez",
          email: "abc@gmail.com",
        },
      },
    });

    console.log("Result = ", result);
  };
  return (
    <div>
      <h1>CheckOutForm</h1>
      <hr />
      <div className='StripeElementDiv'>
        <div>
          <h2>Stripe Card Element</h2>
        </div>
        <div className='cardElement'>
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
        <div className='payButton'>
          <button onClick={cardElementPay}>Pay</button>
        </div>
      </div>
      <hr />
    </div>
  );
};
