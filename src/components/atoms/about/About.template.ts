import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { AboutProps } from './About.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function aboutTemplate({ src }: AboutProps): ComponentTemplateResult {
  return html`<section data-component="about" data-ref="about">
    <div class="cta-wrapper">
      <button data-ref="aboutMe" class="aboutMe">About</button>
      <button data-ref="project" class="project">Project</button>
    </div>
  </section>`;
}
