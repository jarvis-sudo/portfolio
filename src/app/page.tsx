import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <FloatingNav navItems={navItems}/>
<Hero/>

<RecentProjects/>
<Clients/>

<Footer/>
    </main>
    
  );
}
