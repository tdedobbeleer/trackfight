<script setup lang="ts">
import { onBeforeRouteUpdate } from 'vue-router'
import AOS from 'aos'
import { BButton, BContainer } from 'bootstrap-vue-next'
import StoryPage from '@/views/Story.vue'
import PetitionsPage from '@/views/Petitions.vue'
import PressPage from '@/views/Press.vue'

defineOptions({
  name: 'HomePage',
})

onBeforeRouteUpdate(() => {
  AOS.refresh()
})
</script>

<template>
  <section id="home" class="home-section" data-aos="fade">
    <BContainer fluid class="p-0">
      <div class="jumbotron d-flex align-items-center justify-content-center text-center text-white">
        <BContainer class="jumbotron-content" data-aos="zoom-in" data-aos-delay="200">
          <h1 class="display-3 fw-bold mb-4">{{ $t('welcome') }}</h1>
          <BButton variant="primary" size="lg" href="#story">{{ $t('getStarted') }}</BButton>
        </BContainer>
      </div>
    </BContainer>
  </section>

  <section id="story" class="story-section" data-aos="fade-up">
    <StoryPage />
  </section>

  <section id="petitions" class="content-section" data-aos="fade-up">
    <PetitionsPage />
  </section>

  <section id="press" class="content-section" data-aos="fade-up">
    <PressPage />
  </section>

  <section id="contact" class="content-section" data-aos="fade-up">
    <BContainer class="py-5">
      <h1 class="fw-bold mb-4">{{ $t('contact') }}</h1>
      <p class="lead">{{ $t('tagline') }}</p>
    </BContainer>
  </section>
</template>

<style scoped>
.home-section {
  min-height: 100vh;
  scroll-margin-top: 5rem;
}

.jumbotron {
  background-image: url('/img/gedwarsboomd.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
}

.jumbotron::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(29, 29, 27, 0.5);
  z-index: 1;
}

.jumbotron-content {
  position: relative;
  z-index: 2;
}

.story-section,
.content-section {
  min-height: 100vh;
  background: #ffffff;
  scroll-margin-top: 5rem;
}
</style>
