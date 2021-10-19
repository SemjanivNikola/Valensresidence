<template>
    <div id="nav" >
        <div class="main-container" :style="{width: ww + 'px'}">
            <div id="logo-icon" class="position-relative float-left">
                <div style="display: inline-block; width: 50%;">
                    <router-link to="/"><img v-if="lcO" class="res-img" :src="vrLogoC" v-bind="logo" alt="Valens Residences Logo"></router-link>
                    <router-link to="/"><img v-if="!lcO" class="res-img" :src="vrLogoG" v-bind="logo" alt="Valens Residences Logo"></router-link>
                </div>
                <img src="../assets/icons/stay_safe_in_croatia.png" alt="Stay safe in Croatia" class="res-img" style="width: 50%;">
            </div>
            <div id="menu-icon" class="float-right" style="height: 100px;  width: 80px; display: inline-block;">
                <svg @click="openMenu()" viewBox="-10 -15 45 50">
                    <g v-if="lcO" fill="#006980">
                        <path class="svg-path-d" d="M4.5 11.5A.5.5 0 015 11h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm-2-4"></path>
                        <path d="M2.5 7.5A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm-2-4"></path>
                        <path class="svg-path-u" d="M.5 3.5A.5.5 0 011 3h10a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"></path>
                    </g>
                    <g v-if="!lcO" fill="#cecece">
                        <path class="svg-path-d" d="M4.5 11.5A.5.5 0 015 11h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm-2-4"></path>
                        <path d="M2.5 7.5A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm-2-4"></path>
                        <path class="svg-path-u" d="M.5 3.5A.5.5 0 011 3h10a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"></path>
                    </g>
                </svg>
            </div>
        </div>
        <!-- full screen menu -->
        <div id="background-el" v-if="menuOverlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100vh; z-index: 100; overflow: hidden;">
            <div style="position: relative; width: 100%; height: 100%; display: block;">
                <div class="v-line-wrapper">
                    <transition-group name="slideDown" mode="out-in">
                        <div v-bind:key="1" v-if="lineEight" class="v-line"></div>
                        <div v-bind:key="2" v-if="lineSeven" class="v-line"></div>
                        <div v-bind:key="3" v-if="lineSix" class="v-line"></div>
                        <div v-bind:key="4" v-if="lineFive" class="v-line"></div>
                        <div v-bind:key="5" v-if="lineFour" class="v-line"></div>
                        <div v-bind:key="6" v-if="lineThree" class="v-line"></div>
                        <div v-bind:key="7" v-if="lineTwo" class="v-line"></div>
                        <div v-bind:key="8" v-if="lineOne" class="v-line"></div>
                    </transition-group>
                </div>
                <div style="position: absolute; width: 100%; top: 45%; left: 0; z-index: 102; background-color: transparent;">
                    <div class="menu-destination">
                        <ul>
                            <transition-group name="slideDownMenu" mode="out-in">
                                <li v-if="vLineAnimDone" v-bind:key="1"><router-link to="/">{{data[0]}}</router-link></li>
                                <li v-if="vLineAnimDone" v-bind:key="2"><router-link to="main">{{data[1]}}</router-link></li>
                                <li v-if="vLineAnimDone" v-bind:key="3"><router-link to="gallery">{{data[2]}}</router-link></li>
                                <li v-if="vLineAnimDone" v-bind:key="4"><router-link to="contactUs">{{data[3]}}</router-link></li>
                                <li v-if="vLineAnimDone" v-bind:key="5"><a @click="setLang('eng')">ENG</a></li>
                                <li v-if="vLineAnimDone" v-bind:key="6"><a @click="setLang('hr')">HR</a></li>
                            </transition-group>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        props: {
            lc: {
                type: Boolean,
                required: true
            }
        },
        data () {
            return {
                bgMenuElement: null,
                logo: {height: 60},
                menuOverlay: false,
                lineOne: false,
                lineTwo: false,
                lineThree: false,
                lineFour: false,
                lineFive: false,
                lineSix: false,
                lineSeven: false,
                lineEight: false,
                vLineAnimDone: false,
                lcO: '',
                lcHistory: this.lc,
                ww: '',
                data: this.$store.getters.getNav
            }
        },
        watch: {
          lc (status) {
              this.lcHistory = status !== true;
          }
        },
        created () {
            if (this.$store.state.mobaDev) {
                this.ww = this.$store.state.ww;
            } else {
                this.ww = this.$store.state.ww - 17;
            }
          this.bgMenuElement = document.querySelector('#background-el');
          this.lcO = this.lc;
        },
        methods: {
            setLang (state) {
              this.openMenu();
              this.$store.commit('toggleLang', state);
              this.data = this.$store.getters.getNav;
              this.$emit('update-lang');
            },
            openMenu: function () {

                if (!this.menuOverlay) {
                    this.menuOverlay = true;
                    if (this.lcO) {
                        this.lcO = false;
                    }
                    this.setAnimationGo(true);
                } else {
                    this.lcO = this.lcHistory;
                    this.setAnimationGo(false);
                    setTimeout(() => {
                        this.menuOverlay = false;
                    }, 1800);
                }
            },
            setAnimationGo: function (status) {
                setTimeout(() => {
                    this.lineOne = status;
                }, 50);
                setTimeout(() => {
                    this.lineFive = status;
                }, 100);
                setTimeout(() => {
                    this.lineEight = status;
                }, 120);
                setTimeout(() => {
                    this.lineTwo = status;
                }, 200);
                setTimeout(() => {
                    this.lineThree = status;
                }, 100);
                setTimeout(() => {
                    this.lineFour = status;
                }, 150);
                setTimeout(() => {
                    this.lineTwo = status;
                }, 250);
                setTimeout(() => {
                    this.lineSix = status;
                }, 200);
                setTimeout(() => {
                    this.lineSeven = status;
                    this.vLineAnimDone = status;
                }, 100);
            }
        },
        computed: {
            vrLogoC () {
                return require('../assets/logo-color.png');
            },
            vrLogoG () {
                return require('../assets/logo-gray.png');
            }
        }
    }
