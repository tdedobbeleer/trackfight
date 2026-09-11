<script setup lang="ts">
import { BContainer, BButton } from 'bootstrap-vue-next'

defineOptions({
  name: 'PetitionsPage',
})
</script>

<template>
  <BContainer class="py-5">
    <h1 class="fw-bold mb-4">{{ $t('petitions') }}</h1>
    <p class="lead story-text">{{ $t('petitionText') }}</p>
    <div class="petition-buttons mt-5">
      <BButton
        variant="primary"
        size="lg"
        class="petition-btn petition-btn-red me-3 mb-3"
        :href="$t('petitionUrl1')"
        target="_blank"
        rel="noopener"
      >
        {{ $t('petitionButton1') }}
      </BButton>
      <BButton
        variant="primary"
        size="lg"
        class="petition-btn petition-btn-yellow mb-3"
        :href="$t('petitionUrl2')"
        target="_blank"
        rel="noopener"
      >
        {{ $t('petitionButton2') }}
      </BButton>
    </div>
  </BContainer>
</template>

<style scoped>
.story-text {
  white-space: pre-line;
  line-height: 1.8;
  max-width: 75ch;
}

.petition-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.petition-btn {
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: 600;
  min-width: 280px;
  text-align: center;
  background: #ffffff;
  border: 2px solid #e30713;
  border-radius: 0.5rem;
  color: #1d1d1b;
  transition: all 0.2s ease-in-out;
}

.petition-btn:hover,
.petition-btn:focus,
.petition-btn:active {
  background: #ffffff;
  border-color: #ffcc01;
  color: #1d1d1b;
}
</style>
