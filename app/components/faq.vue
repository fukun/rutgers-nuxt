<template>
    <div class="py-[20px] border-t">
        <div class="flex justify-between items-center cursor-pointer" @click="toggle()">
            <span class="text-[17px]">{{ title }}</span>

            <MinusIcon class="w-[20px] h-[20px]" v-if="expanded"></MinusIcon>
            <PlusIcon class="w-[20px] h-[20px]" v-else></PlusIcon>
        </div>
        <div v-if="expanded" class="mt-[20px]">
            {{ content }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/solid';

const props = defineProps<{ title: string; content: string }>();
const expanded = ref(false);

function toggle() {
    expanded.value = !expanded.value;
}
</script>