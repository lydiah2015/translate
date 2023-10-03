<template>
<!-- <p>Testing coords</p> -->
<!-- <p>The ISS was over {{ coords.latitude }}° N, {{ coords.longitude }}° E on {{ datetime }}</p> -->
<p>
    {{ $t('issPosition',{
        latitude:coords.latitude,
        longitude:coords.longitude,
        datetime,
    }) }}
</p>
</template>
<script>
// options api

export default {
  data() {
    return {
      coords: {
        latitude: 49.5908,
        longitude: 122.8927,
      },
      datetime: new Date(1658828129000),
    }
  },
}

// composition api
// import {ref, computed} from 'vue'
// import { useI18n } from 'vue-i18n'


</script>