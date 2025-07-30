import { defineComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { IdentificationIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "divider1",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center gap-[30px] mb-[32px]" }, _attrs))}><div class="h-[3px] w-[40px] bg-[#ffd575]"></div><div class="font-bold text-[17px]">${ssrInterpolate(_ctx.title)}</div><div class="h-[3px] w-[40px] bg-[#ffd575]"></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/divider1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "Divider1" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "a-red-outline",
  __ssrInlineRender: true,
  props: {
    title: {},
    targetUrl: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.targetUrl,
        class: "text-[#CC0033] border rounded flex px-[10px] py-[8px] hover:text-black cursor-pointer items-center w-fit"
      }, _attrs))}><span class="text-[13px] font-bold">${ssrInterpolate(_ctx.title)}</span>`);
      _push(ssrRenderComponent(unref(ChevronRightIcon), { class: "w-[16px] h-[16px] ml-[5px]" }, null, _parent));
      _push(`</a>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/a-red-outline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "ARedOutline" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "a-white-bg",
  __ssrInlineRender: true,
  props: {
    title: {},
    targetUrl: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.targetUrl,
        class: "text-[#CC0033] bg-white flex px-[10px] py-[8px] hover:text-black cursor-pointer items-center w-fit"
      }, _attrs))}><span class="text-[13px] font-bold">${ssrInterpolate(_ctx.title)}</span>`);
      _push(ssrRenderComponent(unref(ChevronRightIcon), { class: "w-[16px] h-[16px] ml-[5px]" }, null, _parent));
      _push(`</a>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/a-white-bg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "AWhiteBg" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_divider1 = __nuxt_component_0;
      const _component_a_red_outline = __nuxt_component_1;
      const _component_a_white_bg = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-766575e9><div class="h-[425px] bg-center bg-no-repeat bg-cover bg-[url(https://cloudinary.hbs.edu/hbsit/image/upload/s--7nNNGlCR--/f_auto,c_fill,w_1402,/v20200101/E312D046211DEAD6A46E0A972D7F5FB5.jpg)]" data-v-766575e9><div class="w-[1180px] flex mx-auto" data-v-766575e9><div class="flex-none w-[50%] text-white pt-[50px]" data-v-766575e9><div class="text-[34px] mb-[10px]" data-v-766575e9>This is Title -- Todo </div><div class="text-[17px]" data-v-766575e9>Rutgers Accounting Web Since 1994, Rutgers Accounting Web has been the center of accounting research. We have hosted the American Accounting Association, the Academy of Accounting Historians, the Ph.D. Project, the Government Accounting Standards Board, and more. Today we lead the field in research in the areas of Continuous Auditing, Enhanced Business Reporting, and are constantly seeking solutions to take advantage of the Real-Time Economy. </div><button class="bg-white rounded py-[16px] px-[20px] mt-[20px] font-bold text-[#CC0033] hover:text-black" data-v-766575e9>Button -----Todo</button></div><div class="flex-none w-[50%] pt-[50px] pl-[24px]" data-v-766575e9><iframe class="w-[100%] h-[325px]" src="https://www.youtube.com/embed/CJHY-AJmM2g?list=PLauepKFT6DK8A0FcO3U-OLnd-GD3cm3Sl" frameborder="0" data-v-766575e9></iframe></div></div></div><div class="container" data-v-766575e9><div class="pt-[40px] pb-[18px]" data-v-766575e9>Choose a subject area:</div><div class="flex flex-wrap justify-around gap-[20px]" data-v-766575e9><!--[-->`);
      ssrRenderList(8, (i) => {
        _push(`<a class="flex w-[280px] h-[94px] border-[1px] text-[#CC0033] justify-center items-center font-bold cursor-pointer rounded border-[#d2d2d2] hover:bg-black hover:text-white" data-v-766575e9>${ssrInterpolate(`todo-${i}`)}</a>`);
      });
      _push(`<!--]--></div></div><div class="h-[50px]" data-v-766575e9></div>`);
      _push(ssrRenderComponent(_component_divider1, { title: "Now Offering Launching Tech Ventures On-Demand – Todo" }, null, _parent));
      _push(`<a class="flex w-[978px] h-[216px] border-[#d2d2d2] border-[1px] rounded-[5px] hover:shadow-[1px_2px_0px_0px_#d2d2d2] m-[auto]" href="" data-v-766575e9><img class="w-[300px] h-[100%] flex-none" src="https://cloudinary.hbs.edu/hbsit/image/upload/s--ib6UR1DA--/f_auto,c_fill,h_213,w_380,/v20200101/176586340EE4EED70E32AECA017E7B2F.jpg" alt="" data-v-766575e9><div class="flex-auto px-[30px] py-[20px] flex flex-col" data-v-766575e9><div class="flex-auto" data-v-766575e9><div class="font-bold text-[24px] mb-[10px]" data-v-766575e9>Launching Tech Ventures</div><div class="text-[14px] text-[#59666f] mb-[10px]" data-v-766575e9>Professor Jeffrey Bussgang</div><div class="text-[17px]" data-v-766575e9>Gain proven frameworks to build a viable, valuable tech venture that can profitably scale and attract venture capital.</div></div><div class="flex" data-v-766575e9><div class="flex-auto text-[14px] font-bold" data-v-766575e9>$1,850</div><div class="flex-none flex items-center" data-v-766575e9><div class="text-[#59666f]" data-v-766575e9>Certificate</div>`);
      _push(ssrRenderComponent(unref(IdentificationIcon), { class: "w-[25px] h-[21px] ml-[5px]" }, null, _parent));
      _push(`</div></div></div></a><div class="h-[32px]" data-v-766575e9></div>`);
      _push(ssrRenderComponent(_component_divider1, { title: "Featured Courses – Todo" }, null, _parent));
      _push(`<div class="container flex flex-wrap justify-around" data-v-766575e9><!--[-->`);
      ssrRenderList(6, (i) => {
        _push(`<a class="flex flex-col w-[378px] h-[558px] mb-[20px] border-[#d2d2d2] border-[1px] rounded-[5px] hover:shadow-[1px_2px_0px_0px_#d2d2d2] m-[auto]" href="" data-v-766575e9><img class="w-[100%] h-[218px] flex-none" src="https://cloudinary.hbs.edu/hbsit/image/upload/s--rAdNs-QN--/f_auto,c_fill,h_213,w_380,/v20200101/FAFF951D46AA7EE6345188B9D3AFA5E1.jpg" alt="" data-v-766575e9><div class="flex-auto px-[30px] py-[20px] flex flex-col" data-v-766575e9><div class="flex-auto" data-v-766575e9><div class="font-bold text-[24px] mb-[10px]" data-v-766575e9>Launching Tech Todo${ssrInterpolate(i)}</div><div class="text-[14px] text-[#59666f] mb-[10px]" data-v-766575e9>Professor Jeffrey Bussgang</div><div class="text-[17px]" data-v-766575e9>Gain proven frameworks to build a viable, valuable tech venture that can profitably scale and attract venture capital.</div></div><div class="text-[14px] leading-[24px] mb-[5px]" data-v-766575e9><span data-v-766575e9>4 weeks, 5-6 hrs/week</span><br data-v-766575e9><span data-v-766575e9>Pay by September 18</span></div><div class="flex" data-v-766575e9><div class="flex-auto text-[14px] font-bold" data-v-766575e9>$1,850</div><div class="flex-none flex items-center" data-v-766575e9><div class="text-[#59666f]" data-v-766575e9>Certificate</div>`);
        _push(ssrRenderComponent(unref(IdentificationIcon), { class: "w-[25px] h-[21px] ml-[5px]" }, null, _parent));
        _push(`</div></div></div></a>`);
      });
      _push(`<!--]--><div class="pt-[12px] flex justify-center" data-v-766575e9>`);
      _push(ssrRenderComponent(_component_a_red_outline, { title: "Explore all Courses" }, null, _parent));
      _push(`</div></div><div class="h-[64px]" data-v-766575e9></div>`);
      _push(ssrRenderComponent(_component_divider1, { title: "Most Comprehensive Business Program – Todo" }, null, _parent));
      _push(`<a class="flex w-[978px] h-[216px] border-[#d2d2d2] border-[1px] rounded-[5px] hover:shadow-[1px_2px_0px_0px_#d2d2d2] m-[auto]" href="" data-v-766575e9><img class="w-[300px] h-[100%] flex-none" src="https://cloudinary.hbs.edu/hbsit/image/upload/s--StsVwFQr--/f_auto,c_fill,h_213,w_380,/v20200101/E35D4664D1081E2EFC38E8A2006ECC49.jpg" alt="" data-v-766575e9><div class="flex-auto px-[30px] py-[20px] flex flex-col" data-v-766575e9><div class="flex-auto" data-v-766575e9><div class="font-bold text-[24px] mb-[10px]" data-v-766575e9>Launching Tech Ventures</div><div class="text-[14px] text-[#59666f] mb-[10px]" data-v-766575e9>Professor Jeffrey Bussgang</div><div class="text-[17px]" data-v-766575e9>Gain proven frameworks to build a viable, valuable tech venture that can profitably scale and attract venture capital.</div></div><div class="flex" data-v-766575e9><div class="flex-auto text-[14px] font-bold" data-v-766575e9>$1,850</div><div class="flex-none flex items-center" data-v-766575e9><div class="text-[#59666f]" data-v-766575e9>Certificate</div>`);
      _push(ssrRenderComponent(unref(IdentificationIcon), { class: "w-[25px] h-[21px] ml-[5px]" }, null, _parent));
      _push(`</div></div></div></a><div class="light-gray1-bg" data-v-766575e9><div class="container py-[80px]" data-v-766575e9>`);
      _push(ssrRenderComponent(_component_divider1, { title: "Latest HBS Online Insights – Todo" }, null, _parent));
      _push(`<div class="border border-[#d2d2d2] rounded p-[25px] bg-white flex" data-v-766575e9><img class="w-[385px] h-[268px]" src="https://cloudinary.hbs.edu/hbsit/image/upload/s--r-dFw7-h--/f_auto,c_fill,h_265,w_390,/v20200101/7A1977A881C91C045779D7257ABC170B.jpg" alt="" data-v-766575e9><div class="ml-[40px] flex items-center" data-v-766575e9><div data-v-766575e9><a class="text-[24px] text-[#CC0033] font-bold mb-[8px]" href="" data-v-766575e9>Enroll Now</a><div class="mb-[20px] text-[17px]" data-v-766575e9>This flowchart will help you determine which HBS Online entrepreneurship and innovation course best aligns with your career level and experience, learning objectives, and educational goals.</div>`);
      _push(ssrRenderComponent(_component_a_red_outline, { title: "Access Your Free Flowchart" }, null, _parent));
      _push(`</div></div></div><div class="h-[20px]" data-v-766575e9></div><div class="border border-[#d2d2d2] rounded p-[25px] bg-white flex" data-v-766575e9><img class="w-[385px] h-[268px]" src="https://cloudinary.hbs.edu/hbsit/image/upload/s--FL3L4hLT--/f_auto,c_fill,h_265,w_390,/v20200101/49FC454C51491A9A4DB8F810D1E0CD63.jpg" alt="" data-v-766575e9><div class="ml-[40px] flex items-center" data-v-766575e9><div data-v-766575e9><div class="text-[13px] font-bold" data-v-766575e9>Free Entrepreneurship and Innovation Flowchart</div><a class="text-[24px] text-[#CC0033] font-bold mb-[8px]" href="" data-v-766575e9>Which HBS Online Entrepreneurship &amp; Innovation Course is Right for You?</a><div class="mb-[20px] text-[17px]" data-v-766575e9>This flowchart will help you determine which HBS Online entrepreneurship and innovation course best aligns with your career level and experience, learning objectives, and educational goals.</div>`);
      _push(ssrRenderComponent(_component_a_red_outline, { title: "Access Your Free Flowchart" }, null, _parent));
      _push(`</div></div></div></div></div><div class="need-more-info" data-v-766575e9><div class="py-[65px] px-[120px] text-white flex flex-col items-center" data-v-766575e9><div class="text-[24px] font-bold mb-[6px]" data-v-766575e9>Need More Information?</div><div class="text-[17px] mb-[28px]" data-v-766575e9>If you&#39;re thinking about how to prepare for the next stage in your career, we can help. Request more information today.</div>`);
      _push(ssrRenderComponent(_component_a_white_bg, { title: "Request More Info" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-766575e9"]]);

export { index as default };
//# sourceMappingURL=index-Dl1PbA-4.mjs.map
