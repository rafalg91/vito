import logo from "./assets/images/logo.png"
import art1 from "./assets/images/art/1.jpg"
import art2 from "./assets/images/art/2.jpg"
import art3 from "./assets/images/art/3.jpg"
import drone1 from "./assets/images/drone/1.jpg"
import drone2 from "./assets/images/drone/2.jpg"
import drone3 from "./assets/images/drone/3.jpg"
import drone4 from "./assets/images/drone/4.jpg"
import drone5 from "./assets/images/drone/5.jpg"
import drone6 from "./assets/images/drone/6.jpg"
import commercial1 from "./assets/images/commercial/1.jpg"
import commercial2 from "./assets/images/commercial/2.jpg"
import commercial3 from "./assets/images/commercial/3.jpg"
import commercial4 from "./assets/images/commercial/4.jpg"
import commercial5 from "./assets/images/commercial/5.jpg"
import commercial6 from "./assets/images/commercial/6.jpg"
import video from "./assets/videos/hero.mp4"

export const home = [
  {
    title: "Portfolio",
    logo: logo,
    phone: "123 456 789",
    email: "kontakt@domena.pl",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    youtube: "https://www.youtube.com",
    vimeo: "https://vimeo.com",
    hero_video: video,
    hero_title: "Portfolio",
    hero_desc:
      'Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. \n Ile cię trzeba cenić, ten tylko głos nocnego stróża.',
    hero_button: "Realizacje",
    hero_link: "/realizacje",
    projects_title: "Realizacje",
    projects_desc:
      "Usnęli wszyscy. Sędzia gości prosi w żupanie białym w pustki prowadzić. Po cóż o malarstwie o piękności metrykę nie myśl twarz spójrzała",
    about_title: "O mnie",
    about_desc:
      "<p>Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Nazywał się cukier wytapia i całował. Zaczęła się uczyli. u tej krucze, długie paznokcie przedstawiając dwa tysiące kroków zamek dziś nagodzi do rąk muskała włosów pukle nie ma jutro sam markiz przybrał tytuł markiza. Jakoż, kiedy reszta świat we zboże i ustawić co.</p><p>Horeszków, Półkozic, jaśniał na drzwi ślad gospodarza wszystko oddychało. Krótkie były świeżo polewane. Tuż i przeplatane różowymi wstęgi pośród nich i, z Wilna, nie myśl wcale aby w posiadłość. Wszakże kto gości nie jest Waszmościów uwagi osobne grzeczność, którą powinna młodź dla zabawki Bo nie daje z dozorcą, potem najwyższych.</p>",
  },
]

export const categories = [
  // {
  //   id: 1,
  //   name: "Zdjęcia",
  // },
  {
    id: 2,
    name: "Dron",
  },
  {
    id: 3,
    name: "Komercyjne",
  },
  {
    id: 4,
    name: "Artystyczne",
  },
]

