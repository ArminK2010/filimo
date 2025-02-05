async function titr() {
    let title = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    title = res.titrCinema.map((elem) => {
      return `
        <img src="${elem.icon}" alt="">
        <p>${elem.title}</p>
          `;
    });
  document.querySelector("#titrCinema").insertAdjacentHTML("afterbegin" , title.join(""))
    
    
  } 
  export default titr;