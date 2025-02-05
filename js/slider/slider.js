async function slider() {
  let sliders = "";
  let data = await fetch("https://armink2010.github.io/dbjson/db.json");
  let res = await data.json();
  sliders = res.slider.map((elem) => {
    return `
                  <div class="swiper-slide">
                <img src="${elem.url}" alt="${elem.alt}">
                  </div>
        `;
  });
  document.querySelector("#swiper-wrapper").insertAdjacentHTML("afterbegin" , sliders.join(""))
  
}
export default slider;
