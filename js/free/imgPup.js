async function imgPup() {
    let img = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    img = res.imgFree.map((elem) => {
      return `
      <img src="${elem.src}" alt="${elem.alt}">
          `;
    });
  document.querySelector("#imgpup").insertAdjacentHTML("afterbegin" , img.join(""))
    
    
  } 
  export default imgPup;