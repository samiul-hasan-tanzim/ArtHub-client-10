const SubscriptionCard = ({ plan }) => {
    return (
        <div className="border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-between hover:scale-[1.02] transition-all">

            <div>
                <h2 className="text-2xl font-bold mb-2">
                    {plan.name}
                </h2>

                <p className="text-zinc-500 mb-6">
                    {plan.description}
                </p>

                <h3 className="text-4xl font-bold mb-6">
                    ${plan.price}
                </h3>

                <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                        <li key={index}>
                            • {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <form action="/api/checkout_sessions" method="POST">
                <input type="hidden" name="subscription_id" value={plan.id} />
                <section>
                    <button type="submit" role="link" className="w-full py-3 bg-black text-white dark:bg-white dark:text-black uppercase text-xs tracking-[0.2em]">
                        Choose Plan
                    </button>
                </section>
            </form>

        </div>
    );
};

export default SubscriptionCard;