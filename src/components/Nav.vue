<script setup>

import { RouterLink } from 'vue-router'

</script>



<template>

  <nav>
    <div class="flex flex-row space-x-10 mt-5">


    <img alt="Mushahed logo" src="@/assets/logo.svg"  width="60" height="60" />



    <!-- App title is hard-coded in English -->

    <span>{{ $t('appTitle') }}</span>



    <RouterLink to="/">{{ $t('home') }}</RouterLink>

    <RouterLink to="/about">{{ $t('about') }}</RouterLink>
  </div>
  </nav>

</template>