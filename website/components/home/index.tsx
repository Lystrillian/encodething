import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import BenefitsGrid from './BenefitsGrid';
import DescriptionGrid from './DescriptionGrid';
import { Hero } from './HeroSection';
import TailwindSection from './Tailwind';
import Textarea from '@components/Common/Textarea';

export function Home(): JSX.Element {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main className="font-overused">
      <Hero />
      <DescriptionGrid />
      <BenefitsGrid />
      <TailwindSection />
    </main>
  );
}
