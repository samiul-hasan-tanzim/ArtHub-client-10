import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const artworks = [
    {
        title: "The Blue Solitude",
        artist: "Julian Thorne",
        price: "$4,200",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqXPyUYlxO2oHR_aZ1icJx81xyNulu0b6-rITPM8EjNWTxtVR4gmz_uqFZNg75_cnBsLKBxzwV2SqfVe4C2jAPa3vAVZ-veB_dNOm78d9e6g1mf3jGFBzmo4kD7sb3oGC_F8nTSnnHZCNNFFqxzqdtrNCOy6s8p6dzIuukigpIeehT6nyVzdPCdkgQdJCQOE8765ZCud0fIgUdFnqTwUUkICC4foORrwhr2f1zUwzYOldgW6cMMon0bKuz5cjtfSHyh1CZNmx20fM",
        isNew: true
    },
    {
        title: "Neural Synthesis 01",
        artist: "Sora Nakamoto",
        price: "$1,850",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpNogF4BZo18BP45bSUzLoMifCBd7c-7jKCdv_porCbe4tKNW6U34VJ9oIOOhVyx-m6nHds8i66uB9OEyXkYx2LrFIz7t7oY72WqisVykIBe2VY-4v2sfsVWyzKKBMuCkbtNuFcw58TkUW2v_0JL85UGEedLuWYfbxaxOfHgiooGqXPRI5BZlVdvgYRMx1o7hDc9JrBUViis2sSICkrj7vdtmtZ5ELKXsoqW9TpebrZ1Ad66NrTr-2tIAi2Yu-MsdEqtqVTK898XQ"
    },
    {
        title: "Fluid Geometry II",
        artist: "Marcus Aurel",
        price: "$12,000",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfeO-BoCIJRARb2hAU8mcbV6g_QVfKVgcOxbq-uyhRkDH6pPRn59GBQW260Yc5_dA-YrhKa1B6dB1pd5U63r_AONfxnWhn0zr9XbKCgt5Jf6jijO3BAAvxsoCdPE9zpsDGsxsJaab7kBT504Oox52Y0s7J4X5xioYUk-UPrm5NHt_Sx6EoBSbulTne0eV87AXCp_5H_T7C8RPkzQEbPsgyjCC8urfyJIR_biNibU7DjhbFyiuSM67LSrucrMjHCcRjpoTpUkxQljA",
        sold: true
    },
    {
        title: "Brutalist Rhythm",
        artist: "Elena Vance",
        price: "$3,100",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5oWu9cYneNzCJMSq_a9AL8CHjr2XbnIILMJhnnM_EkhdMDd6E9yMMjxyEADwwiX4PQCj1TCzhfftY51_1gX_158ovPN8k2JPTwOB0YxwHOKESOfsrUbj2bNk1wN6W7UTHivb9w0xqWR0B_Pank6NoaGmTmTMpw76H8x1108RaYfqN5UrEH7YoskF5l84Epfe1-cMiNGZV4Qdo4ebqWZYmrKT1H60sdm_nWix_NSprvO2VvHtS5FGLxSYnIOoqcmJatkiJXAB7uo0"
    },
    {
        title: "Golden Entropy",
        artist: "Hana Yi",
        price: "$6,750",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP6ETqlggJfR6ETs1dNJhmq0WPi6Mp837xF2dQ1kg76l_j71g_IfoV8SgSw0xGZ1ublJX3gaThj_3iqCRjkuPSZX2UbWQOHtXpUmPt7PcnULnM76Q0ngNLdN8OQlUadrhN2RO51iN5wkGwws5LiSH43k8YnYAM0A9nmuHlGcmFs6y9VAva3JMeQDFWLUfDY8YtUTeXvjd94niW2RdYGqirsB_tqxkRfZ6rLoIPepbMzvZQlL68pJTv1IMivfK5VuWa1LMl_aNQ7dE"
    },
    {
        title: "Botanical Archive No. 4",
        artist: "Oliver Gray",
        price: "$2,400",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbn-P3j9UawY7azY6UNGbFZz0Wt-tY_CY-DlCtrv2pNB0v4OUiLXr0FcZeA-9dVq96meLW80AQUx5etWV_8EPhW68TE3lgZ2KBD-ERm3yzdIqiFqh6bA1C3m_hLIywx_XDphBZZX-n55X2QU3iBs_ackv_hLsf4CoytXCIK1Psu1jrUF4JIxtv2FK-iVeKY91lpY1WmKIAs5hOZYab4g3XuVvsOD_TpHodiuJS6AOr2H2Od270pSEJe9YXn6NzQIAdEh4QMBG3LyA"
    },
    {
        title: "Silhouette of Thought",
        artist: "Ava Chen",
        price: "$5,500",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNcfaeOZtIEp_xSP6s75-1cd1Z8OFjMc2_BlWpOiYb2rvX5g9kqHhXCA4xlyprP09rw27mVQZb4lCPKOChsq3QPPgx-fmdKWnfttMB9qvfjhxLRD7k7Y0sblYvhAuucKw16jRBSDnLUnHWLp9Lg9eNz85ovdlXvnOAF02ODpiiMHQwzygYludAjA7hjTosA846H_vr_Bb9afcNE9-n6jqTvTF9J6gsi67BWk4FFdvAvOsQUZKZnY6WvZtsT6WbwM5tJnwutduB_FY"
    }
];

const Results = () => {
    return (
        <div>
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8">
                {artworks.map((art, i) => (
                    <article key={i} className={`mb-8 break-inside-avoid group ${art.sold ? "opacity-70" : ""}`}>

                        <Link href={`/artworks/${i + 1}`}>
                            <div className="relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                                <Image
                                    src={art.image}
                                    alt={art.title}
                                    width={500}
                                    height={700}
                                    className={`w-full h-auto ${!art.sold && "group-hover:scale-105 transition-transform duration-700"}`}
                                />

                                {art.isNew && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 text-black text-[10px] font-bold tracking-widest px-2 py-1 rounded">
                                            NEW
                                        </span>
                                    </div>
                                )}

                                {art.sold && (
                                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] flex items-center justify-center">
                                        <span className="bg-black text-white px-6 py-2 text-xs font-bold tracking-widest">
                                            SOLD
                                        </span>
                                    </div>
                                )}
                            </div>
                        </Link>

                        <div className="pt-5 flex justify-between items-start">
                            <div>
                                <Link href={`/artworks/${i + 1}`}>
                                    <h3 className="text-lg font-semibold hover:underline underline-offset-4 cursor-pointer">
                                        {art.title}
                                    </h3>
                                </Link>

                                <p className="text-sm text-zinc-500 dark:text-zinc-400">{art.artist}</p>
                            </div>

                            <span className={`${art.sold ? "line-through text-zinc-400 font-medium" : "font-bold"}`}>
                                {art.price}
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            <nav className="flex items-center justify-center gap-4 mt-20">
                <button className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                    <ChevronLeft size={18} />
                </button>

                <div className="flex gap-2">
                    <button className="w-12 h-12 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold">1</button>
                    <button className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium">2</button>
                    <button className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 font-medium">3</button>
                </div>

                <button className="w-12 h-12 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                    <ChevronRight size={18} />
                </button>
            </nav>
        </div>
    );
};

export default Results;