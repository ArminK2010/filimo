async function img() {
    let imgs = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    imgs = res.imgHow.map((elem) => {
      return `
       <img src="${elem.src}" alt="${elem.alt}">
      
          `;
    });
  document.querySelector("#imgHow").insertAdjacentHTML("afterbegin" , imgs.join(""))
    
    
  } 
  export default img;