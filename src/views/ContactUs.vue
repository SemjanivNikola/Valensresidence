<template>
    <div id="v-contact" class="position-relative w-100">
        <navigation :lc="false" @update-lang="updateLang"></navigation>
        <div id="contact-us" class="position-relative w-100 d-block">
            <div class="contact-us-bg-wrapper">
                <div class="position-relative w-100" style="box-sizing: border-box; background-image: linear-gradient(to top, white, white, transparent);">
                    <div id="v-svg" class="svg-container">
                        <svg viewBox="0 5 100 65">
                            <path d="M0,0 L600,200 0,200 Z" fill="white"></path>
                        </svg>
                    </div>
                    <div class="container">
                        <div class="column-inner">
                            <div class="wrapper">
                                <div class="calendar-col col-lg-6 col-display">
                                    <table class="w-100">
                                        <tr style="height:80px;">
                                            <td style=" width: 80px;background-color: rgb(0, 105, 128); color: #fff; font-size: 45px; font-weight: 100;">{{currentMonth.numZero}}</td>
                                            <th colspan="4" style="text-align: start; text-transform: uppercase; padding-left: 10px;"><h4 style="font-size:30px; letter-spacing: 0; color: rgb(0, 105, 128);">{{currentYear}}<br><b v-if="$store.getters.getLang === 'eng'">{{currentMonth.fullNameEng}}</b><b v-else>{{currentMonth.fullNameHr}}</b></h4></th>
                                            <td colspan="2" style="width: 28%;">
                                                <button @click="prevGo()" class="cal-btn"><b-icon-chev-left></b-icon-chev-left></button>
                                                <button @click="nextGo()" class="cal-btn"><b-icon-chev-right></b-icon-chev-right></button>
                                            </td>
                                        </tr>
                                    </table>
                                    <table class="w-100">
                                        <tr style="height: 20px;"></tr>
                                        <tr id="row-days" style="border-bottom: 2px solid #cecece;">
                                            <td class="last-child-row" v-for="d in days" v-bind:key="d.num"><p v-if="$store.getters.getLang === 'eng'" class="code">{{d.nameEng}}</p><p v-else class="code">{{d.nameHr}}</p></td>
                                        </tr>
                                        <tr style="height: 10px;"></tr>
                                        <tr v-if="loading">
                                            <td colspan="7">
                                                <loader></loader>
                                            </td>
                                        </tr>
                                        <tr v-else v-for="(week, wIndex) in dateList[currentMonth.num - 1].weeks" v-bind:key="wIndex" style="height: 50px;">
                                            <td v-bind:class="[day.class, 'last-child-row']" v-for="day in week" v-bind:key="day.id" @click="clickEvents(day, wIndex, currentMonth)">
                                                <b style="font-size: 20px;">{{day.value}}</b>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="col-sm-12">
                                        <div class="column-inner">
                                            <div class="wrapper">
                                                <hr>
                                                <div class="col-sm-6 col-display">
                                                    <div class="column-inner">
                                                        <div class="wrapper">
                                                            <p>From:</p>
                                                            <transition name="fadeInRight" mode="out-in">
                                                                <h5 v-if="selectedDays.length">{{selectedDays[0].value}}. {{arrivalMonth.name}} {{arrivalYear}}</h5>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-display">
                                                    <div class="column-inner">
                                                        <div class="wrapper">
                                                            <p>To:</p>
                                                            <transition name="fadeInRight" mode="out-in">
                                                                <h5 v-if="selectedDays.length === 1">{{selectedDays[0].value}}. {{arrivalMonth.name}} {{arrivalYear}}</h5>
                                                                <h5 v-if="selectedDays.length > 1" :key="selectedDays[selectedDays.length - 1].value">{{selectedDays[selectedDays.length - 1].value}}. {{departureMonth.name}} {{departureYear}}</h5>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-12">
                                                    <div class="column-inner">
                                                        <div class="wrapper">
                                                            <transition name="fadeInRight">
                                                                <div v-if="selectedDays.length" class="goto-btn text-center h-align">
                                                                    <div class="btn h-align" style="width: 245px;" @click="eraseSelectedDays('all')">
                                                                        <span style="font-size: 18px; text-transform: uppercase; color: #000;">CLEAR ALL</span>
                                                                    </div>
                                                                </div>
                                                            </transition>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="spacer md-spacer"></div>
                                <div class="queryForm-col col-lg-6 col-display">
                                    <div class="text-left">
                                        <div class="inquiry-headline-container">
                                            <h2 class="blue-color" style="margin-bottom: 50px;">{{webData.inquiry.title}}</h2>
                                            <div>
                                                <form class="inquiry-form">
                                                    <label class="block" for="fullName">{{webData.inquiry.fn}}</label>
                                                    <input class="block" type="text" id="fullName" v-model="inquiryForm.fullName" required>
                                                    <label class="block" for="email">{{webData.inquiry.email}}</label>
                                                    <input class="block" type="email" id="email" v-model="inquiryForm.email" required>
                                                    <label class="block" for="phone">{{webData.inquiry.phone}}</label>
                                                    <input class="block" type="number" id="phone" v-model="inquiryForm.phoneNumber" required>
                                                    <label class="block" for="subject">{{webData.inquiry.subject}}</label>
                                                    <input class="block" type="text" id="subject" v-model="inquiryForm.subject" required>
                                                    <b-form-select class="block select" v-model="selectService" :options="services" style="width: 280px;"></b-form-select>
                                                    <b-form-select v-if="selectService !== null" class="block select trans-500-ms" v-model="inquiryForm.serviceDetails" :options="serviceDetailsOptions" :key="selectService" style="width: 280px;"></b-form-select>
                                                    <textarea class="block" id="details" rows="5" cols="60" v-model="inquiryForm.details" required :placeholder="webData.inquiry.details"></textarea>
                                                    <div class="form-btn-container">
                                                        <transition name="fadeInRight" mode="out-in">
                                                            <div v-if="successSubmit" :key="1" class="info-submit blue-bg">
                                                                <p>{{webData.eventInfo.success}}</p>
                                                            </div>
                                                            <div v-if="warningSubmit" :key="2" class="info-submit bg-warning">
                                                                <p>{{webData.eventInfo.warning}}</p>
                                                            </div>
                                                            <div v-if="dangerSubmit" :key="3" class="info-submit bg-danger">
                                                                <p>{{webData.eventInfo.error}}</p>
                                                            </div>
                                                        </transition>
                                                    </div>
                                                </form>
                                                <div class="form-btn-container">
                                                    <div v-if="formLoader">
                                                        <loader></loader>
                                                    </div>
                                                    <button v-else @click="submitForm" class="form-btn"><b-icon-cursor></b-icon-cursor> {{webData.sendBtn}}</button>
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
        </div>
        <Footer :web-data-global="webDataGlobal"></Footer>
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from "../components/Footer"
import axios from 'axios'
import loader from '../components/Loader'

