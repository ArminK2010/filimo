async function btnSlider() {
    let btnSliders = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
   btnSliders = res.btnSlider.map((elem) => {
      return `
       <img src="${elem.icon}" alt="">
       <p class="btnSliderP">${elem.title}</p>
          `;
    });
  document.querySelector("#btnSlider").insertAdjacentHTML("afterbegin" , btnSliders.join(""))
    
    
  } 
  export default btnSlider;