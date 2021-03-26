const stripe = require("stripe")(process.env.STRIPE_KEY);
const handler = async (event) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2299,
    currency: "usd",
    // metadata: { integration_check: "accept_a_payment" },
    metadata: { customerId: "34343", orderId: "343434" },
  });
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
