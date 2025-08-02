<template>
    <div class="container flex flex-wrap justify-around">
        <a v-for="i of 6"
            class="flex flex-col w-[378px] h-[558px] mb-[20px] border-[#d2d2d2] border-[1px] rounded-[5px] hover:shadow-[1px_2px_0px_0px_#d2d2d2] m-[auto]"
            href="">
            <img class="w-[100%] h-[218px] flex-none"
                src="https://cloudinary.hbs.edu/hbsit/image/upload/s--rAdNs-QN--/f_auto,c_fill,h_213,w_380,/v20200101/FAFF951D46AA7EE6345188B9D3AFA5E1.jpg"
                alt="">
            <div class="flex-auto px-[30px] py-[20px] flex flex-col">
                <div class="flex-auto">
                    <div class="font-bold text-[24px] mb-[10px]">Launching Tech Todo{{ i }}</div>
                    <div class="text-[14px] text-[#59666f] mb-[10px]">Professor Jeffrey Bussgang</div>
                    <div class="text-[17px]">Gain proven frameworks to build a viable, valuable tech venture that
                        can
                        profitably scale and
                        attract venture capital.</div>
                </div>
                <div class="text-[14px] leading-[24px] mb-[5px]">
                    <span>4 weeks, 5-6 hrs/week</span>
                    <br />
                    <span>Pay by September 18</span>
                </div>
                <div class="flex">
                    <div class="flex-auto text-[14px] font-bold">$1,850</div>
                    <div class="flex-none flex items-center">
                        <div class="text-[#59666f]">Certificate</div>
                        <IdentificationIcon class="w-[25px] h-[21px] ml-[5px]"></IdentificationIcon>
                    </div>
                </div>
            </div>
        </a>
        <div class="pt-[12px] flex justify-center">
            <ui-a-red-outline title="Explore all Courses"></ui-a-red-outline>
        </div>
        <div class="h-[64px] w-[100%]"></div>
    </div>
</template>
<script lang="ts" setup>
import { IdentificationIcon } from '@heroicons/vue/24/outline';


</script>
