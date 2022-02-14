import { defineComponent, refElement } from '@muban/muban';
import gsap from 'gsap';
import './About.scss';
import { eases } from '../../../utils/transitions';

export const About = defineComponent({
  name: 'about',
  components: [],
  refs: {
    about: refElement('about'),
    aboutMe: refElement('aboutMe'),
    project: refElement('project'),
  },

  setup({ refs }) {
    const { about, aboutMe, project } = refs;

    if (about.element) {
      gsap.to(about.element, {
        height: '100vh',
        delay: 2,
        duration: 3,
        opacity: 1,
        ease: eases.vinnieInOut,
      });
    }

    if (aboutMe.element) {
      gsap.to(aboutMe.element, {
        delay: 13,
        duration: 3,
        opacity: 1,
        ease: eases.vinnieInOut,
      });
    }
    if (project.element) {
      gsap.to(project.element, {
        delay: 13,
        duration: 3,
        opacity: 1,
        ease: eases.vinnieInOut,
      });
    }
    return [];
  },
});
