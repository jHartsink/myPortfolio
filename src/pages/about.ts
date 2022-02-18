import type { AppTemplateProps } from '../App.template';

import { aboutSectionMock } from '@/components/atoms/about-section/about-section.mock';

export const data = (): AppTemplateProps => ({
  layout: {
    name: 'default-layout',
    props: {
      blocks: [
        {
          name: 'navigationHeader',
          props: {
            name: "",
          },
        },
        {
          name: 'about-section',
          props: aboutSectionMock,
        },
      ],
    },
  },
});