export default {
        name: "ContactUs",
        props: {
          webDataGlobal: {
            type: Object,
            required: true
          }
        },
        data () {
            return {
                mobaDev:  false,
                successSubmit: false,
                warningSubmit: false,
                dangerSubmit: false,
                loading: false,
                formLoader: false,

                // Danasnji dan, mjesec i godina
                today: {},

                // Trenutni pogled na kalendaru
                currentMonth: {},
                currentYear: '',

                // Odabrani dani, u kojem su mjesecu i kojoj godini
                selectedDays: [],
                arrivalYear: '',
                arrivalDay: '',
                departureDay: '',
                arrivalMonth: '',
                departureMonth: '',
                departureYear: '',
                tempSave: {},
                startWeekIndex: '',

                dateList: [],
                bookedDays: [],

                months: [],
                days: [],

                // Forma za upit
                inquiryForm: {
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    subject: '',
                    serviceDetails: null,
                    service: '',
                    details: ''
                },
                serviceDetailsOptions: [],
                selectService: null,
                webData: {},
                services: [],
            }
        },
        watch: {
            selectService (status) {
                this.inquiryForm.serviceDetails = null;
                if (status === 1) this.serviceDetailsOptions = this.webData.inquiry.persons;
                else if (status === 2) this.serviceDetailsOptions = this.webData.inquiry.events;
            },
            $route () {
                this.resetForm();
            }
        },
        async created() {
            this.loading = true;
            this.webData = this.webDataGlobal.contactUs;
            this.services = this.webData.inquiry.services;
            if (window.innerWidth < 1150) {
                this.mobaDev = true;
                this.$store.state.mobaDev = true;
            } else  this.$store.state.mobaDev = false;
            let data = this.$store.getters.getBookingData;
            if (data.selectedDays !== undefined && data.selectedDays.length > 0) {
                this.selectedDays = data.selectedDays;
                this.arrivalYear = this.arrivalYear = data.arrivalYear;
                this.arrivalMonth = this.arrivalMonth = data.arrivalMonth;
                this.arrivalDay = data.arrivalDay;
                this.departureYear = data.departureYear;
                this.departureMonth = data.departureMonth;
                this.departureDay = data.departureDay;
            }
            this.months = this.$store.getters.getMonths;
            let t = new Date();
            t = String(t);
            let words = t.split(' ');
            this.setUpTodaysDate(words[0], words[1], words[2], words[3]);
            this.days = this.$store.getters.getWeekDays;
            await this.retrieveCalendarData();
            if (this.dateList !== undefined && this.dateList.length > 0)   this.loading = false;
            else {
                this.daysInFeb();
                await this.getBookedDates();
                await this.setToday();
            }
        },
        methods: {
            handleSelectedDates () {
                this.selectedDays = this.tempSave.selectedDays;
                this.arrivalYear = this.tempSave.arrivalYear;
                this.arrivalMonth = this.tempSave.arrivalMonth;
                this.arrivalDay = this.tempSave.arrivalDay;
                this.departureYear = this.tempSave.departureYear;
                this.departureMonth = this.tempSave.departureMonth;
                this.departureDay = this.tempSave.departureDay;
                this.tempSave = {};
            },
            hideSelectedDates () {
                this.tempSave.selectedDays = this.selectedDays;
                this.tempSave.arrivalYear = this.arrivalYear;
                this.tempSave.arrivalMonth = this.arrivalMonth;
                this.tempSave.arrivalDay = this.arrivalDay;
                this.tempSave.departureYear = this.departureYear;
                this.tempSave.departureMonth = this.departureMonth;
                this.tempSave.departureDay = this.departureDay;
                this.selectedDays = [];
                this.erasingAdditional();
            },
            daysInFeb () {
                this.months[1].days = new Date(this.currentYear, 2, 0).getDate();
            },
            async saveCalendarData () {
                await this.$store.commit('setCalendarData', {year: this.currentYear, dateList: this.dateList});
            },
            async retrieveCalendarData () {
                await this.$store.commit('setCurrentYear', this.currentYear);
                let i = await this.$store.getters.getCalendarData;
                if (i.length > 0)   this.dateList = i[0].dateList;
                else    this.dateList = i;
            },
            async getBookedDates () {
                const id = '647379';
                await axios.get('https://h3.solutions/api/reservations/' + id)
                    .then((response) => {
                        this.handleAxiosDataResponse(response);
                    })
                    .catch(() => {
                        //this.backupApiReservations(id);
                    });
                this.setUpCalendar();
            },
            async backupApiReservations (id) {
                await axios.get("https://www.h3.solutions/b-api/api/reservations/" + id)
                    .then((response) => {
                        this.handleAxiosDataResponse(response);
                    })
                    .catch((error) => {
                        console.log('Error: ', error);
                    })
            },
            handleAxiosDataResponse (r) {
                let t1 = r.data.data;
                let t2 = t1.filter(item => item.year === this.currentYear);
                this.bookedDays = t2[0];
                if (this.bookedDays === undefined || this.bookedDays.month === undefined)   this.bookedDays = {};
            },
            setUpCalendar: function () {
                let d = null;
                let weeks = [];
                let week = [];
                let startingDay = null;
                let dayOfTheWeek = 0;
                let weekCounter = 1;
                let idCounter = 1;
                let lmSub = null;
                let lastMonthDays = 31;
                this.months.forEach(function(value) {
                    startingDay = Number(new Date(this.currentYear, value.num - 1).getDay()) - 1;
                    if (startingDay === -1) startingDay = 6;
                    lmSub = lastMonthDays + 1 - Number(startingDay);
                    d = value.days;
                    for (let i = 1; i <= d; dayOfTheWeek++) {
                        if (dayOfTheWeek === 7) {
                            dayOfTheWeek = 0;
                        }
                        if (dayOfTheWeek < startingDay && weekCounter === 1) {
                            week.push({id: idCounter, value: lmSub, class: 'gray'});
                            lmSub++;
                            idCounter++;
                        } else if ( dayOfTheWeek < 6 && i === d) {
                            let j = 1;
                            if (this.checkDay(i, value.num)) {
                                week.push({id: idCounter, value: i, class: 'red'});
                            } else {
                                week.push({id: idCounter, value: i, class: 'free'});
                            }
                            idCounter++;
                            dayOfTheWeek++;
                            while (dayOfTheWeek <= 6) {
                                week.push({id: idCounter, value: j, class: 'gray'});
                                dayOfTheWeek++;
                                j++;
                                idCounter++;
                            }
                            weeks.push(week);
                            this.storeCalendarDays(value.num, weeks);
                            week = [];
                            weeks = [];
                            i++;
                        } else if (i === d) {
                            if (this.checkDay(i, value.num)) {
                                week.push({id: idCounter, value: i, class: 'red'});
                            } else {
                                week.push({id: idCounter, value: i, class: 'free'});
                            }
                            weeks.push(week);
                            this.storeCalendarDays(value.num, weeks);
                            week = [];
                            weeks = [];
                            i++;
                            idCounter++;
                        } else {
                            if (this.checkDay(i, value.num)) {
                                week.push({id: idCounter, value: i, class: 'red'});
                            } else {
                                week.push({id: idCounter, value: i, class: 'free'});
                            }
                            i++;
                            idCounter++;
                        }
                        if (dayOfTheWeek >= 6) {
                            weekCounter++;
                            weeks.push(week);
                            week = [];
                        }
                    }
                    d = null;
                    weeks = [];
                    week = [];
                    startingDay = null;
                    dayOfTheWeek = 0;
                    weekCounter = 1;
                }, this);
                this.handleCalendarOperations();
                this.loading = false;
            },
            async handleCalendarOperations() {
                await this.saveCalendarData();
            },
            checkDay: function (i, m) {
                let status = false;
                if (!this.isObjectEmpty(this.bookedDays)) {
                    this.bookedDays.month.forEach(function (value) {
                        if (value.m ===  Number(m)) {
                            value.d.forEach(function (day) {
                                if (day === Number(i)) {
                                    status = true;
                                }
                            })
                        }
                    });
                }
                return status;
            },
            setUpTodaysDate: function (day, month, dayNum, year) {
                this.today = {
                    day: Number(dayNum),
                    month: 0,
                    year: Number(year)
                }
                this.currentYear = Number(year);
                let t = this.months.filter(m => {
                    if (m.name === month)   return m;
                });
                this.today.month = this.currentMonth = t[0];
            },
            async setToday () {
                if (this.currentYear === this.today.year) {
                    let m = await this.dateList.filter(item => Number(item.month) === this.today.month.num);
                    m[0].weeks.forEach(function(item) {
                        let i = item.filter(itemInner => itemInner.value === this.today.day)
                        if (i.length > 0) {
                            i[0].class = i[0].class.concat(' today');
                        }
                    }, this);
                }
            },
            storeCalendarDays: function (month, weeksList) {
                this.dateList.push({month: month, weeks: weeksList});
            },
            async prevGo () {
                if (this.currentYear === this.today.year && this.currentMonth.num > this.today.month.num)    this.currentMonth = this.months[this.currentMonth.num - 2];
                else if (this.currentYear > this.today.year) {
                    if (this.currentMonth.num === 1) {
                        this.loading = true;
                        this.currentYear--;
                        if (this.currentYear === this.tempSave.arrivalYear)   this.handleSelectedDates()
                        this.dateList = [];
                        await this.retrieveCalendarData();
                        if (this.dateList.length > 0)   this.loading = false;
                        else {
                            this.daysInFeb();
                            await this.getBookedDates();
                        }
                        this.currentMonth = this.months[11];
                    } else  this.currentMonth = this.months[this.currentMonth.num - 2];
                }
            },
            async nextGo() {



                if (this.currentMonth.num < 12) {
                    this.currentMonth = this.months[this.currentMonth.num];
                } else {
                    this.loading = true;
                    let temp =  this.currentYear++;
                    if ((!this.isObjectEmpty(this.tempSave)) && (this.currentYear === this.tempSave.arrivalYear))   this.handleSelectedDates();
                    else if (temp-- === this.arrivalYear) {
                        this.hideSelectedDates();
                    }
                    this.dateList = [];
                    await this.retrieveCalendarData();
                    if (this.dateList.length > 0)   this.loading = false;
                    else {
                        this.daysInFeb();
                        await this.getBookedDates();
                    }
                    this.currentMonth = this.months[0];
                }
            },
            isObjectEmpty (obj) {
                return Object.keys(obj).length === 0 && obj.constructor === Object
            },
            clickEventMidHandler (day, month) {
                let objState = this.isObjectEmpty(this.tempSave);
                if (objState) {
                    if (this.currentYear > this.today.year)   return true;
                    else if (this.currentYear === this.today.year && month.num > this.today.month.num)    return true;
                    else return this.currentYear === this.today.year && month.num ===  this.today.month.num && day.value > this.today.day;
                } else {
                    return this.tempSave.arrivalYear === this.currentYear;
                }
            },
            clickEvents (day, weekIndex, month) {
                if (this.clickEventMidHandler(day, month)) {
                    // PRVI CLICK
                    if (this.arrivalDay === '' && day.class === 'free') {
                        this.arrivalDay = day;
                        this.arrivalDay.class = 'selected';
                        this.selectedDays.push(day);
                        this.arrivalMonth = month;
                        this.arrivalYear = this.currentYear;
                        this.startWeekIndex = weekIndex;
                    } // PONOVNI KLIK NA DAN DOLASKA - BRISE SVE
                    else if (day.value === this.arrivalDay.value && month.num === this.arrivalMonth.num) {
                        this.arrivalDay = '';
                        this.arrivalMonth = '';
                        this.arrivalYear = '';
                        this.eraseSelectedDays('all');
                    } // PONOVNI KLIK NA DAN ODLASKA - BRISE DAN ODLASKA I SREDNJE DANE
                    else if (day.value === this.departureDay.value && month.num === this.departureMonth.num) {
                        this.departureDay = '';
                        this.departureMonth = '';
                        this.departureYear = '';
                        this.eraseSelectedDays('skip-first');
                    } // DODAVANJE DANA ODLASKA
                    else {
                        // AKO SE BORAVAK PROTEZE KROZ VISE MJESECI ILI AKO JE ODABRAN DAN VECI OD DANA DOLASKA
                        if ((month.num > this.arrivalMonth.num || day.value > this.arrivalDay.value || this.currentYear > this.today.year) && day.class === 'free') {
                            this.departureDay = day;
                            //this.departureDay.class = 'selected';
                            this.departureMonth = month;
                            this.departureYear = this.currentYear;
                            this.bookingOptions();
                        }
                    }
                }
            },
            bookingOptions () {
                if (this.arrivalMonth.num === this.departureMonth.num)   {
                    let month = this.dateList[this.arrivalMonth.num - 1];
                    this.selectingDaysThroughLoop(month.weeks, 1);
                }
                else {
                    let months = [];
                    this.dateList.forEach(function (m) {
                        if (m.month === this.arrivalMonth.num || (m.month > this.arrivalMonth.num && m.month <= this.departureMonth.num)) {
                            months.push(m);
                        }
                    }, this);
                    let length = months.length;
                    let breakPoint = false;
                    months.forEach(function (m, index) {
                        if (!breakPoint) {
                            if (index === 0) {
                                breakPoint = this.selectingDaysThroughLoop(m.weeks, 2);
                                this.startWeekIndex = 0;
                            }
                            else if (index === length - 1)  breakPoint = this.selectingDaysThroughLoop(m.weeks, 4);
                            else    breakPoint = this.selectingDaysThroughLoop(m.weeks, 3);
                        }
                    }, this);
                }
                this.$store.commit('setBookingData', {selectedDays: this.selectedDays, arrivalYear: this.arrivalYear, arrivalMonth: this.arrivalMonth, departureYear: this.departureYear, departureMonth: this.departureMonth, arrivalDay: this.arrivalDay, departureDay: this.departureDay})
            },
            selectingDaysThroughLoop (weeks, selector) {
                let breakPoint = false;
                for(let i = this.startWeekIndex; i < weeks.length; i++) {
                    weeks[i].forEach(function (day) {
                        if (!breakPoint) {
                            if (day.class === 'red') {
                                if (selector === 1 && day.value > this.arrivalDay.value) breakPoint = true;
                                else if (selector > 1)  breakPoint = true;
                            } else this.importingDays(day, selector);
                        }
                    }, this);
                    if (breakPoint) {
                        this.departureDay = this.selectedDays[this.selectedDays.length - 1];
                        break;
                    }
                }
                return breakPoint;
            },
            importingDays (day, selector) {
                switch (selector) {
                    case 1:
                        // U ISTOME MJESECU
                        if (day.value > this.arrivalDay.value && day.value <= this.departureDay.value && day.class !== 'gray') {
                            day.class = 'selected';
                            this.selectedDays.push(day);
                        }
                        break;
                    case 2:
                        // U POCETNOME MJESECU
                        if (day.value > this.arrivalDay.value && day.class !== 'gray') {
                            day.class = 'selected';
                            this.selectedDays.push(day);
                        }
                        break;
                    case 3:
                        // U MEDU MJESECU/IMA
                        if (day.class !== 'gray') {
                            day.class = 'selected';
                            this.selectedDays.push(day);
                        }
                        break;
                    case 4:
                        // KRAJNJI MJESEC
                        if (day.value <= this.departureDay.value && day.class !== 'gray') {
                            day.class = 'selected';
                            this.selectedDays.push(day);
                        }
                        break;
                }
            },
            eraseSelectedDays (selector) {
                this.selectedDays.forEach(function(day) {
                    day.class = 'free';
                })
                this.selectedDays = [];
                if (selector === 'skip-first') {
                    this.arrivalDay.class = 'selected';
                    this.selectedDays.push(this.arrivalDay);
                    this.departureYear = '';
                    this.departureMonth = '';
                    this.departureDay = '';
                }
                else    this.erasingAdditional();
            },
            erasingAdditional () {
                this.arrivalYear = '';
                this.arrivalMonth = '';
                this.arrivalDay = '';
                this.departureYear = '';
                this.departureMonth = '';
                this.departureDay = '';
            },
            submitForm: function () {
                this.formLoader = true;
                const id = '647379'
                try {
                    const inquiry = {
                        to: 'reservations@valensresidence.com',
                        senderEmail: this.inquiryForm.email,
                        senderName: this.inquiryForm.fullName,
                        phone: this.inquiryForm.phoneNumber,
                        subject: this.inquiryForm.subject,
                        service: this.inquiryForm.service,
                        serviceDetails: this.inquiryForm.serviceDetails,
                        message: this.inquiryForm.details,
                        fromDate: this.selectedDays[0].value + '. ' + this.currentMonth.name + ' ' + this.currentYear,
                        toDate: this.selectedDays[this.selectedDays.length - 1].value + '. ' + this.currentMonth.name + ' ' + this.currentYear
                    };
                    axios.post("https://www.h3.solutions/api/mailing/" + id, inquiry)
                        .then(() => {
                            this.successSubmit = true;
                        })
                        .catch(() => {
                            axios.post("https://www.h3.solutions/b-api/api/mailing" + id, inquiry)
                                .then(() => {
                                    this.successSubmit = true;
                                })
                                .catch((error) => {
                                    console.log('Error: ', error)
                                    this.dangerSubmit = true;
                                })
                        })
                        .finally(() => {
                            this.resetForm();
                            this.formLoader = false;
                        })
                } catch {
                    this.warningSubmit = true;
                    this.handleUserFeedback();
                    this.formLoader = false;
                }
            },
            resetForm: function () {
                this.eraseSelectedDays('all');
                this.inquiryForm.fullName = '';
                this.inquiryForm.email = '';
                this.inquiryForm.phoneNumber = '';
                this.inquiryForm.subject = '';
                this.inquiryForm.serviceDetails = null;
                this.inquiryForm.service = '';
                this.inquiryForm.details = '';
                this.handleUserFeedback();
            },
            updateLang () {
                this.$emit('update-lang');
            },
            handleUserFeedback() {
                setTimeout(() => {
                    this.successSubmit = false;
                    this.warningSubmit = false;
                    this.dangerSubmit = false;
                }, 4000);
            }
        },
        components: {
            Navigation,
            Footer,
            loader
        }
    }
