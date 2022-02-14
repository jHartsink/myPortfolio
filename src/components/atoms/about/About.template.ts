import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { AboutTemplateProps } from './About.types';

export function aboutTemplate({ links }: AboutTemplateProps): ComponentTemplateResult {
  return html`<section data-component="about">
    <div class="cta-wrapper">
      ${links.map(
        ({ href, copy, ariaLabel }) => html`
          <a href=${href} class="cta-link" aria-label=${ariaLabel} data-ref="cta-link">${copy}</a>
        `,
      )}
    </div>
  </section>`;
}
