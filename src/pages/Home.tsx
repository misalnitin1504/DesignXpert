import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ProjectTypes from '../components/ProjectTypes';
import Gallery from '../components/Gallery';
import BeforeAfter from '../components/BeforeAfter';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import DesignApproach from '../components/DesignApproach';
import LargeScaleProjects from '../components/LargeScaleProjects';
import CTA from '../components/CTA';
import Career from '../components/Career';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <DesignApproach />
      <Services />
      <ProjectTypes />
      <Gallery />
      <BeforeAfter />
      <Process />
      <WhyChooseUs />
      <LargeScaleProjects />
      <CTA />
      <Career />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Home;
