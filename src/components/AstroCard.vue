<template>
    <div
      class="border-purple-700 border-solid border-[0.5px] rounded-md overflow-hidden"
    >
      <h3 class="text-purple-300 light px-0.5 py-1 text-center">
        {{ name }}
      </h3>
      <div class="h-auto max-w-xs rounded-lg overflow-hidden bg-neutral-900">
        <img
          :src="fullPhotoUrl"
          :alt="$t('photoOf', { name })"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="flex justify-between p-2">
        <p class="text-xs">
          <span
            class="border-purple-700 border-solid border-[0.5px] text-purple-300 rounded-sm py-0.5 px-1 font-medium inline-block mr-1"
            >{{ $t('nationality') }}</span
          >
          <span class="text-purple-200">{{ nationality }}</span>
        </p>
  
        <p class="text-xs">
          <span
            class="border-purple-700 border-solid border-[0.5px] text-purple-300 rounded-sm py-0.5 px-1 font-medium inline-block mr-1"
            >{{ $t('craft') }}</span
          >
          <span class="text-purple-200">{{ craft }}</span>
        </p>
      </div>
    </div>
  </template>
<script setup>
import { computed } from 'vue'



// Use macro to define `props` 

const props = defineProps({

  name: String,

  photoUrl: String,

  nationality: String,

  craft: String,

})



// Create computed property using computed()

// and refactor prop reference to use `props.X`

const fullPhotoUrl = computed(() => `/img/astros/${props.photoUrl}`)

</script>
