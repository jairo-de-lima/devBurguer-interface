import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51QLHXyGK01ODY5siKIxS19aWly1Vb1aJK1nhsz1h8ajLWsVokqOUWvzz7No9NBFTOEEaPlvn88Cjg8o2iR4AMcKb00uVnnzEoZ',
);

export default stripePromise;
