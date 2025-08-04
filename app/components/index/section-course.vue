<template>
    <section id="courses" class="container">
        <div class="pt-[40px] pb-[18px]">Advance Your Career with Rutgers Accounting Courses:</div>
        <div class="flex flex-wrap justify-around gap-[20px]">
            <NuxtLink v-for="cate of list" :key="cate.value" :to="getCategoryLink(cate.value)"
                class="flex w-[280px] h-[94px] border-[1px] text-[#CC0033] justify-center items-center font-bold cursor-pointer rounded border-[#d2d2d2] hover:bg-black hover:text-white transition-colors">
                {{ cate.label }}
            </NuxtLink>
        </div>
        <div class="h-[50px]"></div>
    </section>
</template>

<script lang="ts" setup>
const list = [
    { label: 'Undergraduate', value: 'Undergraduate', },
    { label: 'Graduate', value: 'Graduate', },
    { label: 'PhD Level', value: 'PhD_Level', },
    { label: 'Audit Analytics', value: 'Audit_Analytics', },
    { label: 'SWAM/BYOC', value: 'SWAM_BYOC', },
    { label: 'Coursera', value: 'Coursera', },
    { label: 'AI Workshop', value: 'AI_Workshop', },
    { label: 'WCARS', value: 'WCARS', },
];

function getCategoryLink(category: string): string {

    return `/courses/${category}`;
}
</script>