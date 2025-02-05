async function titlePapulars() {
    let titlepup = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    titlepup = res.titlePapular.map((elem) => {
      return `
          <h2 class="papularTitle">${elem.title}</h2>
          `;
    });
  document.querySelector("#titlePapular").insertAdjacentHTML("afterbegin" , titlepup.join(""))
    
    
  } 
  export default titlePapulars;