import { defineComponent, refElement } from '@muban/muban';
import gsap from 'gsap';
import './mainSection.scss';
import { TextPlugin } from 'gsap/TextPlugin';
import { eases } from '@/utils/transitions';

gsap.registerPlugin(TextPlugin);
export const MainSection = defineComponent({
  name: 'mainSection',
  components: [],
  refs: {
    mainSection: refElement('mainSection'),
    visualWrapper: refElement('visual-wrapper'),
    text: refElement('text'),
    box: refElement('box'),
    cursor: refElement('cursor'),
    hi: refElement('hi'),
  },
  setup({ refs }) {
    const { mainSection, visualWrapper, text, box, cursor, hi } = refs;
    const words = [' Justin.', ' A Developer.', ' A Photographer.', ' A Trainee.Monk.'];

    const masterTl = gsap.timeline({}).pause();
    words.forEach((word) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true });
      if (text.element) {
        tl.to(text.element, {
          repeatDelay: 1,
          duration: 1.2,
          text: word,
        });
      }
      masterTl.add(tl);
    });

    const boxTl = gsap.timeline();

    if (box.element) {
      boxTl.to(box.element, {
        duration: 2,
        delay: 0.5,
        ease: 'power4.inOut',
      });
      if (hi.element) {
        boxTl.from(hi.element, {
          duration: 2,
          y: '7vw',
          ease: ' Power3.out',
          onComplete: function Completed() {
            masterTl.play();
          },
        });
        if (box.element) {
          boxTl.to(box.element, {
            duration: 1,
            delay: 1,
            height: '7vw',
            padding: '10px',
            ease: 'elastic.out',
          });
        }
        if (box.element) {
          boxTl.to(box.element, {
            autoAlpha: 0.7,
            yoyo: true,
            repeat: -1,
          });
        }
      }
    }
    if (cursor.element) {
      gsap.to(cursor.element, {
        opacity: 0,
        ease: 'power2.inOut',
        repeat: -1,
      });
    }
    if (mainSection.element) {
      gsap.from(mainSection.element, {
        xPercent: 100,
        duration: 1.5,
        delay: 0.2,
        ease: eases.vinnieInOut,
      });
      if (visualWrapper.element) {
        gsap.to(visualWrapper.element, {
          opacity: 1,
          delay: 2,
          duration: 3,
        });
      }
    }

    return [];
  },
});
