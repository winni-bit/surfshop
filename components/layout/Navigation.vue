<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-nav'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Brand -->
        <NuxtLink
          to="/"
          :class="[
            'font-display font-bold tracking-tight text-xl lg:text-2xl transition-colors duration-300',
            isScrolled ? 'text-text-primary' : 'text-text-primary'
          ]"
        >
          WAVECRAFT
        </NuxtLink>

        <!-- Center links (desktop) -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            to="/"
            :class="[
              'text-caption uppercase tracking-widest transition-colors duration-300 hover:text-accent',
              isScrolled ? 'text-text-secondary' : 'text-text-secondary'
            ]"
          >
            Shop
          </NuxtLink>
          <NuxtLink
            to="/"
            :class="[
              'text-caption uppercase tracking-widest transition-colors duration-300 hover:text-accent',
              isScrolled ? 'text-text-secondary' : 'text-text-secondary'
            ]"
          >
            About
          </NuxtLink>
        </div>

        <!-- Cart -->
        <NuxtLink
          to="/cart"
          :class="[
            'flex items-center gap-2 transition-colors duration-300 hover:text-accent',
            isScrolled ? 'text-text-primary' : 'text-text-primary'
          ]"
        >
          <!-- Cart icon (SVG) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span class="text-caption uppercase tracking-widest hidden sm:inline">Cart</span>
          <span
            v-if="cartItemCount > 0"
            class="flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-accent rounded-full"
          >
            {{ cartItemCount }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { items } = useCart()
const cartItemCount = computed(() => items.value.length)

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 50)
</script>
