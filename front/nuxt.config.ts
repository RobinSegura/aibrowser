import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

// Global CSS
css: [],

// Plugins to run before rendering page
plugins: [],

// Auto import components
components: true,

// Modules
modules: [
  '@nuxt/ui',
  '@nuxtjs/color-mode',
  '@pinia/nuxt',
],

// Build Modules
buildModules: [
  '@pinia/nuxt',
],
// Build Configuration
build: {},


})
