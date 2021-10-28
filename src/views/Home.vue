<template>
  <div id="home" v-on:scroll="scrollHandler">
    <transition name="fadeIn" mode="in-out">
      <navigation
        v-if="!navColorIsActive"
        :lc="false"
        :key="1"
        @update-lang="updateLang"
      ></navigation>
      <navigation
        v-else
        :lc="true"
        :key="2"
        @update-lang="updateLang"
      ></navigation>
    </transition>
    <div
      id="main-section"
      class="slide-wrap ov-h"
      v-on:wheel="MouseWheelHandler"
    >
      <div
        id="slide-1"
        class="position-relative trans-1000-ms"
        v-bind:style="{ transform: 'translateY(' + getSlideOffSetY + ')' }"
      >
        <div class="overlay-b overlay position-absolute"></div>
        <div
          class="position-relative text-left h-align"
          style="width: 80%; height: 100%; display: flex; align-items: center"
        >
          <div class="headline-container" style="width: 100%">
            <h1 class="white-color">
              {{ webData.s1Title }}<br /><span>{{ webData.s1TitleBold }}</span>
            </h1>
            <div
              style="height: 30px; width: 100%; background: transparent"
            ></div>
          </div>
          <div class="position-absolute ov-a bl-0">
            <div class="scroll-more-wrapper">
              <h5 class="white-color" style="margin-bottom: 10px">
                {{ webData.s2Title }} {{ webData.s2TitleBold }}
                <span style="font-family: auto, serif">&#46;&#46;&#46;</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        id="slide-2"
        class="position-relative trans-1000-ms bg-img-atr"
        v-bind:style="{ transform: 'translateY(' + getSlideOffSetY + ')' }"
      >
        <div class="overlay-b overlay position-absolute"></div>
        <div
          class="ta-l position-relative h-align"
          style="width: 80%; height: 100%; display: flex; align-items: center"
        >
          <div style="width: 100%">
            <div class="headline-container" style="width: 100%">
              <h1 class="white-color">
                {{ webData.s2Title }}<br /><span
                  >{{ webData.s2TitleBold }}&#46;&#46;&#46;</span
                >
              </h1>
              <div
                style="height: 30px; width: 100%; background: transparent"
              ></div>
            </div>
          </div>
          <div class="position-absolute bl-0 ov-a">
            <div class="scroll-more-wrapper">
              <h5 class="white-color" style="margin-bottom: 10px">
                &#46;&#46;&#46; {{ webData.s3Title }} {{ webData.s3TitleBold }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        id="slide-3"
        class="position-relative trans-1000-ms gray-bg"
        v-bind:style="{ transform: 'translateY(' + getSlideOffSetY + ')' }"
      >
        <div class="wh-100 trans-300-ms no-padding">
          <div class="no-padding column-table" style="height: 100%">
            <div
              class="col-lg-1 no-padding table-cell"
              style="width: 8.33333%"
            ></div>
            <div
              class="
                col-lg-11
                table-cell
                trans-1000-ms
                position-relative
                no-padding
              "
              style="height: 100%"
            >
              <div
                class="s3-bg-img position-relative"
                style="width: 100%; height: 82%"
              >
                <div
                  class="position-absolute linear-gradient-90 tl-0"
                  style="display: flex; align-items: center"
                >
                  <div class="headline-container text-left" style="width: 100%">
                    <h1 class="white-color">
                      &#46;&#46;&#46;{{ webData.s3Title }}<br /><span>{{
                        webData.s3TitleBold
                      }}</span>
                    </h1>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden text-left gray-bg slide-bottom-nav">
                <div class="inline-el col-33">
                  <router-link to="main" style="text-decoration: none"
                    ><h5
                      class="black-color"
                      style="
                        margin-bottom: 10px;
                        margin-right: 10px;
                        cursor: pointer;
                        display: inline-block;
                      "
                    >
                      {{ webData.s3Links[0].title }}
                    </h5>
                    <b-icon-arrow-right
                      class="va-mid black-color"
                      style="display: inline-block; font-size: 25px"
                    ></b-icon-arrow-right
                  ></router-link>
                  <p class="black-color sub-text" style="">
                    {{ webData.s3Links[0].desc }}
                  </p>
                </div>
                <div class="inline-el col-33">
                  <router-link to="gallery" style="text-decoration: none"
                    ><h5
                      class="black-color"
                      style="
                        margin-bottom: 10px;
                        margin-right: 10px;
                        cursor: pointer;
                        display: inline-block;
                      "
                    >
                      {{ webData.s3Links[1].title }}
                    </h5>
                    <b-icon-arrow-right
                      class="va-mid black-color"
                      style="display: inline-block; font-size: 25px"
                    ></b-icon-arrow-right
                  ></router-link>
                  <p class="sub-text black-color">
                    {{ webData.s3Links[1].desc }}
                  </p>
                </div>
                <div class="inline-el col-33">
                  <router-link to="contactUs" style="text-decoration: none"
                    ><h5
                      class="black-color"
                      style="
                        margin-bottom: 10px;
                        margin-right: 10px;
                        cursor: pointer;
                        display: inline-block;
                      "
                    >
                      {{ webData.s3Links[2].title }}
                    </h5>
                    <b-icon-arrow-right
                      class="va-mid black-color"
                      style="display: inline-block; font-size: 25px"
                    ></b-icon-arrow-right
                  ></router-link>
                  <p class="sub-text black-color">
                    {{ webData.s3Links[2].desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="position-fixed z-5"
        style="top: 50%; margin-top: -150px; left: 3%"
      >
        <div class="nav-container vertical">
          <p
            v-if="!$store.state.mobaDev"
            @click="clickSlideOffSet(0)"
            style="margin-bottom: 10px"
          >
            01.
          </p>
          <a
            v-else
            id="a-tag-1"
            href="#"
            @click="clickSlideOffSet(0)"
            style="margin-bottom: 10px"
            >01.</a
          >
          <span id="line-1" class="nav-vertical-line"></span>
        </div>
        <div class="nav-container vertical">
          <p
            v-if="!$store.state.mobaDev"
            @click="clickSlideOffSet(1)"
            style="margin-bottom: 10px"
          >
            02.
          </p>
          <a
            v-else
            id="a-tag-2"
            href="#"
            @click="clickSlideOffSet(1)"
            style="margin-bottom: 10px"
            >02.</a
          >
          <span id="line-2" class="nav-vertical-line"></span>
        </div>
        <div id="ncvl-lc-bb" class="nav-container vertical">
          <p
            v-if="!$store.state.mobaDev"
            @click="clickSlideOffSet(2)"
            style="margin-bottom: 10px"
          >
            03.
          </p>
          <a
            v-else
            id="a-tag-3"
            href="#"
            @click="clickSlideOffSet(2)"
            style="margin-bottom: 10px"
            >03.</a
          >
          <span id="line-3" class="nav-vertical-line"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Home',
  props: {
    webDataGlobal: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      slides: [{ id: '1' }, { id: '2' }, { id: '3' }],
      currSlide: '',
      animationOnGoing: false,
      transitionIsActive: false,
      slideTo: '',
      hiddenMenu: true,
      parentLine: null,
      slideLineState: false,
      navColorIsActive: false,
      webData: {}
    }
  },
  created () {
    this.$store.state.ww = window.innerWidth
    this.currSlide = this.slides[0]
    this.webData = this.webDataGlobal.home
    if (this.$store.state.ww < 768) {
      this.$store.state.mobaDev = true
    }
    this.wH = window.innerHeight
  },
  components: { Navigation },
  mounted () {
    this.getElOffset()
    this.scrollLineAnimation()
    if (this.$store.state.mobaDev) {
      document.querySelector('#a-tag-1').href = '#slide-1'
      document.querySelector('#a-tag-2').href = '#slide-2'
      document.querySelector('#a-tag-3').href = '#slide-3'
    }
  },
  methods: {
    scrollHandler: function ($event) {
      if (!this.animationOnGoing && this.currSlide) {
        const half = this.wH / 2
        let e = null
        const n = Number(this.currSlide.id)
        try {
          e = $event.target.scrollTop
        } catch {
          e = $event.path[0].scrollTop
        }
        if (this.currSlide !== 'undefined') {
          if (n > 1 && e <= half) this.clickSlideOffSet(0)
          else if (n > 2 || (n < 2 && e >= half && e < half * 3)) { this.clickSlideOffSet(1) } else if (n < 3 && e >= half * 3) this.clickSlideOffSet(2)
        }
      }
    },
    updateLang () {
      this.$emit('update-lang')
    },
    getElOffset: function () {
      this.slides[0].offsetTop = Number(
        document.querySelector('#slide-1').offsetTop
      )
      this.slides[1].offsetTop = Number(
        document.querySelector('#slide-2').offsetTop
      )
      this.slides[2].offsetTop = Number(
        document.querySelector('#slide-3').offsetTop
      )
    },
    MouseWheelHandler (e) {
      // console.log('e: ', e);
      // cross browser wheel delta
      // e = window.event || e; //old IE support
      if (!this.$store.state.mobaDev) {
        e.preventDefault()
        if (!this.animationOnGoing) {
          this.setAnim(true)
          this.scrollTo(e)
        }
      }
    },
    scrollTo: function (e) {
      const parentEl = this.currSlide
      let s = null
      let delta = Math.max(-1, Math.min(1, e.wheelDelta || e.wheelDeltaY))
      if (delta.toString() === 'NaN' || delta.toString() === 'Undefined') {
        delta = Math.max(-1, Math.min(1, e.deltaY))
      }
      if (delta === -1) {
        if (parentEl.id === '3') {
          this.navColorIsActive = true
          this.slideLineState = true
          this.setAnim(false)
        } else {
          s = parentEl.id
          this.setSlideOffSet(s)
        }
      } else if (delta === 1) {
        if (parentEl.id === '1') {
          this.slideLineState = true
          this.setAnim(false)
        } else {
          this.navColorIsActive = false
          s = Number(parentEl.id) - 2
          this.setSlideOffSet(s)
        }
      } else if (delta === 0) {
        this.slideLineState = true
        this.setAnim(false)
      }
    },
    setAnim: function (state) {
      if (state === false) {
        this.scrollLineAnimation()
      }
      this.animationOnGoing = state
    },
    setSlideOffSet: function (slide) {
      this.currSlide = this.slides[slide]
      if (!this.$store.state.mobaDev) {
        this.slideTo = '-' + this.currSlide.offsetTop + 'px'
      }
      setTimeout(() => {
        this.setAnim(false)
      }, 1000)
    },
    clickSlideOffSet: function (slide) {
      if (Number(this.currSlide.id) - 1 !== slide) {
        this.setAnim(true)
        this.setSlideOffSet(slide)
      }
    },
    scrollLineAnimation: function () {
      const elPrev = this.parentLine
      let elCurr = null
      if (this.currSlide.id === '1') {
        elCurr = document.querySelector('#line-1')
        this.navColorIsActive = false
      } else if (this.currSlide.id === '2') {
        elCurr = document.querySelector('#line-2')
        this.navColorIsActive = false
      } else {
        elCurr = document.querySelector('#line-3')
        document.querySelector('#ncvl-lc-bb').style.borderBottomColor =
          '#ffffff'
        this.navColorIsActive = true
      }
      elCurr.style.width = '2px'
      elCurr.style.height = '200px'
      if (elPrev !== null && this.slideLineState === false) {
        elPrev.style.height = '1px'
        elPrev.style.width = '1px'
        if (this.currSlide.id !== '3') {
          document.querySelector('#ncvl-lc-bb').style.borderBottomColor =
            'transparent'
        }
      }
      this.parentLine = elCurr
      this.slideLineState = false
    }
  },
  computed: {
    getSlideOffSetY: function () {
      return this.slideTo
    }
  }
}
</script>

