<template>
    <div class="sticky top-[0px] z-[1000] ">
        <div class="bg-[#CC0033] h-[6px]"></div>

        <div class="top-menu">
            <div class="w-[24px] overflow-visible">
                <img class="w-[250px] max-w-none" src="/logo.png" alt="">
            </div>
            <ul class="flex items-center justify-center flex-grow">
                <li :class="`menu-li ${menuKey === item.name ? 'menu-li-hover' : ''}`" v-for="item of menuData"
                    :key="item.name" @mouseenter="e => onMouseEnter(e, item.name)">{{ item.name }}</li>
            </ul>
            <Bars4Icon class="size-[24px]"></Bars4Icon>
        </div>
        <div v-if="children.length" class="absolute top-[85px] w-[100%] h-[calc(100vh-85px)] flex flex-col ">
            <div class="bg-white pb-[30px]">
                <Header_SubMenu :children="children" :padding-left="childrenPaddingLeft"></Header_SubMenu>
            </div>
            <div class="bg-black/[0.55] flex-auto" @mouseenter="menuKey = ''"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Bars4Icon } from '@heroicons/vue/24/solid'

const menuData = [
    { name: "Home", path: "/" },
    {
        name: "About Us", path: "/", children: [
            { name: "History", path: "/" },
            { name: "Advisory board", path: "/" },
            { name: "Faculty", path: "/" },
            { name: "Ph.D students / Visiting Scholars", path: "/" },
            { name: "Alumni", path: "/" },
            { name: "Our Alliances", path: "/" },
        ]
    },
    {
        name: "Digital Library & Learning", path: "/", children: [
            { name: "Accounting Digital Library on Youtube ", path: "/" },
            { name: "Coursera", path: "/" },
            { name: "SWAM/BYOC ", path: "/" },
        ]
    },
    {
        name: "AIS Research", path: "/", children: [
            { name: "Publications", path: "/" },
            { name: "Current Research Projects ", path: "/" },
        ]
    },
    {
        name: "Seminars & Symposia", path: "/", children: [
            { name: "AIS & Accounting Weekly Seminars", path: "/" },
            { name: "WCARS", path: "/" },
            { name: "See More", path: "/" },
        ]
    },
];

const menuKey = ref('');
const children = computed(() => {
    return menuData.filter(item => item.name === menuKey.value)?.[0]?.children ?? [];
})

const childrenPaddingLeft = ref(0);
function onMouseEnter(e: MouseEvent, key: string) {
    menuKey.value = key;
    childrenPaddingLeft.value = (e.target as any)?.offsetLeft ?? 0;
}
</script>
<style scoped>
@reference "tailwindcss";

.top-menu {
    @apply h-[100px] px-[30px] flex justify-between items-center bg-white;
    box-shadow: 0px 6px 7px -5px rgba(0, 0, 0, 0.2);
}

.menu-li {
    @apply text-[19px] mx-[20px] cursor-pointer border-[#FFD575];
}

.menu-li-hover {
    @apply border-b-2;
    text-shadow: 0.25px 0 0 currentColor, -0.25px 0 0 currentColor;
}
</style>