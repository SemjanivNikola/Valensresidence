<template>
  <div class="background" v-bind:key="1" style="z-index: 107;">
    <div class="layer-background">
      <div id="top-layer" class="layer" v-bind:style="{ height: loadedFirstHalf}"></div>
      <div id="mid-layer" class="layer" v-bind:style="{ height: loadedSecondHalf}">
        <img :src="require('../assets/logo-gray.png')" alt="Valens Residences Logo" class="img-res">
      </div>
      <div id="bot-layer" class="layer">
        <img :src="require('../assets/logo-color.png')" alt="Valens Residences Logo" class="img-res">
      </div>
      <div class="position-absolute" style="bottom: 20px; left: 0; width: 100%; overflow: auto; z-index: 115;">
        <p class="text-center" style="font-size: 25px;"><span>{{loadingPercent}}%</span> Croatian</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrLoader',
  props: ['loadPercent'],
  data () {
    return {
      loadingHalf: 0,
      loadingPercent: 0,
      loadingFirstHalf: 50,
      loadingSecondHalf: 50
    }
  },
  watch: {
    loadingPercent (val) {
      if (val < 50) {
        this.loadingFirstHalf--
      } else if (val > 50 && val < 100) {
        this.loadingSecondHalf--
      } else if (val >= 100) {
        clearInterval(this.interval)
        this.loadingPage = false
      }
    }
  },
  methods: {
    setLoadingValue (value) {
      this.loadingPercent = value
    }
  },
  computed: {
    loadedFirstHalf () {
      const h = this.loadingFirstHalf * 2
      return h + '%'
    },
    loadedSecondHalf () {
      const h = this.loadingSecondHalf * 2
      return h + '%'
    }
  }
}
</script>

<style scoped>

</style>
