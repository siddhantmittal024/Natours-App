/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51IkWd7SDFnEwkem8hfEq8HMAG62nlPQjNvN1PulIZ6rxI7uR5C7kJSfNYWiMJJBTnpVQbxNo2l9OVfkOqhgePhqA00teFJWLDX'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    //(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }
};
