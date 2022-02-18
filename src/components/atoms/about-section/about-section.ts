import { defineComponent } from '@muban/muban';
import gsap from 'gsap';
import './about-section.styles.scss';

export const aboutSection = defineComponent({
  name: 'about-section',
  components: [],
  refs: {},
  setup({ refs }) {
    const container = refs.self;
    const transitionInTimeline = gsap.timeline({ paused: false });

    if (container.element) {
      transitionInTimeline.from(
        container.element,
        {
          height: 0,
          duration: 2,
        },
        2,
      );
    }
    return [];
  },
});
