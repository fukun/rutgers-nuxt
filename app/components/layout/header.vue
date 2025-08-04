<template>
    <div class="sticky top-[0px] z-[1000] ">
        <div class="bg-[#CC0033] h-[6px]"></div>

        <div class="top-menu">
            <div class="w-[24px] overflow-visible">
                <img class="w-[250px] max-w-none" src="/logo.png" alt="">
            </div>
            <ul class="flex items-center justify-center flex-grow">
                <li :class="`menu-li ${menuKey === item.name ? 'menu-li-hover' : ''}`" v-for="item of menuData"
                    :key="item.name" @mouseenter="e => onMouseEnter(e, item.name)">
                    <a :href="item.path">{{ item.name }}</a>
                </li>
            </ul>
            <Bars4Icon class="size-[24px]"></Bars4Icon>
        </div>
        <div v-if="children.length" class="absolute top-[85px] w-[100%] h-[calc(100vh-85px)] flex flex-col ">
            <div class="bg-white pb-[30px]">
                <layout-sub-menu :list="children" :padding-left="childrenPaddingLeft"></layout-sub-menu>
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
        name: "Digital Library & Learning", path: "#courses", children: [
            { name: "Accounting Digital Library on Youtube ", path: "/" },
            {
                name: "Coursera", path: "/", children: [
                    { name: 'AI Ethics in Business', path: 'https://coursera.org/learn/ai-ethics-business' },
                    { name: 'Generative AI & Governmental Financial Reporting', path: 'https://coursera.org/learn/gen-ai-gov-financial-reporting' },
                    { name: 'Generative AI and ESG', path: 'https://coursera.org/learn/genai-and-esg' },
                    { name: 'RPA in Accounting and Auditing', path: 'https://coursera.org/learn/robotic-process-automation-rpa' },
                ]
            },
            { name: "SWAM/BYOC ", path: "/" },
        ]
    },
    {
        name: "AIS Research", path: "/", children: [
            { name: "Publications", path: "/" },
        ]
    },
    {
        name: "Seminars & Symposia", path: "#wcars", children: [
            { name: "AIS & Accounting Weekly Seminars", path: "/" },
            { name: "WCARS", path: "/" },
            { name: "See More", path: "/" },
        ]
    },
    {
        name: "About Us", path: "/", children: [
            { name: "History", path: "/" },
            { name: "Advisory board", path: "/" },
            {
                name: "Faculty", path: "/", children: [
                    { name: 'Miklos Vasarhelyi', path: 'https://www.business.rutgers.edu/faculty/miklos-vasarhelyi' },
                    { name: 'Michael Alles', path: 'https://www.business.rutgers.edu/faculty/michael-alles' },
                    { name: 'Hilal Atasoy', path: 'https://www.business.rutgers.edu/faculty/hilal-atasoy' },
                    { name: 'Helen Brown-Liburd', path: 'https://www.business.rutgers.edu/faculty/helen-brown-liburd' },
                    { name: 'Soohyun Cho', path: 'https://www.business.rutgers.edu/faculty/soohyun-cho' },
                    { name: 'Hussein Issa', path: 'https://www.business.rutgers.edu/faculty/hussein-issa' },
                    { name: 'Alexander Kogan', path: 'https://www.business.rutgers.edu/faculty/alexander-kogan' },
                    { name: 'Kyungha (Kari) Lee', path: 'https://www.business.rutgers.edu/faculty/kyungha-kari-lee' },
                    { name: 'Ann Medinets', path: 'https://www.business.rutgers.edu/faculty/ann-medinets' },
                    { name: 'Kevin C. Moffitt', path: 'https://www.business.rutgers.edu/faculty/kevin-c-moffitt' },
                    { name: 'Won Gyun No', path: 'https://www.business.rutgers.edu/faculty/won-gyun-no' },
                ]
            },
            { name: "Ph.D students / Visiting Scholars", path: "/" },
            { name: "Alumni", path: "/" },
            { name: "Our Alliances", path: "/" },
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