<template>
  <div id="v-main" class="position-relative w-100">
    <navigation :lc="false" @update-lang="updateLang"></navigation>
    <div id="main">
      <div class="content-container content-header">
        <div
          class="
            overlay overlay-color-g
            position-absolute
            overlay-border-container
          "
        >
          <div class="position-relative overlay">
            <div
              class="position-absolute tl-0"
              style="width: 100%; height: 100%"
            >
              <div
                v-if="tb"
                id="top-border"
                class="position-absolute gray-bg tl-0"
              ></div>
              <div
                v-if="rb"
                id="right-border"
                class="position-absolute gray-bg tr-0"
              ></div>
              <div
                v-if="bb"
                id="bottom-border"
                class="position-absolute gray-bg br-0"
              ></div>
              <div
                v-if="lb"
                id="left-border"
                class="position-absolute gray-bg bl-0"
              ></div>
            </div>
            <div class="content-header-center">
              <div class="home-logo">
                <a role="button">
                  <img
                    class="img-res"
                    :src="require('../assets/logo-gray.png')"
                    alt="logo"
                    style="margin-bottom: 50px"
                  />
                </a>
              </div>
              <div class="menu-destination">
                <ul>
                  <li>
                    <a href="#about-us">{{ webData.nav[0] }}</a>
                  </li>
                  <li>
                    <a href="#inside-the-villa">{{ webData.nav[1] }}</a>
                  </li>
                  <li>
                    <a href="#amenities">{{ webData.nav[2] }}</a>
                  </li>
                  <li>
                    <a href="#story">{{ webData.nav[3] }}</a>
                  </li>
                  <li>
                    <a href="#services">{{ webData.nav[4] }}</a>
                  </li>
                  <li>
                    <a href="#location">{{ webData.nav[5] }}</a>
                  </li>
                  <li>
                    <a href="#gallery">{{ webData.nav[6] }}</a>
                  </li>
                  <li>
                    <a href="#instagram">{{ webData.nav[7] }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-outer-container" class="bg-white module">
        <div :class="[mobaDev ? 'container' : 'container-fluid']">
          <div
            id="about-us"
            class="row-block no-padding"
            style="padding-top: 50px"
          >
            <div
              v-if="!mobaDev"
              class="
                about-container-inner-d
                position-relative
                about-bg
                bg-img-atr
                img-filter-shadow
              "
            >
              <div class="col-lg-8 col-display">
                <div class="column-inner">
                  <div class="wrapper"></div>
                </div>
              </div>
              <div class="col-lg-4 col-display" style="height: inherit">
                <div class="column-inner">
                  <div class="wrapper">
                    <div
                      class="
                        head-line-block head-line-block-about
                        headline-container
                      "
                    >
                      <h2 style="text-align: center; color: #0c0c0c">
                        {{ webData.t1 }}
                      </h2>
                      <span>{{ webData.t1Bold }}</span>
                    </div>
                    <div class="card-sm right br-0">
                      <div class="card-sm-left">
                        <div class="inner-card-sm">
                          <p>{{ webData.d1 }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="col-lg-8 col-display">
                <div class="column-inner">
                  <div class="wrapper">
                    <div class="single-image-container ov-h">
                      <img
                        class="img-res img-filter-shadow"
                        src="../assets/photos/vr_info_01-m.jpg"
                        alt="Test img 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-display">
                <div class="column-inner">
                  <div class="wrapper">
                    <div class="head-line-block headline-container">
                      <h2 style="color: #0c0c0c">{{ webData.t1 }}</h2>
                      <span>{{ webData.t1Bold }}</span>
                    </div>
                    <div class="spacer-sm"></div>
                    <div class="inner-card-sm">
                      <p>{{ webData.d1 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="inside-the-villa" class="row-block">
            <div class="col-lg-4 col-display">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="head-line-block headline-container text-center">
                    <h2 style="text-align: left; color: #0c0c0c">
                      {{ webData.nav[1] }}
                    </h2>
                  </div>
                  <div
                    v-if="!mobaDev"
                    class="a-card-narrow position-relative"
                    style="z-index: 2"
                  >
                    <div class="card-sm-right">
                      <div class="inner-card-sm">
                        <p>{{ webData.d2 }}</p>
                      </div>
                    </div>
                  </div>
                  <div v-else class="inner-card-sm">
                    <p>{{ webData.d2 }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="mobaDev" class="spacer-sm"></div>
            <div class="col-lg-8 col-display">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="single-image-container ov-h">
                    <img
                      class="img-res img-filter-shadow"
                      src="../assets/photos/vr_info_02.jpg"
                      alt="Test img 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="mobaDev" class="col-lg-4 col-display">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="inner-card-sm">
                    <p>{{ webData.d3 }}</p>
                  </div>
                  <img
                    class="img-res img-filter-shadow"
                    src="../assets/photos/vr_info_03-m.png"
                    alt="Test img 1"
                  />
                  <div class="inner-card-sm">
                    <p>{{ webData.d4 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!mobaDev" class="row-block">
            <div class="col-lg-4 col-display">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="position-absolute tr-0 narrow-a-img">
                    <img
                      class="img-res img-filter-shadow"
                      src="../assets/photos/vr_info_03.jpg"
                      alt="Test img 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-display position-relative">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="single-image-container ov-h">
                    <img
                      class="img-res img-filter-shadow"
                      src="../assets/photos/vr_4.jpg"
                      alt="Test img 1"
                    />
                  </div>
                  <div
                    class="position-absolute tl-0"
                    style="
                      width: 85%;
                      margin-top: -100px;
                      left: 50%;
                      transform: translate(-50%, -50%);
                    "
                  >
                    <div class="card-sm-left">
                      <div class="inner-card-sm">
                        <p>{{ webData.d3 }}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="card-sm right br-0"
                    style="
                      width: 85%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                    "
                  >
                    <div class="card-sm-left">
                      <div class="inner-card-sm">
                        <p>{{ webData.d4 }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!mobaDev" class="spacer"></div>
          <div v-if="!mobaDev" class="row-block">
            <div class="col-lg-4 col-display">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="position-absolute tr-0 narrow-a-img">
                    <img
                      class="img-res img-filter-shadow"
                      src="../assets/photos/vr_B2.jpg"
                      alt="Test img 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-display position-relative">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="position-relative a-card-last" style="z-index: 2">
                    <div class="card-sm-left">
                      <div class="inner-card-sm">
                        <p>{{ webData.d5 }}</p>
                        <p>{{ webData.d6 }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!mobaDev" class="spacer"></div>
          <div v-if="mobaDev" class="row-block position-relative">
            <div class="col-lg-8 col-display">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="single-image-container ov-h">
                    <img
                      class="img-res img-filter-shadow"
                      src="../assets/photos/vr_info_04-m.png"
                      alt="Test img 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="mobaDev" class="col-lg-4 col-display">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="inner-card-sm">
                    <p>{{ webData.d5 }}</p>
                    <p>{{ webData.d6 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="row-block">
            <div class="col-lg-8 col-display">
              <div class="column-inner">
                <div class="wrapper"></div>
              </div>
            </div>
            <div class="col-lg-4 col-display">
              <div class="column-inner">
                <div class="wrapper">
                  <div
                    class="position-absolute tr-0"
                    style="height: 650px; margin-top: -500px"
                  >
                    <img
                      class="img-res img-filter-shadow"
                      src="../assets/photos/vr_info_04.jpg"
                      alt="Test img 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                position-relative
                last-about-bg
                bg-img-atr
                img-filter-shadow
              "
            ></div>
          </div>
        </div>
      </div>
      <div
        id="amenities"
        class="bg-img-atr bg-img-fix position-relative trans-300-ms"
      >
        <div class="overlay overlay-color-g">
          <div :class="[mobaDev ? 'container' : 'container-fluid']">
            <div class="col-sm-12">
              <div class="column-inner">
                <div class="wrapper">
                  <div class="head-line-block headline-container">
                    <h2 style="text-align: center; color: #ffffff">
                      {{ webData.t2 }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!mobaDev" class="spacer"></div>
            <div class="col-sm-12">
              <div class="column-inner">
                <div class="wrapper wrapper-icons">
                  <div
                    v-for="item in webData.cards"
                    v-bind:key="item.id"
                    class="info-card"
                  >
                    <div class="card-image">
                      <div class="card-flip-inner position-relative">
                        <div
                          class="
                            card-flip-front
                            bg-img-atr
                            position-absolute
                            tl-0
                          "
                          v-bind:style="{
                            backgroundImage: 'url(' + item.img + ')',
                          }"
                        ></div>
                        <div
                          class="card-flip-back position-absolute tl-0 white-bg"
                        >
                          <p>{{ item.overlayText }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-text position-relative">
                      <h6>{{ item.headline }}</h6>
                      <p>{{ item.info }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="story" class="module position-relative trans-300-ms bg-white">
        <div class="row-fluid row-has-fill">
          <div class="container-fluid">
            <div class="col-lg-12">
              <div class="column-inner">
                <div class="wrapper">
                  <div
                    class="bg-img-4 bg-img-atr"
                    style="
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    "
                  >
                    <div
                      class="
                        head-line-block
                        headline-container
                        step-style
                        h-align
                      "
                      style="
                        width: 100%;
                        margin-bottom: 100px;
                        padding: 50px 75px;
                      "
                    >
                      <h2 class="white-color" style="letter-spacing: 7px">
                        {{ webData.t3 }}
                      </h2>
                      <span class="right white-color">{{
                        webData.t3Bold
                      }}</span>
                    </div>
                    <div
                      v-if="!mobaDev"
                      class="opacity-textblock-story inner-row br-0"
                    >
                      <div class="wrapper">
                        <div
                          class="inner-row h-align ta-j"
                          style="background-color: rgba(0, 0, 0, 0.4)"
                        >
                          <p class="white-color">{{ webData.d6 }}</p>
                        </div>
                        <div class="spacer"></div>
                        <div class="goto-btn text-center h-align">
                          <div class="btn h-align" style="width: 245px">
                            <router-link
                              to="gallery"
                              style="text-decoration: none"
                              ><span class="black-color">{{
                                webData.availabilityBtn
                              }}</span></router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="mobaDev"
                    class="opacity-textblock-story inner-row br-0"
                  >
                    <div class="wrapper bg-white">
                      <div
                        class="inner-row h-align ta-j"
                        style="background-color: rgba(0, 0, 0, 0.4)"
                      >
                        <p class="white-color">{{ webData.d7 }}</p>
                      </div>
                      <div class="spacer"></div>
                      <div class="goto-btn text-center h-align">
                        <div class="btn h-align" style="width: 245px">
                          <router-link
                            to="gallery"
                            style="text-decoration: none"
                            ><span class="black-color">{{
                              webData.availabilityBtn
                            }}</span></router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services" class="white-bg position-relative trans-300-ms">
        <div class="container">
          <div class="col-sm-12">
            <div class="column-inner">
              <div class="wrapper">
                <div class="head-line-block headline-container step-style">
                  <h2 class="text-center">{{ webData.t4 }}</h2>
                  <span class="right">{{ webData.t4Bold }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="spacer-sm"></div>
        <div
          v-if="!mobaDev"
          id="fix-height-table"
          class="no-padding column-table gray-bg"
        >
          <div class="col-sm-4 table-cell table-cell-col-4">
            <div class="column-inner">
              <div id="info-section-wrapper" class="wrapper">
                <div class="spacer-sm"></div>
                <div
                  id="info-section"
                  class="inner-row ta-l"
                  style="padding-left: 10%"
                >
                  <transition name="slideInOutLeft" mode="out-in">
                    <div
                      v-if="serviceTransition"
                      class="wrapper"
                      v-bind:key="activeService.id"
                    >
                      <h4>{{ activeService.numOrder }}</h4>
                      <h3 style="line-height: 45px">
                        {{ activeService.text }}
                      </h3>
                    </div>
                  </transition>
                </div>
                <div
                  class="
                    card-mm
                    ta-l
                    overflow-hidden
                    inner-row
                    position-absolute
                    br-0
                  "
                >
                  <transition name="slideInOutRight" mode="out-in">
                    <div v-if="serviceTransition" v-bind:key="activeService.id">
                      <p>{{ activeService.desc }}</p>
                    </div>
                  </transition>
                  <div
                    class="position-absolute br-0"
                    style="
                      width: 100%;
                      display: flex;
                      flex-direction: row;
                      align-items: flex-end;
                    "
                  >
                    <div class="h-align">
                      <div id="info-arrow-left" class="info-arrow-icons">
                        <b-icon-arrow-left
                          @click="toggleServices('prev')"
                        ></b-icon-arrow-left>
                      </div>
                      <div id="info-arrow-right" class="info-arrow-icons">
                        <b-icon-arrow-right
                          @click="toggleServices('next')"
                        ></b-icon-arrow-right>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="img-switcher"
            class="
              col-sm-8
              table-cell
              no-padding
              table-cell-col-8
              trans-1000-ms
              bg-img-atr
            "
            v-bind:style="{ backgroundImage: 'url(' + activeService.img + ')' }"
          ></div>
        </div>
        <div v-else>
          <div id="service-card-m" class="gray-bg">
            <div class="text-left" style="padding: 10px 0 0 10%">
              <transition name="slideInOutLeft" mode="out-in">
                <div
                  v-if="serviceTransition"
                  class="wrapper"
                  v-bind:key="activeService.id"
                >
                  <h4 style="margin-bottom: 0">{{ activeService.numOrder }}</h4>
                  <h3>{{ activeService.text }}</h3>
                </div>
              </transition>
            </div>
            <div class="card-mm ta-l overflow-hidden">
              <transition name="slideInOutRight" mode="out-in">
                <div v-if="serviceTransition" v-bind:key="activeService.id">
                  <p>{{ activeService.desc }}</p>
                </div>
              </transition>
              <div
                style="
                  width: 100%;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-end;
                "
              >
                <div class="h-align">
                  <div id="info-arrow-left-m" class="info-arrow-icons">
                    <b-icon-arrow-left
                      @click="toggleServices('prev')"
                    ></b-icon-arrow-left>
                  </div>
                  <div id="info-arrow-right-m" class="info-arrow-icons">
                    <b-icon-arrow-right
                      @click="toggleServices('next')"
                    ></b-icon-arrow-right>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="service-card-img">
            <div
              class="card-img-m no-padding trans-1000-ms bg-img-atr"
              v-bind:style="{
                backgroundImage: 'url(' + activeService.img + ')',
              }"
            ></div>
          </div>
        </div>
        <div class="container">
          <div class="col-lg-8 col-sm-12 col-display">
            <div class="spacer-sm"></div>
            <div class="column-inner">
              <div class="wrapper">
                <div class="goto-btn text-center h-align">
                  <div class="btn h-align">
                    <router-link to="contactUs" style="text-decoration: none"
                      ><span class="black-color">{{
                        webData.servicesBtn
                      }}</span></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="location" class="position-relative trans-300-ms bg-white">
        <div class="container">
          <div class="col-sm-12">
            <div class="column-inner">
              <div class="wrapper">
                <div class="head-line-block headline-container">
                  <h2 style="letter-spacing: 8px">{{ webData.t5 }}</h2>
                  <span>{{ webData.t5Bold }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="mobaDev" class="spacer-sm"></div>
          <div v-else class="spacer-lg"></div>
          <div
            v-if="!mobaDev"
            class="col-lg-2 col-display"
            style="overflow: auto"
          >
            <div class="column-inner">
              <div class="wrapper">
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i puy-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>40 km</strong>
                    <p>PUY</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i marina-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>14 km</strong>
                    <p>Marina</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i highway-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>6 km</strong>
                    <p>{{ webData.mapPoints[0] }}</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i center-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>5 km</strong>
                    <p>{{ webData.mapPoints[1] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-display">
            <div class="column-inner">
              <div class="wrapper">
                <iframe
                  class="maps-iframe"
                  style="border: 0; width: 100%"
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw8IbD9G7fEcRfhhDCI5dhAI&key=AIzaSyCjz_PIjwj_z_sq2suLu9nMIqU3GSt6r5U"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div v-if="mobaDev" class="spacer"></div>
          <div
            v-if="mobaDev"
            class="col-lg-2 col-display"
            style="overflow: auto"
          >
            <div class="column-inner">
              <div class="wrapper">
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i puy-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>40 km</strong>
                    <p>Puy</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i marina-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>14 km</strong>
                    <p>Marina</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i highway-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>6 km</strong>
                    <p>{{ webData.mapPoints[0] }}</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i center-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>5 km</strong>
                    <p>{{ webData.mapPoints[1] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-display" style="overflow: auto">
            <div class="column-inner">
              <div class="wrapper">
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i beach-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>13 km</strong>
                    <p>{{ webData.mapPoints[2] }}</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i obs-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>20 km</strong>
                    <p>{{ webData.mapPoints[3] }} Višnjan</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i np-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>35 km</strong>
                    <p>Brijuni NP</p>
                  </div>
                </div>
                <div class="icon-unit trans-300-ms">
                  <div class="icon-unit-icon">
                    <div class="bg-img-atr icon-i hum-ico"></div>
                  </div>
                  <div class="icon-unit-info">
                    <strong>47 km</strong>
                    <p>Hum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!mobaDev" class="spacer"></div>
        </div>
      </div>
      <div
        id="gallery"
        class="row-fluid row-has-fill"
        style="background-color: #ececec"
      >
        <div class="container">
          <div class="col-sm-12">
            <div class="column-inner">
              <div class="wrapper">
                <div class="head-line-block headline-container">
                  <h2
                    style="
                      text-align: center;
                      color: #0c0c0c;
                      letter-spacing: 8px;
                    "
                  >
                    {{ webData.t6 }}
                  </h2>
                  <span>{{ webData.t6Bold }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="mobaDev" class="spacer-sm"></div>
          <div v-else class="spacer-lg"></div>
        </div>
        <div class="col-sm-12">
          <div class="column-inner inner-row">
            <div class="wrapper text-center">
              <carousel
                :nav="false"
                :autoplay="false"
                :loop="false"
                :dots="false"
                :responsive="{ 0: { items: 1 }, 600: { items: 3 } }"
              >
                <div
                  class="owl-c-item-m10"
                  v-for="image in images"
                  v-bind:key="image.id"
                >
                  <img :src="image.src" :alt="image.alt" />
                </div>
              </carousel>
            </div>
          </div>
        </div>
        <div class="spacer-sm"></div>
        <div class="container">
          <div class="col-sm-12">
            <div class="column-inner">
              <div class="wrapper">
                <div class="goto-btn text-center h-align">
                  <div class="btn h-align">
                    <router-link to="gallery" style="text-decoration: none"
                      ><span class="black-color">{{
                        webData.galleryBtn
                      }}</span></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="spacer-sm"></div>
        <div v-if="!mobaDev" class="spacer-sm"></div>
      </div>
      <div id="instagram" class="row-fluid row-has-fill bg-white">
        <div class="container">
          <div class="col-sm-12">
            <div class="column-inner">
              <div class="wrapper">
                <div class="head-line-block headline-container">
                  <h2 style="text-align: center; color: #0c0c0c">Instagram</h2>
                  <span>{{ webData.t7Bold }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="mobaDev" class="spacer-sm"></div>
          <div v-else class="spacer-lg"></div>
        </div>
        <div class="col-md-12">
          <div class="column-inner">
            <div class="wrapper">
              <loader v-if="loading"></loader>
              <carousel
                v-else
                :nav="false"
                :autoplay="false"
                :loop="false"
                :dots="false"
                :responsive="{ 0: { items: 1 }, 600: { items: 3 } }"
              >
                <div
                  v-for="image in ig"
                  v-bind:key="image.id"
                  class="overflow-hidden"
                  style="height: 350px"
                >
                  <img :src="image.photo" :alt="image.caption" />
                </div>
              </carousel>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="spacer-sm"></div>
          <div class="col-sm-12">
            <div class="column-inner inner-row">
              <div class="wrapper">
                <div class="h-align">
                  <h5>
                    {{ webData.igBtn }}
                    <a
                      href="https://www.instagram.com/valensresidence/"
                      style="color: #0c0c0c"
                      ><u style="text-transform: uppercase"
                        >&#64;valensresidence</u
                      ></a
                    >
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="mobaDev" class="spacer-sm"></div>
      </div>
      <div id="module-weather-widget" class="row-fluid row-has-fill module">
        <div class="container">
          <div class="col-sm-12">
            <div class="column-inner">
              <div class="wrapper">
                <div class="head-line-block headline-container no-padding">
                  <div class="spacer-sm"></div>
                  <h2 class="white-color">{{ webData.weather.title }}</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="inner-row no-padding">
            <div class="column-table">
              <div class="table-cell" style="padding: 2em 0 1em; width: 33.33%">
                <i style="color: #fff; letter-spacing: 5px">{{
                  webData.weather.today
                }}</i>
                <loader v-if="weatherLoading"></loader>
                <h4
                  v-else
                  style="
                    color: #fff;
                    margin-top: 25px;
                    text-transform: uppercase;
                  "
                >
                  {{ weather }}
                </h4>
              </div>
              <div class="table-cell" style="padding: 1em 0 2em; width: 33.33%">
                <span class="temp">
                  <b-icon-sun
                    id="sun-icon"
                    style="
                      font-size: 2em;
                      color: #fff;
                      display: inline-block;
                      vertical-align: super;
                    "
                  ></b-icon-sun>
                  <loader v-if="weatherLoading"></loader>
                  <h6 v-else>{{ temp }}</h6>
                  <span
                    style="
                      font-size: 10px;
                      color: #fff;
                      display: inline-block;
                      vertical-align: top;
                    "
                    ><b-icon-circle class="w-50"></b-icon-circle
                  ></span>
                </span>
              </div>
              <div class="table-cell" style="padding: 2em 0 1em; width: 33.33%">
                <i style="color: #fff; letter-spacing: 5px">{{
                  webData.weather.tomorrow
                }}</i>
                <loader v-if="weatherLoading"></loader>
                <h4
                  v-else
                  style="
                    color: #fff;
                    margin-top: 25px;
                    text-transform: uppercase;
                  "
                >
                  {{ tomorrow }}
                </h4>
              </div>
            </div>
          </div>
          <div class="inner-row no-padding">
            <div class="home-logo">
              <img
                class="img-res"
                :src="require('../assets/logo-gray.png')"
                alt="logo"
                style="width: 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer :web-data-global="webDataGlobal"></Footer>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
import Loader from '../components/Loader.vue'
import axios from 'axios'
import carousel from 'vue-owl-carousel'

export default {
  name: 'Modules',
  props: {
    webDataGlobal: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      images: [],
      igProps: { width: 350, height: 200 },

      token:
        'IGQVJYYl9XU0dQbEZA1dmpGLXdzQ1RLcHFxWUdDdHM5d1JJdmlWMTZAHTjdrU19YVlN6eXpIejZAHY3J1cENnWTJaVElESnZAmYUpza0ljb05DdmF0WV9ITzBFQU11VllpbVA2aFpoa2JBMkJrOHc0Sk9YbwZDZD',
      ig: [],
      loading: false,

      mobaDev: false,

      serviceTransition: true,
      activeService: {},
      weatherLoading: false,
      temp: '',
      weather: '',
      tomorrow: '',
      tb: false,
      rb: false,
      bb: false,
      lb: false,
      webData: {}
    }
  },
  created () {
    this.webData = this.webDataGlobal.main
    if (window.innerWidth < 992) {
      this.mobaDev = true
      this.$store.state.mobaDev = true
    } else this.$store.state.mobaDev = false
    this.activeService = this.webData.services[0]
    this.images = this.$store.getters.getGalleryImages
    this.$delete(this.images, this.images.length - 1)
    this.getWeatherData()
  },
  mounted () {
    setTimeout(() => {
      this.startBorderAnimation()
    }, 1600)
    this.loading = true
    this.getIgImgs()
    this.$store.state.mainWW = document.querySelector('#main').offsetWidth
  },
  methods: {
    updateLang () {
      this.$emit('update-lang')
    },
    async getWeatherData () {
      this.weatherLoading = true
      await axios
        .get(
          'https://api.openweathermap.org/data/2.5/onecall?lat=45.12&lon=13.84&exclude=hourly&appid=09442b61dc169d710b608757d7a893a2&units=metric'
        )
        .then((response) => {
          this.temp = Math.round(response.data.current.temp)
          this.weather = response.data.current.weather[0].main
          this.tomorrow = response.data.daily[1].weather[0].main
          this.weatherLoading = false
        })
        .catch((error) => {
          console.log(
            'Weather data currently unavailable due to current error. ',
            error
          )
        })
    },
    startBorderAnimation: function () {
      this.tb = true
      setTimeout(() => {
        this.rb = true
      }, 500)
      setTimeout(() => {
        this.bb = true
      }, 1000)
      setTimeout(() => {
        this.lb = true
      }, 1500)
    },
    getIgImgs () {
      axios
        .get(
          'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=' +
            this.token
        )
        .then((res) => {
          const r = []
          res.data.data.forEach(function (value) {
            r.push({
              photo: value.media_url,
              caption: value.caption,
              id: value.id
            })
          })
          this.ig = r
        })
        .catch((error) => {
          console.log('Error: ', error)
        })
        .finally(() => {
          this.loading = false
          this.token = ''
        })
    },
    toggleServices: function (direction) {
      if (direction === 'next' && this.activeService.id < 5) {
        this.serviceTransition = false
        this.activeService = this.webData.services[this.activeService.id]
        this.serviceTransition = true
      } else if (direction === 'prev' && this.activeService.id > 1) {
        this.serviceTransition = false
        this.activeService = this.webData.services[this.activeService.id - 2]
        this.serviceTransition = true
      }
    }
  },
  components: {
    Navigation,
    Footer,
    Loader,
    carousel
  }
}
</script>

<style>
/****************************************/
/*               BORDERS               */
/**************************************/

#top-border,
#bottom-border {
  width: 100%;
  height: 2px;
  animation-name: growWidth;
  animation-duration: 500ms;
}
#left-border,
#right-border {
  height: 100%;
  width: 2px;
  animation-name: growHeight;
  animation-duration: 500ms;
}
#top-border,
#right-border {
  animation-direction: normal;
}
#bottom-border,
#left-border {
  animation-direction: revert;
}
@keyframes growWidth {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes growHeight {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

/****************************************/
/*               MODULES               */
/**************************************/
.about-bg {
  background-image: url("../assets/photos/vr_B1.jpg");
  background-position: center;
  height: inherit;
}
.inside-bg {
  background-image: url("../assets/photos/vr_info_02.jpg");
  background-position: bottom;
  height: inherit;
}
.last-about-bg {
  background-image: url("../assets/photos/vr_info_06.jpg");
  background-position: center;
  height: 450px;
}
.about-container-inner-d {
  height: 800px;
}

/****************************************/
/*               ELEMENTS              */
/**************************************/

.img-filter-shadow {
  -ms-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));
}
#table-part-1,
#table-part-2 {
  padding: 0 !important;
}
#table-part-1 .column-table .table-cell,
#table-part-2 .column-table .table-cell {
  padding: 0 !important;
}
.ig-table-row {
}
.ig-table-row-big {
}
.icon-unit {
  float: left;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #006980;
}
.icon-unit-icon {
  display: inline-block;
  width: 64px;
  height: 64px;
  position: relative;
}
.icon-unit-icon .icon-i {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.icon-unit-info {
  display: inline-block;
  width: 100%;
}
.icon-unit-info strong {
  display: block;
  color: #0c0c0c;
  font-weight: 700;
  margin-bottom: 7px;
}
.icon-unit-info p {
  display: block;
  text-align: center;
}
.icon-unit:hover {
  background-color: #006980;
}
.icon-unit:hover .icon-unit-info p,
.icon-unit:hover .icon-unit-info strong {
  color: #ffffff;
}
.puy-ico {
  background-image: url("../assets/icons/puy.png");
}
.marina-ico {
  background-image: url("../assets/icons/marina.png");
}
.highway-ico {
  background-image: url("../assets/icons/highway.png");
}
.center-ico {
  background-image: url("../assets/icons/village-center.png");
}
.beach-ico {
  background-image: url("../assets/icons/beach.png");
}
.obs-ico {
  background-image: url("../assets/icons/observatory.png");
}
.np-ico {
  background-image: url("../assets/icons/np.png");
}
.hum-ico {
  background-image: url("../assets/icons/hum.png");
}
.icon-unit:hover .puy-ico {
  background-image: url("../assets/icons/puy-white.png");
}
.icon-unit:hover .marina-ico {
  background-image: url("../assets/icons/marina-white.png");
}
.icon-unit:hover .highway-ico {
  background-image: url("../assets/icons/highway-white.png");
}
.icon-unit:hover .center-ico {
  background-image: url("../assets/icons/village-center-white.png");
}
.icon-unit:hover .beach-ico {
  background-image: url("../assets/icons/beach-white.png");
}
.icon-unit:hover .obs-ico {
  background-image: url("../assets/icons/observatory-white.png");
}
.icon-unit:hover .np-ico {
  background-image: url("../assets/icons/np-white.png");
}
.icon-unit:hover .hum-ico {
  background-image: url("../assets/icons/hum-white.png");
}
.info-card {
  width: 200px;
  height: 300px;
  margin: 0 11px 60px 0;
  display: inline-block;
  vertical-align: top;
  border: none;
  background-color: transparent;
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
}
.card-image {
  width: 100%;
  height: 70%;
  background-color: transparent;
  perspective: 1000px;
  -webkit-perspective: 1000px;
  -o-perspective: 1000px;
  -moz-perspective: 1000px;
}
.card-flip-inner {
  width: 100%;
  height: 100%;
  text-align: center;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  box-shadow: 0 10px 15px 2px #003642;
  -webkit-transition: -webkit-transform 500ms;
  -moz-transition: -moz-transform 500ms;
  -o-transition: -o-transform 500ms;
  transition: transform 500ms;
}
.card-flip-back {
  background-color: rgba(0, 0, 0, 0.345);
  align-items: center;
  display: flex;
  padding: 0 10px;
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.card-flip-back p {
  width: 100%;
  text-align: center;
  color: #ffffff;
}
.card-flip-front,
.card-flip-back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -o-backface-visibility: hidden;
}
.info-card:hover .card-flip-inner {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.card-text {
  width: 100%;
  height: 30%;
  padding-top: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 0 10px 15px 2px #003642;
}
.info-card .card-text h6 {
  line-height: 1;
  letter-spacing: 0;
}
.card-text p {
  text-align: center;
}

#info-section .wrapper {
  text-align: left;
}
#fix-height-table {
  height: 550px;
}
.table-cell-col-4 {
  width: 33.33333333% !important;
}
.table-cell-col-8 {
  width: 66.66666667% !important;
}
#img-switcher {
  vertical-align: bottom;
}
.wrapper-figure,
.image-wrapper {
  display: inline-block;
  vertical-align: top;
  margin: 0;
  max-width: 100%;
}
.single-image {
  text-align: center;
  margin-bottom: 0;
}
.bg-img-4 {
  height: 800px;
  width: 100%;
  background-image: url("../assets/photos/vr_B4.jpg");
}
.single-image-container {
  width: 100%;
  padding: 10px;
}
.head-line-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
.head-line-block-about {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 80px;
  padding-top: 0;
}
.headline-container.step-style {
  text-align: right;
  display: block;
}
.head-line-block span {
  font-family: Rozha One, sans-serif;
  line-height: 0;
  font-size: 45px;
}
.inner-card-sm p {
  color: #000;
}
.row-block {
  display: block;
  margin-right: -15px;
  margin-left: -15px;
}
.spacer {
  height: 50px;
}
.spacer-lg {
  height: 90px;
}
.spacer-sm {
  height: 20px;
}

/****************************************/
/*            RESPONSIVENESS           */
/**************************************/

@media (min-width: 1920px) {
  .svg-container {
    height: 300px;
  }
  .wrapper-icons {
    padding: 0 300px;
  }
}
@media (min-width: 1700px) {
  .a-card-last {
    width: 510px;
  }
}
@media (min-width: 1600px) {
  .card-sm {
    width: 550px;
  }
  .card-sm.right {
    right: 0;
  }
  .card-sm.left {
    left: 0;
  }
  #info-section-wrapper .card-mm {
    min: 301px;
  }
  #inside-the-villa .col-lg-4 .column-inner .wrapper .head-line-block {
    margin-top: 100px;
  }
  .a-card-narrow {
    margin: 100px 0;
  }
  .narrow-a-img {
    margin-top: -500px;
    height: 650px;
  }
}
@media (min-width: 1200px) {
  .maps-iframe {
    height: 646px;
  }
  .headline-container h1,
  .headline-container h2 {
    font-size: 80px;
  }
  .hidden-container {
    padding: 150px 50px 0;
  }
  #info-section .wrapper h3 {
    font-size: 63px;
  }
  .queryForm-col {
    padding-top: 120px;
  }
}
@media (min-width: 992px) {
  #about-outer-container .container-fluid,
  #story .row .container-fluid {
    padding: 0 100px;
  }
  .module,
  .row-block {
    padding: 50px 0;
  }
  .col-display {
    display: inline-block;
    vertical-align: top;
  }
  .scroll-more-wrapper {
    padding: 60px 0;
  }
  #footer ul {
    text-align: left;
  }
  .card-mm {
    padding: 50px;
  }
  .bg-img-4 {
    height: 800px;
  }
  .opacity-textblock-story {
    position: absolute;
    margin-bottom: -315px;
  }
  .opacity-textblock-story div.wrapper div.inner-row {
    width: 75%;
  }
  #story {
    margin-bottom: 210px;
  }
}
@media (min-width: 768px) {
  .inquiry-headline-container h2 {
    font-size: 65px;
  }
  .image-wrapper {
    height: 660px;
  }
  .image-wrapper {
    width: 660px;
  }
  .inquiry-headline-container {
    padding: 20px 40px 40px;
  }
  .info-card {
    width: 200px;
    height: 300px;
  }
  .info-card .card-text h6 {
    font-size: 18px;
    font-weight: bold;
  }
  #menu-icon {
    margin-right: 30px;
  }
  #logo-icon {
    width: 260px;
    height: 100px;
    padding: 20px 0 0 30px;
  }
  .icon-unit-info strong {
    font-size: 20px;
  }
  #footer {
    height: 340px;
  }
  #v-main,
  #v-contact {
    padding-bottom: 340px;
  }
  #main-section.slide-wrap {
    height: 100vh;
  }
  #slide-1,
  #slide-2,
  #slide-3 {
    height: inherit;
  }
  #home {
    overflow: hidden;
  }
}
@media (min-width: 600px) {
  .owl-c-item-m10 {
    margin: 10px;
  }
}
@media (min-width: 576px) {
  .hidden-container-inner-text {
    overflow-y: visible;
  }
  .home-logo a img {
    width: 300px;
  }
  .overlay-border-container {
    padding: 120px 50px 50px;
  }
  .ig-table-row {
    height: 200px;
  }
  .ig-table-row-big {
    height: 400px;
  }
}
@media (min-width: 450px) {
  .slide-bottom-nav {
    padding: 30px 0;
  }
  .menu-destination {
    padding: 0 70px;
  }
  .cal-btn {
    height: 40px;
    width: 40px;
  }
}
@media (min-width: 370px) {
  .inner-card-sm h4 {
    margin-bottom: 18px;
    text-align: left;
  }
}