export const projects = [
  {
    id: 1,
    title: "Projekt 1",
    desc: "opis projektu",
    url: art1,
    category: {
      id: 4,
      name: "Artystyczne",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 2,
    title: "Projekt 2",
    desc: "opis projektu",
    url: art2,
    category: {
      id: 4,
      name: "Artystyczne",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 3,
    title: "Projekt 3",
    desc: "opis projektu",
    url: art3,
    yt: null,
    category: {
      id: 4,
      name: "Artystyczne",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 4,
    title: "Projekt",
    desc: "opis projektu",
    url: drone1,
    yt: null,
    category: {
      id: 2,
      name: "Dron",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 5,
    title: "Projekt",
    desc: "opis projektu",
    url: drone2,
    yt: null,
    category: {
      id: 2,
      name: "Dron",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 6,
    title: "Projekt",
    desc: "opis projektu",
    url: drone3,
    yt: null,
    category: {
      id: 2,
      name: "Dron",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 7,
    title: "Projekt",
    desc: "opis projektu",
    url: drone4,
    yt: null,
    category: {
      id: 2,
      name: "Dron",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 8,
    title: "Projekt",
    desc: "opis projektu",
    url: drone5,
    yt: null,
    category: {
      id: 2,
      name: "Dron",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 9,
    title: "Projekt",
    desc: "opis projektu",
    url: drone6,
    yt: null,
    category: {
      id: 2,
      name: "Dron",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 10,
    title: "Projekt",
    desc: "opis projektu",
    url: commercial1,
    yt: null,
    category: {
      id: 3,
      name: "Komercyjne",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 11,
    title: "Projekt",
    desc: "opis projektu",
    url: commercial2,
    yt: null,
    category: {
      id: 3,
      name: "Komercyjne",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 12,
    title: "Projekt",
    desc: "opis projektu",
    url: commercial3,
    yt: null,
    category: {
      id: 3,
      name: "Komercyjne",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 13,
    title: "Projekt",
    desc: "opis projektu",
    url: commercial4,
    yt: null,
    category: {
      id: 3,
      name: "Komercyjne",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 14,
    title: "Projekt",
    desc: "opis projektu",
    url: commercial5,
    yt: null,
    category: {
      id: 3,
      name: "Komercyjne",
    },
    type: {
      name: "image",
    },
  },
  {
    id: 15,
    title: "Projekt",
    desc: "opis projektu",
    url: commercial6,
    yt: 'https://www.youtube.com/watch?v=lGBT7ibC9H4',
    category: {
      id: 3,
      name: "Komercyjne",
    },
    type: {
      name: "video",
    },
  },
]

export const pages = [
  // {
  //   id: 1,
  //   title: "Inspiracje",
  //   url: "/inspiracje",
  //   text: "Przykładowa inspiracja",
  //   image: "wiersz.jpg",
  // },
]

export const blog = [
  {
    id: 1,
    title: "Przykładowy pierwszy wpis o niczym",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc nulla, finibus eget vehicula ut, posuere id elit. In non malesuada lorem. Aenean aliquet malesuada nibh, nec iaculis mauris semper sit amet. Nullam vel ante malesuada, sagittis purus vel, posuere felis. Nullam hendrerit ante mattis magna euismod scelerisque.",
    prev:
      "Trudno było. bo tak krzycząc pan Hrabia ma obszerność dostatecznej dla wieku, urodzenia, rozumu, urzędu. ogon też same obicia z nadzwyczajnej ich rzędy...",
    date: "2020-07-13",
    tags: "#blog #wpis",
  },
  {
    id: 2,
    title: "Przykładowy kolejny wpis o czymś ",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc nulla, finibus eget vehicula ut, posuere id elit. In non malesuada lorem. Aenean aliquet malesuada nibh, nec iaculis mauris semper sit amet. Nullam vel ante malesuada, sagittis purus vel, posuere felis. Nullam hendrerit ante mattis magna euismod scelerisque.",
    prev:
      "Wreszcie po stole i o których nie jedli. Stojąc i widok obław przypominał mu z całym domu dostatek mieszka i zalety Ściągnęły wzrok sąsiadki, uważnej kobiety...",
    date: "2020-07-13",
    tags: "#blog #wpis",
  },
  {
    id: 3,
    title: "Przykładowy ostatni wpis o wszystkim",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc nulla, finibus eget vehicula ut, posuere id elit. In non malesuada lorem. Aenean aliquet malesuada nibh, nec iaculis mauris semper sit amet. Nullam vel ante malesuada, sagittis purus vel, posuere felis. Nullam hendrerit ante mattis magna euismod scelerisque.",
    prev:
      "Usnęli wszyscy. Sędzia gości prosi w żupanie białym w pustki prowadzić. Po cóż o malarstwie o piękności metrykę nie myśl twarz spójrzała...",
    date: "2020-07-13",
    tags: "#blog #wpis",
  },
]
