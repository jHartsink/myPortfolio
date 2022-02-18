import { defineComponent, lazy } from '@muban/muban';
import { ImageTest } from '../components/image-test/ImageTest';
import { VideoTest } from '../components/video-test/VideoTest';
import { navigationHeader } from '@/components/atoms/navbar/NavigationHeader';
import { MainSection } from '@/components/atoms/main-section/MainSection';
import { About } from '@/components/atoms/cta-button/Cta-button';
import { aboutSection } from '@/components/atoms/about-section/about-section';

export const BlockRenderer = defineComponent({
  name: 'block-renderer',
  components: [
    lazy(
      'toggle-expand',
      () => import(/* webpackExports: "lazy" */ '../components/atoms/toggle-expand/ToggleExpand'),
    ),
    ImageTest,
    VideoTest,
    navigationHeader, 
    MainSection,
    About,
    aboutSection,
  ],
  setup() {
    return [];
  },
});
