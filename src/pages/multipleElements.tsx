import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ"
);

export default function CardElement() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
