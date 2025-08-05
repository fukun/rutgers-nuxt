<template>
    <div>
        <layout-header></layout-header>
        <div class="min-h-[calc(100vh-176px)]">
            <slot />
        </div>
        <ClientOnly>
            <layout-tawk></layout-tawk>
        </ClientOnly>
        <layout-footer></layout-footer>
    </div>
</template>



<style lang="css">
* {
    scroll-margin-top: 106px;
}
</style>