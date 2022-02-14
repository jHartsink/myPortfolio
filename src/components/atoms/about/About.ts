import { defineComponent, refCollection } from '@muban/muban';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './About.styles.scss';

// import { eases } from '../../../utils/transitions';

gsap.registerPlugin(ScrollTrigger);

export const About = defineComponent({
  name: 'about',
  components: [],
  refs: {
    ctaLinks: refCollection('cta-link'),
  },

  setup({ refs }) {
    const container = refs.self;
    const { ctaLinks } = refs;
    const transitionInTimeline = gsap.timeline({ paused: true });

    if (container.element) {
      transitionInTimeline.from(container.element, {
        height: 0,
        duration: 2,
      }, 2);
    }

    transitionInTimeline.from(ctaLinks.getElements(), {
      duration: 1,
      stagger: 0.5,
      opacity: 0,
      scale: gsap.utils.wrap([0.9, 1.05, 2]),
    });

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
