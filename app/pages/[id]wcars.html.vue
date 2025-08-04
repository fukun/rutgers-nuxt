<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="pending" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <p class="mt-2">Loading symposium information...</p>
    </div>

    <div v-else-if="wcarsData">
      <!-- 标题部分 -->
      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold mb-4">{{ wcarsData.title }}</h1>
        <p class="text-xl mb-2">{{ wcarsData.city }}</p>
        <p class="text-lg mb-4">{{ wcarsData.date }}</p>
        <img v-if="wcarsData.img" :src="wcarsData.img" :alt="wcarsData.title"
          class="mx-auto max-w-full h-auto rounded-lg shadow-lg">
        <p v-if="wcarsData.desc" class="mt-4 text-gray-700 max-w-2xl mx-auto">{{ wcarsData.desc }}</p>
      </div>

      <!-- 关于会议和注意事项部分 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <!-- 关于会议部分 -->
        <div v-if="wcarsData.about?.length" class="border border-gray-200 rounded-lg overflow-hidden"
          :class="{ 'lg:col-start-1 lg:col-end-3': !wcarsData.note || !wcarsData.note.length }">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-3 text-center text-xl font-bold text-gray-900 uppercase tracking-wider">
                  About the Conference
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in wcarsData.about" :key="index">
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <a :href="item.url" target="_blank" class="text-[#CC0033] hover:text-[#990022] font-medium">
                    {{ item.label }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 注意事项部分 -->
        <div v-if="wcarsData.note?.length" class="border border-gray-200 rounded-lg overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-3 text-center text-xl font-bold text-gray-900 uppercase tracking-wider">
                  Things to Note
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in wcarsData.note" :key="index">
                <td class="px-6 py-4 whitespace-nowrap text-center">
                  <a :href="item.url" target="_blank" class="text-[#CC0033] hover:text-[#990022] font-medium">
                    {{ item.label }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 演示部分 -->
      <div v-if="wcarsData.presentations && wcarsData.presentations.length > 0" class="mb-10">
        <h2 class="text-2xl font-bold mb-4">Presentations</h2>
        <div v-for="(session, sessionIndex) in wcarsData.presentations" :key="sessionIndex" class="mb-8">
          <h3 v-if="session.session" class="text-xl font-semibold mb-4 bg-gray-100 p-2 rounded">{{ session.session }}
          </h3>
          <div class="space-y-4">
            <div v-for="(item, itemIndex) in session.list" :key="itemIndex"
              class="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div class="mb-2 md:mb-0">
                  <h4 class="font-semibold text-lg">{{ item.presenters }}</h4>
                  <p class="text-gray-700 whitespace-pre-line">{{ item.presentations }}</p>
                </div>
                <div v-if="item.video" class="md:ml-4">
                  <a :href="item.video" target="_blank"
                    class="inline-flex items-center px-4 py-2 bg-[#CC0033] text-white rounded hover:bg-[#990022] transition-colors">
                    <icon-youtube class="mr-2" :width="20" :height="20" />
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-gray-500 text-lg">
        Symposium information not found.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data, pending } = await useAsyncData(`${route.params.id}wcars`, () => {
  return queryCollection('wcars')
    .where('stem', '=', `wcars/${route.params.id}wcars`)
    .first()
});

// 处理数据
const wcarsData = computed(() => data.value?.meta.body ?? null);
</script>