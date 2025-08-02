<template>
    <div>
        <layout-header></layout-header>
        <div class="min-h-[calc(100vh-176px)]">
            <slot />
        </div>
        <layout-footer></layout-footer>
    </div>
</template>
<script lang="ts" setup></script>