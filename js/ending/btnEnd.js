async function Btn() {
    let One = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    One = res.btnEnd.map((elem) => {
      return `
      <img src="${elem.icon}" alt="">
       <p class="btnSliderP">${elem.title}</p>
          `;
    });
  document.querySelector("#btnEnd").insertAdjacentHTML("afterbegin" , One.join(""))
    
    
  } 
  export default Btn;