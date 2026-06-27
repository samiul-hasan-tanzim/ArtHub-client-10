import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { postsubscriptions } from "@/lib/api/subscriptions";

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error("Please provide a valid session_id");
    }

    const {
        status,
        customer_details: { email: customerEmail },
        metadata,
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "payment_intent"]
    });


    console.log(metadata)

    if (status === "open") {
        return redirect("/");
    }

    if (status === "complete") {
        const subsInfo = {
            email: customerEmail,
            planId: metadata?.planId
        }
        const result = await postsubscriptions(subsInfo)
        // console.log(result)
        return (
            <section className="min-h-screen flex items-center justify-center px-4 py-20">

                <div className="max-w-2xl w-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-10 md:p-14 text-center shadow-xl">

                    {/* icon */}
                    <div className="flex justify-center mb-6">
                        <div className="p-4 rounded-full border border-zinc-200 dark:border-zinc-700">
                            <CheckCircle2 size={42} />
                        </div>
                    </div>

                    {/* heading */}
                    <p className="uppercase tracking-[0.25em] text-xs text-zinc-400 mb-3">
                        Payment Confirmed
                    </p>

                    <h1 className="text-4xl md:text-5xl font-black mb-5">
                        Purchase Successful 🎉
                    </h1>

                    {/* text */}
                    <p className="text-zinc-500 leading-8 mb-8">
                        Thank you for your purchase.
                        Your transaction has been completed successfully and a confirmation has been sent to
                        <span className="font-medium text-black dark:text-white">
                            {" "}{customerEmail}
                        </span>.
                    </p>

                    {/* extra message */}
                    <div className="border-y border-zinc-200 dark:border-zinc-800 py-5 mb-8">
                        <p className="text-sm text-zinc-500">
                            Your artwork has been reserved and added to your collection.
                        </p>
                    </div>

                    {/* actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <Link
                            href="/artworks"
                            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black uppercase text-xs tracking-[0.2em]"
                        >
                            Continue Exploring
                        </Link>
                    </div>

                </div>

            </section>
        );
    }
}