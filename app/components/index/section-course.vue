<template>
    <section class="container">
        <div class="pt-[40px] pb-[18px]">Advance Your Career with Rutgers Accounting Courses:</div>
        <div class="flex flex-wrap justify-around gap-[20px]">
            <NuxtLink v-for="cate of list" :key="cate" :to="getCategoryLink(cate)"
                class="flex w-[280px] h-[94px] border-[1px] text-[#CC0033] justify-center items-center font-bold cursor-pointer rounded border-[#d2d2d2] hover:bg-black hover:text-white transition-colors">
                {{ cate }}
            </NuxtLink>
        </div>
        <div class="h-[50px]"></div>
    </section>
</template>

<script lang="ts" setup>
const list = ['Undergraduate', 'Graduate', 'PhD Level', 'Audit Analytics', 'SWAM/BYOC', 'Coursera', 'AI Workshop', 'WCARS'];

// 将类别名称转换为URL友好的格式
function getCategoryLink(category: string): string {
    // 将空格和特殊字符替换为连字符，并转换为小写
    const formattedCategory = category;

    return `/courses/${formattedCategory}`;
}
</script>