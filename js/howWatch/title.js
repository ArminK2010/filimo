async function titleHow() {
    let title = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    title = res.titleHow.map((elem) => {
      return `
      <h2>${elem.title}</h2>
      <p>${elem.lorem}</p>
          `;
    });
  document.querySelector("#howTitle").insertAdjacentHTML("afterbegin" , title.join(""))
    
    
  } 
  export default titleHow;