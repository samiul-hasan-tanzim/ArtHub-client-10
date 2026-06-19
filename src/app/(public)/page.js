import ArtCategory from "@/components/Home/ArtCategory";
import EliteCreators from "@/components/Home/EliteCreators";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";

export default function Home() {


  return (
    <div>
      <Hero />
      <Featured />
      <EliteCreators />
      <ArtCategory />
    </div>
  );
}
