async function everyRight() {
    let right = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    right = res.rightEvery.map((elem) => {
      return `
          `;
    });
  document.querySelector("#rightEvery").insertAdjacentHTML("afterbegin" , right.join(""))
    
    
  } 
  export default everyRight;