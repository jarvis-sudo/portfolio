import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 first-letter:px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
