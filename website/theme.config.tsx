import { GitHubIcon } from '@components/icons/github-icon';
import { useRouter } from 'next/router';
import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs';
import LogoIcon from './components/icons/logo-icon';
import TwitterIcon from './components/icons/twitter-icon';

const config: DocsThemeConfig = {
  logo: () => {
    return (
      <span>
        <div className="flex flex-row flex-nowrap flex-auto grow items-center gap-3 font-medium text-center text-white-main py-1.5 px-3">
          <div>
            <LogoIcon />
          </div>
          <div
            style={{
              letterSpacing:
                'calc(-0px - clamp(0.06rem, 0.048rem + 0.001vw, 0.094rem))',
              fontSize: 'clamp(1rem, 0.857rem + 0.71vw, 1.5rem)',
            }}
          >
            encode<span className="text-[#34e6a0]">thing</span>
          </div>
        </div>
      </span>
    );
  },
  project: {
    link: 'https://example.com/', // Edit tis later
    icon: <GitHubIcon />,
  },
  docsRepositoryBase: 'https://example.com/', // Edit tis later
  footer: {
    text: (
      <div className="flex flex-col items-start gap-6 xl:flex-row w-full justify-between">
        <div>© {new Date().getFullYear()} Lystrillian.</div>

        <div>
          <p className="text-base pb-2 text-white font-bold">Resources</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Converters
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Tailwind Converter
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base pb-2 text-white font-bold">Types</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm">
                Strings
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Numbers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Date
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Colors
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Ciphers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Hash
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base pb-2 text-white font-bold">About</p>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="text-sm">
                Encodething
              </a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Code Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Telemetry</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base pb-2 text-white font-bold">Contact</p>
          <ul className="flex flex-wrap gap-2">
            <li>
              <a href="#" className="text-sm">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  head: () => {
    const { asPath, pathname, query } = useRouter();
    const id = String(query.id);
    const name = String(query.name);
    const { frontMatter } = useConfig();

    const ogConfig = {
      title: 'Encodething',
      description: 'The better way for text manipulating',
      author: {
        twitter: '#',
      },
      favicon: '/favicon.ico',
    };
    const favicon = String(ogConfig.favicon);
    let title = String(frontMatter.title || ogConfig.title);
    const description = String(frontMatter.description || ogConfig.description);
    const note =
      (frontMatter.date as string | undefined) ?? pathname === '/'
        ? '#'
        : pathname;
    const canonical = new URL(asPath, 'https://example.com').toString(); // Change on production

    let ogUrl = `#`;

    return (
      <>
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:creator" content={`@${ogConfig.author.twitter}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogUrl} />
        <meta property="og:image" content={ogUrl} />
        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content={title} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </>
    );
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  search: {
    placeholder: 'Search website...',
  },
  toc: {
    float: true,
    backToTop: true,
  },
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  themeSwitch: {
    component: null,
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'ru-RU', text: 'Русский' },
  ],
  useNextSeoProps() {
    const { asPath, pathname, query } = useRouter();

    if (['/', '/docs'].includes(asPath)) {
      return { titleTemplate: 'Encodething' };
    }

    return { titleTemplate: `%s | Encodething` };
  },
  primarySaturation: 0,
};

export function hash(str: string): number {
  let hashy = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    hashy = (hashy << 5) - hashy + chr;
    hashy |= 0; // Convert to 32bit integer
  }
  return hashy;
}

export default config;
