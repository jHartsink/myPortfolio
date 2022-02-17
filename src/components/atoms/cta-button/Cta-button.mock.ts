import type { AboutTemplateProps } from '@/components/atoms/cta-button/Cta-button.types';

export const aboutMock: AboutTemplateProps = {
  links: [
    {
      href: '/about',
      copy: 'About',
      ariaLabel: 'About Justin',
    },
    {
      href: '/projects',
      copy: 'Projects',
      ariaLabel: 'Projects by Justin',
    },
  ],
};
