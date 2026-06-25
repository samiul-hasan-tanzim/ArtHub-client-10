import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const SUBSCRIPTION_ID = {
    'pro_user': 'price_1TmBhJFK6HJWNpDQWTYq8DEs',
    'premium_user': 'price_1TmBw7FK6HJWNpDQ1XOPxAlp',
}
