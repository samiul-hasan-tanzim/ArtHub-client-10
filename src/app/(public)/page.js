import ArtCategory from "@/components/Home/ArtCategory";
import EliteCreators from "@/components/Home/EliteCreators";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";

export default function Home() {


  return (
    <div>
      <Hero />
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <Featured />
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <EliteCreators />
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <ArtCategory />
      </div>
    </div>
  );
}
