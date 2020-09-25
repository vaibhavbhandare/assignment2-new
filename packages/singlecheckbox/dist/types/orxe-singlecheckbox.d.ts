import { LitElement } from 'lit-element';
export default class OrxeSinglecheckbox extends LitElement {
    isCheckboxSelected: any;
    required: boolean;
    checkboxState: string;
    name: string;
    value: string;
    checked: boolean;
    disabled: boolean;
    firstUpdated(): void;
    checkbox(event: any): void;
    checkboxDisabled(event: any): void;
    checkboxSelect(event: any): void;
    render(): import("lit-element").TemplateResult;
    renderCheckbox(): import("lit-element").TemplateResult | undefined;
    static styles: import("lit-element").CSSResult;
}
