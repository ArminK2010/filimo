import Menu from "./menu/menu.js";

import slider from "./slider/slider.js";

import firstInSlider from "./slider/titleInSlider.js";

import endSlider from "./slider/endSlider.js";

import btnSlider from "./slider/btnSlider.js";

import titlePapular from "./papular/papularTitle.js";

import imgInPapular from "./papular/imgInPapular.js";

import rightEvery from "./every/rightEvery.js";

import titleEvery from "./every/titleEvery.js";

import endTitle from "./every/endTitle.js";

import iconEvery from "./every/iconEvery.js";

import btnEvery from "./every/btnEvery.js";

import title from "./howWatch/title.js";

import iconHow from "./howWatch/iconHow.js";

import btnHow from "./howWatch/btnHow.js";

import imgHow from "./howWatch/imgHow.js";

import titleFree from "./free/titleFree.js";

import imgInPapulars from "./papular/imgInPapular.js";

import imgPup from "./free/imgPup.js";

import imgBabe from "./baby/imgBaby.js";

import titleBaby from "./baby/titleBaby.js";

import btnBaby from "./baby/btnBaby.js";

import titleCinema from "./cinema/titleCinema.js";

import titrCinema from "./cinema/titrCinema.js";

import didgah from "./didgah/didgah.js";

import didgahOne from "./didgah/didgahOne.js";

import didgahTow from "./didgah/didgahtow.js";

import didgahThree from "./didgah/didgahthree.js";

import filimo from "./ending/filimo.js";

import loremEnd from "./ending/loremEnd.js";

import btnEnd from "./ending/btnEnd.js"

import footer from "./footer/footer.js"
async function allData() {
  await swiper();
}

allData();

async function swiper() {
  await Menu.menu();
  await Menu.mainBtns();
  await slider();
  await firstInSlider();
  await endSlider();
  await btnSlider();
  await titlePapular();
  await imgInPapular();
  await rightEvery();
  await titleEvery();
  await endTitle();
  await iconEvery();
  await btnEvery();
  await title();
  await iconHow();
  await btnHow();
  await imgHow();
  await titleFree();
  await imgPup();
  await imgBabe();
  await titleBaby();
  await btnBaby();
  await titleCinema();
  await titrCinema();
  await didgah();
  await didgahOne();
  await didgahTow();
  await didgahThree();
  await filimo();
  await loremEnd()
  await btnEnd()
  await footer()
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
