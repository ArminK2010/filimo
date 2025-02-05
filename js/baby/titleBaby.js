async function titleBaby() {
    let babe = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    babe = res.titleBaby.map((elem) => {
      return `
      <h2>${elem.title}</h2>
      <p>${elem.lorem}</p>

          `;
    });
  document.querySelector("#titleBaby").insertAdjacentHTML("afterbegin" , babe.join(""))
    
    
  } 
  export default titleBaby;