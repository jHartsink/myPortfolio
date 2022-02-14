import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { MainSectionProps } from './MainSection.types';

export function mainSectionTemplate({ src, alt }: MainSectionProps): ComponentTemplateResult {
  return html`<section data-component="mainSection" data-ref="mainSection" class="mainSection">
    <div class="visual-wrapper" data-ref="visual-wrapper">
      <img src=${src} alt=${alt} />
    </div>
    <div class="hero-text">
      <h1>
        <span data-ref="box" class="box"></span>
        <span data-ref="hi" class="hi">Hi, I'm</span>
        <span data-ref="text" class="text" ></span>
        <span data-ref="cursor" class="cursor" >_</span>
      </h1>
    </div>
  </section>`;
}
