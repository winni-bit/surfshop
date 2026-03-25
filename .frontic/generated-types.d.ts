/**
 * This file was automatically generated using the
 * Frontic CLI, please do not edit it manually!
 */

import type { components } from './fetch-api.d.ts'

type RequestOptions = {
    /**
     * @description URL to the current page
     *
     * Optionally, Frontic accepts a URL to the current page. This is useful for tracking purposes.
     */
    requestUrl?: string

    /**
     * @description Context key
     *
     * Providing a context key will override the default context key for the request
     */
    contextKey?: string

    /**
     * @description Context Domain
     * @see contextKey A context key will take precedence over this domain
     *
     * Providing a context domain will indicate the requested region and locale based on the domain's configuration for the request.
     */
    contextDomain?: string

    /**
     * @description Proxy URL
     *
     * Optionally, provide a proxy URL path that will be concatenated with the original API path.
     * For example, if proxyUrl is '/api' and the original request is to '/block',
     * the request will be sent to '/api/block'.
     * You can provide absolute as well as relative URLs.
     * The original target URL is passed in the 'fs-target-url' header for the proxy to forward to.
     * This is useful to prevent CORS issues when making requests from a browser.
     */
    proxyUrl?: string
}

/* List of all types used to fetch block parameters */

export type FeaturedProductsParameters = {
}

export type HeroProductsParameters = {
}

export type TopCategoriesParameters = {
}


/* List of all blocks, used for IDE autocompletion */

type ListingParameters = {
    FeaturedProducts: FeaturedProductsParameters
    HeroProducts: HeroProductsParameters
    TopCategories: TopCategoriesParameters
}

type Endpoints = {
    [key in keyof Listings | keyof Blocks]: string;
}

/* Types for split block/listing methods */
export type Blocks = {
    CategoryCard: never
    ProductCard: never
    ProductHero: never
}

export type Listings = {
    FeaturedProducts: FeaturedProductsParameters
    HeroProducts: HeroProductsParameters
    TopCategories: TopCategoriesParameters
}

declare global {
export type CategoryCard = components['schemas']['CategoryCard']
export type FeaturedProducts = components['schemas']['FeaturedProducts']
export type HeroProducts = components['schemas']['HeroProducts']
export type ProductCard = components['schemas']['ProductCard']
export type ProductHero = components['schemas']['ProductHero']
export type TopCategories = components['schemas']['TopCategories']
}

export type Responses = {
    CategoryCard: CategoryCard
    FeaturedProducts: FeaturedProducts
    HeroProducts: HeroProducts
    ProductCard: ProductCard
    ProductHero: ProductHero
    TopCategories: TopCategories
}

export type ListingQueryFilters = {
    FeaturedProducts: components['schemas']['FeaturedProductsQueryOptions']['filter']
    HeroProducts: components['schemas']['HeroProductsQueryOptions']['filter']
    TopCategories: components['schemas']['TopCategoriesQueryOptions']['filter']
}

export type ListingQuerySorts = {
    FeaturedProducts: components['schemas']['FeaturedProductsQueryOptions']['sort']
    HeroProducts: components['schemas']['HeroProductsQueryOptions']['sort']
    TopCategories: components['schemas']['TopCategoriesQueryOptions']['sort']
}

type FetchMode = {
    CategoryCard: 'key';
    FeaturedProducts: 'query';
    HeroProducts: 'query';
    ProductCard: 'key';
    ProductHero: 'key';
    TopCategories: 'query';
}

declare global {
    export type Page = components['schemas']['Page']
    export type PageRoute = components["schemas"]["PageRoute"];
    export type RouteMeta = components["schemas"]["RouteMeta"];
    export type AlternateRoute = components["schemas"]["AlternateRoute"];
}

declare global {
    export type Pagination = components["schemas"]["_page"];
    export type FilterData = components["schemas"]["_filter"];
    export type FilterGroup = components["schemas"]["_filter"][string];
    export type Filter = components["schemas"]["_filter"][string][number];
    export type SortingGroup = components["schemas"]["_sort"];
    export type Sorting = components["schemas"]["_sort"][number];
    export type AggregationData = components["schemas"]["_aggregation"];
    export type AggregationGroup = components["schemas"]["_aggregation"][string];
    export type Aggregation = components["schemas"]["_aggregation"][string]["total"];
}

declare global {
    export type Media = components['schemas']['Media']
    export type Price = components['schemas']['Price']
    export type Seo = components['schemas']['Seo']
    export type Vendor = components['schemas']['Vendor']
    export type Weight = components['schemas']['Weight']
    export type Option = components['schemas']['Option']
    export type Swatch = components['schemas']['Swatch']
    export type PriceScale = components['schemas']['PriceScale']
    export type Sorting = components['schemas']['Sorting']
    export type Availability = components['schemas']['Availability']
    export type StockLevel = components['schemas']['StockLevel']
}

declare global {
    export type ContextToken = string

    export type Context = {
        /**
        * The region of the context - e.g. 'uk'
        */
        region: string
        /**
        * The locale of the context - e.g. 'en-gb'
        */
        locale: string
        /**
        * The scope of the context - e.g. 'b2c'
        */
        scope: string
        /**
        * The identifier of the context
        */
        token: ContextToken
    }

    export type ContextOption = {
        /**
        * The region of the context - e.g. 'uk'
        */
        region: string
        /**
        * The currency of the context - e.g. 'GBP'
        */
        currency: string
        /**
        * List of locales of the context
        */
        locales: Array<Locale>
    }

    export type Locale = {
        /**
        * The key of the locale - e.g. 'en-GB'
        */
        key: string
        /**
        * The URL configured for the locale - e.g. 'https://demo-shop.com/uk/en'
        */
        url: string
    }
}
