import Stripe from 'stripe';
import Booking from '../models/booking.js';

const stripeWebhooks = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata.bookingId;

    await Booking.findByIdAndUpdate(bookingId, { 
      isPaid: true, 
      paymentMethod: 'Stripe' 
    });
  }

  res.json({ received: true });
};

export default stripeWebhooks;