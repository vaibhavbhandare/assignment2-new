import { html, customElement, LitElement, property } from 'lit-element';
import styles from './checkboxgroup-css';
import '@checkbox/singlecheckbox';

@customElement('orxe-checkboxgroup')
export default class OrxeCheckboxgroup extends LitElement {

  /**
   *
   * @memberof OrxeCheckboxgroup
   * This property will set the required field for checkbox group
   */
  @property({ type: Boolean, reflect: true, attribute: 'required' })
  required = false;

  /**
   *
   * @memberof OrxeCheckboxgroup
   * This property will set the title for checkbox group
   */
  @property({ type: String, reflect: true, attribute: 'title' })
  title = 'Capacity';

  /**
   *
   * @memberof OrxeCheckboxgroup
   * This property will set the errorMessage for checkbox group
   */
  @property({ type: String, reflect: true, attribute: 'error-message' })
  errorMessage = 'please select';

   /**
   *
   * @memberof OrxeCheckboxgroup
   * This property will set the value for checkbox field
   */
  @property({ type: Array, reflect: true, attribute: 'value' })
  value = [];

   /**
   *
   * @memberof OrxeCheckboxgroup
   * This property will set the orientation for checkbox group
   */
  @property({ type: String, reflect: true, attribute: 'orientation' })
  orientation = 'vertical';

  /**
   * Implement `render` to define a template for checkbox group element.
   */
  render() {
    return html`
    <div class="outer-group-container">
      <h3 class="heading">${this.title}</h3>
      <slot></<slot>
    </div>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
