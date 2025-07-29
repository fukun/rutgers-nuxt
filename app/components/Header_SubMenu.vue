<template>
    <div class="flex flex-wrap" :style="{ paddingLeft: `${paddingLeft}px` }">
        <div v-for="(item, idx) of list1" :key="idx" class="w-[31%]">
            <a href="" class="flex items-center text-[#CC0033] font-bold pr-[5px]">
                <span class="text-[17px]">{{ item.title }}</span>
                <ChevronRightIcon class="w-[18px] h-[18px] ml-[5px]"></ChevronRightIcon>
            </a>
            <div class="pr-[20px] text-[16px]">{{ item.desc }}</div>
        </div>
        <div class="flex flex-col">
            <a v-for="(item, idx) of children" :key="idx" href="" class="text-[17px] my-[7px] hover:underline">{{
                item.name
            }}</a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

const props = defineProps<{
    children: {
        name: string;
        path: string;
    }[];
    paddingLeft?: number;
}>();

const list1 = ref<{
    title: string;
    desc: string;
}[]>([
]);


</script>