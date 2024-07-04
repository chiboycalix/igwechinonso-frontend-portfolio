import Banner from "@/components/Banner";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-black dark:text-white max-w-full">
      <Banner />
      <Services />
    </main>
  );
}
