/* eslint-disable no-console */
import { defineComponent } from '@muban/muban';
import gsap from 'gsap';
import { eases } from '@/utils/transitions';
import './__navbar.styles.scss';

export const navigationHeader = defineComponent({
  name: 'navigationHeader',
  
  setup({ refs }) {
    if (refs.self.element) {
      gsap.from(refs.self.element,{
        xPercent: -100,
        duration: 1.5,
        delay: 0.2,
        ease: eases.vinnieInOut,
      });
    }
    return [];
  },
});
