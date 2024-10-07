import { LitElement, html, customElement, property, css } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/extension-registry";
import { UmbPropertyValueChangeEvent } from "@umbraco-cms/backoffice/property-editor";

@customElement('string-encoding-property-editor-ui')
export default class StringEncodingPropertyEditorUIElement extends LitElement implements UmbPropertyEditorUiElement {
    @property({ type: String })
    public value = "";

    @property({ type: String })
    public displayValue = "";

    #onInput(e: InputEvent) {
        e.stopPropagation();
        const target = e.target as HTMLInputElement;
        this.displayValue = target.value as string;
        this.#dispatchChangeEvent();
    }

    #dispatchChangeEvent() {
        this.value = btoa(this.displayValue);
        
        this.dispatchEvent(new UmbPropertyValueChangeEvent());
    }

    async firstUpdated(changed: any) {
        super.firstUpdated(changed)
        this.displayValue = atob(this.value || '');
    }

    render() {
        return html`
            <uui-input
                class="element"
                .value=${this.displayValue || ""}
                @input=${this.#onInput}
            >
            </uui-input>
            `;
    }

    static styles = [
        css`
            .element {
              width: 100%;
            }
          `,
        ];
}

declare global {
    interface HTMLElementTagNameMap {
        'string-encoding-property-editor-ui': StringEncodingPropertyEditorUIElement;
    }
}