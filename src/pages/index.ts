import type { AppTemplateProps } from '../App.template';
import {aboutMock} from "@/components/atoms/about/About.mock";

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
          props: aboutMock,
        }
      ],
    },
  },
});

// https://github.com/nfl/react-helmet
export const meta = (): Record<string, string> => ({
  title: 'foo',
  description: 'bar',
});
