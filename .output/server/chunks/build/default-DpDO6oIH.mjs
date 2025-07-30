import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { Bars4Icon, ChevronRightIcon } from '@heroicons/vue/24/solid';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header_SubMenu",
  __ssrInlineRender: true,
  props: {
    children: {},
    paddingLeft: {}
  },
  setup(__props) {
    const list1 = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-wrap",
        style: { paddingLeft: `${_ctx.paddingLeft}px` }
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(list1), (item, idx) => {
        _push(`<div class="w-[31%]"><a href="" class="flex items-center text-[#CC0033] font-bold pr-[5px]"><span class="text-[17px]">${ssrInterpolate(item.title)}</span>`);
        _push(ssrRenderComponent(unref(ChevronRightIcon), { class: "w-[18px] h-[18px] ml-[5px]" }, null, _parent));
        _push(`</a><div class="pr-[20px] text-[16px]">${ssrInterpolate(item.desc)}</div></div>`);
      });
      _push(`<!--]--><div class="flex flex-col"><!--[-->`);
      ssrRenderList(_ctx.children, (item, idx) => {
        _push(`<a href="" class="text-[17px] my-[7px] hover:underline">${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header_SubMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$2, { __name: "HeaderSubMenu" });
const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const menuData = [
      { name: "Home", path: "/" },
      {
        name: "About Us",
        path: "/",
        children: [
          { name: "History", path: "/" },
          { name: "Advisory board", path: "/" },
          { name: "Faculty", path: "/" },
          { name: "Ph.D students / Visiting Scholars", path: "/" },
          { name: "Alumni", path: "/" },
          { name: "Our Alliances", path: "/" }
        ]
      },
      {
        name: "Digital Library & Learning",
        path: "/",
        children: [
          { name: "Accounting Digital Library on Youtube ", path: "/" },
          { name: "Coursera", path: "/" },
          { name: "SWAM/BYOC ", path: "/" }
        ]
      },
      {
        name: "AIS Research",
        path: "/",
        children: [
          { name: "Publications", path: "/" },
          { name: "Current Research Projects ", path: "/" }
        ]
      },
      {
        name: "Seminars & Symposia",
        path: "/",
        children: [
          { name: "AIS & Accounting Weekly Seminars", path: "/" },
          { name: "WCARS", path: "/" },
          { name: "See More", path: "/" }
        ]
      }
    ];
    const menuKey = ref("");
    const children = computed(() => {
      return menuData.filter((item) => item.name === menuKey.value)?.[0]?.children ?? [];
    });
    const childrenPaddingLeft = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header_SubMenu = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky top-[0px] z-[1000]" }, _attrs))} data-v-2c6d898e><div class="bg-[#CC0033] h-[6px]" data-v-2c6d898e></div><div class="top-menu" data-v-2c6d898e><div class="w-[24px] overflow-visible" data-v-2c6d898e><img class="w-[250px] max-w-none"${ssrRenderAttr("src", _imports_0)} alt="" data-v-2c6d898e></div><ul class="flex items-center justify-center flex-grow" data-v-2c6d898e><!--[-->`);
      ssrRenderList(menuData, (item) => {
        _push(`<li class="${ssrRenderClass(`menu-li ${unref(menuKey) === item.name ? "menu-li-hover" : ""}`)}" data-v-2c6d898e>${ssrInterpolate(item.name)}</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(unref(Bars4Icon), { class: "size-[24px]" }, null, _parent));
      _push(`</div>`);
      if (unref(children).length) {
        _push(`<div class="absolute top-[85px] w-[100%] h-[calc(100vh-85px)] flex flex-col" data-v-2c6d898e><div class="bg-white pb-[30px]" data-v-2c6d898e>`);
        _push(ssrRenderComponent(_component_Header_SubMenu, {
          children: unref(children),
          "padding-left": unref(childrenPaddingLeft)
        }, null, _parent));
        _push(`</div><div class="bg-black/[0.55] flex-auto" data-v-2c6d898e></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-2c6d898e"]]), { __name: "Header" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DpDO6oIH.mjs.map