@media (max-width: 1920px) {
  .svg-container {
    height: 220px;
  }
  .wrapper-icons {
    padding: 0 250px;
  }
}
@media (max-width: 1700px) {
  .a-card-last {
    width: 450px;
  }
}
@media (max-width: 1600px) {
  .card-sm {
    width: 450px;
  }
  .card-sm.right {
    right: unset;
    left: 0;
  }
  .card-sm.left {
    left: unset;
    right: 0;
    margin-right: -180px;
  }
  #info-section-wrapper .card-mm {
    min-height: 320px;
  }
  .svg-container {
    height: 180px;
  }
  #inside-the-villa .col-lg-4 .column-inner .wrapper .head-line-block {
    margin-top: 50px;
  }
  .a-card-narrow {
    margin: 50px 0;
  }
  .narrow-a-img {
    margin-top: -420px;
    height: 620px;
  }
  .a-card-last {
    width: 350px;
  }
  .wrapper-icons {
    padding: 0 200px;
  }
}
@media (max-width: 1400px) {
  .a-card-last {
    width: 400px;
  }
}
@media (max-width: 1300px) {
  .card-sm {
    width: 350px;
  }
  .card-sm.right {
    right: unset;
    left: 0;
  }
  .card-sm.left {
    left: unset;
    right: 0;
    margin-right: -140px;
  }
  #info-section-wrapper .card-mm {
    min-height: 345px;
  }
  #inside-the-villa .col-lg-4 .column-inner .wrapper .head-line-block {
    margin-top: 0;
  }
  .a-card-narrow {
    margin: 0;
  }
  .narrow-a-img {
    margin-top: -350px;
    height: 600px;
  }
  .wrapper-icons {
    padding: 0;
  }
}
@media (max-width: 1200px) {
  .maps-iframe {
    height: 646px;
  }
  .headline-container h1,
  .headline-container h2 {
    font-size: 68px;
  }
  .hidden-container {
    padding: 120px 120px 0;
  }
  #info-section-wrapper .card-mm {
    min-height: 335px;
  }
  #service-card-m .card-mm {
    padding: 40px 50px 0;
  }
  #info-arrow-right-m,
  #info-arrow-left-m {
    font-size: 3rem;
  }
  #service-card-img {
    height: 310px;
  }
  .svg-container {
    height: 150px;
  }
  .queryForm-col {
    padding-top: 80px;
  }
  #inside-the-villa .col-lg-4 .column-inner .wrapper .head-line-block {
    margin-top: 0;
  }
  .a-card-narrow {
    margin: 0;
  }
  .narrow-a-img:first-child {
    margin-top: -220px;
    height: 600px;
  }
  .a-card-last {
    width: 350px;
  }
}
@media (max-width: 992px) {
  .headline-container h1,
  .headline-container h2 {
    font-size: 58px;
  }
  .module,
  .row-block {
    padding: 25px 0;
  }
  .head-line-block span.right {
    margin-right: 0;
  }
  .head-line-block {
    padding: 10px 100px;
  }
  .content-header-center {
    top: 50% !important;
  }
  .scroll-more-wrapper {
    padding: 40px 0;
  }
  .icon-unit {
    width: 25%;
    border-left: none;
  }
  .wrapper .icon-unit:first-child {
    border-left: 1px solid #006980;
  }
  .card-mm {
    padding: 10px;
  }
  .wrapper-figure {
    overflow: hidden;
  }
  #footer ul {
    text-align: center;
  }
  .svg-container {
    height: 180px;
  }
  .queryForm-col {
    padding-top: 20px;
  }
  .sub-text {
    font-size: 12px;
  }
  #info-arrow-right-m,
  #info-arrow-left-m {
    font-size: 2.5rem;
  }
  #service-card-img {
    height: 290px;
  }
  #about-outer-container .container-fluid {
    padding: 0;
  }
  .bg-img-4 {
    height: 400px;
  }
  .opacity-textblock-story {
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: -132px 0 0;
    position: relative;
  }
  .opacity-textblock-story div.wrapper div.inner-row {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .maps-iframe {
    height: 550px;
  }
  .inquiry-headline-container h2 {
    font-size: 40px;
  }
  .inquiry-headline-container {
    padding: 0 0 20px;
  }
  .head-line-block {
    padding: 10px 50px;
  }
  .image-wrapper {
    width: 480px;
    height: 500px;
  }
  .home-logo a img {
    width: 200px;
  }
  .info-card {
    display: inline-block;
    margin: 0 11px 40px 0;
    width: 145px;
    height: 230px;
  }
  .info-card .card-text h6,
  .icon-unit-info strong {
    font-size: 15px;
    font-weight: bold;
  }
  .headline-container h1,
  .headline-container h2 {
    font-size: 42px;
    padding-left: 15px;
  }
  .scroll-more-wrapper {
    padding: 20px 0;
  }
  .head-line-block span {
    font-size: 25px;
  }
  .icon-unit {
    height: 145px;
  }
  #gallery .col-sm-12 .inner-row,
  #instagram .container .col-sm-12 .inner-row,
  #instagram .inner-row {
    padding: 0;
  }
  #menu-icon {
    margin-right: 0;
  }
  #logo-icon {
    width: 140px;
    height: 50px;
    padding: 12px 0 0 0;
  }
  #service-card-m .card-mm {
    padding: 15px 15px 0;
  }
  #service-card-img {
    height: 260px;
  }
  #footer {
    height: 325px;
  }
  #v-main,
  #v-contact {
    padding-bottom: 325px;
  }
  #main-section.slide-wrap {
    height: auto;
  }
  #slide-1,
  #slide-2,
  #slide-3 {
    height: 100vh;
  }
  #home {
    height: 100vh;
  }
}
@media (max-width: 600px) {
  .owl-c-item-m10 {
    margin: 0;
  }
}
@media (max-width: 576px) {
  .hidden-container {
    padding: 120px 40px 0 65px;
  }
  .hidden-container-inner-text {
    overflow-y: scroll;
  }
  .head-line-block {
    padding: 10px 0;
  }
  .overlay-border-container {
    padding: 100px 50px 50px;
  }
  .info-card {
    width: 110px;
    height: 210px;
    display: inline-block;
    margin: 0 11px 40px 0;
  }
  .info-card .card-text h6 {
    font-size: 14px;
    font-weight: bold;
  }
  .info-card .card-text p,
  .info-card .card-image .card-flip-back p {
    font-size: 12px;
    letter-spacing: 0;
  }
  .headline-container h1,
  .headline-container h2 {
    font-size: 27px;
  }
  .headline-container h3 {
    font-size: 23px;
  }
  .inner-row .column-table .table-cell h4 {
    font-size: 20px !important;
  }
  .head-line-block span {
    font-size: 19px;
  }
  .ig-table-row {
    height: 140px;
  }
  .ig-table-row-big {
    height: 280px;
  }
  #info-arrow-right-m,
  #info-arrow-left-m {
    font-size: 2rem;
  }
  #service-card-img {
    height: 230px;
  }
}
@media (max-width: 450px) {
  .slide-bottom-nav {
    padding: 2px 0;
  }
  .menu-destination {
    padding: 0 55px;
  }
  .cal-btn {
    height: 30px;
    width: 30px;
  }
  .inline-el a h5 {
    font-size: 14px !important;
    vertical-align: middle;
  }
  .ig-table-row {
    height: 100px;
  }
  .ig-table-row-big {
    height: 200px;
  }
}

