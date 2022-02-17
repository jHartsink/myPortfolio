import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { AboutSectionTemplateProps } from './about-section.types';

export function aboutSectionTemplate({
  links,
}: AboutSectionTemplateProps): ComponentTemplateResult {
  return html`<div>hello${links}</div>`;
}