</script>


<style scoped>
.info-submit {
    padding: 10px;
}
.info-submit p {
    color: #ffffff;
    text-align: center;
    margin: 0;
}
.cal-btn {
    float: left;
    margin-left: 17px;
    box-sizing: border-box;
    background-color: transparent;
    letter-spacing: 2px;
    font-weight: bold;
    border: 1px solid rgb(0, 105, 128);
    border-radius: 50%;
}
.cal-btn svg {
    color: rgb(0, 105, 128);
    font-size: 16px !important;
}
.form-btn-container {
    width: 100%;
    text-align: center;
    padding-top: 35px;
}
.bi-cursor {
    fill: rgb(0, 105, 128);
}
.form-btn {
    padding: 15px 50px;
    border: 2px solid rgb(0, 105, 128);
    color: rgb(0, 105, 128);
    background-color: transparent;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: bold;
}
.form-btn:hover, .cal-btn:hover {
    border-color: #ffffff;
    background-color: rgb(0, 105, 128);
    color: #ffffff;
}
.form-btn:hover .bi-cursor {
    fill: #ffffff;
}
.cal-btn:hover svg {
    color: #ffffff;
}
label, input, textarea, .form-btn, .cal-btn {
    -webkit-transition: all 500ms;
    -moz-transition: all 500ms;
    -ms-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
}
textarea {
    padding-top: 3px;
    border: 1px solid transparent;
    border-bottom-color: #cecece;
}
input, textarea {
    padding-left: 3px;
}
input, .select {
    height: 40px;
    margin-bottom: 5px;
    border: 1px solid transparent;
    border-bottom-color: #cecece;
}
input:active, select:active, textarea:active {
    border: none;
    border-bottom: 1px solid #2c3e50;
}
input:focus, select:focus, textarea:focus {
    outline: none;
    outline-offset: 0;
    border: none;
    border-bottom: 1px solid #2c3e50;
    box-shadow: none;
}
.block {
    display: block;
}
.contact-us-bg-wrapper {
    padding-top: 200px;
    background-image: url("../assets/photos/vr_contact_01.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.svg-container {
    display: block;
    width: 100%;
}
.svg-container svg {
    height: auto;
}
/*
.last-child-row:nth-child(1) {
    color: rgb(0, 105, 128);
}
*/
.last-child-row:nth-last-child(-n + 2) {
    color: rgb(0, 105, 128);
}
table {
    border-collapse: collapse;
    table-layout: fixed;
    color: #000;

}
.free {
    color: black;
    cursor: pointer;
    -webkit-transition: all 500ms;
    -moz-transition: all 500ms;
    -ms-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
}
.free:hover {
    background-color: #55767d;
    color: #ffffff;
}
.free:active {
    border-radius: 50px;
    background-color: #660000;
    color: #ffffff;
}
.selected {
    background-color: #006980 !important;
    color: #ffffff !important;
}
.gray {
    color: #cecece !important;
}
.red {
    color: #ffffff;
    background-color: #cecece;
}
.today {
    border: 1px solid rgb(0, 105, 128);
}
.code {
    text-align: center;
    text-transform: capitalize;
    font-size: 15px;
}
@media (min-width: 992px) {
    #v-svg {
        display: block;
    }
    .inquiry-form input, .inquiry-form select {
        width: 370px;
    }
}
@media (max-width: 992px) {
    #v-svg {
        display: none;
    }
    .inquiry-form input, .inquiry-form textarea, .inquiry-form select {
        width: 100%;
    }
}
</style>
