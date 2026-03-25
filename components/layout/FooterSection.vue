<template>
  <footer class="relative text-white" style="background-color: #1A1714">
    <!-- Wave decoration at top — sits inside footer flow, pulls upward visually -->
    <div class="w-full" style="margin-top: -3rem">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        class="w-full h-12 lg:h-16 block"
        fill="#1A1714"
      >
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,60 1440,50 L1440,80 L0,80 Z" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20 pb-8">
      <!-- Top section -->
      <div class="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
        <!-- Brand -->
        <div class="max-w-sm">
          <h2 class="font-display font-bold text-2xl tracking-tight mb-4">
            WAVECRAFT
          </h2>
          <p class="text-white/50 text-caption leading-relaxed">
            Premium surf equipment for riders who demand the best.
            Handcrafted with passion, built for performance.
          </p>
        </div>

        <!-- Links -->
        <div class="flex gap-16 lg:gap-20">
          <div>
            <h3 class="text-overline uppercase text-white/30 mb-4">Shop</h3>
            <ul class="space-y-2.5">
              <li><a href="/" class="text-caption text-white/60 hover:text-white transition-colors duration-300">Surfboards</a></li>
              <li><a href="/" class="text-caption text-white/60 hover:text-white transition-colors duration-300">Wetsuits</a></li>
              <li><a href="/" class="text-caption text-white/60 hover:text-white transition-colors duration-300">Accessories</a></li>
              <li><a href="/" class="text-caption text-white/60 hover:text-white transition-colors duration-300">Apparel</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-overline uppercase text-white/30 mb-4">Company</h3>
            <ul class="space-y-2.5">
              <li><a href="/" class="text-caption text-white/60 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="/" class="text-caption text-white/60 hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="/" class="text-caption text-white/60 hover:text-white transition-colors duration-300">Stores</a></li>
              <li><a href="/" class="text-caption text-white/60 hover:text-white transition-colors duration-300">Journal</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-white/10 mb-8" />

      <!-- Bottom bar -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-[11px] text-white/30 tracking-wide">
          &copy; {{ currentYear }} WAVECRAFT. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="/" class="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-300 tracking-wide">Privacy</a>
          <a href="/" class="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-300 tracking-wide">Terms</a>
          <a href="/" class="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-300 tracking-wide">Shipping</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
