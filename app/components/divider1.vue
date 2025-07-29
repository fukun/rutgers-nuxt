<template>
    <div class="flex justify-center items-center gap-[30px] mb-[32px]">
        <div class="h-[3px] w-[40px] bg-[#ffd575]"></div>
        <div class="font-bold text-[17px]">{{ title }}</div>
        <div class="h-[3px] w-[40px] bg-[#ffd575]"></div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{ title: string }>();
</script>