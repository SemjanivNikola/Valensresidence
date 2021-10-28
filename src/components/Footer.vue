<template>
  <div id="footer" class="row-fluid row-has-fill footer w-100">
    <div class="container">
      <div class="col-sm-12 ta-l no-padding">
        <router-link to="contactUs"
          ><h3 class="white-color text-center" style="margin-bottom: 50px">
            {{ webData.link }} &#8594;
          </h3></router-link
        >
        <ul :class="[$store.state.mobaDev ? 'text-center' : 'text-left']">
          <li>Tel: <a href="tel:+385959130290">+385 95 913 0290</a></li>
          <li class="mb-3">
            Email:

            <div class="d-inline-block align-top text-left">
              <a href="mailto:reservations@valensresidence.com"
                >reservations@valensresidence.com</a
              >
              <a class="d-block" href="mailto:info@valensresidence.com"
                >info@valensresidence.com</a
              >
            </div>
          </li>
          <li class="social-icon" style="margin-right: 10px">
            <a href="https://www.facebook.com/valensresidence" target="_blank">
              <div class="icon-i bg-img-atr fb trans-300-ms"></div>
            </a>
          </li>
          <li class="social-icon">
            <a
              href="https://www.instagram.com/valensresidence/"
              target="_blank"
            >
              <div class="icon-i bg-img-atr ig trans-300-ms"></div>
            </a>
          </li>
          <li :class="[$store.state.mobaDev ? 'text-center' : 'text-right']">
            <a
              href="https://www.istra-vacation.com/en/terms-and-conditions/"
              target="_blank"
              class="trans-300-ms"
              style="display: inline-block; margin-right: 15px"
              >{{ webData.pp }}</a
            >
            <a
              href="https://www.istra-vacation.com/en/terms-and-conditions/"
              target="_blank"
              class="trans-300-ms"
              style="display: inline-block"
              >{{ webData.tc }}</a
            >
          </li>
        </ul>
        <div style="margin: 40px auto 0">
          <div class="divider"></div>
        </div>
      </div>
      <div class="inner-row" style="padding: 10px 0 0 0">
        <p class="text-center" style="font-size: 12px; letter-spacing: 2px">
          valensresidence.com &#169;
          <a id="h3-link" href="https://www.h3.solutions" target="_blank"
            >H.3 Solutions</a
          >
          2020
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    webDataGlobal: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      webData: {},
      test: 'hello'
    }
  },
  created () {
    this.webData = this.webDataGlobal.footer
  }
}
</script>

<style scoped>
/* FOOTER */
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  color: #ffffff;
  background-color: #0c0c0c;
  z-index: 0;
  display: flex;
  align-items: flex-end;
}
#footer a {
  text-decoration: none;
  color: #ffffff;
}
.footer ul li {
  display: block;
}
#h3-link {
  color: #ffffff;
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  -ms-transition: all 300ms;
  -o-transition: all 300ms;
  transition: all 300ms;
}
#h3-link:hover {
  color: rgb(0, 105, 128);
}
.divider {
  height: 1px;
  width: 100%;
  background-color: #878787;
  opacity: 0.5;
}
.social-icon {
  width: 32px;
  height: 32px;
  display: inline-block !important;
}
.social-icon .icon-i {
  width: 32px;
  height: 32px;
}
.fb {
  background-image: url("../assets/icons/fb-blue.png");
}
.ig {
  background-image: url("../assets/icons/ig-blue.png");
}
.social-icon:hover .fb {
  background-image: url("../assets/icons/fb-blue.png");
}
.social-icon:hover .ig {
  background-image: url("../assets/icons/ig-blue.png");
}
.router-link-active:hover {
  color: #006980 !important;
}
</style>
