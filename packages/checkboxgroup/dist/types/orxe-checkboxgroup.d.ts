import { LitElement } from 'lit-element';
import '@checkbox/singlecheckbox';
export default class OrxeCheckboxgroup extends LitElement {
    required: boolean;
    title: string;
    errorMessage: string;
    value: never[];
    orientation: string;
    render(): import("lit-element").TemplateResult;
    static styles: import("lit-element").CSSResult;
}
