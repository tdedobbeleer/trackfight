<script setup lang="ts">
import StoryPage from '@/views/Story.vue'

defineOptions({
  name: 'AboutPage',
})
</script>

<template>
  <section class="story-section">
    <StoryPage />
  </section>
</template>

<style scoped>
.story-section {
  min-height: 100vh;
  background: #ffffff;
}

.story-text {
  white-space: pre-line;
  line-height: 1.8;
  max-width: 75ch;
}
</style>
