import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main className="text-black dark:text-white max-w-full">
      <Banner />
      <Services />
      <Tools />
      <Projects />
    </main>
  );
}
