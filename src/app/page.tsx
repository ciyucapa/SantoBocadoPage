import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import BakerySlider from "@/components/BakerySlider";
import About from '../components/About';
import WhatsAppButton from "../components/WhatsAppButton";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <BakerySlider />
      <Container>
        <Benefits />

        <Section
          id="nosotros"
          title="¿Quiénes Somos? 🤎"
          description="En Santo Bocado creemos en el pan artesanal hecho con paciencia, ingredientes de calidad y mucho amor."
        >
          <About />
        </Section>

        <Section
          id="productos"
          title="Nuestros Productos 🥐"
          description="Croissants, masa madre y productos artesanales frescos cada día."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonios"
          title="Lo que dicen nuestros clientes 💛"
          description="Gracias por apoyar nuestra panadería artesanal."
        >
          <Testimonials />
        </Section>

        <FAQ />


        <CTA />
      </Container>
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
