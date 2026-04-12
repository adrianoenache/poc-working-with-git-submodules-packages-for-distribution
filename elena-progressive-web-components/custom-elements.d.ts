/**
 * This type can be used to create scoped tags for your components.
 *
 * Usage:
 *
 * ```ts
 * import type { ScopedElements } from "path/to/library/jsx-integration";
 *
 * declare module "my-library" {
 *   namespace JSX {
 *     interface IntrinsicElements
 *       extends ScopedElements<'test-', ''> {}
 *   }
 * }
 * ```
 *
 */
export type ScopedElements<Prefix extends string = "", Suffix extends string = ""> = {
  [Key in keyof CustomElements as `${Prefix}${Key}${Suffix}`]: CustomElements[Key];
};

type BaseProps = {
  /** Content added between the opening and closing tags of the element */
  children?: any;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  class?: string;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  className?: string;
  /** Takes an object where the key is the class name(s) and the value is a boolean expression. When true, the class is applied, and when false, it is removed. */
  classList?: Record<string, boolean | undefined>;
  /** Specifies the text direction of the element. */
  dir?: "ltr" | "rtl";
  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;
  /** For <label> and <output>, lets you associate the label with some control. */
  htmlFor?: string;
  /** Specifies whether the element should be hidden. */
  hidden?: boolean | string;
  /** A unique identifier for the element. */
  id?: string;
  /** Keys tell React which array item each component corresponds to */
  key?: string | number;
  /** Specifies the language of the element. */
  lang?: string;
  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;
  /** Use the ref attribute with a variable to assign a DOM element to the variable once the element is rendered. */
  ref?: unknown | ((e: unknown) => void);
  /** Adds a reference for a custom element slot */
  slot?: string;
  /** Prop for setting inline styles */
  style?: Record<string, string | number>;
  /** Overrides the default Tab button behavior. Avoid using values other than -1 and 0. */
  tabIndex?: number;
  /** Specifies the tooltip text for the element. */
  title?: string;
  /** Passing 'no' excludes the element content from being translated. */
  translate?: "yes" | "no";
};

type BaseEvents = {};

export type DsTextProps = {
  /** the style variant of the component. */
  variant?: "default" | "primary" | "danger";
  /** the HTML tag used to render the inner element. */
  tag?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /** The text content of the element, captured from light DOM before the first render. */
  text?: string;
};

export type CustomElements = {
  /**
   * the description of the component goes here.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--ds-text-text** - Overrides the default text color. _(default: undefined)_
   * - **--ds-text-bg** - Overrides the default background color. _(default: undefined)_
   * - **--ds-text-font** - Overrides the default font family. _(default: undefined)_
   * - **--ds-text-size** - Overrides the default font size. _(default: undefined)_
   * - **--ds-text-weight** - Overrides the font weight for paragraphs. _(default: undefined)_
   * - **--ds-text-weight-strong** - Overrides the font weight for h1 and h2 (default: 700). _(default: undefined)_
   * - **--ds-text-weight-medium** - Overrides the font weight for h3 through h6 (default: 600). _(default: undefined)_
   * - **--ds-text-line-height** - Overrides the default line height for paragraphs. _(default: undefined)_
   */
  "ds-text": Partial<DsTextProps & BaseProps & BaseEvents>;
};
