import { css as y, property as u, customElement as _, LitElement as f, html as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as m } from "@umbraco-cms/backoffice/property-editor";
var E = Object.defineProperty, P = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, l = (t, e, r, n) => {
  for (var a = n > 1 ? void 0 : n ? P(e, r) : e, p = t.length - 1, o; p >= 0; p--)
    (o = t[p]) && (a = (n ? o(e, r, a) : o(a)) || a);
  return n && a && E(e, r, a), a;
}, V = (t, e, r) => e.has(t) || d("Cannot " + r), w = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), h = (t, e, r) => (V(t, e, "access private method"), r), i, c, v;
let s = class extends f {
  constructor() {
    super(...arguments), w(this, i), this.value = "", this.displayValue = "";
  }
  async firstUpdated(t) {
    super.firstUpdated(t), this.displayValue = atob(this.value || "");
  }
  render() {
    return g`
            <uui-input
                class="element"
                .value=${this.displayValue || ""}
                @input=${h(this, i, c)}
            >
            </uui-input>
            `;
  }
};
i = /* @__PURE__ */ new WeakSet();
c = function(t) {
  t.stopPropagation();
  const e = t.target;
  this.displayValue = e.value, h(this, i, v).call(this);
};
v = function() {
  this.value = btoa(this.displayValue), this.dispatchEvent(new m());
};
s.styles = [
  y`
            .element {
              width: 100%;
            }
          `
];
l([
  u({ type: String })
], s.prototype, "value", 2);
l([
  u({ type: String })
], s.prototype, "displayValue", 2);
s = l([
  _("string-encoding-property-editor-ui")
], s);
export {
  s as default
};
//# sourceMappingURL=EncodedString.js.map
