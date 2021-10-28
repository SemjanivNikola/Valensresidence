import Vue from 'vue'
import Vuex from 'vuex'

// Main slider
import imgM1 from '../assets/photos/vr_M1.jpg'
import imgM2 from '../assets/photos/vr_M2.jpg'
import imgM3 from '../assets/photos/vr_M3.jpg'
import imgM4 from '../assets/photos/vr_M4.jpg'
import imgM5 from '../assets/photos/vr_M5.jpg'
import imgM6 from '../assets/photos/vr_M6.jpg'
import imgM7 from '../assets/photos/vr_M7.jpg'
import imgM8 from '../assets/photos/vr_M8.jpg'
import imgM9 from '../assets/photos/vr_M9.jpg'
import imgM10 from '../assets/photos/vr_M10.jpg'
import imgM11 from '../assets/photos/vr_M11.jpg'
import imgM12 from '../assets/photos/vr_M12.jpg'
import imgM13 from '../assets/photos/vr_M13.jpg'

// Gallery
import img1 from '../assets/photos/vr_1.jpg'
import img2 from '../assets/photos/vr_2.jpg'
import img3 from '../assets/photos/vr_3.jpg'
import img4 from '../assets/photos/vr_4.jpg'
import img5 from '../assets/photos/vr_5.jpg'
import img6 from '../assets/photos/vr_6.jpg'
import img7 from '../assets/photos/vr_7.jpg'
import img8 from '../assets/photos/vr_8.jpg'
import img9 from '../assets/photos/vr_9.jpg'
import img10 from '../assets/photos/vr_10.jpg'
import img11 from '../assets/photos/vr_11.jpg'
import img12 from '../assets/photos/vr_12.jpg'
import img13 from '../assets/photos/vr_13.jpg'
import img14 from '../assets/photos/vr_14.jpg'
import img15 from '../assets/photos/vr_15.jpg'
import img16 from '../assets/photos/vr_16.jpg'
import img17 from '../assets/photos/vr_17.jpg'
import img18 from '../assets/photos/vr_18.jpg'
import img19 from '../assets/photos/vr_19.jpg'
import img20 from '../assets/photos/vr_20.jpg'
import img21 from '../assets/photos/vr_21.jpg'
import img22 from '../assets/photos/vr_22.jpg'
import img23 from '../assets/photos/vr_23.jpg'
import img24 from '../assets/photos/vr_24.jpg'
import img25 from '../assets/photos/vr_25.jpg'
import img26 from '../assets/photos/vr_26.jpg'
import img27 from '../assets/photos/vr_27.jpg'
import img28 from '../assets/photos/vr_28.jpg'
import img29 from '../assets/photos/vr_29.jpg'
import img30 from '../assets/photos/vr_30.jpg'
import img31 from '../assets/photos/vr_36.jpg'
import img32 from '../assets/photos/vr_34.jpg'
import img33 from '../assets/photos/vr_32.jpg'
import img34 from '../assets/photos/vr_33.jpg'
import img35 from '../assets/photos/vr_35.jpg'
import img36 from '../assets/photos/vr_39.jpg'
import img37 from '../assets/photos/vr_37.jpg'
import img38 from '../assets/photos/vr_38.jpg'
import img39 from '../assets/photos/vr_41.jpg'
import img40 from '../assets/photos/vr_40.jpg'
import img42 from '../assets/photos/vr_42.jpg'
import img41 from '../assets/photos/vr_31.jpg'

import s1 from '../assets/bg01.jpg'
import s2 from '../assets/bg02.jpg'
import s3 from '../assets/bg03.jpg'

import imgScs from '../assets/Daily_cleaning_service.jpg'
import imgSfc from '../assets/Mediterranean_food_catering.jpg'
import imgSc from '../assets/Concierge.jpg'
import imgSeo from '../assets/Event_organisation.jpg'
import imgSgt from '../assets/Guest_transfers.jpg'

