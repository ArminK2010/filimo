async function didgahOne() {
    let title = "";
    let data = await fetch("https://armink2010.github.io/dbjson/db.json");
    let res = await data.json();
    title = res.didgahOne.map((elem) => {
      return `
     <img src="${elem.icon}" alt="">
     <p>${elem.karbar}</p>
     <h3>${elem.title}</h3>
          `;
    });
  document.querySelector("#didgahOne").insertAdjacentHTML("afterbegin" , title.join(""))
    
    
  } 
  export default didgahOne;