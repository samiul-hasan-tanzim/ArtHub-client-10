"use client";

import { createCheckoutSession } from "@/lib/payment/createCheckoutSession";

const CheckoutButton = ({ artName, price, buyerId, buyerEmail, artworkId, artistId, artistName }) => {

    const handleCheckout = async () => {

        try {
            const data = await createCheckoutSession({ artName, price, buyerId, buyerEmail, artworkId, artistId, artistName });

            // const data = await res.json();

            if (data?.url) {
                window.location.href = data.url;
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            onClick={handleCheckout}
            className="w-full py-4 bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-3"
        >
            Purchase Piece
        </button>
    );
};

export default CheckoutButton;