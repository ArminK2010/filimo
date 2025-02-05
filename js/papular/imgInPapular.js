async function imgInPapulars() {
    let imgpup = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    imgpup = res.imgInPapular.map((elem) => {
      return `
          <img src="${elem.src}" alt="${elem.href}">
          `;
    });
  document.querySelector("#imgInPapulars").insertAdjacentHTML("afterbegin" , imgpup.join(""))
    
    
  } 
  export default imgInPapulars;


  