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
      ],
    },
  },
});
