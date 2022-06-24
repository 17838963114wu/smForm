var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => stdin_default
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_vue3 = require("vue");
const __vue_sfc__ = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "index",
  setup(__props, { expose }) {
    expose();
    (0, import_vue2.onMounted)(() => {
    });
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ (0, import_vue3.createTextVNode)(" \xA0 ");
const _hoisted_2 = /* @__PURE__ */ (0, import_vue3.createElementVNode)("div", { class: "sm-test" }, [
  /* @__PURE__ */ (0, import_vue3.createElementVNode)("h1", null, "\u6211\u662Fsm-test\u5B50\u7EC4\u4EF6")
], -1);
function __vue_render__(_ctx, _cache) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(import_vue3.Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64);
}
__vue_sfc__.render = __vue_render__;
var stdin_default = __vue_sfc__;