import imgA1 from '../assets/webImgs/Bedroom.jpg'
import imgA2 from '../assets/webImgs/Dining-table.jpg'
import imgA3 from '../assets/webImgs/5-hole-mini-golf.jpg'
import imgA4 from '../assets/webImgs/en-suite-Bathroom.jpg'
import imgA5 from '../assets/webImgs/Exterior.jpg'
import imgA6 from '../assets/webImgs/Gym.jpg'
import imgA7 from '../assets/webImgs/Internet-and-TV.jpg'
import imgA8 from '../assets/webImgs/Parking.jpg'
import imgA9 from '../assets/webImgs/Swimming-pool.jpg'
import imgA10 from '../assets/webImgs/Vine-cellar-and-bar.jpg'
import imgA11 from '../assets/webImgs/Library.jpg'
import imgA12 from '../assets/webImgs/Number-of-people.jpg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ww: '',
    mobaDev: false,
    mainPhotos: [
      {
        id: 1,
        url: imgM1,
        alt: 'Valens Residence front view, entrence, parking'
      },
      { id: 2, url: imgM2, alt: 'Valens Residence kitchen' },
      {
        id: 3,
        url: imgM3,
        alt: 'Valens Residence dining area with a kitchen table'
      },
      { id: 4, url: imgM4, alt: 'Dining area and kitchen table' },
      { id: 5, url: imgM5, alt: 'Valens Residence winery, wines' },
      { id: 6, url: imgM6, alt: 'Bedroom inside the villa' },
      { id: 7, url: imgM7, alt: 'Bedroom inside the villa' },
      { id: 8, url: imgM8, alt: 'En-suite bathroom' },
      { id: 9, url: imgM9, alt: 'Valens Residence Bar' },
      { id: 10, url: imgM10, alt: 'Valens Residence gym and sauna' },
      {
        id: 11,
        url: imgM11,
        alt: 'Valens Residence at night. View at the parking'
      },
      { id: 12, url: imgM12, alt: 'View at the pool and sun beds' },
      { id: 13, url: imgM13, alt: 'View at the back side of Valens Residence' }
    ],
    gallery: [
      {
        id: 1,
        src: img1,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 2,
        src: img2,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 3,
        src: img3,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 4,
        src: img4,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 5,
        src: img5,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 6,
        src: img6,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 7,
        src: img7,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 8,
        src: img8,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 9,
        src: img9,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 10,
        src: img10,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 11,
        src: img11,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 12,
        src: img12,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 13,
        src: img13,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 14,
        src: img14,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 15,
        src: img15,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 16,
        src: img16,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 17,
        src: img17,
        alt: 'Valens Residence Croatian villa',
        block: 2,
        isActive: false,
        width: 0
      },
      {
        id: 18,
        src: img18,
        alt: 'Valens Residence Croatian villa',
        block: 2,
        isActive: false,
        width: 0
      },
      {
        id: 19,
        src: img19,
        alt: 'Valens Residence Croatian villa',
        block: 3,
        isActive: false,
        width: 0
      },
      {
        id: 20,
        src: img20,
        alt: 'Valens Residence Croatian villa',
        block: 3,
        isActive: false,
        width: 0
      },
      {
        id: 21,
        src: img21,
        alt: 'Valens Residence Croatian villa',
        block: 3,
        isActive: false,
        width: 0
      },
      {
        id: 22,
        src: img22,
        alt: 'Valens Residence Croatian villa',
        block: 3,
        isActive: false,
        width: 0
      },
      {
        id: 23,
        src: img23,
        alt: 'Valens Residence Croatian villa',
        block: 3,
        isActive: false,
        width: 0
      },
      {
        id: 24,
        src: img24,
        alt: 'Valens Residence Croatian villa',
        block: 3,
        isActive: false,
        width: 0
      },
      {
        id: 25,
        src: img25,
        alt: 'Valens Residence Croatian villa',
        block: 3,
        isActive: false,
        width: 0
      },
      {
        id: 26,
        src: img26,
        alt: 'Valens Residence Croatian villa',
        block: 3,
        isActive: false,
        width: 0
      },
      {
        id: 27,
        src: img27,
        alt: 'Valens Residence Croatian villa',
        block: 4,
        isActive: false,
        width: 0
      },
      {
        id: 28,
        src: img28,
        alt: 'Valens Residence Croatian villa',
        block: 4,
        isActive: false,
        width: 0
      },
      {
        id: 29,
        src: img29,
        alt: 'Valens Residence Croatian villa',
        block: 4,
        isActive: false,
        width: 0
      },
      {
        id: 30,
        src: img30,
        alt: 'Valens Residence Croatian villa',
        block: 4,
        isActive: false,
        width: 0
      },
      {
        id: 31,
        src: img31,
        alt: 'Valens Residence Croatian villa',
        block: 4,
        isActive: false,
        width: 0
      },
      {
        id: 32,
        src: img32,
        alt: 'Valens Residence Croatian villa',
        block: 4,
        isActive: false,
        width: 0
      },
      {
        id: 33,
        src: img33,
        alt: 'Valens Residence Croatian villa',
        block: 4,
        isActive: false,
        width: 0
      },
      {
        id: 34,
        src: img34,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 35,
        src: img35,
        alt: 'Valens Residence Croatian villa',
        block: 1,
        isActive: false,
        width: 0
      },
      {
        id: 36,
        src: img36,
        alt: 'Valens Residence Croatian villa',
        block: 5,
        isActive: false,
        width: 0
      },
      {
        id: 37,
        src: img37,
        alt: 'Valens Residence Croatian villa',
        block: 5,
        isActive: false,
        width: 0
      },
      {
        id: 38,
        src: img38,
        alt: 'Valens Residence Croatian villa',
        block: 6,
        isActive: false,
        width: 0
      },
      {
        id: 39,
        src: img39,
        alt: 'Valens Residence Croatian villa',
        block: 6,
        isActive: false,
        width: 0
      },
      {
        id: 40,
        src: img40,
        alt: 'Valens Residence Croatian villa',
        block: 6,
        isActive: false,
        width: 0
      },
      {
        id: 41,
        src: img41,
        alt: 'Valens Residence Croatian villa',
        block: 6,
        isActive: false,
        width: 0
      },
      {
        id: 42,
        src: img42,
        alt: 'Valens Residence Croatian villa',
        block: 6,
        isActive: false,
        width: 0
      }
    ],
    months: [
      {
        name: 'Jan',
        fullNameEng: 'January',
        fullNameHr: 'Siječanj',
        num: 1,
        numZero: '01',
        days: 31,
        weeks: []
      },
      {
        name: 'Feb',
        fullNameEng: 'February',
        fullNameHr: 'Veljača',
        num: 2,
        numZero: '02',
        days: 29,
        weeks: []
      },
      {
        name: 'Mar',
        fullNameEng: 'March',
        fullNameHr: 'Ožujak',
        num: 3,
        numZero: '03',
        days: 31,
        weeks: []
      },
      {
        name: 'Apr',
        fullNameEng: 'April',
        fullNameHr: 'Travanj',
        num: 4,
        numZero: '04',
        days: 30,
        weeks: []
      },
      {
        name: 'May',
        fullNameEng: 'May',
        fullNameHr: 'Svibanj',
        num: 5,
        numZero: '05',
        days: 31,
        weeks: []
      },
      {
        name: 'Jun',
        fullNameEng: 'June',
        fullNameHr: 'Lipanj',
        num: 6,
        numZero: '06',
        days: 30,
        weeks: []
      },
      {
        name: 'Jul',
        fullNameEng: 'July',
        fullNameHr: 'Srpanj',
        num: 7,
        numZero: '07',
        days: 31,
        weeks: []
      },
      {
        name: 'Aug',
        fullNameEng: 'August',
        fullNameHr: 'Kolovoz',
        num: 8,
        numZero: '08',
        days: 31,
        weeks: []
      },
      {
        name: 'Sep',
        fullNameEng: 'September',
        fullNameHr: 'Rujan',
        num: 9,
        numZero: '09',
        days: 30,
        weeks: []
      },
      {
        name: 'Oct',
        fullNameEng: 'October',
        fullNameHr: 'Listopad',
        num: 10,
        numZero: '10',
        days: 31,
        weeks: []
      },
      {
        name: 'Nov',
        fullNameEng: 'November',
        fullNameHr: 'Studeni',
        num: 11,
        numZero: '11',
        days: 30,
        weeks: []
      },
      {
        name: 'Dec',
        fullNameEng: 'December',
        fullNameHr: 'Prosinac',
        num: 12,
        numZero: '12',
        days: 31,
        weeks: []
      }
    ],
    days: [
      { nameEng: 'Mon', nameHr: 'Pon', num: '0' },
      { nameEng: 'Tue', nameHr: 'Uto', num: '1' },
      { nameEng: 'Wed', nameHr: 'Sri', num: '2' },
      { nameEng: 'Thu', nameHr: 'Čet', num: '3' },
      { nameEng: 'Fri', nameHr: 'Pet', num: '4' },
      { nameEng: 'Sat', nameHr: 'Sub', num: '5' },
      { nameEng: 'Sun', nameHr: 'Ned', num: '6' }
    ],

    homeSliders: {
      s1: s1,
      s2: s2,
      s3: s3
    },

    calendarData: [],
    bookingData: {},
    currentYear: '',

    lang: 'eng',
    hr: {
      key: 1,
      nav: ['Početna', 'Glavna', 'Galerija', 'Kontaktirajte nas'],
      home: {
        s1Title: 'Luksuzan odmor u',
        s1TitleBold: 'hrvatskoj baštini',
        s2Title: 'Saznajte više o',
        s2TitleBold: 'našoj priči',
        s3Title: 'I rezervirajte',
        s3TitleBold: 'vlastito iskustvo',
        scrollText: 'Povuci dolje za više detalja',
        s2Btn: 'Brze informacije',
        quickInfoTitle: 'Blagdanski ugođaj za mirne blagdane',
        quickInfoText:
          'Dobrodošli u zimsko izdanje Vaše omiljene Valens Residence! \n Provedite božićne blagdane daleko od svakodnevne buke i odmorite se na svježem istarskom zraku uz svoje najbliže, jer smo uz naše standardne pogodnosti ove godine blagdane začinili predivnim božićnim ukrasima!\n Najidiličnije obiteljsko okupljanje neka ove godine bude u čarobnoj Istri!',
        s3Links: [
          { title: 'Glavna', desc: 'Saznajte više o nama i onome što nudimo' },
          { title: 'Galerija', desc: 'Prošećite prekrasnom Valens Residence' },
          {
            title: 'Kontaktirajte nas',
            desc: 'Potražite dostupne datume i rezervirajte svoj boravak ili uslugu'
          }
        ]
      },
      main: {
        nav: [
          'O nama',
          'Vila',
          'Sadržaj',
          '(Pri)povijest',
          'Usluge',
          'Lokacija',
          'Galerija',
          'Instagram',
          'Vrijeme'
        ],
        t1: 'Tko',
        t1Bold: 'smo mi?',
        t2: 'Sadržaj i značajke.',
        t3: '(Pri)povijest',
        t3Bold: 'iza Valensa.',
        t4: 'Bacite oko na ono',
        t4Bold: 'što imamo za ponuditi.',
        t5: 'Naše',
        t5Bold: 'mjesto pod suncem.',
        t6: 'Slika',
        t6Bold: 'besprijekorne destinacije.',
        t7Bold: 'Najnovije objave.',
        d1: 'Valens Residence prva je hrvatska vila izgrađena isključivo od domaćih materijala u duhu hrvatske tradicije tijekom stoljeća pstojanja. Izgradnja sljubljena sa hrvatskom povijesti, umjetnosti, književnosti i arhitekturom, okrunjenom dahom suvremene stvarnosti i modernih sadržaja, ono je što nas čini posebnima u usporedbi s drugim luksuznim domovima. Valens je mjesto gdje uistinu možete uživati u bezbrižnom i luksuznom odmoru!',
        d2: 'Naša prostrana vila prostire se na tri kata, svaki ispunjen u svoje svrhe. Prostor za zabavu, wellness i fitnes nalazi se na donjoj razini te uključuje teretanu, saunu, kišni tuš, i bilijar s vinskim podrumom i galerijom slika.',
        d3: 'U prizemlju se nalazi prostrana kuhinja s modernim aparatima i blagovaonicom, dnevni boravak s bibliotekom koja sadrži djela mnogih značajnih hrvatskih književnika prevedenih na nekoliko jezika i velika spavaća soba skrivena iza zidova.',
        d4: 'Gornja razina namijenjena je odmoru i sadrži tri luksuzne, prostrane spavaće sobe s kupaonicama i velikim balkonom za umirujuće iskustvo u srcu istarske prirode.',
        d5: 'Kružni prilaz s 2 parkirna mjesta na kojem u sredini raste maslina, simbol antike i dugovječnosti, prvo ćete primijetiti po dolasku. Ništa manje stara i impozantna su masivna glavna ulazna vrata visoka 2,5 m od hrvatske lužnice stare preko 50 godina./n Okružena živicom koja vas štiti od neželjenih pogleda, omogućavajući vam da se opustite u luksuzu, druga strana vile nudi moderne sadržaje poput grijanog bazena od 50 m2 i terena za mini golf, koji će vam biti od velike pomoći pri bijegu od stresa, terase sa 6 ležaljki za sunčanje, kaminom i stolom za blagovanje - u slučaju da svoj odmor želite začiniti večerom u ugodnom društvu svojih prijatelja.',
        d6: 'Dizajn, ključne značajke, \n pa čak i \n sami materijali korišteni u cijeloj Valens Residence nisu slučajni. 100% materijala korištenih u izgradnji i opremanju vile hrvatskog su podrijetla. Od ukrasa do materijala, inspiracije za dizajn i izgled vuču korijene iz tipičnog izgleda stare istarske stancije - rezidencije vlasnika većeg seoskog imanja.Vila je dobila ime po caru Rimskog carstva - Valensu, koji je bio porijeklom iz Hrvatske, a nastanio se u Istri kako bi prikazao svoj spoj drevnog i modernog, podsjećajući sve da, poput regije na čijoj zemlji počiva - Valens Residence ima mnogo za ponuditi svima koji se nađu u blizini.U unutrašnjosti Valensa pronaći će se stoljetni hrvatski hrast na kojem je nekad počivala Mletačka Republika, reinterpretacije poznatih slikara poput Vlahe Bukovca, čija djela nižu zidove najpoznatijih svjetskih muzeja i galerija.Uživajte u slušanju majstorskih djela hrvatskih glazbenika ili se poigrajte u kuhinji s raznim domaćim delicijama - tartufima, maslinama i ostalim specijalitetima mediteranske kuhinje.Među raznolikom ponudom najboljih hrvatskih vina koja možete probati, jedno stoji iznad svega - Iločki Traminac, onaj koji je poslužen na krunidbi kraljice Elizabete II i na vjenčanjima njezinih unuka, zasigurno će zabaviti vaše okusne pupoljke!',
        cards: [
          {
            id: 1,
            img: imgA2,
            headline: 'Prostor za blagovanje',
            info: '10 osoba',
            overlayText: 'nutarnji i vanjski prostor, oboje za 10 ljudi'
          },
          {
            id: 2,
            img: imgA11,
            headline: 'Knjižnica',
            info: '150+ knjiga',
            overlayText: 'Mnoge hrvatske knjige, prevedene na nekoliko jezika'
          },
          {
            id: 3,
            img: imgA10,
            headline: 'Vinska polica',
            info: 'Sa šankom',
            overlayText:
              'Kušajte neke od najpopularnijih hrvatskih vina i craft piva'
          },
          {
            id: 4,
            img: imgA1,
            headline: 'Spavaće sobe',
            info: '4 queensize kreveta',
            overlayText:
              '4 potpuno opremljene spavaće sobe sa en-suitekupaonicama'
          },
          {
            id: 5,
            img: imgA8,
            headline: 'Parking',
            info: '2',
            overlayText: 'U hladu, zaštićeni od sunca'
          },
          {
            id: 6,
            img: imgA5,
            headline: 'Okoliš',
            info: '400 m2 prostora',
            overlayText: 'i dodatnih 220m2 terase'
          },
          {
            id: 7,
            img: imgA12,
            headline: 'Broj gostiju',
            info: '8',
            overlayText: '4 potpuno opremljene spavaće sobe, svaka za 2 osobe'
          },
          {
            id: 8,
            img: imgA4,
            headline: 'Kupaonica / WC',
            info: '4 + 2',
            overlayText:
              '4 en-suite kupaonice, 1 individualni i jedan gostinjski WC'
          },
          {
            id: 9,
            img: imgA7,
            headline: 'Internet i TV',
            info: 'Besplatan internet i 6 TV-a',
            overlayText:
              'Osiguran besplatan Wi-Fi na cijeloj površini vile, TV u svakoj spavaćoj sobi i 2 u zajedničkim prostorijama'
          },
          {
            id: 10,
            img: imgA3,
            headline: 'Mini-golf teren',
            info: 'Rekreativnost',
            overlayText: '5 rupi na 65 m2'
          },
          {
            id: 11,
            img: imgA9,
            headline: 'Bazen',
            info: '50m2, grijan',
            overlayText: 'Suvremena tehnologija za manje upotrebe kemikalija'
          },
          {
            id: 12,
            img: imgA6,
            headline: 'Zabava',
            info: 'Teretana, spa i bilijar',
            overlayText:
              'Teretana je potpuno opremljena, a finska sauna sadrži i kišni tuš'
          }
        ],
        services: [
          {
            id: 1,
            numOrder: '#1',
            text: 'Transferi gostiju',
            desc: 'Po dogovoru pokupiti ćemo naše goste bez obzira na to kako dolaze. Prijevoz od/do zračne luke, pratnja od izlaza s autoceste ili najam morskog doka i prijevoz do vile - sve je u našoj moći! Jednostavno se morate pojaviti - ostalo je naše da se pobrinemo!',
            img: imgSgt
          },
          {
            id: 2,
            numOrder: '#2',
            text: 'Dnevno čišćenje i pospremanje',
            desc: 'Ako ostanete tjedan dana ili više, na raspolaganju su vam naše spremačice kako bi vaš odmor učinili potpuno bezbrižnim, bez obzira želite li ih svaki dan ili po potrebi. *potrebna prethodna najava',
            img: imgScs
          },
          {
            id: 3,
            numOrder: '#3',
            text: 'Catering',
            desc: 'Suradnja s prepoznatljivim konobama koje nude najbolje od tradicionalne kuhinje omogućila nam je da pred vama imamo samo najbolja, ukusna i tradicionalna istarska i mediteranska jela. *potrebna prethodna najava',
            img: imgSfc
          },
          {
            id: 4,
            numOrder: '#4',
            text: 'Konsijerž ',
            desc: 'Za sve vas koji se želite potpuno opustiti i biti bezbrižni - na raspolaganju su vam naši asistenti. Biti će spremni prihvatiti gotovo svaku želju, uz najavu prije dolaska, a neke i po dolasku. Bez obzira želite li otići na izlet, u kazalište, zvjezdarnicu ili unajmiti jedrilicu, oni će učiniti sve da vam to omoguće.',
            img: imgSc
          },
          {
            id: 5,
            numOrder: '#5',
            text: 'Organizacija događaja',
            desc: 'Valens Residence savršeno je mjesto za razne događaje do 50 ljudi. Naši stručni organizatori pomoći će vam da vaš događaj, proslava, snimanje ili čak promocija proizvoda bude zabavna i besprijekorna u 100% hrvatskom okruženju i uz spektakularnu pozadinu istarskog okruženja.',
            img: imgSeo
          }
        ],
        mapPoints: ['Autocesta', 'Centar', 'Plaža', 'Observatorij'],
        availabilityBtn: 'Provjeri dostupnost',
        servicesBtn: 'Imate još pitanja?',
        galleryBtn: 'Otvori galeriju',
        igBtn: 'Pogledajte više na',
        weather: {
          title: 'Vrijeme',
          today: 'Trenutno vrijeme',
          tomorrow: 'Vrijeme sutra'
        }
      },
      contactUs: {
        fromBtn: 'Od',
        toBtn: 'Do',
        sendBtn: 'Pošalji',
        inquiry: {
          title: 'Pošaljite nam upit',
          fn: 'Puno ime i prezime:',
          email: 'Mail adresa:',
          phone: 'Telefonski broj:',
          subject: 'Naslov:',
          details: 'Dodajte detalje...',
          services: [
            { value: null, text: 'Odaberite uslugu', disable: true },
            { value: 1, text: 'Rezervirajte odmor' },
            { value: 2, text: 'Organizirajte događaj' }
          ],
          persons: [
            { value: null, text: 'Broj ljudi', disable: true },
            { value: 1, text: '1 osoba' },
            { value: 2, text: '2 osobe' },
            { value: 3, text: '3 osobe' },
            { value: 4, text: '4 osobe' },
            { value: 5, text: '5 osoba' },
            { value: 6, text: '6 osoba' },
            { value: 7, text: '7 osoba' },
            { value: 8, text: '8 osoba' }
          ],
          events: [
            { value: null, text: 'Odaberite događaj', disable: true },
            { value: 1, text: 'Team building' },
            { value: 2, text: 'Proslave' },
            { value: 3, text: 'Prezentacija proizvoda' },
            { value: 4, text: 'Ostalo' }
          ],
          eventInfo: {
            success: 'Vaš upit je uspješno poslan!',
            warning:
              'Sva polja je potrebno ispravno popuniti. Provjerite kalendar i ispravnost podataka te pokušajte ponovno!',
            error:
              'Nešto je pošlo krivo. Molim Vas, osvježite stranicu te pokušajte ponovno!'
          }
        }
      },
      footer: {
        link: 'Kontaktirajte nas',
        pp: 'Pravila o privatnosti',
        tc: 'Uvjeti i odredbe'
      },
      gallery: [
        'Sve',
        'Okoliš',
        'Kuhinja',
        'Dnevni boravak',
        'Sobe',
        'Kupaonice',
        'Zabava'
      ]
    },
    eng: {
      key: 2,
      nav: ['Home', 'Main', 'Gallery', 'Contact Us'],
      home: {
        s1Title: 'Luxurious vacation with',
        s1TitleBold: 'Croatian heritage',
        s2Title: 'Know more about',
        s2TitleBold: 'our story',
        s3Title: 'And book',
        s3TitleBold: 'your experience',
        scrollText: 'Scroll form more',
        s2Btn: 'Quick info',
        quickInfoTitle: 'Holiday atmosphere for cosy holidays',
        quickInfoText:
          'Welcome to the winter edition of your favorite Valens Residence! \n Spend the Christmas holidays away from everyday noise and relax in the fresh Istrian air with your loved ones, because besides our standard benefits, we have additionally spiced up the holiday season with beautiful Christmas decorations!\n Let the most idyllic family gathering be in magical Istria this year!',
        s3Links: [
          { title: 'Main', desc: 'Learn more about us and what we offer' },
          {
            title: 'Gallery',
            desc: 'Take a walk through the beautiful Residence'
          },
          {
            title: 'Contact Us',
            desc: 'Look for available dates and book your stay or service'
          }
        ]
      },
      main: {
        nav: [
          'About Us',
          'The Villa',
          'Amenities',
          '(Hi)Story behind',
          'Services',
          'Location',
          'Gallery',
          'Instagram'
        ],
        t1: 'Who',
        t1Bold: 'are we?',
        t2: 'Amenities',
        t3: '(Hi)Story',
        t3Bold: 'behind the Valens.',
        t4: 'Lay an eye on what',
        t4Bold: 'we have to offer.',
        t5: 'Place',
        t5Bold: 'of our own.',
        t6: 'A picture',
        t6Bold: 'perfect destination.',
        t7Bold: "Feed's latest posts.",
        d1: 'The Valens Residence is the ﬁrst Croatian villa constructed exclusively of domestic materials in the spirit of country’s traditions over the centuries. Featuring Croatia’s history, art, literature and architecture, crowned with a breath of contemporary reality and modern amenities is what makes us special in comparison to other upscale homes. Valens is the place where you truly can enjoy a carefree and luxurious vacation!',
        d2: 'Our spacious villa is comprised of three ﬂoors, each ﬁlled within a distinctive purpose. An entertainment, wellness and ﬁtness area is located on the lower level, featuring a gym, sauna, a rainfall shower, and a billiards area featuring a wine cellar and picture gallery.',
        d3: 'On the ground level there is a spacious kitchen with modern appliances and dining area, a living room with a library containing works from many of Croatia’s notable literati translated into several languages, and a big bedroom hidden behind its walls.',
        d4: 'The upper level is intended for relaxation and contains three luxurious and spacious bedrooms with ensuite bathrooms and a large balcony for the soothing experience within the heart of Istrian nature.',
        d5: 'A circular driveway with 2 parking places in which in the middle an olive tree grows, symbol of antiquity and longevity, is the ﬁrst thing you will notice upon arrival. No less old and imposing are the massive, 2,5 m tall, main entrance doors made of Croatian leach over 50 years old.',
        d6: 'Surrounded by a hedge that protects you from unwanted views, allowing you to relax in luxury, the other side of the villa provides modern facilities such as a 50 sqm heated pool and mini golf course, which will be of great help while escaping stress, lounge area with 6 deck chairs for sunbathing, and terrace with a ﬁreplace and a dining table - in case you want to spice up your vacation with dinner in the pleasant company of your friends.',
        d7: 'The design, key features and even materials itself used throughout The Valens Residence are not accidental. 100% materials embedded in building and equipping the villa are of Croatian origin. From decoration to materials, the inspiration for the design and appearance has its roots in the typical look of an old Istrian stancija - a residence of the owner of a larger rural estate.\n The villa is named after the emperor of the Roman Empire - Valens, who was of Croatian origin, and settled in Istria to show its combination of ancient and modern, reminding everyone that, like the region on whose land she rests - The Valens Residence has much to offer to all who ﬁnd themselves nearby.\n Inside Valens one will ﬁnd the centuries old Croatia oak upon which the City of Venice stands, reinterpretations of famous painters such as Vlaho Bukovac, whose works line the walls of the world’s most famous museums and galleries.\n Enjoy listening to the masterful works of Croatian musicians, or play around in the kitchen with various local delicacies - trufﬂes, olives and other specialities of Mediterranean cuisine.\n Among diverse offer of Croatia’s best wines you can try, one is standing above all - Iločki Traminac, the one that was served at the coronation of Queen Elizabeth II, and at the weddings of her grandsons, will sure entertain your taste buds!',
        cards: [
          {
            id: 1,
            img: imgA2,
            headline: 'Dining area',
            info: '10 people',
            overlayText: 'Inside and outside areas both for 10 people'
          },
          {
            id: 2,
            img: imgA11,
            headline: 'Library',
            info: '150+ books',
            overlayText:
              ' Many of Croatian books translated on several languages'
          },
          {
            id: 3,
            img: imgA10,
            headline: 'Vine cellar',
            info: 'With bar',
            overlayText:
              'Taste some of most popular Croatian vines and craft beers'
          },
          {
            id: 4,
            img: imgA1,
            headline: 'Bedrooms',
            info: '4 queensize bed',
            overlayText: '4 fully equipped bedrooms with en-suite bathroom'
          },
          {
            id: 5,
            img: imgA8,
            headline: 'Parking',
            info: '2',
            overlayText: 'Shaded and sun protected '
          },
          {
            id: 6,
            img: imgA5,
            headline: 'Exterior',
            info: '400 sqm living',
            overlayText: 'And 220 sqm of terrace '
          },
          {
            id: 7,
            img: imgA12,
            headline: 'Number of people',
            info: '8',
            overlayText: '4 queen-size fully equipped bedrooms for 2 persons'
          },
          {
            id: 8,
            img: imgA4,
            headline: 'Bathroom / toilet',
            info: '4 + 2',
            overlayText:
              '4-ensuite bathrooms, 1 individual and one guest toilet'
          },
          {
            id: 9,
            img: imgA7,
            headline: 'Internet and TV',
            info: 'Free wiﬁ and 6 TVs',
            overlayText:
              'Secured free wiﬁ around estate; tv in each bedroom and 2 in common areas'
          },
          {
            id: 10,
            img: imgA3,
            headline: 'Mini golf teren',
            info: 'Recreative',
            overlayText: '5 holes on 65 sqm'
          },
          {
            id: 11,
            img: imgA9,
            headline: 'Pool',
            info: '50 sqm heated',
            overlayText: 'Modern technology for less chemical usage, heated'
          },
          {
            id: 12,
            img: imgA6,
            headline: 'Entertainment ',
            info: 'Gym, spa and pool table',
            overlayText:
              'Gym is fully equipped and Finnish sauna has raindrop shower'
          }
        ],
        services: [
          {
            id: 1,
            numOrder: '#1',
            text: 'Guest Transfers',
            desc: "By appointment, we will pick up our guests no matter how they're coming.Picking up from/to the airport, car escorting from the highway exit, or rent a sea dock and transport to the villa - it's all in our power! You just have to show up - the rest is ours to be worried about!",
            img: imgSgt
          },
          {
            id: 2,
            numOrder: '#2',
            text: 'Daily Cleaning Service',
            desc: "If you're staying one week or more, our cleaners are at your disposal to make your holiday completely carefree, whether you want them every day or as needed. \n *prior notice required",
            img: imgScs
          },
          {
            id: 3,
            numOrder: '#3',
            text: 'Catering',
            desc: 'Cooperation with recognisable taverns that offer the best of traditional cuisine has allowed us to have only the best, delicious and traditional Istrian and Mediterranean dishes at your door. *prior notice required',
            img: imgSfc
          },
          {
            id: 4,
            numOrder: '#4',
            text: 'Concierge',
            desc: ' For all of you who wants to completely relax and be carefree - we have a concierges at your service. They will be ready to take almost any wish, with notice prior arrival. Whether you want to go on a trip, to the theatre, an observatory or rent a sailboat, they will do everything to make it possible for you.',
            img: imgSc
          },
          {
            id: 5,
            numOrder: '#5',
            text: 'Event organisation',
            desc: 'The Valens Residence is the perfect setting for various events up to 50 people. Our expert organisers will help you with your next event, celebration, ﬁlming, shooting or product promotion to be beautiful and seamless in 100% Croatian environment and with the spectacular backdrop of Istrian surroundings.',
            img: imgSeo
          }
        ],
        mapPoints: ['Highway', 'Center of village', 'Beach', 'Observatory'],
        availabilityBtn: 'CHECK FOR AVAILABILITY',
        servicesBtn: 'HAVE MORE QUESTIONS?',
        galleryBtn: 'GO TO GALLERY',
        igBtn: 'See more',
        weather: {
          title: 'Weather',
          today: 'Current weather',
          tomorrow: 'Weather tomorrow'
        }
      },
      contactUs: {
        fromBtn: 'From',
        toBtn: 'To',
        sendBtn: 'SEND',
        inquiry: {
          title: 'Send Us an Inquiry',
          fn: 'Full Name:',
          email: 'Email Adress:',
          phone: 'Phone Number:',
          subject: 'Inquiry Subject:',
          details: 'Enter details...',
          services: [
            { value: null, text: 'Select service', disable: true },
            { value: 1, text: 'Vacation reservation' },
            { value: 2, text: 'Event organisation' }
          ],
          persons: [
            { value: null, text: 'Number of people', disable: true },
            { value: 1, text: '1 person' },
            { value: 2, text: '2 person' },
            { value: 3, text: '3 person' },
            { value: 4, text: '4 person' },
            { value: 5, text: '5 person' },
            { value: 6, text: '6 person' },
            { value: 7, text: '7 person' },
            { value: 8, text: '8 person' }
          ],
          events: [
            { value: null, text: 'Select event', disable: true },
            { value: 1, text: 'Team building' },
            { value: 2, text: 'Celebration events' },
            { value: 3, text: 'Product presentation' },
            { value: 4, text: 'Other' }
          ]
        },
        eventInfo: {
          success: 'Your Inquiry was Successfully Submitted!',
          warning:
            'All fields are required, as well as, calendar days, so make sure you type everything right and did not skip some!',
          error: 'Something went wrong. Please refresh the page and try again!'
        }
      },
      footer: {
        link: 'Contact Us',
        pp: 'Privacy Policy',
        tc: 'Terms and Conditions'
      },
      gallery: [
        'All',
        'Outside',
        'Kitchen',
        'Living room',
        'Bedrooms',
        'Bathrooms',
        'Entertainment'
      ]
    }
  },
  mutations: {
    setCalendarData (state, payload) {
      let saved = false
      if (state.calendarData.length > 0) {
        state.calendarData.forEach(function (item) {
          if (item.year === state.currentYear) {
            item.dateList = payload.dateList
            saved = true
          }
        })
        if (!saved) state.calendarData.push(payload)
      } else {
        state.calendarData.push(payload)
      }
    },
    setBookingData (state, payload) {
      state.bookingData = payload
    },
    setCurrentYear (state, payload) {
      state.currentYear = payload
    },
    setImgWidth (state, payload) {
      state.gallery[payload.index] = payload.value
    },
    setGalleryImgWidth (state, payload) {
      state.gallery = payload
    },
    toggleLang (state, payload) {
      state.lang = payload
    }
  },
  getters: {
    getCalendarData: (state) => {
      return state.calendarData.filter(
        (item) => item.year === state.currentYear
      )
    },
    getBookingData: (state) => {
      return state.bookingData
    },
    getGalleryImages: (state) => {
      return state.gallery
    },
    getLang: (state) => {
      return state.lang
    },
    s1: (state) => {
      return state.homeSliders.s1
    },
    s2: (state) => {
      return state.homeSliders.s2
    },
    s3: (state) => {
      return state.homeSliders.s3
    },
    getWebData: (state) => {
      if (state.lang === 'eng') return state.eng
      else return state.hr
    },
    getNav: (state) => {
      if (state.lang === 'eng') return state.eng.nav
      else return state.hr.nav
    },
    getWeekDays: (state) => {
      return state.days
    },
    getMainPhotos: (state) => {
      return state.mainPhotos
    },
    getMonths: (state) => {
      return state.months
    }
  }
})
