import Hero from '../components/Hero';
import { BlogPreview, ClientsMarquee, TestimonialsCarousel, Expertise, CTA, HomePortfolio } from '../components/HomeSections';

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <HomePortfolio />
      <ClientsMarquee />
      <TestimonialsCarousel />
      <Expertise />
      <BlogPreview />
      <CTA />
    </div>
  );
}
