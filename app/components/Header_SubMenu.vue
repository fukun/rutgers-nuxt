<template>
    <div class="w-[1180px] flex flex-wrap">
        <div v-for="(item, idx) of list1" :key="idx" class="w-[31%]">
            <a href="" class="flex items-center text-[#CC0033] font-bold">
                <span class="text-[17px]">{{ item.title }}</span>
                <ChevronRightIcon class="w-[18px] h-[18px] ml-[5px]"></ChevronRightIcon>
            </a>
            <div class="pr-[20px] text-[15px]">{{ item.desc }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid';


const list1 = ref([
    { title: 'Learning Experience', desc: 'Master real-world business skills with our immersive platform and engaged community.' },
    { title: 'Certificates, Credentials, & Credits', desc: 'Learn how completing courses can boost your resume and move your career forward.' },
    { title: 'Learning Tracks', desc: 'Take your career to the next level with this specialization.' },
]);

const list2 = ref([
    {
        group: 'Financing & Policies',
        items: [
            { title: 'Employer Reimbursement' },
            { title: 'ayment & Financial Aid' },
            { title: 'Policies' },
        ],
    },
    {
        group: 'Connect',
        items: [
            { title: 'Student Stories' },
            { title: 'Community' },
        ],
    },
    {
        group: 'Need Help?',
        items: [
            { title: 'Frequently Asked Questions' },
            { title: 'Request Information' },
            { title: 'Support Portal' },
        ],
    }
]);
</script>