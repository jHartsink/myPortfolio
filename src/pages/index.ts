import type { AppTemplateProps } from '../App.template';

export const data = (): AppTemplateProps => ({
  layout: {
    name: 'default-layout',
    props: {
      blocks: [
        {
          name: 'navigationHeader',
          props: {
            name: '',
          },
        },
        {
          name: 'mainSection',
          props: {
            src: 'https://www.w3schools.com/w3css/img_avatar3.png',
            alt: 'check',
          },
        },
        {
          name: 'about',
          props: {
            src: '',
          },
        },
      ],
    },
  },
});

// https://github.com/nfl/react-helmet
export const meta = (): Record<string, string> => ({
  title: 'foo',
  description: 'bar',
});
