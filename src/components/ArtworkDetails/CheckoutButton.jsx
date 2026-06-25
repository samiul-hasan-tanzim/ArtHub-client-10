"use client";

const CheckoutButton = ({ artName, price, buyerId, buyerEmail, artworkId, artistId, artistName }) => {

    const handleCheckout = async () => {

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/create-checkout-session`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        artName,
                        price,

                        buyerId,
                        buyerEmail,

                        artworkId,

                        artistId,
                        artistName
                    })
                }
            );

            const data = await res.json();

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