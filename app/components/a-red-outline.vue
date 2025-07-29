<template>
    <a :href="targetUrl"
        class="text-[#CC0033] border rounded flex px-[10px] py-[8px] hover:text-black cursor-pointer items-center w-fit">
        <span class="text-[13px] font-bold">{{ title }}</span>
        <ChevronRightIcon class="w-[16px] h-[16px] ml-[5px] "></ChevronRightIcon>
    </a>
</template>
<script lang="ts" setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
    title: string;
    targetUrl?: string;
}>()
</script>