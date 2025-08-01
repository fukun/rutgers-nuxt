<template>
    <section class="ink-black-bg text-white">
        <div class="container">
            <div class="w-[780px] mx-auto border-b">
                <div class="flex justify-between items-center pt-[40px] pb-[30px]">
                    <span class="text-[24px]">Top FAQs</span>
                    <a class="text-[17px] hover:underline" href="">Top FAQs</a>
                </div>
                <div>
                    <index-faq v-for="i of 8" :key="i" :title="`${i}、How are HBS Online courses delivered`"
                        content="Our platform features short, highly produced videos of HBS faculty and guest business experts, interactive graphs and exercises, cold calls to keep you engaged, and opportunities to contribute to a vibrant online community.">
                    </index-faq>
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
    </section>
</template>