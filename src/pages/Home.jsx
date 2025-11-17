import Hero from '../components/Hero';
import { BlogPreview, ClientsMarquee, TestimonialsCarousel, Expertise, CTA } from '../components/HomeSections';

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <BlogPreview />
      <ClientsMarquee />
      <TestimonialsCarousel />
      <Expertise />
      <CTA />
    </div>
  );
}
