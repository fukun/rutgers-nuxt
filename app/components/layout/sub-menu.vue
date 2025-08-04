<template>
    <div class="flex flex-wrap" :style="{ paddingLeft: `${paddingLeft}px` }">
        <div class="flex flex-col">
            <div v-for="(item, idx) of list" :key="idx" class="relative" @mouseenter="startTimer(idx)"
                @mouseleave="startTimer(idx)" ref="menuItems">
                <a :href="item.path" class="text-[17px] my-[7px] hover:underline flex items-center justify-between">
                    <span>{{ item.name }}</span>
                    <ChevronRightIcon v-if="item.children && item.children.length > 0"
                        class="ml-1 w-4 h-4 transition-transform duration-200"
                        :class="openSubmenuIndex === idx ? 'rotate-90' : ''" />
                </a>
                <!-- 子菜单悬浮层 -->
                <div v-if="item.children && item.children.length > 0"
                    class="absolute top-0 w-60 bg-white shadow-lg z-20 rounded transition-opacity duration-200 submenu-container"
                    :class="{
                        'left-full ml-1': !shouldShowLeft[idx],
                        'right-full mr-1': shouldShowLeft[idx],
                        'opacity-0 invisible': openSubmenuIndex !== idx,
                        'opacity-100 visible': openSubmenuIndex === idx
                    }" @mouseenter="clearTimer" @mouseleave="startTimer(null)">
                    <div class="flex flex-col py-2">
                        <a v-for="(child, childIdx) in item.children" :key="childIdx" :href="child.path"
                            class="text-[17px] px-4 py-3 hover:bg-gray-100 flex items-center">
                            <span>{{ child.name }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
    list: {
        name: string;
        path: string;
        children?: {
            name: string;
            path: string;
        }[]
    }[];
    paddingLeft?: number;
}>();

const openSubmenuIndex = ref<number | null>(null)
const shouldShowLeft = ref<boolean[]>([])
const timers = ref<number | null>(null)
const menuItems = ref<HTMLElement[]>([])

const checkPosition = (index: number) => {
    const element = menuItems.value[index]
    if (!element) return

    const rect = element.getBoundingClientRect()
    const submenuWidth = 240 // w-60 = 240px

    // 检查右侧是否有足够空间显示子菜单
    const hasSpaceOnRight = rect.right + submenuWidth <= window.innerWidth
    const hasSpaceOnLeft = rect.left - submenuWidth >= 0

    // 如果右侧没有足够空间，且左侧有足够空间，则在左侧显示
    const showLeft = !hasSpaceOnRight && hasSpaceOnLeft

    // 确保数组长度足够
    while (shouldShowLeft.value.length <= index) {
        shouldShowLeft.value.push(false)
    }

    shouldShowLeft.value[index] = showLeft
}



const startTimer = (index: number | null, delay = 200) => {
    // 清除之前的定时器
    clearTimer()

    // 设置新的定时器，延迟200毫秒
    timers.value = window.setTimeout(() => {
        if (index !== null) {
            checkPosition(index)
        }
        openSubmenuIndex.value = index
    }, delay)
}

const clearTimer = () => {
    if (timers.value) {
        clearTimeout(timers.value)
        timers.value = null
    }
}

// 初始化数组
onMounted(() => {
    shouldShowLeft.value = Array(props.list.length).fill(false)
})

// 清理定时器
onBeforeUnmount(() => {
    if (timers.value) {
        clearTimeout(timers.value)
    }
})

</script>