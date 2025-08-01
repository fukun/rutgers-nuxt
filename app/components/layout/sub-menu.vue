<template>
    <div class="flex flex-wrap" :style="{ paddingLeft: `${paddingLeft}px` }">
        <div class="flex flex-col">
            <a v-for="(item, idx) of children" :key="idx" href=""
                class="text-[17px] my-[7px] hover:underline relative flex items-center">
                <span>{{ item.name }}</span>
                <!-- <ChevronRightIcon class="w-[20px] h-[20px]"></ChevronRightIcon>
                <div class="dropdown-submenu-content">
                    <a href="https://www.business.rutgers.edu/faculty/miklos-vasarhelyi">Miklos Vasarhelyi</a>
                    <a href="https://www.business.rutgers.edu/faculty/michael-alles">Michael Alles</a>
                    <a href="https://www.business.rutgers.edu/faculty/hilal-atasoy">Hilal Atasoy</a>
                    <a href="https://www.business.rutgers.edu/faculty/helen-brown-liburd">Helen Brown-Liburd</a>
                    <a href="https://www.business.rutgers.edu/faculty/soohyun-cho">Soohyun Cho</a>
                    <a href="https://www.business.rutgers.edu/faculty/hussein-issa">Hussein Issa</a>
                    <a href="https://www.business.rutgers.edu/faculty/alexander-kogan">Alexander Kogan</a>
                    <a href="https://www.business.rutgers.edu/faculty/kyungha-kari-lee">Kyungha (Kari) Lee</a>
                    <a href="https://www.business.rutgers.edu/faculty/ann-medinets">Ann Medinets</a>
                    <a href="https://www.business.rutgers.edu/faculty/kevin-c-moffitt">Kevin C. Moffitt</a>
                    <a href="https://www.business.rutgers.edu/faculty/won-gyun-no">Won Gyun No</a>

                </div> -->
            </a>
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



</script>

<style>
.dropdown-submenu-content {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 2000;
    top: 32px;
    left: 100%;
}

.dropdown-submenu-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-submenu-content a:hover {
    background-color: #f1f1f1;
}
</style>