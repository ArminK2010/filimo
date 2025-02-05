async function didgahTitle() {
    let One = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.ending.json();
    One = res.ending.map((elem) => {
      return `
      <h2>${elem.title}</h2>
          `;
    });
  document.querySelector("#filimos").insertAdjacentHTML("afterbegin" , One.join(""))
    
    
  } 
  export default didgahTitle;