.fs-105 {
  font-size: 105px;
}
/* BUTTON */
.btn {
  width: 245px;
  text-align: center;
  margin: 0 auto;
  position: relative;
  vertical-align: middle;
  z-index: 1;
}
.btn:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  color: #ffffff;
  background: rgba(0, 105, 128, 0.625);
  -webkit-transition: all 500ms;
  -moz-transition: all 500ms;
  -ms-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
  z-index: -1;
}
.btn a span {
  font-size: 16px;
  text-transform: uppercase;
}
.goto-btn:hover .btn a span,
.goto-btn:hover .btn span,
.goto-btn:hover .btn span svg {
  color: #ffffff !important;
}

/**********/

.card-img-m {
  height: inherit;
}
.overlay-color-g {
  background-color: rgba(0, 105, 128, 0.675);
}
/* MAIN */
#main,
#contact-us {
  position: relative;
  background: transparent;
  z-index: 2;
}
/* MODULE 1 */
#module-about,
#module-inside,
#module-outside {
  margin-bottom: 0; /* bilo je 150px */
}
/* MODULE 3 */
#amenities {
  background-image: url("../assets/photos/vr_info_05.jpg");
  height: auto;
}
.overlay {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
/* MODULE 5 */
#module-weather-widget {
  background-color: rgb(0, 105, 128);
}
.temp h6 {
  font-family: "Times New Roman", serif;
  font-weight: 100;
  font-size: 64px;
  position: relative;
  color: #ffffff;
  display: inline-block;
}
#sun-icon {
  font-size: 30px;
  margin-right: 10px;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
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
.content-header {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(0, 105, 128);
  background-image: url("../assets/photos/vr_info_01.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
}
.content-header-center {
  position: absolute;
  top: 45%;
  width: 100%;
  transform: translateY(-50%);
  box-sizing: border-box;
}
.home-logo {
  box-sizing: border-box;
  clear: both;
}
a {
  text-decoration: none;
}
.menu-destination {
  text-transform: uppercase;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
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
  letter-spacing: 0.2em;
  line-height: 18px;
  text-transform: uppercase;
  margin: 0 20px;
  padding-bottom: 4px;
  display: block;
  -webkit-transition: all 500ms;
  -moz-transition: all 500ms;
  -ms-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
  border-bottom: 2px solid #55767d;
}
.menu-destination ul li a:hover {
  border-bottom: 2px solid #fff;
}
div {
  display: block;
}
/* MODULE 1 */
.row {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.inner-row {
  padding: 25px;
  text-align: center;
}
.column {
  box-sizing: border-box;
  float: left;
  display: flex;
  flex-direction: column;
}
.col-3 {
  width: 30%;
}
.col-4 {
  width: 40%;
}
.col-5 {
  width: 50%;
}
.col-6 {
  width: 60%;
}
#card-1,
#card-3 {
  margin-right: -150px;
}
.card-sm {
  position: absolute;
  padding: 0;
  transition: transform 400ms;
  z-index: 1;
}
.card-sm-left,
.card-sm-right {
  padding: 3px;
  margin-bottom: -50px;
  box-shadow: 13px 0 40px -10px #878787;
}
.card-sm-left {
  background-image: linear-gradient(90deg, #006980, #ffffff, #ffffff);
}
.card-sm-right {
  background-image: linear-gradient(90deg, #ffffff, #ffffff, #006980);
}
.inner-card-sm {
  width: 100%;
  height: 100%;
  padding: 20px 20px 10px;
  background-color: #f9f9f9;
  color: #000000;
}
/* MODULE 3 */
.no-padding {
  padding: 0 !important;
}
#info-arrow-right,
#info-arrow-left {
  font-size: 4rem;
}
.info-arrow-icons {
  line-height: 0;
  display: inline-block;
}
.info-arrow-icons svg {
  border: 1px solid #006980;
  cursor: pointer;
  transition: all 500ms;
}
.info-arrow-icons svg g {
  transition: all 500ms;
  color: #006980;
}
.info-arrow-icons svg:hover {
  border: 1px solid #006980;
  background-color: #006980;
}
.info-arrow-icons svg:hover g {
  color: #ffffff;
}
#info-arrow-right svg {
  border-left: none;
}
.card-mm {
  width: 100%;
  vertical-align: bottom;
  background-color: #ececec;
}
.column-table {
  width: 100%;
  box-sizing: border-box;
  display: table;
}
.table-cell {
  display: table-cell;
  vertical-align: top;
}
/* ANIMATION */

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.slideInOutLeft-enter-active,
.slideInOutLeft-leave-active,
.slideInOutRight-enter-active,
.slideInOutRight-leave-active {
  transition: all 1s;
}
.slideInOutLeft-enter,
.slideInOutLeft-leave-to {
  -webkit-transform: translateX(-750px);
  -moz-transform: translateX(-750px);
  -ms-transform: translateX(-750px);
  -o-transform: translateX(-750px);
  transform: translateX(-750px);
}
.slideInOutRight-enter,
.slideInOutRight-leave-to {
  -webkit-transform: translateX(620px);
  -moz-transform: translateX(620px);
  -ms-transform: translateX(620px);
  -o-transform: translateX(620px);
  transform: translateX(620px);
}
.slideInOutLeft-enter-to,
.slideInOutLeft-leave,
.slideInOutRight-enter-to,
.slideInOutRight-leave {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}
</style>
