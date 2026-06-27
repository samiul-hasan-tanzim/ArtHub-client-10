"use client";

import { createOrder } from "@/lib/api/orders/createOrder";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PaymentSuccessClient = () => {
    const searchParams = useSearchParams();

    const sessionId = searchParams.get("session_id");

    useEffect(() => {
        const getSession = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/checkout-session/${sessionId}`
            );

            const data = await res.json();

            await createOrder({
                stripeSessionId: data.id,
                buyerId: data.metadata.buyerId,
                buyerEmail: data.metadata.buyerEmail,
                artworkId: data.metadata.artworkId,
                artworkName: data.metadata.artworkName,
                artistId: data.metadata.artistId,
                artistName: data.metadata.artistName,
                price: Number(data.metadata.price),
                paymentStatus: data.payment_status,
                createdAt: new Date().toISOString()
            })
        };

        if (sessionId) {
            getSession();
        }
    }, [sessionId]);

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-lg">

                <h1 className="text-4xl font-bold mb-4">
                    Payment Successful 🎉
                </h1>

                <p className="text-gray-500 mb-8">
                    Thank you for purchasing this artwork.
                    Your payment has been completed successfully.
                </p>

                <Link
                    href="/artworks"
                    className="bg-black text-white px-6 py-3 inline-block"
                >
                    Back To Gallery
                </Link>

            </div>
        </section>
    );
};

export default PaymentSuccessClient;