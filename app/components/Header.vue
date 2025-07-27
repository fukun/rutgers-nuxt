<template>
    <div class="sticky top-[0px] z-[1000] ">
        <div class="bg-[#CC0033] h-[6px]"></div>

        <div class="top-menu">
            <div class="w-[24px] overflow-visible">
                <img class="w-[200px] max-w-none" src="/logo.png" alt="">
            </div>
            <ul class="flex items-center justify-center flex-grow">
                <li class="first-menu-li">Home</li>
                <li class="first-menu-li">Accounting Digital Library </li>
                <li class="first-menu-li">Car Lab</li>
            </ul>
            <Bars4Icon class="size-[24px]"></Bars4Icon>
        </div>
        <div class="absolute top-[102px] w-[100%] h-[calc(100vh-102px)] flex flex-col ">
            <div class="bg-white pb-[40px] flex justify-center">
                <Header_SubMenu></Header_SubMenu>
            </div>
            <div class="bg-black/[0.55] flex-auto"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Bars4Icon } from '@heroicons/vue/24/solid'

</script>
<style scoped>
@reference "tailwindcss";

.top-menu {
    @apply h-[100px] px-[30px] flex justify-between items-center bg-white;
    box-shadow: 0px 6px 7px -5px rgba(0, 0, 0, 0.2);
}

.first-menu-li {
    @apply text-[19px] mx-[20px] cursor-pointer border-[#FFD575];
}

.first-menu-li:hover {
    @apply hover:border-b-2;
    text-shadow: 0.25px 0 0 currentColor, -0.25px 0 0 currentColor;
}
</style>