import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home() {
  return (
    <main className="text-black dark:text-white max-w-full">
      <Banner />
      <Services />
      <Tools />
      <Projects />
      <WorkWithUs />
    </main>
  );
}
