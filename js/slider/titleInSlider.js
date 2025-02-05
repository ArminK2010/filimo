async function InSlider() {
    let sliders = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    sliders = res.firstInSlider.map((element) => {
      return `
                   <div class="inSlider">
                 <h1 class="secondTitle">${element.title}</h1>
                   </div>
          `;
    });
  document.querySelector("#inSlider").insertAdjacentHTML("afterbegin" , sliders.join(""))
    
    
  }
  export default InSlider;