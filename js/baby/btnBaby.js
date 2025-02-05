async function btnBabe() {
    let btn = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    btn = res.btnBaby.map((elem) => {
      return `
      <a>${elem.title}</a>
          `;
    });
  document.querySelector("#btnBaby").insertAdjacentHTML("afterbegin" , btn.join(""))
    
    
  } 
  export default btnBabe;