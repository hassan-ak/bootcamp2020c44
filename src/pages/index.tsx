import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div>
      <h1>CheckOut Forms</h1>
      <p>Stripe CheckOut options using</p>
      <ul>
        <li>
          <Link to='cardElement'>Stripe Card Element</Link>
        </li>
        <li>
          <Link to='multipleElements'>Stripe Multiple Elements</Link>
        </li>
      </ul>
    </div>
  );
}
