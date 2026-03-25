<template>
  <div>
    <HomeHeroSection :products="heroProducts" />
    <HomeCategoryGrid :categories="categoryItems" />
    <HomeProductCarousel :products="carouselProducts" />
    <HomeStatementSection />
  </div>
</template>

<script setup lang="ts">
import client from '~/.frontic/generated-client'

// Fetch featured products
const { data: featuredData } = await useAsyncData('featured-products', () =>
  client.listing('FeaturedProducts', {}, { query: { limit: 12 } })
)

// Fetch top categories (may return empty while indexing)
const { data: categoriesData } = await useAsyncData('top-categories', () =>
  client.listing('TopCategories', {})
)

// Split products: first 3 for hero, all for carousel
const heroProducts = computed(() => {
  const items = featuredData.value?.items ?? []
  return items.slice(0, 3)
})

const carouselProducts = computed(() => {
  return featuredData.value?.items ?? []
})

const categoryItems = computed(() => {
  return categoriesData.value?.items ?? []
})
</script>
