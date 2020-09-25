import { html, customElement, LitElement, property } from 'lit-element';
import styles from './singlecheckbox-css';

@customElement('orxe-singlecheckbox')
export default class OrxeSinglecheckbox extends LitElement {

  /**
  * Following property are used to give the initial and default value.
  */
  @property({ type: Boolean })
  isCheckboxSelected: any;

  /**
   *
   * @memberof OrxeSinglecheckbox
   * This property will set the required for checkbox field
   */
  @property({ type: Boolean, reflect: true, attribute: 'required' })
  required = false;

  /**
  *
  * @memberof OrxeSinglecheckbox
  * This property will set the checkboxState to render html
  * for checkbox enable or disabled field
  */
  @property({ type: String, reflect: true, attribute: 'checkbox-state' })
  checkboxState = 'checkbox-disabled';

  /**
   *
   * @memberof OrxeSinglecheckbox
   * This property will set the name for checkbox field
   */
  @property({ type: String, reflect: true, attribute: 'name' })
  name = 'checkbox';

  /**
   *
   * @memberof OrxeSinglecheckbox
   * This property will set the value for checkbox field
   */
  @property({ type: String, reflect: true, attribute: 'value' })
  value = 'false';

  /**
  *
  * @memberof OrxeSinglecheckbox
  * This property will set the checked for checkbox field
  */
  @property({ type: Boolean, reflect: true, attribute: 'checked' })
  checked = false;

  /**
   *
   * @memberof OrxeSinglecheckbox
   * This property will set the disabled for checkbox field
   */
  @property({ type: Boolean, reflect: true, attribute: 'disabled' })
  disabled = false;

  firstUpdated() {
    if (this.shadowRoot) {
      let elementUnable = this.shadowRoot.getElementById("checkbox1");
      if (elementUnable) {
        if (this.checked) {
          elementUnable.setAttribute("checked", "checked")
          elementUnable.setAttribute("aria-checked", "true")
        }
        else {
          elementUnable.removeAttribute("checked")
          elementUnable.setAttribute("aria-checked", "false")
        }
      }
    }
  }

  /**
   * Function that check target of firstElementChild attribute state is checked.
   */

  checkbox(event: any): void {
    this.isCheckboxSelected = event.target.firstElementChild.checked;
    if (this.isCheckboxSelected) {
      event.target.firstElementChild.checked = false;
    } else {
      event.target.firstElementChild.checked = true;
    }
  }

  /**
   * Function that check target of firstElementChild attribute state is disabled.
   */

  checkboxDisabled(event: any): void {
    this.isCheckboxSelected = event.target.firstElementChild.disabled;
    if (this.isCheckboxSelected) {
      event.target.firstElementChild.disabled = true;
    }
  }

  /**
  * Function that check target of previousElementSibling attribute state is disabled or not.
  */
  checkboxSelect(event: any): void {
    this.isCheckboxSelected = event.target.previousElementSibling.checked;
    if (this.isCheckboxSelected) {
      event.target.previousElementSibling.checked = false;
    } else {
      event.target.previousElementSibling.checked = true;
    }
  }

  /**
   * This method render the checkbox either enable or disabled state.
   */

  render() {
    return html`
    <div data-testId="checkbox-container" class="checkbox-unable">
      <div class="disabled-parent">
        ${this.renderCheckbox()}
      </div>
    </div>
 `;
  }

  /**
  * This method render the checkbox either disabled or not disabled.
  */

  renderCheckbox() {
    if (this.checkboxState == "checkbox-enable") {
      return html`
      <div class="container" @click="${this.checkbox}">
        <input type="checkbox" id="checkbox1" class="checkbox-input"
         value=${this.value} name=${this.name} required>
        <label for=${this.name} class="label"> <slot></slot> </label>
      </div>
    `;
    } else if (this.checkboxState == "checkbox-disabled") {
      return html`
      <div class="container" @click="${this.checkboxDisabled}">
        <input type="checkbox" id="checkbox1" class="checkbox-input"
         disabled value=${this.value} name=${this.name}>
        <label for=${this.name} class="label" disabled required> <slot></slot> </label>
      </div>
    `;
    } else if (this.checkboxState == "checkbox-group") {
      return html`
      <div class="container container-group" @click="${this.checkbox}">
        <input type="checkbox" id="checkbox1" class="checkbox-input"
          value=${this.value} name=${this.name}>
        <label for="checkbox" class="label select" @click="${this.checkboxSelect}"> <slot></slot> </label>
        <slot class="slot-data" name="data"></slot>
      </div>
    `;
    }
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
