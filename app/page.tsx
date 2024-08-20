import AboutUs from "@/Components/Home/AboutUs";
import CallToAction from "@/Components/Home/CallToAction";
import ContactUs from "@/Components/Home/ContactUs";
import Hero from "@/Components/Home/Hero";
import Portfolios from "@/Components/Home/Portfolios";
import Services from "@/Components/Home/Services";
import TeamMembers from "@/Components/Home/TeamMembers";
import TechnologyStacks from "@/Components/Home/TechnologyStacks";
import Testimonials from "@/Components/Home/Testimonials";
import WellcomeMessages from "@/Components/Home/WellcomeMessages";

export default function Home() {
  return (
    <main>
      <Hero />
      <WellcomeMessages />
      <AboutUs />
      <Services />
      <TechnologyStacks />
      <Portfolios />
      <Testimonials />
      <ContactUs />
      {/* <TeamMembers /> */}
      {/* <CallToAction /> */}
    </main>
  );
}
