/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { AboutSectionProps } from './about-section.types';

export function aboutSectionTemplate({ name }: AboutSectionProps): ComponentTemplateResult {
  return html`<section data-component="about-me">
    <div class="about-wrapper" data-ref="about-me"></div>
    <div class="about-me">
      <h1>Who am i? .</h1>
      <div class="main-text">
        My name is Justin Hartsink and I am a Jr. Front End Developer.
        <p>
          After ten+ years of sales functions I decided to change my career and do something I love
          : create amazing websites & webapps.
        </p>
        In 2020 i started enrolling into multiple bootcamps. And in the end of 2020 i got a job @
        Media.Monks as a front-end Trainee.
      </div>
    </div>
  </section>`;
}
