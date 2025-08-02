<template>
    <section class="container">
        <div class="pt-[40px] pb-[18px]">Advance Your Career with Rutgers Accounting Courses:</div>
        <div class="flex flex-wrap justify-around gap-[20px]">
            <a v-for="cate of list" :key="cate"
                class="flex w-[280px] h-[94px] border-[1px] text-[#CC0033] justify-center items-center font-bold cursor-pointer rounded border-[#d2d2d2] hover:bg-black hover:text-white">
                {{ `${cate}`
                }}</a>
        </div>
        <div class="h-[50px]"></div>
    </section>
</template>
<script lang="ts" setup>
const list = ['Undergraduate', 'Graduate', 'PhD Level', 'Audit Analytics', 'SWAM/BYOC', 'Coursera', 'AI Workshop', 'WCARS'];
</script>