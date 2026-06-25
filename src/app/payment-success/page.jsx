import Link from "next/link";

const PaymentSuccessPage = () => {
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

export default PaymentSuccessPage;