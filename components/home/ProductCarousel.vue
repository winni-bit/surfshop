<template>
  <section
    ref="sectionRef"
    class="py-section bg-bg-secondary"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section header with navigation arrows -->
      <div class="flex items-end justify-between mb-10 lg:mb-14">
        <div
          :class="[
            'transition-all duration-700',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          ]"
        >
          <p class="text-overline uppercase text-accent mb-3">Featured</p>
          <h2 class="text-display-md font-display text-text-primary">
            Curated for You
          </h2>
        </div>

        <!-- Desktop nav arrows -->
        <div
          :class="[
            'hidden lg:flex items-center gap-2 transition-all duration-700 delay-200',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          ]"
        >
          <button
            type="button"
            aria-label="Scroll carousel left"
            class="w-11 h-11 rounded-full border border-text-muted/20 flex items-center justify-center text-text-secondary hover:bg-text-primary hover:text-white hover:border-text-primary transition-all duration-300"
            @click="scrollCarousel('left')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Scroll carousel right"
            class="w-11 h-11 rounded-full border border-text-muted/20 flex items-center justify-center text-text-secondary hover:bg-text-primary hover:text-white hover:border-text-primary transition-all duration-300"
            @click="scrollCarousel('right')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Carousel track — full-bleed on small screens -->
    <div
      ref="carouselRef"
      class="flex gap-4 lg:gap-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      @mousedown="onDragStart"
      @mousemove="onDragMove"
      @mouseup="onDragEnd"
      @mouseleave="onDragEnd"
    >
      <div
        v-for="(product, index) in products"
        :key="product.key"
        :class="[
          'flex-shrink-0 w-[72vw] sm:w-[48vw] lg:w-[calc((100%-3*1.25rem)/4)] snap-start transition-all duration-500',
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        ]"
        :style="{ transitionDelay: isVisible ? `${200 + index * 80}ms` : '0ms' }"
      >
        <div class="group cursor-pointer">
          <!-- Image container -->
          <div class="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-bg-tertiary border border-black/5">
            <!-- Gradient background for the product PNG -->
            <div
              class="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
              :style="{
                background: cardGradients[index % cardGradients.length]
              }"
            />

            <!-- Product image -->
            <div class="absolute inset-0 flex items-center justify-center p-6 lg:p-8">
              <img
                v-if="product.cover?.src"
                :src="product.cover.src"
                :alt="product.name || 'Product'"
                class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-lg"
                loading="lazy"
              />
            </div>

            <!-- Hover shadow overlay -->
            <div class="absolute inset-0 shadow-none group-hover:shadow-card-hover transition-shadow duration-500 rounded-2xl pointer-events-none" />
          </div>

          <!-- Product info -->
          <div class="px-2 pb-1">
            <h3 class="font-display font-medium text-text-primary text-[15px] leading-snug mb-1.5 truncate">
              {{ product.name }}
            </h3>
            <p class="text-text-secondary text-caption font-medium">
              {{ formatProductPrice(product.price) }}
            </p>
          </div>
        </div>
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

const sectionRef = ref<HTMLElement | null>(null)
const carouselRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Drag-to-scroll state
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.1 }
)

// Subtle neutral gradient backgrounds for product cards
const cardGradients = [
  'linear-gradient(165deg, #F7F3EE 0%, #EDE8E1 100%)',
  'linear-gradient(165deg, #F0ECE7 0%, #E6E0D8 100%)',
  'linear-gradient(165deg, #F5F0EA 0%, #E9E3DB 100%)',
  'linear-gradient(165deg, #F3EEE8 0%, #EBE5DD 100%)',
  'linear-gradient(165deg, #F1EDE7 0%, #E7E1D9 100%)',
  'linear-gradient(165deg, #F6F2EC 0%, #ECE7DF 100%)',
]

function formatProductPrice(price?: { amount?: number; precision?: number; currency?: string }): string {
  if (!price || price.amount == null) return ''
  const precision = price.precision ?? 2
  const value = price.amount / Math.pow(10, precision)
  return value.toFixed(precision) + ' \u20AC'
}

function scrollCarousel(direction: 'left' | 'right') {
  if (!carouselRef.value) return
  const container = carouselRef.value
  const scrollAmount = container.clientWidth * 0.7
  container.scrollBy({
    left: direction === 'right' ? scrollAmount : -scrollAmount,
    behavior: 'smooth',
  })
}

function onDragStart(e: MouseEvent) {
  if (!carouselRef.value) return
  isDragging.value = true
  startX.value = e.pageX - carouselRef.value.offsetLeft
  scrollLeft.value = carouselRef.value.scrollLeft
  carouselRef.value.style.cursor = 'grabbing'
}

function onDragMove(e: MouseEvent) {
  if (!isDragging.value || !carouselRef.value) return
  e.preventDefault()
  const x = e.pageX - carouselRef.value.offsetLeft
  const walk = (x - startX.value) * 1.5
  carouselRef.value.scrollLeft = scrollLeft.value - walk
}

function onDragEnd() {
  isDragging.value = false
  if (carouselRef.value) {
    carouselRef.value.style.cursor = ''
  }
}
</script>
