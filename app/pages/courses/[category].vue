<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8 text-center capitalize">
            {{ route.params.category }} Courses
        </h1>

        <div v-if="pending" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p class="mt-2">Loading courses...</p>
        </div>

        <div v-else-if="courses && courses.length > 0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(course, index) in courses" :key="index"
                    class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div class="flex-grow">
                        <h2 class="text-xl font-semibold mb-2 text-gray-800">
                            {{ course.lecture }}
                        </h2>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                        <p class="text-gray-600">
                            <span class="font-medium">Lecturer:</span> {{ course.lecturer }}
                        </p>
                        <a :href="course.link" target="_blank"
                            class="inline-flex items-center px-4 py-2 whitespace-nowrap bg-[#CC0033] text-white rounded hover:bg-[#990022] transition-colors">
                            <icon-youtube class="mr-2" :width="20" :height="20" />
                            Watch on YouTube
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center py-12">
            <p class="text-gray-500 text-lg">
                No courses found for the "{{ category }}" category.
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const category = route.params.category as string;

// 获取课程数据
const { data, pending } = await useAsyncData(`courses-${category}`, () => {
    return queryCollection('courses')
        .where('stem', '=', `courses/${category}`)
        .first()
});

// 处理课程数据
const courses = computed(() => data.value?.meta.body ?? []);
</script>