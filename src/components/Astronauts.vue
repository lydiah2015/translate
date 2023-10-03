<template>
    <!-- No i18n: Hard-coded English -->
    <h1 class="bg-red-900">test</h1>
    <p v-if="loading">Loading...</p>
    <div v-else>
        <div>
            <h2>
                <!-- No i18n: Hard-coded plural -->
                🧑‍🚀 {{ astros.length }} people in space
            </h2>
            <p>
                <!-- No i18n: Hard-coded date -->
                Updated Jul 26, 2022
            </p>
        </div>
        <div>
            <AstroCard v-for="astro in astros" :key="astro.id" :name="astro.name" :nationality="astro.nationality"
                :craft="astro.craft" :photoUrl="astro.photoUrl" />
        </div>
    </div>
</template>
<script setup>

import { ref } from 'vue'

import AstroCard from './AstroCard.vue'



// Use ref to define reactive data

const loading = ref(true)

const astros = ref([])



// Logic that would run in created() is

// written directly at the top level

fetch('/data/Astronauts.json')

    .then((res) => res.json())

    .then((data) => {

        // Remember to use .value when getting/setting

        // values defined with ref()

        astros.value = data

        loading.value = false

    })

</script>



