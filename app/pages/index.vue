<template>
    <div>
        <div
            class="h-[425px] bg-center bg-no-repeat bg-cover bg-[url(https://cloudinary.hbs.edu/hbsit/image/upload/s--7nNNGlCR--/f_auto,c_fill,w_1402,/v20200101/E312D046211DEAD6A46E0A972D7F5FB5.jpg)]">
            <div class="w-[1180px] flex mx-auto">
                <div class="flex-none w-[50%] text-white pt-[50px]">
                    <div class="text-[34px] mb-[10px]">This is Title -- Todo </div>
                    <div class="text-[17px]">Rutgers Accounting Web
                        Since 1994, Rutgers Accounting Web has been the center of accounting research. We have hosted
                        the American Accounting Association, the Academy of Accounting Historians, the Ph.D. Project,
                        the Government Accounting Standards Board, and more.

                        Today we lead the field in research in the areas of Continuous Auditing, Enhanced Business
                        Reporting, and are constantly seeking solutions to take advantage of the Real-Time Economy.
                    </div>
                    <button
                        class="bg-white rounded py-[16px] px-[20px] mt-[20px] font-bold text-[#CC0033] hover:text-black">Button
                        -----Todo</button>
                </div>
                <div class="flex-none w-[50%] pt-[50px] pl-[24px]">
                    <iframe class="w-[100%] h-[325px]"
                        src="https://www.youtube.com/embed/CJHY-AJmM2g?list=PLauepKFT6DK8A0FcO3U-OLnd-GD3cm3Sl"
                        frameborder="0"></iframe>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="pt-[40px] pb-[18px]">Choose a subject area:</div>
            <div class="flex flex-wrap justify-around gap-[20px]">
                <a v-for="i in 8" :key="i"
                    class="flex w-[280px] h-[94px] border-[1px] text-[#CC0033] justify-center items-center font-bold cursor-pointer rounded border-[#d2d2d2] hover:bg-black hover:text-white">
                    {{ `todo-${i}`
                    }}</a>
            </div>
        </div>
        <div class="h-[50px]"></div>
        <divider1 title="Now Offering Launching Tech Ventures On-Demand – Todo"></divider1>
        <a class="flex w-[978px] h-[216px] border-[#d2d2d2] border-[1px] rounded-[5px] hover:shadow-[1px_2px_0px_0px_#d2d2d2] m-[auto]"
            href="">
            <img class="w-[300px] h-[100%] flex-none"
                src="https://cloudinary.hbs.edu/hbsit/image/upload/s--ib6UR1DA--/f_auto,c_fill,h_213,w_380,/v20200101/176586340EE4EED70E32AECA017E7B2F.jpg"
                alt="">
            <div class="flex-auto px-[30px] py-[20px] flex flex-col">
                <div class="flex-auto">
                    <div class="font-bold text-[24px] mb-[10px]">Launching Tech Ventures</div>
                    <div class="text-[14px] text-[#59666f] mb-[10px]">Professor Jeffrey Bussgang</div>
                    <div class="text-[17px]">Gain proven frameworks to build a viable, valuable tech venture that can
                        profitably scale and
                        attract venture capital.</div>
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
        <div class="h-[32px]"></div>
        <divider1 title="Featured Courses – Todo"></divider1>
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
                <a-red-outline title="Explore all Courses"></a-red-outline>
            </div>
        </div>
        <div class="h-[64px]"></div>
        <divider1 title="Most Comprehensive Business Program – Todo"></divider1>
        <a class="flex w-[978px] h-[216px] border-[#d2d2d2] border-[1px] rounded-[5px] hover:shadow-[1px_2px_0px_0px_#d2d2d2] m-[auto]"
            href="">
            <img class="w-[300px] h-[100%] flex-none"
                src="https://cloudinary.hbs.edu/hbsit/image/upload/s--StsVwFQr--/f_auto,c_fill,h_213,w_380,/v20200101/E35D4664D1081E2EFC38E8A2006ECC49.jpg"
                alt="">
            <div class="flex-auto px-[30px] py-[20px] flex flex-col">
                <div class="flex-auto">
                    <div class="font-bold text-[24px] mb-[10px]">Launching Tech Ventures</div>
                    <div class="text-[14px] text-[#59666f] mb-[10px]">Professor Jeffrey Bussgang</div>
                    <div class="text-[17px]">Gain proven frameworks to build a viable, valuable tech venture that can
                        profitably scale and
                        attract venture capital.</div>
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
        <div class="light-gray1-bg">
            <div class="container py-[80px]">
                <divider1 title="Latest HBS Online Insights – Todo"></divider1>
                <div class="border border-[#d2d2d2] rounded p-[25px] bg-white flex">
                    <img class="w-[385px] h-[268px]"
                        src="https://cloudinary.hbs.edu/hbsit/image/upload/s--r-dFw7-h--/f_auto,c_fill,h_265,w_390,/v20200101/7A1977A881C91C045779D7257ABC170B.jpg"
                        alt="">
                    <div class="ml-[40px] flex items-center">
                        <div>
                            <a class="text-[24px] text-[#CC0033] font-bold mb-[8px]" href="">Enroll Now</a>
                            <div class="mb-[20px] text-[17px]">This flowchart will help you determine which HBS Online
                                entrepreneurship
                                and innovation
                                course best aligns with your career level and experience, learning objectives, and
                                educational goals.</div>
                            <a-red-outline title="Access Your Free Flowchart"></a-red-outline>
                        </div>
                    </div>
                </div>
                <div class="h-[20px]"></div>
                <div class="border border-[#d2d2d2] rounded p-[25px] bg-white flex">
                    <img class="w-[385px] h-[268px]"
                        src="https://cloudinary.hbs.edu/hbsit/image/upload/s--FL3L4hLT--/f_auto,c_fill,h_265,w_390,/v20200101/49FC454C51491A9A4DB8F810D1E0CD63.jpg"
                        alt="">
                    <div class="ml-[40px] flex items-center">
                        <div>
                            <div class="text-[13px] font-bold">Free Entrepreneurship and Innovation Flowchart</div>
                            <a class="text-[24px] text-[#CC0033] font-bold mb-[8px]" href="">Which HBS Online
                                Entrepreneurship &
                                Innovation
                                Course is Right
                                for You?</a>
                            <div class="mb-[20px] text-[17px]">This flowchart will help you determine which HBS Online
                                entrepreneurship
                                and innovation
                                course best aligns with your career level and experience, learning objectives, and
                                educational goals.</div>
                            <a-red-outline title="Access Your Free Flowchart"></a-red-outline>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="need-more-info">
            <div class="py-[65px] px-[120px] text-white flex flex-col items-center">
                <div class="text-[24px] font-bold mb-[6px]">Need More Information?</div>
                <div class="text-[17px] mb-[28px]">If you're thinking about how to prepare for the next stage in your
                    career, we can help. Request
                    more information today.</div>
                <a-white-bg title="Request More Info"></a-white-bg>
            </div>
        </div>
        <div class="ink-black-bg text-white">
            <div class="container">
                <div class="w-[780px] mx-auto border-b">
                    <div class="flex justify-between items-center pt-[40px] pb-[30px]">
                        <span class="text-[24px]">Top FAQs</span>
                        <a class="text-[17px] hover:underline" href="">Top FAQs</a>
                    </div>
                    <div>
                        <faq v-for="i of 8" :key="i" :title="`${i}、How are HBS Online courses delivered`"
                            content="Our platform features short, highly produced videos of HBS faculty and guest business experts, interactive graphs and exercises, cold calls to keep you engaged, and opportunities to contribute to a vibrant online community.">
                        </faq>
                    </div>
                </div>
                <div class="h-[70px]"></div>
                <div class="flex justify-between border-t pt-[20px]">
                    <div></div>
                    <div class="flex gap-[18px]">
                        <a href="">
                            <img class="social-icon-button" src="~/assets/svg/twitter.svg" alt="">
                        </a>
                        <a href="">
                            <img class="social-icon-button" src="~/assets/svg/facebook.svg" alt="">
                        </a>
                        <a href="">
                            <img class="social-icon-button" src="~/assets/svg/linkedin.svg" alt="">
                        </a>
                        <a href="">
                            <img class="social-icon-button" src="~/assets/svg/youtube.svg" alt="">
                        </a>
                        <a href="">
                            <img class="social-icon-button" src="~/assets/svg/instagram.svg" alt="">
                        </a>
                        <a href="">
                            <img class="social-icon-button" src="~/assets/svg/tiktok.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="h-[50px]"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { IdentificationIcon } from '@heroicons/vue/24/outline';


</script>
<style lang="css" scoped>
.need-more-info {
    background-color: #a41034;
    background-image: linear-gradient(121deg, transparent 85%, #891f34 85%), linear-gradient(51deg, #891f34 15%, transparent 15%);
}

.social-icon-button {
    @apply cursor-pointer opacity-80 hover:opacity-100 h-[22px];
}
</style>