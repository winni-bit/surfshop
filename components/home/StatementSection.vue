<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden"
    style="background: linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%); padding-top: clamp(6rem, 12vw, 12rem); padding-bottom: clamp(6rem, 12vw, 12rem)"
  >
    <!-- Subtle wave pattern -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]">
      <svg
        class="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="var(--color-accent)"
      >
        <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
      <!-- Statement lines with staggered reveal -->
      <div class="space-y-2 lg:space-y-3">
        <div
          v-for="(line, index) in statementLines"
          :key="index"
          :class="[
            'overflow-hidden transition-all',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          ]"
          :style="{
            transitionDuration: '900ms',
            transitionDelay: isVisible ? `${index * 200}ms` : '0ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }"
        >
          <p
            :class="[
              'font-display text-display-lg lg:text-display-xl',
              line.accent
                ? 'text-gradient-accent'
                : 'text-text-primary'
            ]"
          >
            {{ line.text }}
          </p>
        </div>
      </div>

      <!-- Horizontal rule -->
      <div
        :class="[
          'mx-auto mt-12 lg:mt-16 mb-8 lg:mb-10 transition-all duration-1000 delay-[800ms]',
          isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
        ]"
      >
        <div class="h-px" style="background-color: rgba(176, 168, 158, 0.3)" />
      </div>

      <!-- Sub-statement -->
      <p
        :class="[
          'text-body-lg text-text-tertiary max-w-xl mx-auto transition-all duration-700 delay-[900ms]',
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
        ]"
      >
        Every board we shape, every piece of gear we curate — it all comes
        from a deep respect for the ocean and the people who ride it.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.2 }
)

const statementLines = [
  { text: 'Born from the Ocean.', accent: false },
  { text: 'Built for the Wave.', accent: true },
  { text: 'Made for You.', accent: false },
]
</script>
