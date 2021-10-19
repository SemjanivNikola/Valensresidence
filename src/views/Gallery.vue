<template>
    <div id="gallery">
        <navigation :lc="true" @update-lang="updateLang"></navigation>
        <div v-if="!mobaDev" id="main-view">
            <div style="height: 100%; width: inherit; display: inherit;">
                <div class="slide-wrap">
                    <div @click="prevSlide()" @dblclick="preventDefault($event)" class="btn-sm-g" style="left: 15px; top: 45%; right: unset;"><b-icon-chev-left style="color: #c9c9c9;"></b-icon-chev-left></div>
                    <div style="width: 100%; height: 100%; margin: 0 auto; position: relative; overflow: hidden;">
                        <div class="slider-wrapper">
                            <div id="slider" class="slide-inner-wrapper">
                                <div v-for="(g, index) in sortGa" v-bind:key="g.id" class="img-container-g" v-bind:style="{width: ww + 'px'}">
                                    <div class="fs-img-wrapper" v-bind:style="{width: g.width + 'px'}">
                                      <img id="img" class="curr-img slide-img" :src="g.src" :alt="g.alt" @load="onImgLoad($event, index)">
                                        <button @click="openFullScreen($event)" @dblclick="preventDefault()" class="btn-sm-g inner-bot"><b-icon-aspect-ratio style="color: #c9c9c9;"></b-icon-aspect-ratio></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @click="nextSlide()" @dblclick="preventDefault($event)" class="btn-sm-g" style="right: 15px; top: 45%;"><b-icon-chev-right style="color: #c9c9c9;"></b-icon-chev-right></div>
                </div>
            </div>
            <div id="bot-gallery-nav">
                <div style="position: relative; width: 100%; height: 100%;">
                    <div id="slide-container">
                        <div id="slide-wrapper">
                            <div class="slide-inner-wrapper">
                                <div id="indicator" style="height: auto; position: relative; display: block; margin: 0 auto;">
                                    <transition-group name="fadeIn" mode="out-in">
                                        <div v-for="(img, index) in sortGa" v-bind:key="img.id" @dblclick="preventDefault($event)" @click="setViewImg(img, index)" class="bn-parent" v-bind:style="{width: cw + 'px', maxHeight: cw + 'px', minHeight: cw + 'px'}">
                                            <div v-bind:class="[{active: img.isActive}, 'bn-child']" :style="{backgroundImage: 'url(' + img.src + ')'}"></div>
                                        </div>
                                    </transition-group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute tl-0" style="width: 100%; margin-top: -45px;">
                        <div class="filter-wrapper">
                            <button class="f-main-btn goto-btn" @click="openFilter">Filter</button>
                            <ul id="filter-content" class="filter-content flex-row flex-nowrap">
                                <li>
                                    <div class="goto-btn">
                                        <div @click="sortGallery($event, 0)" id="all" class="btn btn-g widely activeSelector">
                                            <span style="text-transform: uppercase;">{{webData[0]}}</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="goto-btn">
                                        <div @click="sortGallery($event, 1)" id="outside" class="btn btn-g widely">
                                            <span style="text-transform: uppercase;">{{webData[1]}}</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="goto-btn">
                                        <div @click="sortGallery($event, 2)" id="kitchen" class="btn btn-g widely">
                                            <span style="text-transform: uppercase;">{{webData[2]}}</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="goto-btn">
                                        <div @click="sortGallery($event, 3)" id="living-room" class="btn btn-g widely">
                                            <span style="text-transform: uppercase;">{{webData[3]}}</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="goto-btn">
                                        <div @click="sortGallery($event, 4)" id="bedroom" class="btn btn-g widely">
                                            <span style="text-transform: uppercase;">{{webData[4]}}</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="goto-btn">
                                        <div @click="sortGallery($event, 5)" id="bathroom" class="btn btn-g widely">
                                            <span style="text-transform: uppercase;">{{webData[5]}}</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="goto-btn">
                                        <div @click="sortGallery($event, 6)" id="entertainment" class="btn btn-g widely" style="width: 180px">
                                            <span style="text-transform: uppercase;">{{webData[6]}}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="position-relative" style="padding-top: 100px;">
            <div class="sortOptionList">
                <ul>
                    <li>
                        <div class="goto-btn">
                            <div @click="sortGallery($event, 0)" id="all-m" class="btn btn-g widely activeSelector">
                                <span style="font-size: 18px; text-transform: uppercase;">{{webData[0]}}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="goto-btn">
                            <div @click="sortGallery($event, 1)" id="outside-m" class="btn btn-g widely">
                                <span style="font-size: 18px; text-transform: uppercase;">{{webData[1]}}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="goto-btn">
                            <div @click="sortGallery($event, 2)" id="kitchen-m" class="btn btn-g widely">
                                <span style="font-size: 18px; text-transform: uppercase;">{{webData[2]}}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="goto-btn">
                            <div @click="sortGallery($event, 3)" id="living-room-m" class="btn btn-g widely">
                                <span style="font-size: 18px; text-transform: uppercase;">{{webData[3]}}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="goto-btn">
                            <div @click="sortGallery($event, 4)" id="bedroom-m" class="btn btn-g widely">
                                <span style="font-size: 18px; text-transform: uppercase;">{{webData[4]}}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="goto-btn">
                            <div @click="sortGallery($event, 5)" id="bathroom-m" class="btn btn-g widely">
                                <span style="font-size: 18px; text-transform: uppercase;">{{webData[5]}}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="goto-btn">
                            <div @click="sortGallery($event, 6)" id="entertainment-m" class="btn btn-g widely">
                                <span style="font-size: 18px; text-transform: uppercase;">{{webData[6]}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="position-absolute wh-100" style="display: grid; overflow-y: scroll; box-shadow: 0 0 50px 64px #cecece inset;">
                <div style="height: inherit; display: table; padding: 20px;">
                    <div style="display: flex; flex-wrap: wrap; height: inherit;">
                        <div style="height: inherit; display: block; padding-left: 35px;">
                            <div v-for="img in sortGa" v-bind:key="img.id" class="bn-parent" style="width: 85px; height: 85px; margin-right: 5px; margin-bottom: 5px;">
                                <button @click="fullScreenMobile(img)" style="width: inherit; height: inherit; background: transparent; padding: 0; border: none;">
                                    <img class="bn-child" :src="img.src" :alt="img.alt">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FULLSCREEN MODULE -->
        <transition name="fadeIn">
            <div v-if="toggleFullScreen" class="fs-container">
                <div class="fs-inner-container">
                    <button @click="openFullScreen()" class="btn-sm-g inner-top"><b-icon-fs-exit></b-icon-fs-exit></button>
                    <div class="fs-img-container" style="display: flex; align-items: center;">
                        <img :class="[mobaDev ? 'img-res' : 'curr-img']" :src="currImg.src" :alt="currImg.alt">
                    </div>
                    <div @click="prevSlide()" @dblclick="preventDefault($event)" class="btn-sm-g left"><b-icon-chev-left></b-icon-chev-left></div>
                    <div @click="nextSlide()" @dblclick="preventDefault($event)" class="btn-sm-g right"><b-icon-chev-right></b-icon-chev-right></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
// TODO: - Entertainment button ne radi. Treba popraviti filtriranje
// TODO: - Optimizirati slike u bottom navigaciji

import Navigation from '../components/Navigation.vue'

export default {
        name: "Gallery",
        props: {
          webDataGlobal: {
            type: Object,
            required: true
          }
        },
        data () {
            return {
                gallery: [],
                currImg: {},
                toggleFullScreen: false,
                toggleFilter: false,
                slider: '',
                ww: '',
                cw: '',
                currentSelector: null,
                mobaDev:  false,
                indicator: 0,
                counter: 170,
                webData: {}
            }
        },
      watch: {
          counter (state) {
            if (state === 0 || state < 0) this.$store.commit('setGalleryImgWidth', this.gallery);
          }
      },
        created () {
            this.$store.state.logoColor = true;
            this.webData = this.webDataGlobal.gallery;
            this.gallery = this.$store.getters.getGalleryImages;
            this.currImg = this.gallery[0];
            this.currImg.isActive = true;
            this.ww = window.innerWidth;
            if (window.innerWidth < 768) {
                this.mobaDev = true;
                this.$store.state.mobaDev = true;
            } else  this.$store.state.mobaDev = false;
        },
        mounted () {
            this.setChildWidth();
            if (this.mobaDev) {
                this.currentSelector = document.querySelector('#all-m');
            } else {
                this.currentSelector = document.querySelector('#all');
            }

        },
        methods: {
            updateLang () {
              this.$emit('update-lang');
            },
            preventDefault: function (e) {
                e.preventDefault();
            },
            setViewImg: function (img, index) {
                this.currImg.isActive = false;
                this.currImg = img;
                this.currImg.isActive = true;
                let to = this.slider.childNodes[index].offsetLeft;
                this.slider.style.transform = 'translateX(-' + to + 'px)';
            },

            onImgLoad: function (e, index) {
                let w = document.getElementsByClassName('fs-img-wrapper');
                let img = null;
                try {
                    img = e.path[0]
                }
                catch {
                    img = e.target;
                }
                if(window.innerWidth > 768 && window.innerWidth < 1100) this.gallery[index].width = (w[0].offsetHeight * img.naturalWidth / img.naturalHeight) / 2;
                else    this.gallery[index].width = w[0].offsetHeight * img.naturalWidth / img.naturalHeight;
                console.log('w#1: ', this.gallery[index].width, ' index: ', index);
                this.counter--;
            },
            setChildWidth: function () {
                this.slider = document.querySelector('#slider');
                let p = document.getElementsByClassName('bn-parent');
                let h = null;
                p.forEach(function (value) {
                    h = value.offsetHeight;
                });
                this.cw = h;
            },
            nextSlide: function () {
                let index = this.gallery.indexOf(this.currImg);
                let border = this.gallery.length - index;
                if (border > 1 && this.mobaDev === false) {
                    this.currImg.isActive = false;
                    let nextImg = this.gallery[index + 1];
                    let to = this.slider.childNodes[index + 1].offsetLeft;
                    this.slider.style.transform = 'translateX(-' + to + 'px)';
                    nextImg.isActive = true;
                    this.currImg = nextImg;
                } else if (border > 1 && this.mobaDev === true) {
                    this.currImg = this.gallery[index + 1];
                }
            },
            prevSlide: function () {
                let index = this.gallery.indexOf(this.currImg);
                let border = this.gallery.length - index;
                if (border < this.gallery.length && this.mobaDev === false) {
                    this.currImg.isActive = false;
                    let childImg = this.gallery[index - 1];
                    let to = this.slider.childNodes[index - 1].offsetLeft;
                    this.slider.style.transform = 'translateX(-' + to + 'px)';
                    childImg.isActive = true;
                    this.currImg = childImg;
                } else if (border < this.gallery.length && this.mobaDev === true) {
                    this.currImg = this.gallery[index - 1];
                }
            },
            openFullScreen: function () {
                this.toggleFullScreen = !this.toggleFullScreen;
            },
            openFilter() {
                let filterContent = document.querySelector('#filter-content');
                if (this.toggleFilter) {
                    this.toggleFilter = false;
                    filterContent.style.width = '100%';
                } else {
                    this.toggleFilter = true;
                    filterContent.style.width = '0';
                }
            },
            fullScreenMobile: function (img) {
                this.currImg = img;
                this.openFullScreen();
            },
            sortGallery: function (e, indicator) {
                this.indicator = indicator;
                try {
                    e.path.forEach(function (value) {
                        if (value.className === 'btn btn-g widely') {
                            e = value;
                        }
                    });
                }
                catch {
                    if (e.target.className === 'btn btn-g widely')  e = e.target;
                    else    e = e.target.offsetParent;
                }
                if (this.currentSelector.id !== e.id) {
                    this.currentSelector.classList.remove('activeSelector');
                    e.classList.add('activeSelector');
                    this.gallery = this.sortGa;
                    if (!this.mobaDev)    this.setViewImg(this.gallery[0], 0);
                    this.currentSelector = e;
                }
                if(window.innerWidth > 768 && window.innerWidth < 1100) this.openFilter();
            }
        },
        computed: {
            sortGa: function () {
                let a = [];
                if (this.indicator === 0) {
                    a = this.$store.state.gallery;
                } else {
                    let index = 0;
                    this.$store.state.gallery.forEach(function (value) {
                        if (value.block === this.indicator) {
                            value.index = index;
                            a.push(value);
                            index++;
                        }
                    }, this);
                }
                return a;
            }
        },
        components: {
            Navigation
        }
    }
</script>

<style scoped>
    .activeSelector {
        color: #ffffff;
        background-color: rgb(0, 105, 128);
        pointer-events: none;
    }
    .img-container-g {
        height: inherit;
        position: inherit;
        display: inline-block;
    }
    #imp-chevron {
        margin: 0 0 0 10px;
    }
    .fs-container {
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 110;
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
    #indicator {
        -webkit-transition: all 1s;
        -moz-transition: all 1s;
        -ms-transition: all 1s;
        -o-transition: all 1s;
        transition: all 1s;
    }
    .fs-img-wrapper {
        height: 100%;
        box-sizing: border-box;
        position: relative;
        margin: 0 auto;
    }
    .btn-sm-g {
        position: absolute;
        background: transparent;
        border: none;
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
        background-color: #0C0C0C;
    }
    .slider-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
        display: -ms-flexbox;
    }
    #slide-container {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        z-index: 3;
    }
    #slide-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow-x: scroll;
        display: flex;
        display: -webkit-flex;
        display: -ms-flexbox;
        box-sizing: content-box;
        -webkit-box-sizing: content-box;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }
    .slide-inner-wrapper {
        width: auto !important;
        height: 100%;
        display: inherit !important;
        position: relative;
        -webkit-flex-shrink:0;
        flex-shrink:0;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }
    svg {
        height: 100%;
        color: #ffffff;
        font-size: xx-large;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
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
    .inner-bot {
        bottom: 7px;
        right: 7px;
    }
    .widely {
        width: 150px;
        height: 40px;
        z-index: 10;
    }
    #main-view {
        width: 100%;
        height: 85%;
    }
    .slide-wrap {
        height: 100%;
        position: relative;
        padding: 50px 0;
    }
    #bot-gallery-nav {
        width: 100%;
        height: 13%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 2px solid rgba(0, 105, 128, .625);
        background-color: #cecece;
        box-sizing: border-box;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
        z-index: 3;
    }
    .curr-img {
        display: inline-block;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
    #gallery {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: #ececec;
    }
    .bn-parent {
        height: 100%;
        position: relative;
        overflow: hidden;
        display: inline-block;
        cursor: pointer;
        float: left;
        -webkit-transition: all  1s;
        -moz-transition: all  1s;
        -o-transition: all  1s;
        transition: all 1s;
    }
    .bn-parent:last-child {
        margin-right: 0;
    }
    .bn-child {
        height: inherit;
        min-height: inherit;
        max-height: inherit;
        width: inherit;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }
    .active {
        border: 5px solid white;
    }
    .bn-parent:hover .bn-child, .bn-parent:focus .bn-child {
        -ms-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
    }
    /*****************************************/
    /*             ANIMATIONS               */
    .FadeUp-enter-active, .FadeUp-leave-active, .fadeInDown-enter-active, .fadeInDown-enter-active,  .fadeIn-leave-active {
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
    }
    .FadeUp-enter, .FadeUp-leave-to {
        opacity: 0;
        -webkit-transform: translateY(100px);
        -moz-transform: translateY(100px);
        -ms-transform: translateY(100px);
        -o-transform: translateY(100px);
        transform: translateY(100px);
    }
    .FadeUp-enter-to, .FadeUp-leave, .fadeInDown-enter-to {
        opacity: 1;
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
    }
    .fadeInDown-enter, .fadeInDown-leave-to {
        opacity: 0;
        -webkit-transform: translateY(-80px);
        -moz-transform: translateY(-80px);
        -ms-transform: translateY(-80px);
        -o-transform: translateY(-80px);
        transform: translateY(-80px);
    }
    .fadeIn-enter-active {
        -webkit-transition: all 500ms;
        -moz-transition: all 500ms;
        -ms-transition: all 500ms;
        -o-transition: all 500ms;
        transition: all 500ms;
        transition-delay: 500ms;
    }
    .fadeInDown-leave {
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        -ms-transition: all 300ms;
        -o-transition: all 300ms;
        transition: all 300ms;
    }
    .fadeIn-enter, .fadeIn-leave-to {
        opacity: 0;
    }
    .fadeIn-enter-to, .fadeIn-leave {
        opacity: 1;
    }
    /* RESPONSIVE */
    @media only screen and (max-width: 450px) {
        .slider-inner-wrapper {
            height: 60%;
        }
    }
    @media (min-width: 1100px) {
        .filter-wrapper {
            display: block;
            width: 100%;
        }
        .f-main-btn {
            display: none;
        }
        .filter-content {
            width: 100%;
        }
    }
    @media (max-width: 1100px) {
        .filter-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;

        }
        .f-main-btn {
            display: inline-block;
            height: 45px;
            width: 140px;
        }
        .filter-content {
            width: 0;
            background-color: #2c3e50;
            height: 190px;
            overflow: hidden;
            z-index: 99999;
            transition: all 300ms ease-out;
        }
        .filter-content li {
            flex-shrink: 0;
            margin-top: 12px;
            margin-bottom: 12px;
        }
        .filter-content li .goto-btn span {
            color: #ffffff!important;
        }
        .fs-img-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

</style>
