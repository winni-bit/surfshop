<template>
  <section
    ref="sectionRef"
    class="py-section bg-bg-primary"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section header -->
      <div
        :class="[
          'mb-12 lg:mb-16 transition-all duration-700',
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        ]"
      >
        <p class="text-overline uppercase text-accent mb-3">Categories</p>
        <h2 class="text-display-md font-display text-text-primary">
          Find Your Element
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        <NuxtLink
          v-for="(category, index) in displayCategories"
          :key="category.slug"
          :to="`/`"
          :class="[
            'group relative overflow-hidden rounded-2xl lg:rounded-3xl aspect-[4/5] transition-all duration-500',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          ]"
          :style="{
            transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
            background: categoryGradients[index % categoryGradients.length]
          }"
        >
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

          <!-- Decorative wave pattern overlay -->
          <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.08]">
            <svg
              class="absolute -bottom-[10%] -right-[10%] w-[120%] h-[60%]"
              viewBox="0 0 500 200"
              preserveAspectRatio="none"
              fill="white"
            >
              <path d="M0,100 C125,150 175,50 250,100 C325,150 375,50 500,100 L500,200 L0,200 Z" />
            </svg>
            <svg
              class="absolute -top-[10%] -left-[10%] w-[80%] h-[50%]"
              viewBox="0 0 200 200"
              fill="white"
            >
              <circle cx="100" cy="100" r="80" />
            </svg>
          </div>

          <!-- Second gradient overlay for depth -->
          <div
            class="absolute inset-0 pointer-events-none opacity-40"
            style="background: linear-gradient(200deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)"
          />

          <!-- Category cover image if available -->
          <div
            v-if="category.coverSrc"
            class="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-105"
          >
            <img
              :src="category.coverSrc"
              :alt="category.title"
              class="w-3/4 h-3/4 object-contain drop-shadow-lg opacity-30 group-hover:opacity-40 transition-opacity duration-500"
              loading="lazy"
            />
          </div>

          <!-- Content -->
          <div class="relative z-10 flex flex-col justify-end h-full p-5 lg:p-6">
            <div class="transform transition-transform duration-500 group-hover:-translate-y-1">
              <h3 class="text-white font-display font-semibold text-lg lg:text-xl tracking-tight mb-1">
                {{ category.title }}
              </h3>
              <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                <span class="text-white/80 text-caption">Explore</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5 text-white/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Subtle inner shadow -->
          <div
            class="absolute inset-0 rounded-2xl lg:rounded-3xl pointer-events-none"
            style="box-shadow: inset 0 -80px 60px -20px rgba(0, 0, 0, 0.25)"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

interface CategoryItem {
  key?: string
  title?: string
  slug?: string
  cover?: { src?: string; altText?: string }
  childCount?: number
}

const props = defineProps<{
  categories: CategoryItem[]
}>()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.1 }
)

// Hardcoded fallback categories
const fallbackCategories = [
  { title: 'Surfboards', slug: 'surfboards', coverSrc: '' },
  { title: 'Wetsuits', slug: 'wetsuits', coverSrc: '' },
  { title: 'Apparel', slug: 'apparel', coverSrc: '' },
  { title: 'Fins', slug: 'fins', coverSrc: '' },
  { title: 'Leashes', slug: 'leashes', coverSrc: '' },
  { title: 'Accessories', slug: 'accessories', coverSrc: '' },
  { title: 'Board Bags', slug: 'board-bags', coverSrc: '' },
  { title: 'Wax & Traction', slug: 'wax-traction', coverSrc: '' },
]

// Category-themed gradients — each one distinct and surf-inspired
const categoryGradients = [
  'linear-gradient(160deg, #0E7490 0%, #155E75 50%, #0C4A5E 100%)',  // Ocean
  'linear-gradient(160deg, #1E3A5F 0%, #2C5282 50%, #1A365D 100%)',  // Deep
  'linear-gradient(160deg, #D97B5A 0%, #C2694A 50%, #A8553C 100%)',  // Coral
  'linear-gradient(160deg, #D4A76A 0%, #B8925A 50%, #A07D4A 100%)',  // Sand
  'linear-gradient(160deg, #3D7A5F 0%, #2F6B52 50%, #245A42 100%)',  // Kelp
  'linear-gradient(160deg, #C2594A 0%, #A84A3C 50%, #8E3D32 100%)',  // Sunset
  'linear-gradient(160deg, #5C6B7A 0%, #4A5A6A 50%, #3D4D5C 100%)',  // Slate
  'linear-gradient(160deg, #7CB5B3 0%, #6AA3A1 50%, #588F8D 100%)',  // Foam
]

// Use API categories if available, otherwise fallback
const displayCategories = computed(() => {
  const apiCats = props.categories
  if (apiCats && apiCats.length > 0) {
    return apiCats.map((c) => ({
      title: c.title || '',
      slug: c.slug || '',
      coverSrc: c.cover?.src || '',
    }))
  }
  return fallbackCategories
})
</script>
