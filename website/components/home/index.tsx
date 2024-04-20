import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import BenefitsGrid from './benefits';
import DescriptionGrid from './description';
import { Hero } from './hero';
import TailwindSection from './tailwind';
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