<style>
.btn-sm-g {
  position: absolute;
  background: transparent;
  border: none !important;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
  cursor: pointer;
  -webkit-transition: all 500ms;
  -moz-transition: all 500ms;
  -ms-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
}
.btn-sm-g:hover {
  background-color: #0c0c0c;
}
svg {
  height: 100%;
  color: #ffffff;
  font-size: xx-large;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.left {
  top: 45%;
  left: 15px;
}
.right {
  top: 45%;
  right: 15px;
}
.inner-top {
  top: 7px;
  right: 7px;
}
.fs-container {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: black;
}
.fs-inner-container {
  height: 100vh;
  width: 100%;
  position: relative;
}
.fs-img-container {
  height: inherit;
  width: inherit;
  position: inherit;
  display: inline-block;
}
.square-img {
  height: 250px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
}
.wh-100 {
  height: 100vh;
  width: 100%;
}
/**********************************/
/*          FONT SIZE            */
.span-fs-105 {
  font-size: 105px;
}
.fs-num-big {
  font-size: 25px;
}
.fs-num-sm {
  font-size: 15px;
}

/**********************************/
/*            COLORS             */

.bg-trans {
  background-color: transparent;
}
.blue-bg {
  background-color: rgb(0, 105, 128);
}
.black-bg {
  background-color: #0c0c0c;
}
.white-bg {
  background-color: #ffffff;
}
.gray-bg {
  background-color: #cecece;
}
.blue-color {
  color: rgb(0, 105, 128);
}
.black-color {
  color: #0c0c0c;
}
.white-color {
  color: #ffffff;
}
.gray-color {
  color: #cecece;
}

/**********************************/
/*          TRANSITION           */

.trans-300-ms {
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}
.trans-500-ms {
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
}
.trans-1000-ms {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

/**********************************/
/*           COLUMN WIDTH        */

.col-2 {
  width: 20%;
}
.col-3 {
  width: 30%;
}
.col-33 {
  width: 33.3333%;
}
.col-6 {
  width: 60%;
}
.col-4 {
  width: 40%;
}
.col-5 {
  width: 50%;
}
.col-7 {
  width: 70%;
}
.col-8 {
  width: 80%;
}

/**********************************/
/*           ATTRIBUTES          */

.bg-img-atr {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-position: center;
  background-size: cover;
}
.bg-img-fix {
  background-attachment: fixed;
}
.inline-el {
  display: inline-block;
  float: left;
}
.ff-a {
  font-family: auto, sans-serif;
}
.ta-l {
  text-align: left;
}
.tal-j {
  text-align: justify;
}
.h-align {
  margin: 0 auto;
}
.va-mid {
  vertical-align: middle;
}

/**********************************/
/*            OVERFLOW           */

.ov-a {
  overflow: auto;
}
.ov-v {
  overflow: visible;
}
.bl-0 {
  bottom: 0;
  left: 0;
}
.br-0 {
  bottom: 0;
  right: 0;
}
.tl-0 {
  top: 0;
  left: 0;
}
.tr-0 {
  top: 0;
  right: 0;
}

/**********************************/
/*            ELEMENTS           */

.slide-bottom-nav {
  width: 100%;
  height: 18%;
}
.max-content-headline {
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}
.scroll-more-wrapper {
  display: inline-block;
  width: 310px;
}
.headline-container h1 span {
  font-weight: bold;
  letter-spacing: 2px;
}
.module {
  padding: 50px 0;
}
#hp-1-slider {
  width: 250px;
  padding: 80px 25px;
  top: 20%;
  right: 55%;
}
.text-container {
  padding: 60px 100px;
}
.slide-3-container {
  padding: 300px 0 0 200px;
}
.table-cell {
  display: table-cell;
}
.linear-gradient-90 {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(206, 206, 206),
    transparent,
    transparent
  );
}

