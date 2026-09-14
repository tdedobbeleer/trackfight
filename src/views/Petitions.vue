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
    <div class="d-flex flex-column flex-md-row gap-3 align-items-stretch justify-content-center mt-5">
      <BButton
        variant="outline-danger"
        size="lg"
        class="flex-fill w-100 w-md-auto text-dark petition-btn"
        :href="$t('petitionUrl1')"
        target="_blank"
        rel="noopener"
      >
        {{ $t('petitionButton1') }}
      </BButton>
      <BButton
        variant="outline-danger"
        size="lg"
        class="flex-fill w-100 w-md-auto text-dark petition-btn"
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

.petition-btn:hover,
.petition-btn:focus,
.petition-btn:active {
  background-color: #ffffff;
  border-color: #ffcc01;
}
</style>
