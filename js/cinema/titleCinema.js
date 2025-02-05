async function cinema() {
    let title = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    title = res.titleCinema.map((elem) => {
      return `
      <h2>${elem.title}</h2>
          `;
    });
  document.querySelector("#titleCinema").insertAdjacentHTML("afterbegin" , title.join(""))
    
    
  } 
  export default cinema;