</script>

<style scoped>
    #nav {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 80px;
        z-index: 105;
    }
    .main-container {
        position: relative;
        background-color: transparent;
        box-sizing: border-box;
        z-index: 111;
    }
    #background-el {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .overlay {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(41, 41, 41, .6);
        z-index: 101;
    }
    .v-line {
        height: 100vh;
        display: inline-block;
        width: 12.5%;
        background-color: #0C0C0C;
        box-sizing: border-box;
    }
    .menu-destination {
        text-transform: uppercase;
        box-sizing: border-box;
        text-align: center;
        font-size: 22px;
        line-height: 1.4;
    }
    ul {
        padding-left: 0;
        list-style-type: none;
        text-align: center;
        box-sizing: border-box;
    }
    ul li {
        display: inline-block;
    }
    .menu-destination ul li a {
        color: #fff;
        font-size: 12px;
        letter-spacing: .2em;
        line-height: 18px;
        text-transform: uppercase;
        text-decoration: none;
        margin: 0 20px;
        padding-bottom: 4px;
        display: block;
        -webkit-transition: all 500ms;
        -moz-transition: all 500ms;
        -ms-transition: all 500ms;
        -o-transition: all 500ms;
        transition: all 500ms;
        cursor: pointer;
    }
    svg {
        cursor: pointer;
    }
    .svg-path-u, .svg-path-d {
        -webkit-transition: all 500ms;
        -moz-transition: all 500ms;
        -ms-transition: all 500ms;
        -o-transition: all 500ms;
        transition: all 500ms;
    }
    #menu-icon:hover .svg-path-u {
        -webkit-transform: translateX(6px);
        -moz-transform: translateX(6px);
        -ms-transform: translateX(6px);
        -o-transform: translateX(6px);
        transform: translateX(6px);
    }
    #menu-icon:hover .svg-path-d {
        -webkit-transform: translateX(-6px);
        -moz-transform: translateX(-6px);
        -ms-transform: translateX(-6px);
        -o-transform: translateX(-6px);
        transform: translateX(-6px);
    }
    .res-img {
        width: 100%;
        height: auto;
    }
    /* ANIMATION */
    .slideDown-enter-active, .slideDown-leave-active {
        transition: all 1s;
        transform-origin: top;
    }
    .slideDown-enter {
        -webkit-transform: translateY(-100vh);
        -moz-transform: translateY(-100vh);
        -ms-transform: translateY(-100vh);
        -o-transform: translateY(-100vh);
        transform: translateY(-100vh);
    }
    .slideDown-enter-to, .slideDown-leave {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
    }
    .slideDown-leave-to {
        -webkit-transform: translateY(100vh);
        -moz-transform: translateY(100vh);
        -ms-transform: translateY(100vh);
        -o-transform: translateY(100vh);
        transform: translateY(100vh);
    }
    .slideDownMenu-enter-active, .slideDownMenu-leave-active {
        -webkit-transition: all 1s;
        -moz-transition: all 1s;
        -ms-transition: all 1s;
        -o-transition: all 1s;
        transition: all 1s;
    }
    .slideDownMenu-enter {
        opacity: 0;
        -webkit-transform: translateY(-250px);
        -moz-transform: translateY(-250px);
        -ms-transform: translateY(-250px);
        -o-transform: translateY(-250px);
        transform: translateY(-250px);
    }
    .slideDownMenu-enter-to, .slideDownMenu-leave {
        opacity: 1;
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0);
    }
    .slideDownMenu-leave-to {
        opacity: 0;
        -webkit-transform: translateY(250px);
        -moz-transform: translateY(250px);
        -ms-transform: translateY(250px);
        -o-transform: translateY(250px);
        transform: translateY(250px);
    }
</style>
