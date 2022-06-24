import { defineComponent as _defineComponent } from "vue";
import { onMounted } from "vue";
const __vue_sfc__ = /* @__PURE__ */ _defineComponent({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    onMounted(() => {
    });
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
const _hoisted_1 = /* @__PURE__ */ _createTextVNode(" \xA0 ");
const _hoisted_2 = /* @__PURE__ */ _createElementVNode("div", { class: "sm-test" }, [
  /* @__PURE__ */ _createElementVNode("h1", null, "\u6211\u662Fsm-test\u5B50\u7EC4\u4EF6")
], -1);
function __vue_render__(_ctx, _cache) {
  return _openBlock(), _createElementBlock(_Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64);
}
__vue_sfc__.render = __vue_render__;
var stdin_default = __vue_sfc__;
export {
  stdin_default as default
};
