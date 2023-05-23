<script setup lang="ts" >
import { useRoute, useData } from "vitepress";
import { computed, watchEffect } from "vue";
//@ts-ignore
import VueCusdis from 'vue-cusdis';

const routeData = useRoute()
const { isDark } = useData()

const isRecipePage = computed(() => /\/recipes\/.*\.html/.test(routeData.path))


</script>

<template>
    <ClientOnly>
        <template v-if="isRecipePage">
            <div class="comments">
                <h3 class="comments__header">Comments</h3>

                <VueCusdis :key="`${routeData.path}-${JSON.stringify(isDark)}`" :attrs="{
                    host: 'https://cusdis.com',
                    appId: 'eaf85897-83ec-4890-8531-f453fc6aadeb',
                    pageId: routeData.path,
                    pageTitle: routeData.data.title,
                    pageUrl: `https://recipes.sambitsahoo.com${routeData.path}`,
                    theme: isDark ? 'dark' : 'light'
                }" />
            </div>
        </template>
    </ClientOnly>
</template>

<style scoped>
.comments {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.comments__header {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;

    padding-bottom: 8px;
    border-bottom: 1px solid gray;
}
</style>