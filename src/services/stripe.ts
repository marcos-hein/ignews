import Stripe from 'stripe';
import { version } from '../../package.json';

const api = "sk_test_51JVQDoGzbOzYEl1wXYuiNQwzp1E8GtTeKt9FJeD9fiYg1ClUhU4LsGGgPpWqmF04Y5I7gLc9KKww1bpadCnFc49T00TFXNJrG6"
export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version
    },
  }
)