import { defineComponent as _defineComponent } from "vue";
import SmTest from "../sm-test/components/index";
const __vue_sfc__ = /* @__PURE__ */ _defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { SmTest };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { resolveComponent as _resolveComponent, createVNode as _createVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
const _hoisted_1 = { class: "demo-button" };
const _hoisted_2 = /* @__PURE__ */ _createTextVNode(" \u6309\u94AE ");
function __vue_render__(_ctx, _cache) {
  const _component_sm_test = _resolveComponent("sm-test");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _createVNode(_component_sm_test)
  ]);
}
__vue_sfc__.render = __vue_render__;
var stdin_default = __vue_sfc__;
export {
  stdin_default as default
};
