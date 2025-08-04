<template>
    <div class="container flex flex-wrap justify-around">
        <a v-for="item of wcars"
            class="flex flex-col w-[378px] h-[558px] mb-[20px] border-[#d2d2d2] border-[1px] rounded-[5px] hover:shadow-[1px_2px_0px_0px_#d2d2d2] m-[auto]"
            :href="`/${item.id}wcars.html`">
            <img class="w-[100%] h-[218px] flex-none" :src="item.img" alt="">
            <div class="flex-auto px-[30px] py-[20px] flex flex-col">
                <div class="flex-auto">
                    <div class="font-bold text-[24px] mb-[10px]">{{ item.title }}</div>
                    <div class="text-[14px] text-[#59666f] mb-[10px]">{{ item.city }}</div>
                    <div class="text-[17px]"></div>
                </div>
                <div class="text-[14px] leading-[24px] mb-[5px]">
                </div>
                <div class="flex">
                    <div class="flex-auto text-[14px] font-bold">{{ item.date }}</div>
                </div>
            </div>
        </a>
        <div class="pt-[12px] flex justify-center w-[100%]">
            <ui-a-red-outline title="Explore all wcars"></ui-a-red-outline>
        </div>
        <div class="h-[64px] w-[100%]"></div>
    </div>
</template>
<script lang="ts" setup>

const { data } = await useAsyncData('wcars', () => {
    return queryCollection('wcars')
        .all()
});

const wcars = computed(() => (data.value?.map(item => item.meta.body) ?? []).sort((a, b) => b.id - a.id).slice(0, 3));

</script>
