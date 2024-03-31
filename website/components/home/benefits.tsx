import Image from 'next/image';
import { useTranslations } from '../../hooks/use-translations';
import illu1 from '../../public/illu1.svg';
import illu2 from '../../public/illu2.svg';

export default function BenefitsGrid() {
  const { benefits } = useTranslations();

  return (
    <>
      <section
        className="grid grid-cols-[auto] !mt-3 xl:grid-cols-2-big mx-auto"
        style={{ maxWidth: 'calc(min(94%, 1080px))' }}
        aria-labelledby="benefits-grid"
      >
        <h1 id="benefits-grid" className="hidden">
          Benefits Grid
        </h1>
        <div className="p-16 shadow-[0_0_0_1px_rgba(255,255,255,0.14)]">
          <div className="flex gap-3 font-normal text-[18px] text-gray-main">
            <Settings /> <p>{benefits.autoConfiguration}</p>
          </div>
          <p
            className="text-gray-main"
            style={{ fontSize: 'clamp(1rem, 0.943rem + 0.28vw, 1.125rem)' }}
          >
            <span className="text-white-main font-semibold">
              {benefits.configurationEase}
            </span>{' '}
            {benefits.standardValues}
          </p>
          <Image src={illu1} alt="" style={{ marginInline: 'auto' }} />
        </div>
        <div className="p-16 shadow-[0_0_0_1px_rgba(255,255,255,0.14)]">
          <div className="flex gap-3 font-normal text-[18px] text-gray-main">
            <Typing /> <p>{benefits.autoConfiguration}</p>
          </div>
          <p
            className="text-gray-main"
            style={{ fontSize: 'clamp(1rem, 0.943rem + 0.28vw, 1.125rem)' }}
          >
            <span className="font-semibold text-white-main">
              {benefits.configurationEase}
            </span>
            {benefits.standardValues}
          </p>
          <Image src={illu2} alt="" style={{ marginInline: 'auto' }} />
        </div>
      </section>
    </>
  );
}

function Settings() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#a1a1a1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

function Typing() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#a1a1a1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="lucide lucide-type"
      viewBox="0 0 24 24"
    >
      <path d="M4 7L4 4 20 4 20 7"></path>
      <path d="M9 20L15 20"></path>
      <path d="M12 4L12 20"></path>
    </svg>
  );
}
