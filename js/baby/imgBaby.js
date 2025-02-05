async function imgBabe() {
    let img = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    img = res.baby.map((elem) => {
      return `
          `;
    });
  document.querySelector("#babyimg").insertAdjacentHTML("afterbegin" , img.join(""))
    
    
  } 
  export default imgBabe;