/**********************************/
/*            ELEMENTS           */

.sub-text {
  letter-spacing: 0;
  text-align: left;
}

/****************************************/
/*            RESPONSIVENESS           */
/**************************************/

@media (min-width: 992px) {
  h3 {
    font-size: 24px;
  }
  .text-container {
    padding: 40px 80px;
  }
  .slide-3-container {
    padding: 180px 0 0 200px;
  }
}
@media (min-height: 800px) {
  #slide-1 .headline-container {
    padding-bottom: 320px;
  }
}
@media (max-height: 800px) {
  #slide-1 .headline-container {
    padding-bottom: 0;
  }
}

/**************************************/
/*************************************/

.dnwl-link {
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  color: #cecece;
}
.dnwl-link:hover {
  color: #000;
}
.cal-btn {
  padding: 0;
  height: 35px;
  width: 35px;
  float: left;
  box-sizing: border-box;
  color: white;
  background-color: rgb(0, 105, 128);
  font-size: 16px;
  border: 2px solid white;
  border-radius: 50%;
}
.cal-btn:last-child {
  margin-left: 17px;
}
/* MODULE */
.hidden-container {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  height: 100%;
  background-color: #0c0c0c;
  color: #ffffff;
  text-align: left;
}
.hidden-container-inner-text {
  width: 100%;
  height: 65%;
}
.btn svg {
  color: #ffffff;
  font-size: 30px;
  vertical-align: middle !important;
  margin-right: 20px;
}
.router-btn {
  margin-top: 10px;
}
.router-btn:hover .btn:before,
.uncover-more-btn:hover .btn:before,
.goto-btn:hover .btn:before {
  width: 100%;
}
#hide-more-btn .btn svg {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.content-container {
  height: auto;
  position: relative;
  padding-top: 80px;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}
