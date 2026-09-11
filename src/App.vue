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
        class="fw-bold text-uppercase tracking-wide hover-highlight d-flex align-items-center gap-2"
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

  <button
    type="button"
    class="mobile-menu-btn d-lg-none"
    :class="{ 'mobile-navbar-expanded': isExpanded }"
    @click="toggleMenu"
    aria-label="Toggle navigation"
  >
    <IBiList style="font-size: 1.5rem" />
  </button>
  <BCollapse id="nav-offcanvas" is-nav v-model="isExpanded" class="dropdown-menu-mobile">
    <BNavbarNav class="flex-column p-3">
      <BNavItem href="#story" class="mb-2 d-flex align-items-center gap-2" @click="isExpanded = false">
        <ISolarWheelOutline class="nav-icon" /> {{ $t('getStarted') }}
      </BNavItem>
      <BNavItem href="#petitions" class="mb-2 d-flex align-items-center gap-2" @click="isExpanded = false">
        <IBiEnvelope class="nav-icon" /> {{ $t('petitions') }}
      </BNavItem>
      <BNavItem href="#press" class="mb-2 d-flex align-items-center gap-2" @click="isExpanded = false">
        <IBiNewspaper class="nav-icon" /> {{ $t('press') }}
      </BNavItem>
      <BNavItem href="#contact" class="mb-2 d-flex align-items-center gap-2" @click="isExpanded = false">
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

  <main>
    <router-view />
  </main>
</template>

<style scoped>
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

.dropdown-menu-mobile {
  position: fixed;
  top: 6rem;
  right: 1rem;
  min-width: 16rem;
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  background: #ffffff;
  border: 2px solid #e30713;
  border-radius: 0.75rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 1040;
}

.dropdown-menu-mobile.show {
  border-color: #ffcc01;
}

.nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: 1.1em;
  line-height: 1;
}

.mobile-menu-btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1040;
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #1d1d1b;
  border: 2px solid #e30713;
  border-radius: 0.75rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.mobile-menu-btn:hover,
.mobile-navbar-expanded .mobile-menu-btn {
  color: #e84a3d;
  border-color: #ffcc01;
}
</style>
