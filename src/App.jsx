import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollection from "./components/FeaturedCollection";
import BrandStory from "./components/BrandStory";
import Ingredients from "./components/Ingredients";
import LuxuryExperience from "./components/LuxuryExperience";
import BestSellers from "./components/BestSellers";
import Testimonials from "./components/Testimonials";
import Statistics from "./components/Statistics";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-noir min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <Ingredients />
      <LuxuryExperience />
      <BestSellers />
      <Testimonials />
      <Statistics />
      <Newsletter />
      <Footer />
    </div>
  );
}