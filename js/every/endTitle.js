async function endTitle() {
    let endTitle = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    endTitle = res.titleInEvery.map((elem) => {
      return `
      <p>${elem.title}</p>
          `;
    });
  document.querySelector("#endTitle").insertAdjacentHTML("afterbegin" , endTitle.join(""))
    
    
  } 
  export default endTitle;