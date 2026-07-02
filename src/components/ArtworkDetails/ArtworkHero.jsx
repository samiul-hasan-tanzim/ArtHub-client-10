import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Share2 } from "lucide-react";
import { playfair } from "@/lib/fonts";
import CheckoutButton from "./CheckoutButton";

const ArtworkHero = async ({ artwork, user, orders, plans }) => {
    // console.log(orders)
    // console.log(user)

    return (
        <section className="relative py-14 md:py-20 overflow-hidden">

            {/* background accents */}

            <div className="absolute top-20 left-10 w-72 h-72 bg-zinc-200/40 dark:bg-zinc-800/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-100/30 dark:bg-amber-500/5 blur-3xl rounded-full"></div>


            <div className="relative z-10 w-[92%] xl:w-[82%] 2xl:w-[78%] mx-auto grid lg:grid-cols-[1.3fr_0.9fr] gap-14 xl:gap-20 items-start">

                {/* LEFT IMAGE */}

                <div className="relative">



                    <div className="
                relative 
                bg-zinc-50 
                dark:bg-zinc-900 
                p-3 
                md:p-5 
                rounded-3xl
                shadow-2xl
            ">

                        <div className="relative overflow-hidden rounded-2xl group">

                            <Image
                                src={artwork?.image}
                                alt={artwork?.artName}
                                width={800}
                                height={900}
                                className="
                            w-full 
                            h-[450px]
                            sm:h-[600px]
                            xl:h-[780px]
                            object-cover
                            transition-all
                            duration-1000
                            group-hover:scale-105
                        "
                            />

                            <span className="
                        absolute
                        top-5
                        right-5
                        bg-black/90
                        text-white
                        dark:bg-white
                        dark:text-black
                        px-4
                        py-2
                        text-[10px]
                        font-bold
                        tracking-[0.25em]
                        uppercase
                        rounded-full
                    ">
                                {artwork.status}
                            </span>

                        </div>

                    </div>

                </div>


                {/* RIGHT CONTENT */}

                <div className="flex flex-col gap-10 xl:sticky xl:top-28">

                    {/* header */}

                    <header>

                        <nav className="
                    mb-7
                    text-xs
                    uppercase
                    tracking-[0.22em]
                    text-zinc-400
                ">

                            <Link
                                href="/artworks"
                                className="hover:text-black dark:hover:text-white transition"
                            >
                                Gallery
                            </Link>

                            {" "} / <span>{artwork.title}</span>

                        </nav>

                        <h1 className={`
                    ${playfair.className}
                    text-4xl
                    md:text-5xl
                    xl:text-6xl
                    font-black
                    tracking-tight
                    leading-[0.95]
                `}>
                            {artwork.artName}
                        </h1>

                        <Link
                            href="#"
                            className="
                        mt-5
                        inline-block
                        text-lg
                        font-medium
                        text-zinc-500
                        hover:text-black
                        dark:hover:text-white
                        underline-offset-4
                        hover:underline
                        transition-all
                    "
                        >
                            {artwork.artistName}
                        </Link>

                    </header>


                    {/* narrative */}

                    <div className="
                border
                border-zinc-200
                dark:border-zinc-800
                rounded-2xl
                p-6
                bg-zinc-50/60
                dark:bg-zinc-900/40
                backdrop-blur-xl
            ">

                        <h3 className="
                    text-xs
                    uppercase
                    tracking-[0.22em]
                    text-zinc-400
                    mb-4
                ">
                            The Narrative
                        </h3>

                        <p className="
                    text-base
                    italic
                    leading-8
                    text-zinc-600
                    dark:text-zinc-400
                ">
                            {artwork.description}
                        </p>

                    </div>


                    {/* meta */}

                    <div className="grid grid-cols-2 gap-6">

                        <div className="
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    rounded-2xl
                    p-5
                ">

                            <p className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-zinc-400
                        mb-3
                    ">
                                Category
                            </p>

                            <p className="font-semibold text-lg">
                                {artwork.category}
                            </p>

                        </div>

                        <div className="
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    rounded-2xl
                    p-5
                ">

                            <p className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-zinc-400
                        mb-3
                    ">
                                Dimensions
                            </p>

                            <p className="font-semibold text-lg">
                                24&quot; × 36&quot;
                            </p>

                        </div>

                    </div>


                    {/* purchase card */}

                    <div className="
    rounded-3xl
    border
    border-zinc-200
    dark:border-zinc-700
    p-7

    bg-zinc-100
    dark:bg-zinc-900

    text-black
    dark:text-white

    flex
    flex-col
    gap-6

    shadow-xl
">

                        <div className="flex justify-between items-center">

                            <span className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        opacity-70
                    ">
                                Investment
                            </span>

                            <span className={`
                        ${playfair.className}
                        text-4xl
                        font-bold
                    `}>
                                ${artwork.price}
                            </span>

                        </div>


                        {/* purchase logic untouched */}

                        {
                            !user ? (

                                <Link
                                    href="/login"
                                    className="
                                w-full
                                py-4
                                bg-white
                                text-black
                                dark:bg-black
                                dark:text-white
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                flex
                                items-center
                                justify-center
                                rounded-xl
                            "
                                >
                                    Login To Purchase
                                </Link>

                            ) : user?.role !== "user" ? (

                                <button
                                    disabled
                                    className="
                                w-full
                                py-4
                                bg-zinc-600
                                dark:bg-zinc-300
                                cursor-not-allowed
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                rounded-xl
                            "
                                >
                                    Back To User Account To Purchase
                                </button>

                            ) : artwork?.sold ? (

                                <button
                                    disabled
                                    className="
                                w-full
                                py-4
                                bg-zinc-600
                                cursor-not-allowed
                                rounded-xl
                            "
                                >
                                    Already Sold
                                </button>

                            ) : plans?.maxBuy !== -1 && orders?.length >= plans?.maxBuy ? (

                                <div className="space-y-3">

                                    <button
                                        disabled
                                        className="
                                    w-full
                                    py-4
                                    bg-zinc-600
                                    dark:bg-zinc-300
                                    cursor-not-allowed
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    rounded-xl
                                "
                                    >
                                        Purchase Limit Reached
                                    </button>

                                    <p className="
                                text-xs
                                text-center
                                opacity-70
                            ">
                                        You have reached your plan limit.
                                    </p>

                                    <Link
                                        href="/subscription"
                                        className="
                                    block
                                    text-center
                                    text-sm
                                    underline
                                "
                                    >
                                        Upgrade Your Plan
                                    </Link>

                                </div>

                            ) : (

                                <CheckoutButton
                                    artName={artwork.artName}
                                    price={artwork.price}
                                    buyerId={user.id}
                                    buyerEmail={user.email}
                                    artworkId={artwork._id}
                                    artistId={artwork.artistId}
                                    artistName={artwork.artistName}
                                />

                            )
                        }


                        {/* secondary buttons */}

                        <div className="grid grid-cols-2 gap-4">

                            <button className="
                        border
                        border-white/20
                        dark:border-black/20
                        py-3
                        rounded-xl
                        text-xs
                        uppercase
                        tracking-[0.15em]
                        flex
                        justify-center
                        items-center
                        gap-2
                        hover:scale-[1.02]
                        transition-all
                    ">

                                <Heart size={16} />

                                Wishlist

                            </button>


                            <button className="
                        border
                        border-white/20
                        dark:border-black/20
                        py-3
                        rounded-xl
                        text-xs
                        uppercase
                        tracking-[0.15em]
                        flex
                        justify-center
                        items-center
                        gap-2
                        hover:scale-[1.02]
                        transition-all
                    ">

                                <Share2 size={16} />

                                Share

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ArtworkHero;