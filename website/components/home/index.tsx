import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { Hero } from './HeroSection';
import DescriptionGrid from './DescriptionGrid';
import BenefitsGrid from './BenefitsGrid';
import TailwindSection from './Tailwind';

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
