async function titleInEevery() {
    let title = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    title = res.leftMeinEveryTitle.map((elem) => {
      return `
          <h1>${elem.title}</h1>
          `;
    });
  document.querySelector("#titleEvery").insertAdjacentHTML("afterbegin" , title.join(""))
    
    
  } 
export default titleInEevery;


