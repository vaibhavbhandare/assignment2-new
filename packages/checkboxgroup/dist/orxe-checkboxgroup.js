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
import styles from './checkboxgroup-css';
import '@checkbox/singlecheckbox';
let OrxeCheckboxgroup = class OrxeCheckboxgroup extends LitElement {
    constructor() {
        super(...arguments);
        this.required = false;
        this.title = 'Capacity';
        this.errorMessage = 'please select';
        this.value = [];
        this.orientation = 'vertical';
    }
    render() {
        return html `
    <div class="outer-group-container">
      <h3 class="heading">${this.title}</h3>
      <slot></<slot>
    </div>
    `;
    }
};
OrxeCheckboxgroup.styles = styles;
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'required' }),
    __metadata("design:type", Object)
], OrxeCheckboxgroup.prototype, "required", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'title' }),
    __metadata("design:type", Object)
], OrxeCheckboxgroup.prototype, "title", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'error-message' }),
    __metadata("design:type", Object)
], OrxeCheckboxgroup.prototype, "errorMessage", void 0);
__decorate([
    property({ type: Array, reflect: true, attribute: 'value' }),
    __metadata("design:type", Object)
], OrxeCheckboxgroup.prototype, "value", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'orientation' }),
    __metadata("design:type", Object)
], OrxeCheckboxgroup.prototype, "orientation", void 0);
OrxeCheckboxgroup = __decorate([
    customElement('orxe-checkboxgroup')
], OrxeCheckboxgroup);
export default OrxeCheckboxgroup;
