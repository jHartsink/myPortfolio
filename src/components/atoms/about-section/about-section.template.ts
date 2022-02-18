import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { AboutSectionTemplateProps } from './about-section.types';

export function aboutSectionTemplate({
  links,
}: AboutSectionTemplateProps): ComponentTemplateResult {
  return html`<section data-component="about-me">
          ${links.map(
        ({ href, copy, }) => html`
          <a href=${href} class="about-me" data-ref="about-me">${copy}</a>
        `,
      )}
</section>`;
}
