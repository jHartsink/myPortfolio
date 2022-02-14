import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { NavbarProps } from './NavigationHeader.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function navigationHeaderTemplate({ name }: NavbarProps): ComponentTemplateResult {
  return html`<header data-component="navigationHeader" class="navbar">
    <div class="content-wrapper">
      <div class="navbarLogo">Justin Hartsink</div>
      <nav class="navigation">
        <a href="#">Contact</a>
      </nav>
    </div>
  </header> `;
}
