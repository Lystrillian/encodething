import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import BenefitsGrid from './benefits';
import DescriptionGrid from './description';
import { Hero } from './hero';
import TailwindSection from './tailwind';

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
    <main className="font-overused space-y-40 mb-40">
      <Hero />
      <DescriptionGrid />
      <BenefitsGrid />
      <TailwindSection />
    </main>
  );
}
