async function titleFree() {
    let free = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    free = res.titleFree.map((elem) => {
      return `
      <h2>${elem.title}</h2>
          `;
    });
  document.querySelector("#titlepup").insertAdjacentHTML("afterbegin" , free.join(""))
    
    
  } 
  export default titleFree;