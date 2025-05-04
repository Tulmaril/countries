<template>
  <div class="country-map" v-if="lat && lng">
    <LMap
      style="height: 350px"
      :zoom="6"
      :center="[lat, lng]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        layer-type="base"
        name="Carto Light"
      />
    </LMap>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  lat: number
  lng: number
  name: string
}>()

const zoom = 5
</script>
