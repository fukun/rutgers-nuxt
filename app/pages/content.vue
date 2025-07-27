<script setup lang="ts">
//原文件名[...slug]
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div>
    <div >xxx</div>
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </div>

</template>
