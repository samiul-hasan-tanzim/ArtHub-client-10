export const subscriptionPlans = [
    {
        id: 'free_user',
        name: "Free",
        price: 0,
        maxPurchases: 3,
        description: "Perfect for casual collectors.",
        features: [
            "Buy up to 3 paintings",
            "Basic marketplace access",
            "Standard support"
        ]
    },

    {
        id: 'pro_user',
        name: "Pro",
        price: 9.99,
        maxPurchases: 9,
        description: "For regular art collectors.",
        features: [
            "Buy up to 9 paintings",
            "Priority artwork access",
            "Email support"
        ]
    },

    {
        id: 'premium_user',
        name: "Premium",
        price: 19.99,
        maxPurchases: "Unlimited",
        description: "For serious collectors.",
        features: [
            "Unlimited purchases",
            "Early access to new artwork",
            "Premium support"
        ]
    }
];