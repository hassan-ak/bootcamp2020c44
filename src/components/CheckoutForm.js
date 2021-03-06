import {
  // CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
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
  const multipleElementPay = async () => {
    const response = await fetch("/.netlify/functions/checkout", {
      method: "post",
    });
    const data = await response.json();
    console.log("DAta = ", data);

    const result = await stripe.confirmCardPayment(data.client_secret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
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
          <h2>Stripe Multiple Elements</h2>
          <div className='cardElement'>
            <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
            <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
          </div>
          <div className='payButton'>
            <button onClick={multipleElementPay}>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};
