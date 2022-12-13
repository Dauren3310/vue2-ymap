<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  data: () => ({
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
  },
};
</script>

<template>
  <div class="yandex-map-container">
  <!-- <div> -->
    <!-- <h1>Ymap</h1> -->
    <yandex-map 
    style="width: 100%; height: 300px" v-if="true"
    :coords="coords"
    :zoom="10" 
    @click="onClick"
  >
    <ymap-marker 
      :coords="coords" 
      marker-id="123" 
      hint-content="some hint" 
    />
  </yandex-map>
</div>

</template>

<style scoped>
  .yandex-map-container {
    height: 1000px;
    width: 1000px;
  }
</style>
