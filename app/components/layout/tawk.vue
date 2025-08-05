<template>
    <div class="bg-amber-300">ddd</div>
</template>
<script lang="ts" setup>
// Tawk.to API 声明
interface TawkAPI {
    showWidget?: () => void;
    hideWidget?: () => void;
    toggleVisibility?: () => void;
    // 可以根据需要添加更多方法
}

declare global {
    interface Window {
        Tawk_API: TawkAPI;
        Tawk_LoadStart: Date;
    }
}

window.Tawk_API = window.Tawk_API || {};
window.Tawk_LoadStart = new Date();
console.log('xxxxxxxxxxxxx')

onMounted(() => {
    const s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/689157e65f8e2b192420f257/1j1rruo8t';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0?.parentNode?.insertBefore(s1, s0);
    console.log(s0, 's0')
});
</script>