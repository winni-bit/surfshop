<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex items-center overflow-hidden"
    style="background: linear-gradient(165deg, #FAF8F5 0%, #F4F0EB 40%, #EDE8E1 100%)"
  >
    <!-- Decorative gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full opacity-[0.07]"
        style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%)"
      />
      <div
        class="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full opacity-[0.05]"
        style="background: radial-gradient(circle, var(--color-surf-coral) 0%, transparent 70%)"
      />
    </div>

    <!-- Split layout: text left, images right -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-8 py-32 lg:py-0">
      <!-- Left column — Text content -->
      <div class="w-full lg:w-[45%] text-center lg:text-left flex-shrink-0">
        <!-- Overline -->
        <p
          :class="[
            'text-overline uppercase text-accent mb-6 lg:mb-8 transition-all duration-700',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          ]"
        >
          Premium Surf Equipment
        </p>

        <!-- Main headline with staggered word reveal -->
        <h1 class="text-display-xl font-display text-text-primary mb-6 lg:mb-8">
          <span
            v-for="(word, index) in headlineWords"
            :key="index"
            :class="[
              'inline-block mr-[0.25em] transition-all',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[40px]'
            ]"
            :style="{
              transitionDuration: '800ms',
              transitionDelay: `${300 + index * 150}ms`,
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }"
          >
            {{ word }}
          </span>
        </h1>

        <!-- Subheadline -->
        <p
          :class="[
            'text-body-lg text-text-secondary max-w-lg mb-10 lg:mb-12 transition-all duration-700 delay-[800ms]',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          ]"
        >
          Handcrafted boards and premium gear for those who live to ride.
          Every wave deserves the right equipment.
        </p>

        <!-- CTA -->
        <div
          :class="[
            'transition-all duration-700 delay-[1000ms]',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          ]"
        >
          <NuxtLink
            to="/"
            class="group inline-flex items-center gap-3 px-8 py-4 text-white rounded-full text-caption uppercase tracking-widest font-semibold transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98]"
            style="background-color: #1A1714"
            @mouseenter="($event.target as HTMLElement).style.backgroundColor = 'var(--color-accent)'"
            @mouseleave="($event.target as HTMLElement).style.backgroundColor = '#1A1714'"
          >
            Explore Collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Right column — Product images stacked artistically -->
      <div
        v-if="products && products.length > 0"
        class="w-full lg:w-[55%] relative h-[50vh] sm:h-[55vh] lg:h-[80vh] flex-shrink-0"
      >
        <!-- Product 1 — top, largest -->
        <div
          v-if="products[0]?.cover?.src"
          :class="[
            'absolute top-[2%] right-[5%] lg:right-[8%] w-[55%] lg:w-[60%] max-w-[420px] transition-opacity duration-1000',
            isVisible ? 'opacity-100' : 'opacity-0'
          ]"
          style="animation: float-slow 8s ease-in-out infinite; animation-delay: 0s"
        >
          <img
            :src="products[0].cover.src"
            :alt="products[0].name || 'Featured product'"
            class="w-full h-auto rounded-2xl"
            style="filter: drop-shadow(0 25px 50px rgba(26, 23, 20, 0.15))"
          />
        </div>

        <!-- Product 2 — bottom left, overlapping -->
        <div
          v-if="products[1]?.cover?.src"
          :class="[
            'absolute bottom-[5%] left-[0%] lg:left-[2%] w-[50%] lg:w-[52%] max-w-[360px] transition-opacity duration-1000 delay-300',
            isVisible ? 'opacity-100' : 'opacity-0'
          ]"
          style="animation: float 6s ease-in-out infinite; animation-delay: -2s"
        >
          <img
            :src="products[1].cover.src"
            :alt="products[1].name || 'Featured product'"
            class="w-full h-auto rounded-2xl"
            style="filter: drop-shadow(0 20px 40px rgba(26, 23, 20, 0.12))"
          />
        </div>

        <!-- Product 3 — bottom right, smallest, overlapping both -->
        <div
          v-if="products[2]?.cover?.src"
          :class="[
            'absolute bottom-[18%] right-[0%] lg:right-[5%] w-[40%] lg:w-[42%] max-w-[280px] z-10 transition-opacity duration-1000 delay-500',
            isVisible ? 'opacity-100' : 'opacity-0'
          ]"
          style="animation: float-gentle 7s ease-in-out infinite; animation-delay: -4s"
        >
          <img
            :src="products[2].cover.src"
            :alt="products[2].name || 'Featured product'"
            class="w-full h-auto rounded-2xl"
            style="filter: drop-shadow(0 15px 35px rgba(26, 23, 20, 0.1))"
          />
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      :class="[
        'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[1200ms]',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      ]"
    >
      <span class="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium">Scroll</span>
      <div class="w-px h-8 relative overflow-hidden">
        <div class="w-full h-full" style="background-color: rgba(176, 168, 158, 0.3)" />
        <div class="absolute top-0 left-0 w-full h-1/2 bg-accent animate-bounce-subtle" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

interface ProductItem {
  key: string
  name?: string
  slug?: string
  cover?: { src?: string; altText?: string }
  images?: { src?: string; altText?: string }[]
  price?: { amount?: number; precision?: number; currency?: string }
}

const props = defineProps<{
  products: ProductItem[]
}>()

const heroRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const headlineWords = ['RIDE', 'THE', 'WAVE']

useIntersectionObserver(
  heroRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.1 }
)

// Make visible immediately on mount (hero is always in view on load)
onMounted(() => {
  // Small delay to allow the page to settle, then trigger animations
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>
