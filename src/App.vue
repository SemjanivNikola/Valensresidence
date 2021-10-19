<template>
    <div id="app">
      <transition name="fadeOut" mode="out-in">
        <div v-if="loadingPage" class="background" v-bind:key="1" style="z-index: 999999;">
          <div class="layer-background">
            <div id="top-layer" class="layer" v-bind:style="{ height: loadedFirstHalf}"></div>
            <div id="mid-layer" class="layer" v-bind:style="{ height: loadedSecondHalf}">
              <img :src="require('./assets/logo-gray.png')" alt="Valens Residences Logo" class="img-res">
            </div>
            <div id="bot-layer" class="layer">
              <img :src="require('./assets/logo-color.png')" alt="Valens Residences Logo" class="img-res">
            </div>
            <div class="position-absolute" style="bottom: 20px; left: 0; width: 100%; overflow: auto; z-index: 115;">
              <p class="text-center" style="font-size: 25px;"><span>{{loadingPercent}}%</span> Croatian</p>
            </div>
          </div>
        </div>
      </transition>
      <transition name="page" mode="out-in">
        <router-view :web-data-global="webData" :key="webData.key" @update-lang="updateLang"/>
      </transition>
    </div>
</template>

<script>
/* TODO:  - Napraviti brzi loading low quality slika
          - Zamjena za mormalne slike
          - Provuci kroz cijeli projekt
*/
/* TODO: - Animacije modula i objekata kroz cijeli projekt
 */

    export default {
        name: 'App',
        data () {
          return {
            webData: {},
            loadingFirstHalf: 50,
            loadingSecondHalf: 50,
            loadingPage: true,
            loadingHalf: 0,
            loadingPercent: 0,
            loadTime: 0,
            interval: null
          }
        },
        created () {
          let perfData = window.performance.timing;
          let estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
          this.loadTime = Number((estimatedTime / 1000) % 60) * 100;
          this.doProgress();
        },
        beforeMount () {
          this.$store.commit('toggleLang', 'eng');
          this.webData = this.$store.getters.getWebData;
        },
        watch: {
          loadingPercent (val) {
            if (val < 50) {
              this.loadingFirstHalf--;
            } else if (val > 50 && val < 100) {
              this.loadingSecondHalf--;
            } else if (val >= 100) {
              clearInterval(this.interval);
              this.loadingPage = false;
            }
          }
        },
        methods: {
          updateLang () {
            this.webData = this.$store.getters.getWebData;
            this.$forceUpdate();
          },
          doProgress () {
            let step = this.loadTime / 100;
            this.interval = setInterval(() => {
              this.loadingPercent++;
            }, step);
          }
        },
        computed: {
          loadedFirstHalf () {
            let h = this.loadingFirstHalf * 2;
            return h + '%'
          },
          loadedSecondHalf () {
            let h = this.loadingSecondHalf * 2;
            return h + '%'
          }
        }
    }
</script>

<style>
    .img-res {
        width: 100%;
        height: auto;
    }
    *{
        margin: 0;
        padding: 0;
    }
    body{
        overflow-x: hidden;
        overflow-y: scroll;
    }
    div {
        display: block;
        box-sizing: border-box;
    }
    #app{
        text-align: center;
        position: relative;
        height: auto;
        width: 100%;
    }
    .background {
        height: 100vh;
        width: 100%;
        overflow: hidden;
        position: absolute;
        background-color: #fff;
        top: 0;
        left: 0;
    }
    .layer-background {
        height: 45vh;
        width: 300px;
        margin: 0 auto;
        padding: 8%;
        position: relative;
        display: block;
        box-sizing: content-box;
    }
    .layer {
        height: 100%;
        max-height: 431px;
        width: 100%;
        position: absolute;
        top: 20%;
        left: 0;
        background-color: #fff;
        overflow: hidden;
    }
    #top-layer {
        z-index: 113;
    }
    #mid-layer {
        z-index: 112;
    }
    #bot-layer {
        z-index: 111;
    }
    .heightZeroUp-enter-active, .heightZeroUp-leave-active, .fadeOut-enter-active, .fadeOut-leave-active {
        transition: all 1s;
    }

    .heightZeroUp-enter, .heightZeroUp-leave-to{
        height: 0;
    }
    .fideOut-enter, .fadeOut-leave-to {
        opacity: 0;
    }

    @font-face {
        font-family: 'Rozha One';
        src: url('./assets/fonts/RozhaOne.eot'); /* IE9 Compat Modes */
    src: url('./assets/fonts/RozhaOne.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/RozhaOne.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/RozhaOne.ttf')  format('truetype'); /* Safari, Android, iOS */
    /* url('webfont.svg#svgFontName') format('svg');  Legacy iOS */
    }
    h1 {
        font-family: inherit;
    }
    h2, h3, h4 {
        font-family: Rozha One,sans-serif;
    }
    h5, h6, p, a {
        font-family: Ebrima,sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
        color: #0C0C0C;
    }
    h1 {
        font-weight: 100;
    }
    h2 {
        font-weight: 100;
    }
    h3 {
        letter-spacing: 1px;
        font-weight: 100;
    }
    h4 {
        font-size: 23px !important;
        font-weight: 100;
        letter-spacing: 3px;
    }
    h5 {
        font-size: 18px !important;
        font-weight: bold !important;
    }

    h6 {
        font-size: 12px;
        font-weight: 100;
        letter-spacing: 2px;
    }
    p {
        font-size: 14px;
        letter-spacing: 1px;
        text-align: justify;
    }
    a:hover {
        text-decoration: none !important;
    }
    .clearfix:before, .clearfix:after, .dl-horizontal dd:before, .dl-horizontal dd:after, .container:before, .container:after, .container-fluid:before, .container-fluid:after, .row:before, .row:after, .form-horizontal .form-group:before, .form-horizontal .form-group:after, .btn-toolbar:before, .btn-toolbar:after, .btn-group-vertical>.btn-group:before, .btn-group-vertical>.btn-group:after, .nav:before, .nav:after, .navbar:before, .navbar:after, .navbar-header:before, .navbar-header:after, .navbar-collapse:before, .navbar-collapse:after, .pager:before, .pager:after, .panel-body:before, .panel-body:after, .modal-header:before, .modal-header:after, .modal-footer:before, .modal-footer:after, .column-inner:before, .column-inner:after {
        display: table;
        content: '';
    }
    .page-enter-active, .page-leave-active {
        transition: opacity 1s, transform 1s;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }
</style>