.row-m {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.inner-row-m {
  padding: 25px;
  text-align: center;
}
.column-header {
  background: transparent;
}

.card-ls {
  width: 60%;
  position: absolute;
  bottom: -80px;
  left: 20%;
  margin-left: -30px;
  padding: 50px;
  z-index: 5;
  background-color: #ffffff;
}

/*******************************/
.slide-wrap {
  width: 100%;
  position: relative;
}
#slide-1 {
  background-image: url("../assets/bg01.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#slide-2 {
  background-image: url("../assets/bg02.jpg");
}
#slide-3 svg {
  font-size: 25px;
}
.s3-bg-img {
  background-image: url("../assets/bg03.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid rgb(206, 206, 206);
}

#section-3 > .container > .row > .inner-row {
  text-align: left;
  margin-bottom: 50px;
}
.carousel-wrapper {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.ov-h {
  overflow: hidden;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.inner-row {
  width: 100%;
  height: auto;
}
.column {
  float: left;
  display: inline-block;
  height: 100vh;
}

.overlay {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.overlay-b {
  background-color: rgba(0, 0, 0, 0.325);
}
.nav-container {
  position: relative;
  height: auto;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  box-sizing: border-box;
  -webkit-transition: all 500ms;
  -moz-transition: all 500ms;
  -ms-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
}
.nav-container.vertical a {
  color: #ffffff;
}
.nav-container:last-child {
  border-bottom: 1px solid transparent;
  box-sizing: border-box;
  padding-bottom: 10px;
}
.nav-vertical-line {
  height: 1px;
  width: 1px;
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  -webkit-transition: height 1s;
  -moz-transition: height 1s;
  -ms-transition: height 1s;
  -o-transition: height 1s;
  transition: height 1s;
}

button {
  padding: 10px 20px;
  color: #000000;
  background-color: #ffffff;
  border: 2px solid rgb(0, 105, 128);
  -webkit-transition: background-color 1s;
  -moz-transition: background-color 1s;
  -ms-transition: background-color 1s;
  -o-transition: background-color 1s;
  transition: background-color 1s;
}
button:hover {
  color: #ffffff;
  background-color: rgb(0, 105, 128);
  border: 2px solid #ffffff;
}
.horizontal {
  display: inline-block;
  margin-right: 10px;
}
.vertical {
  display: block;
  margin-bottom: 10px;
}

.z-5 {
  z-index: 5;
}
.ta-l {
  text-align: left;
}
.item-align-center {
  display: flex;
  align-items: center;
}

.h-container h1,
.h-container h3 {
  color: #ffffff;
}

/* ANIMATIONS */
.slideIn-enter-active,
.slideIn-leave-active {
  transition: all 1.5s;
}
.slideIn-enter,
.slideIn-leave-to {
  -webkit-transform: translateX(750px);
  -moz-transform: translateX(750px);
  -ms-transform: translateX(750px);
  -o-transform: translateX(750px);
  transform: translateX(750px);
}
.slideIn-enter-to,
.slideIn-leave {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}
.fadeUp-enter-active,
.fadeUp-leave-active,
.fadeIn-enter-active,
.fadeIn-leave-active {
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
}
.fadeIn-enter-active,
.fadeIn-leave-active,
.fadeInRight-enter-active,
.fadeInRight-leave-active {
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}
.fadeUp-enter {
  -webkit-transform: translateY(30px);
  -moz-transform: translateY(30px);
  -ms-transform: translateY(30px);
  -o-transform: translateY(30px);
  transform: translateY(30px);
  opacity: 0;
}
.fadeUp-leave-to {
  -webkit-transform: translateY(-30px);
  -moz-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  -o-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0;
}
.fadeUp-enter-to,
.fadeUp-leave {
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}
.fadeInRight-enter,
.fadeInRight-leave-to {
  opacity: 0;
  -webkit-transform: translateX(-80px);
  -moz-transform: translateX(-80px);
  -ms-transform: translateX(-80px);
  -o-transform: translateX(-80px);
  transform: translateX(-80px);
}
.fadeInRight-leave-to {
  opacity: 0;
  -webkit-transform: translateX(80px);
  -moz-transform: translateX(80px);
  -ms-transform: translateX(80px);
  -o-transform: translateX(80px);
  transform: translateX(80px);
}
.fadeInRight-enter-to,
.fadeInRight-leave {
  opacity: 1;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}
.fadeIn-enter-to,
.fadeIn-leave {
  opacity: 1;
}
</style>
