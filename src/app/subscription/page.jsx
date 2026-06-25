import SubscriptionCard from "@/components/SubscriptionCard";
import { subscriptionPlans } from "@/lib/data/subscriptionPlans";

const SubscriptionPage = () => {
    return (
        <section className="py-20">

            <div className="w-10/12 mx-auto">

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[0.25em] text-sm text-zinc-400 mb-4">
                        Membership
                    </p>

                    <h1 className="text-5xl font-black mb-4">
                        Choose Your Collector Plan
                    </h1>

                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Unlock exclusive access and expand your collection with flexible subscription tiers.
                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {subscriptionPlans.map((plan) => (
                        <SubscriptionCard
                            key={plan.id}
                            plan={plan}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default SubscriptionPage;