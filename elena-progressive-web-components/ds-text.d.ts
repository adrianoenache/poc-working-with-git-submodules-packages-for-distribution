export type { DsTextProps } from './custom-elements.js';

declare class DsText extends HTMLElement {
  /** the style variant of the component. */
  variant?: "default" | "primary" | "danger";
  /** the HTML tag used to render the inner element. */
  tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /** The text content of the element, captured from light DOM before the first render. */
  text?: string;
}

export default DsText;
