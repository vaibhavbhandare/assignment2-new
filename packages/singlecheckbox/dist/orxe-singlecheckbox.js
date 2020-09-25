var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './singlecheckbox-css';
let OrxeSinglecheckbox = class OrxeSinglecheckbox extends LitElement {
    constructor() {
        super(...arguments);
        this.required = false;
        this.checkboxState = 'checkbox-disabled';
        this.name = 'checkbox';
        this.value = 'false';
        this.checked = false;
        this.disabled = false;
    }
    firstUpdated() {
        if (this.shadowRoot) {
            let elementUnable = this.shadowRoot.getElementById("checkbox1");
            if (elementUnable) {
                if (this.checked) {
                    elementUnable.setAttribute("checked", "checked");
                    elementUnable.setAttribute("aria-checked", "true");
                }
                else {
                    elementUnable.removeAttribute("checked");
                    elementUnable.setAttribute("aria-checked", "false");
                }
            }
        }
    }
    checkbox(event) {
        this.isCheckboxSelected = event.target.firstElementChild.checked;
        if (this.isCheckboxSelected) {
            event.target.firstElementChild.checked = false;
        }
        else {
            event.target.firstElementChild.checked = true;
        }
    }
    checkboxDisabled(event) {
        this.isCheckboxSelected = event.target.firstElementChild.disabled;
        if (this.isCheckboxSelected) {
            event.target.firstElementChild.disabled = true;
        }
    }
    checkboxSelect(event) {
        this.isCheckboxSelected = event.target.previousElementSibling.checked;
        if (this.isCheckboxSelected) {
            event.target.previousElementSibling.checked = false;
        }
        else {
            event.target.previousElementSibling.checked = true;
        }
    }
    render() {
        return html `
    <div data-testId="checkbox-container" class="checkbox-unable">
      <div class="disabled-parent">
        ${this.renderCheckbox()}
      </div>
    </div>
 `;
    }
    renderCheckbox() {
        if (this.checkboxState == "checkbox-enable") {
            return html `
      <div class="container" @click="${this.checkbox}">
        <input type="checkbox" id="checkbox1" class="checkbox-input"
         value=${this.value} name=${this.name} required>
        <label for=${this.name} class="label"> <slot></slot> </label>
      </div>
    `;
        }
        else if (this.checkboxState == "checkbox-disabled") {
            return html `
      <div class="container" @click="${this.checkboxDisabled}">
        <input type="checkbox" id="checkbox1" class="checkbox-input"
         disabled value=${this.value} name=${this.name}>
        <label for=${this.name} class="label" disabled required> <slot></slot> </label>
      </div>
    `;
        }
        else if (this.checkboxState == "checkbox-group") {
            return html `
      <div class="container container-group" @click="${this.checkbox}">
        <input type="checkbox" id="checkbox1" class="checkbox-input"
          value=${this.value} name=${this.name}>
        <label for="checkbox" class="label select" @click="${this.checkboxSelect}"> <slot></slot> </label>
        <slot class="slot-data" name="data"></slot>
      </div>
    `;
        }
    }
};
OrxeSinglecheckbox.styles = styles;
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "isCheckboxSelected", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'required' }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "required", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'checkbox-state' }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "checkboxState", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'name' }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "name", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'value' }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "value", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'checked' }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'disabled' }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "disabled", void 0);
OrxeSinglecheckbox = __decorate([
    customElement('orxe-singlecheckbox')
], OrxeSinglecheckbox);
export default OrxeSinglecheckbox;
