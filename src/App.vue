<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { BButton } from 'bootstrap-vue-next'

defineOptions({
  name: 'App',
})

const { locale, availableLocales } = useI18n()
const isExpanded = ref(false)

const switchLanguage = (loc: string) => {
  locale.value = loc
}

const alternateLocale = computed(() => {
  return availableLocales.find((l) => l !== locale.value)?.toUpperCase()
})

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <BNavbar class="floating-navbar d-none d-lg-block" variant="light" type="light">
    <BNavbarNav class="d-flex flex-row align-items-center gap-4 flex-grow-1">
      <BNavItem
        href="#story"
        class="rotate fw-bold text-uppercase tracking-wide hover-highlight d-flex align-items-center gap-2"
      >
        <ISolarWheelOutline class="nav-icon" /> {{ $t('getStarted') }}
      </BNavItem>
      <BNavItem
        href="#petitions"
        class="fw-bold text-uppercase tracking-wide hover-highlight d-flex align-items-center gap-2"
      >
        <IBiEnvelope class="nav-icon" /> {{ $t('petitions') }}
      </BNavItem>
      <BNavItem
        href="#press"
        class="fw-bold text-uppercase tracking-wide hover-highlight d-flex align-items-center gap-2"
      >
        <IBiNewspaper class="nav-icon" /> {{ $t('press') }}
      </BNavItem>
      <BNavItem
        href="#contact"
        class="fw-bold text-uppercase tracking-wide hover-highlight d-flex align-items-center gap-2"
      >
        <IBiTelephone class="nav-icon" /> {{ $t('contact') }}
      </BNavItem>
    </BNavbarNav>
    <BNavbarNav class="lang-nav-item ms-auto border-start border-2 ps-3">
      <BButton
        variant="link"
        class="lang-btn p-0 border-0 d-flex align-items-center gap-2 hover-highlight"
        style="cursor: pointer; font-size: 1.25rem; background: none"
        @click="switchLanguage(availableLocales.find((l) => l !== locale) || 'en')"
      >
        <IBiGlobe />
        <span class="fw-bold">{{ alternateLocale }}</span>
      </BButton>
    </BNavbarNav>
  </BNavbar>

  <BNavbar
    sticky="top"
    toggleable="lg"
    class="mobile-navbar d-lg-none"
    variant="light"
    type="light"
  >
    <BNavbarToggle label="Toggle navigation" @click="toggleMenu">
      <IBiList style="font-size: 1.5rem" />
    </BNavbarToggle>
    <BCollapse id="nav-offcanvas" is-nav v-model="isExpanded" class="mobile-nav-collapse">
      <BNavbarNav class="rotate flex-column p-3">
        <BNavItem
          href="#story"
          class="mb-2 d-flex align-items-center gap-2"
          @click="isExpanded = false"
        >
          <ISolarWheelOutline class="nav-icon" /> {{ $t('getStarted') }}
        </BNavItem>
        <BNavItem
          href="#petitions"
          class="mb-2 d-flex align-items-center gap-2"
          @click="isExpanded = false"
        >
          <IBiEnvelope class="nav-icon" /> {{ $t('petitions') }}
        </BNavItem>
        <BNavItem
          href="#press"
          class="mb-2 d-flex align-items-center gap-2"
          @click="isExpanded = false"
        >
          <IBiNewspaper class="nav-icon" /> {{ $t('press') }}
        </BNavItem>
        <BNavItem
          href="#contact"
          class="mb-2 d-flex align-items-center gap-2"
          @click="isExpanded = false"
        >
          <IBiTelephone class="nav-icon" /> {{ $t('contact') }}
        </BNavItem>
        <BNavItem class="mb-2">
          <IBiGlobe class="me-2" />
          <span class="fw-bold">Languages</span>
        </BNavItem>
        <BDropdownItem
          v-for="loc in availableLocales"
          :key="loc"
          :active="locale === loc"
          active-class="bg-danger text-dark"
          @click="switchLanguage(loc)"
          class="mb-2"
        >
          {{ loc.toUpperCase() }}
        </BDropdownItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
.rotate:hover .nav-icon {
  -webkit-transform: rotate(180deg) !important;
  -ms-transform: rotate(180deg) !important;
  -o-transform: rotate(180deg) !important;
  transform: rotate(180deg) !important;
}

.nav-item:hover .nav-icon {
  -webkit-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  -o-transform: rotate(20deg);
  transform: rotate(20deg);
  transition: all 0.3s ease;
}

.floating-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  background: #ffffff;
  border-bottom: 2px solid #e30713;
  border-radius: 0;
  padding: 0.5rem 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.floating-navbar:hover {
  border-bottom-color: #ffcc01;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.floating-navbar,
.floating-navbar .btn,
.floating-navbar .BNavItem {
  min-height: 3rem;
}

.lang-btn {
  outline: none;
  box-shadow: none;
}

.hover-highlight {
  color: #1d1d1b;
  transition: color 0.2s ease-in-out;
}

.floating-navbar:hover .hover-highlight {
  color: #e84a3d;
}

.mobile-navbar {
  position: sticky;
  top: 0;
  z-index: 1030;
  background: #ffffff;
  border-bottom: 2px solid #e30713;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.mobile-navbar .navbar-toggler {
  border: 2px solid #e30713;
  border-radius: 0.75rem;
  color: #1d1d1b;
  transition: all 0.2s ease-in-out;
}

.mobile-navbar .navbar-toggler:hover,
.mobile-navbar .navbar-toggler:focus {
  border-color: #ffcc01;
  color: #e84a3d;
}

.mobile-nav-collapse {
  background: #ffffff;
  border-top: 1px solid #e30713;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: 1.1em;
  line-height: 1;
}
</style>
