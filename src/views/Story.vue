<script setup lang="ts">
import { ref } from 'vue'
import { BContainer, BImg } from 'bootstrap-vue-next'

defineOptions({
  name: 'StoryPage',
})

const showVideo = ref(false)
</script>

<template>
  <BContainer class="py-5">
    <h1 class="fw-bold mb-4">{{ $t('story.title') }}</h1>
    <p class="lead story-text">{{ $t('story.body1a') }}</p>
    <p class="lead story-text">{{ $t('story.body1b') }}</p>
    <p class="lead story-text">{{ $t('story.body1c') }}</p>
    <p class="lead story-text" v-html="$t('story.body1d')"></p>
    <p class="lead story-text">{{ $t('story.body1e') }}</p>
    <p class="lead story-text">{{ $t('story.body1f') }}</p>
    <div class="story-image-wrapper mt-5">
      <BImg
        src="/img/annielambrechts.webp"
        alt="Annie Lambrechts with her father Jean and sister Josette from the 50th anniversary of Sint-Janscollege"
        width="400"
        height="400"
        class="story-image rounded-circle border border-2"
        style="
          border-color: #e30713;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          max-height: 50vh;
          object-fit: cover;
        "
        loading="lazy"
      />
      <p class="story-caption mt-3 text-muted small" v-html="$t('story.caption')"></p>
    </div>
    <p class="lead story-text">{{ $t('story.body2a') }}</p>
    <p class="lead story-text">{{ $t('story.body2b') }}</p>
    <p class="lead story-text">{{ $t('story.body2c') }}</p>
    <div v-if="!showVideo" class="video-placeholder" @click="showVideo = true">
      <div class="play-button"></div>
      <p class="video-consent-text">Click to load video (third-party cookies)</p>
    </div>
    <div v-else class="video-wrapper mt-4">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KNcgla8Oofw?si=_F_t-Zc5yWj_jwQO"
        title="YouTube video player"
        frameborder="0"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <p class="story-video-caption mt-2 text-muted small text-center">
      {{ $t('story.videoCaption') }}
    </p>
    <p class="lead story-text">{{ $t('story.body2d') }}</p>
  </BContainer>
</template>

<style scoped>
.story-text {
  white-space: pre-line;
  line-height: 1.8;
  max-width: 75ch;
}

.story-image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.story-caption {
  text-align: center;
  max-width: 75ch;
}

.story-video-caption {
  text-align: center;
  max-width: 75ch;
  margin-left: auto;
  margin-right: auto;
}

.video-placeholder {
  position: relative;
  width: 100%;
  max-width: 560px;
  aspect-ratio: 16 / 9;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0 auto;
}

.play-button {
  width: 68px;
  height: 48px;
  background: rgba(255, 0, 0, 0.9);
  border-radius: 12px;
  position: relative;
  transition: background 0.2s ease;
}

.play-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  border-style: solid;
  border-width: 10px 0 10px 18px;
  border-color: transparent transparent transparent #fff;
}

.video-placeholder:hover .play-button {
  background: rgba(255, 0, 0, 1);
}

.video-consent-text {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  font-size: 0.85rem;
  margin: 0;
  padding: 0 1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

.video-wrapper {
  max-width: 560px;
  margin: 0 auto;
}

.video-wrapper iframe {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
}
</style>
