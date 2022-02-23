import { defineComponent } from '@muban/muban';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import './about-section.styles.scss';



gsap.registerPlugin(ScrollTrigger);
export const AboutSection = defineComponent({
  name: 'about-me',
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
        3,
      );
    }

    if (container.element) {
      gsap.to(transitionInTimeline, {
        progress: 1,
        duration: transitionInTimeline.duration(),
        scrollTrigger: {
          trigger: container.element,
          markers: true,
        },
      });
    }
    return [];
  },
});
