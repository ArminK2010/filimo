async function endSlider() {
    let endSliders = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    endSliders = res.endSlider.map((elem) => {
      return `
       <img src="${elem.icon}" alt="">
       <p class="endsliderP">${elem.title}</p>
          `;
    });
  document.querySelector("#endSlider").insertAdjacentHTML("afterbegin" , endSliders.join(""))
    
    
  } 
  export default endSlider;
  